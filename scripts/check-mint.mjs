import assert from 'node:assert/strict';
import {readFile, access, stat} from 'node:fs/promises';
import {createRequire} from 'node:module';
import {resolve} from 'node:path';
import {transform} from 'esbuild';
const root = resolve('.build/design-preview');
const guides = JSON.parse(await readFile('src/content/guides.json','utf8'));
const {routes, render} = createRequire(import.meta.url)(resolve('.build/mint-render.cjs'));
assert.equal(new Set(guides.map(g => g.slug)).size, guides.length, 'Unique article URLs');
for (const guide of guides) {
  assert.match(guide.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  assert.ok(['draft','reviewed'].includes(guide.reviewStatus));
  assert.ok(guide.reviewIntervalDays > 0);
  for (const date of [guide.createdAt,guide.updatedAt]) assert.match(date,/^\d{4}-\d{2}-\d{2}$/);
  assert.ok(guide.updatedAt >= guide.createdAt);
  assert.equal(new Set(guide.sections.map(s=>s.id)).size,guide.sections.length);
  assert.ok(routes.includes(guide.relatedService));
  for (const source of guide.sources) assert.equal(new URL(source.url).protocol,'https:');
}
async function checkMarkup(html, path) {
  assert.equal((html.match(/<h1[\s>]/g)||[]).length,1, path+' has one heading');
  const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
  assert.equal(new Set(ids).size,ids.length,path+' unique IDs');
  for (const [,raw] of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    if (/^(https?:|mailto:|tel:|data:)/.test(raw)) continue;
    const url = new URL(raw,'http://local'+path);
    let file = resolve(root,'.'+decodeURIComponent(url.pathname));
    assert.ok(file.startsWith(root+'/'));
    if ((await stat(file)).isDirectory()) file = resolve(file,'index.html');
    await access(file);
    if (url.pathname === path && url.hash) {
      const id = decodeURIComponent(url.hash.slice(1));
      if (!routes.includes(id) && !id.includes('#')) assert.ok(ids.includes(id),path+' anchor '+id);
    }
  }
}
for (const route of routes) await checkMarkup(render(route),'/ui_kits/mint/');
const pages = ['', 'innsikt/', ...guides.map(g=>'innsikt/'+g.slug+'/')];
for (const path of pages) {
  const html=await readFile(resolve(root,'ui_kits/mint',path,'index.html'),'utf8');
  await checkMarkup(html,'/ui_kits/mint/'+path);
  assert.ok(html.includes('name="description"'));
  assert.ok(html.includes('name="robots" content="noindex,follow"'), 'Preview remains unindexed');
  assert.ok(!html.includes('text/babel'));
  const guide=guides.find(g=>path==='innsikt/'+g.slug+'/');
  if(guide) {
    const schema=JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
    assert.equal(schema.headline,guide.title);
    assert.equal(schema.dateModified,guide.updatedAt);
    assert.ok(html.includes(guide.summary));
    assert.ok(html.includes('data-page="artikkel:'+guide.slug+'"'));
    for(const section of guide.sections) assert.ok(html.includes(section.title));
  }
}
for(const file of ['mint.css','guides.css','navigation.css']) assert.equal((await transform(await readFile(resolve(root,'ui_kits/mint',file),'utf8'),{loader:'css'})).warnings.length,0);
console.log(`${routes.length} routes and ${pages.length} static pages passed: headings, links, assets, article metadata, structured data and CSS.`);
