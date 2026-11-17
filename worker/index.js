// wabi.no on Cloudflare Workers. Pages come from the Astro build (site/dist) through this code, which only
// adds the www/http/trailing-slash redirects. Built files under /_astro/ and /assets/ skip it (see wrangler.jsonc).
//
// POST /api/kontakt receives the contact form and the chat. A message is e-mailed (via Resend) only if it passes,
// in order: same-site origin, a per-IP rate limit, the hidden honeypot field, Cloudflare Turnstile,
// and basic field checks. Bots that trip the honeypot or the link check get a normal "sent" reply,
// so they learn nothing about what stopped them.

const LIMITS = { name: 200, email: 254, message: 5000, field: 1000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MAX_LINKS = 3;

// Which fields each form may send, and how they are labelled in the e-mail.
const FORMS = {
  kontakt: { subject: () => 'Henvendelse fra wabi.no', fields: [['message', 'Melding']] },
  chat: {
    subject: name => {
      const company = name.split(/,| fra /).slice(1).join(',').trim();
      return 'Chat fra wabi.no' + (company ? ', ' + company : '');
    },
    fields: [['goal', 'Behov'], ['time', 'Tidsbruk i dag']],
  },
};

const CANONICAL_HOST = 'wabi.no';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // One address per page for search engines: www and plain http move permanently to https://wabi.no.
    if (url.hostname === 'www.' + CANONICAL_HOST || (url.hostname === CANONICAL_HOST && url.protocol === 'http:')) {
      return redirect(`https://${CANONICAL_HOST}${url.pathname}${url.search}`);
    }

    if (url.pathname === '/api/kontakt' || url.pathname === '/api/kontakt/') return contact(request, env, url);
    if (url.pathname.startsWith('/api/')) return json({ success: false, message: 'Ikke funnet' }, 404);

    // The asset handler adds the trailing slash (/kontakt -> /kontakt/) with a temporary 307.
    // The pages have always moved permanently, so keep that as a 301.
    const response = await env.ASSETS.fetch(request);
    if (response.status === 307 && response.headers.has('Location')) return redirect(response.headers.get('Location'));
    return response;
  },
};

const redirect = location => new Response(null, { status: 301, headers: { Location: location } });

async function contact(request, env, url) {
  if (request.method !== 'POST') return json({ success: false, message: 'Bruk POST' }, 405, { Allow: 'POST' });

  // Browsers always send Origin on a cross-origin or POST fetch. Anything else is not our form.
  const origin = request.headers.get('Origin');
  if (!origin || hostOf(origin) !== url.host) return json({ success: false, message: 'Ugyldig opprinnelse' }, 403);

  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
  if (env.CONTACT_LIMIT) {
    const { success } = await env.CONTACT_LIMIT.limit({ key: ip });
    if (!success) return json({ success: false, message: 'For mange forsøk. Vent litt og prøv igjen.' }, 429);
  }

  let form;
  try { form = await request.formData(); } catch { return json({ success: false, message: 'Ugyldig skjema' }, 400); }
  const get = (key, max = LIMITS.field) => String(form.get(key) || '').trim().slice(0, max);

  // Honeypot: people never see this field. Pretend it worked.
  if (form.get('botcheck')) return json({ success: true });

  const human = await verifyTurnstile(get('cf-turnstile-response', 2048), ip, env);
  if (!human) return json({ success: false, message: 'Spamsjekken feilet. Last siden på nytt og prøv igjen.' }, 403);

  const kind = FORMS[get('kind')] ? get('kind') : 'kontakt';
  const spec = FORMS[kind];
  const name = oneLine(get('name', LIMITS.name));
  const email = oneLine(get('email', LIMITS.email));
  if (!name || !EMAIL_RE.test(email)) return json({ success: false, message: 'Skriv inn navn og en gyldig e-postadresse.' }, 400);

  const values = spec.fields.map(([key, label]) => [label, get(key, key === 'message' ? LIMITS.message : LIMITS.field)]);
  const text = values.map(([, v]) => v).join('\n');
  // Link-stuffed messages are almost always spam. Accept them quietly and drop them.
  if ((text.match(/https?:\/\/|www\./gi) || []).length > MAX_LINKS) return json({ success: true });

  const page = oneLine(get('page', 300));
  const body = [
    `Navn: ${name}`,
    `E-post: ${email}`,
    ...values.map(([label, v]) => (label === 'Melding' ? `\n${label}:\n${v || 'Ønsker en samtale om hvordan Wabi kan hjelpe oss.'}` : `${label}: ${v || '-'}`)),
    '',
    page ? `Sendt fra: https://${url.host}${page.startsWith('/') ? page : '/' + page}` : `Sendt fra: https://${url.host}`,
  ].join('\n');

  try {
    await sendEmail(env, { replyTo: email, subject: oneLine(spec.subject(name)).slice(0, 200), text: body });
  } catch (error) {
    console.error('Contact e-mail failed', error && error.message);
    return json({ success: false, message: 'Meldingen ble ikke sendt.' }, 502);
  }
  return json({ success: true });
}

// Sends through Resend (resend.com). The recipient is fixed in wrangler.jsonc (CONTACT_TO), never
// taken from the form. The visitor's address is only used as Reply-To, so "Svar" goes to them.
async function sendEmail(env, { replyTo, subject, text }) {
  if (!env.RESEND_API_KEY) throw new Error('RESEND_API_KEY is not set');
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: `wabi.no <${env.CONTACT_FROM}>`, to: [env.CONTACT_TO], reply_to: replyTo, subject, text }),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${(await res.text()).slice(0, 300)}`);
}

async function verifyTurnstile(token, ip, env) {
  if (!token || !env.TURNSTILE_SECRET) return false;
  const body = new FormData();
  body.append('secret', env.TURNSTILE_SECRET);
  body.append('response', token);
  if (ip !== 'unknown') body.append('remoteip', ip);
  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body });
    const outcome = await res.json();
    return outcome.success === true;
  } catch (error) {
    console.error('Turnstile verification failed', error && error.message);
    return false;
  }
}

const oneLine = s => s.replace(/[\r\n\t]+/g, ' ').trim();
const hostOf = value => { try { return new URL(value).host; } catch { return ''; } };
const json = (data, status = 200, headers = {}) =>
  new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', ...headers } });
