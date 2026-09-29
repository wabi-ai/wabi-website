import assert from 'node:assert/strict';
import { readFile, access, stat } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { resolve } from 'node:path';

const require = createRequire(import.meta.url);
const { ROUTES } = require(resolve('.build/render.cjs'));
let checked = 0;
const refs = new Set();
for (const route of Object.values(ROUTES)) {
  const filename = '.' + route.path + 'index.html';
  const html = await readFile(filename, 'utf8');
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${filename}: one main heading`);
  assert(html.includes('id="main-content"'), `${filename}: skip-link target`);
  assert(!html.includes('type="text/babel"'), `${filename}: no runtime JSX compiler`);
  assert(!html.includes('unpkg.com'), `${filename}: no runtime CDN dependencies`);
  assert(!html.includes('../../assets'), `${filename}: no prototype asset paths`);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
  assert.equal(new Set(ids).size, ids.length, `${filename}: unique element IDs`);
  for (const [, ref] of html.matchAll(/(?:src|href|action)="([^"#][^"]*)"/g)) {
    if (!ref.startsWith('/') || ref.startsWith('//')) continue;
    refs.add(ref);
  }
  checked++;
}
for (const ref of refs) {
  const url = new URL(ref, 'https://wabi.no');
  const path = '.' + decodeURIComponent(url.pathname);
  const info = await stat(path).catch(() => null);
  assert(info, `Missing local asset or destination: ${ref}`);
  const file = info.isDirectory() ? path + 'index.html' : path;
  await access(file);
  if (url.hash) assert((await readFile(file, 'utf8')).includes(`id="${url.hash.slice(1)}"`), `Missing anchor: ${ref}`);
}
const home = await readFile('index.html', 'utf8');
assert(home.includes('action="https://app.kit.com/forms/9612918/subscriptions"'), 'Newsletter uses the existing form');
const contact = await readFile('src/pages/Contact.jsx', 'utf8');
assert(contact.includes('mailto:ulrik@wabi.no?subject='), 'Contact composes an email');
assert(!contact.includes('Vi har fått meldingen'), 'Contact never claims unverified delivery');
const assessment = await readFile('src/pages/Assessment.jsx', 'utf8');
assert(!assessment.includes('Hvor skal vi sende resultatet'), 'Assessment does not promise an unsent email');
console.log(`Checked ${checked} rendered pages, ${refs.size} local references, and the contact/newsletter destinations.`);
