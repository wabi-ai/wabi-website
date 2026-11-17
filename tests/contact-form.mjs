import { readFile } from 'node:fs/promises';
import { runInNewContext } from 'node:vm';
import assert from 'node:assert/strict';
import { transform } from 'esbuild';

// Exercise the real inline handler with a fake transport: never send test enquiries.
const source = await readFile('site/src/pages/kontakt/index.astro', 'utf8');
const script = source.match(/<script>([\s\S]*?)<\/script>/)[1];
const { code } = await transform(script, { loader: 'ts', target: 'es2022' });
function setup({ name = 'Test', email = 'test@example.com', message = '', valid = true, success = true, fail = false, search = '', token = 'test-token' } = {}) {
  const handlers = {}, requests = [];
  const element = () => ({ textContent: '', hidden: false, classList: { add() {}, remove() {} }, focus() { this.focused = true; }, scrollIntoView() {}, addEventListener() {} });
  const nameInput = { ...element(), value: name };
  const emailInput = { ...element(), value: email, checkValidity: () => valid };
  const messageInput = { ...element(), value: message };
  const status = element(), fallback = { ...element(), hidden: true }, submit = element(), preview = element(), thanks = { ...element(), hidden: true };
  const nodes = { '[data-status]': status, '[data-fallback]': fallback, '[data-submit]': submit, '[data-preview]': preview, '[data-copy]': element(), '[data-copied]': element(), 'input[name="name"]': nameInput, 'input[name="email"]': emailInput, 'textarea[name="message"]': messageInput, 'input[name="botcheck"]': { checked: false }, '[data-turnstile]': element() };
  const form = { dataset: {}, querySelector: s => { assert.ok(nodes[s], `Unknown selector: ${s}`); return nodes[s]; }, addEventListener: (type, fn) => handlers[type] = fn, hidden: false };
  class Data {
    constructor(input) { this.values = input ? { name: nameInput.value, email: emailInput.value, message: messageInput.value } : {}; }
    get(k) { return this.values[k]; }
    append(k, v) { this.values[k] = v; }
  }
  const location = { search };
  const window = { wabiTurnstile: { load: async () => {}, token: async () => { if (!token) throw Error('blocked'); return token; } } };
  runInNewContext(code, { window, document: { querySelector: s => s === '[data-composer]' ? form : thanks }, FormData: Data, URLSearchParams, location, navigator: {}, fetch: async (url, options) => { requests.push({ url, ...options }); if (fail) throw Error('offline'); return { ok: true, json: async () => success === 'missing' ? {} : { success } }; } });
  return { form, status, fallback, submit, preview, thanks, requests, location, messageInput, send: () => handlers.submit({ preventDefault() {} }) };
}
for (const opts of [{name: ''}, {valid: false}, {email: ''}, {name: '   '}]) {
  const t = setup(opts); await t.send(); assert.equal(t.requests.length, 0); assert.match(t.status.textContent, /gyldig e-postadresse/);
}
const optional = setup(); await optional.send(); assert.equal(optional.requests.length, 1); assert.equal(optional.requests[0].url, '/api/kontakt'); assert.equal(optional.requests[0].body.get('cf-turnstile-response'), 'test-token'); assert.equal(optional.requests[0].body.get('kind'), 'kontakt'); assert.equal(optional.requests[0].body.get('access_key'), undefined); assert.equal(optional.thanks.hidden, false); assert.match(optional.requests[0].body.get('message'), /Ønsker en samtale/);
const prefill = setup({ search: '?tekst=Arbeidsflyt%20og%20strategi' }); assert.equal(prefill.messageInput.value, 'Arbeidsflyt og strategi'); await prefill.send(); assert.equal(prefill.requests[0].body.get('message'), 'Arbeidsflyt og strategi');
for (const opts of [{success: false}, {success: 'missing'}, {fail: true}, {token: ''}]) {
  const t = setup(opts); await t.send(); assert.equal(t.thanks.hidden, true); assert.equal(t.form.hidden, false); assert.equal(t.fallback.hidden, false); assert.equal(t.submit.disabled, false);
}
console.log('Contact form: required fields, optional description, self-test prefill, payload to /api/kontakt with a spam-check token, confirmed success, and failure fallback (including a failed spam check) passed. No messages sent.');
