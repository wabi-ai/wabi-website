import './build-design-preview.mjs';
import { cp, mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { createRequire } from 'node:module';
import { createHash } from 'node:crypto';
import { build } from 'esbuild';

const base = resolve('.build/design-preview/ui_kits/web');
const output = resolve('.build/design-preview/ui_kits/mint');
await mkdir(output, { recursive: true });
await cp(base, output, { recursive: true });
const pages = ['Shell','Parts','Agents','Automation','Software','ReportUI','DealerUI','CaseReport','CaseDealer','CaseClinic','CaseWebsite','Course','Assessment','Contact'];
const files = [resolve(base,'site-data.js'), ...pages.map(name => resolve(name === 'Shell' ? base : 'src/pages',name+'.jsx')), resolve('src/preview/ToolRow.jsx'), resolve('src/preview/mint/Home.jsx'), resolve('src/preview/mint/Guides.jsx'), resolve('src/preview/mint/App.jsx')];
const mintGuides = JSON.parse(await readFile('src/content/guides.json','utf8'));
let source = `const mintGuides = ${JSON.stringify(mintGuides)};\nimport * as React from 'react';\nimport * as DS from '../src/components/index.js';\nconst window = globalThis.window || {};\nwindow.WabiDesignSystem_66a19c = DS;\n` + (await Promise.all(files.map(file => readFile(file,'utf8')))).join('\n').replaceAll('/assets/design/', '/assets/').replaceAll('../../assets/', '/assets/').replace("href={'#' + page}", "href={mintBase + '#' + page}");
// Add the library to this concept's footer without changing the previous version.
source = source.replace('<div><h2>Utforsk</h2>', '<div><h2>Utforsk</h2><a href="/ui_kits/mint/innsikt/">Guider og artikler</a>');
await writeFile('.build/mint-client.jsx', source + `\nimport { createRoot } from 'react-dom/client';\ncreateRoot(document.getElementById('root')).render(<MintApp initialPage={document.getElementById('root').dataset.page || 'hjem'}/>);\n`);
await writeFile('.build/mint-server.jsx', source + `\nimport { renderToString } from 'react-dom/server';\nexport const routes = [...mintRoutes];\nexport const render = page => renderToString(<MintApp initialPage={page}/>);\n`);
await build({entryPoints:['.build/mint-client.jsx'],bundle:true,minify:true,outfile:resolve(output,'mint.js'),define:{'process.env.NODE_ENV':'"production"'},target:['es2020']});
await build({entryPoints:['.build/mint-server.jsx'],bundle:true,platform:'node',format:'cjs',outfile:'.build/mint-render.cjs',define:{'process.env.NODE_ENV':'"production"'}});
await cp('src/preview/mint/mint.css',resolve(output,'mint.css'));
await cp('src/preview/mint/guides.css',resolve(output,'guides.css'));
await cp('src/site.css',resolve(output,'subpages.css'));
const digest = createHash('sha256');
for (const file of ['mint.js','mint.css','guides.css','navigation.css','subpages.css','footer.css','prose.css','tool-grid.css','motion.css']) digest.update(await readFile(resolve(output,file)));
const hash = digest.digest('hex').slice(0,12);
const template = (await readFile(resolve(base,'index.html'),'utf8'))
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,'')
  .replace('<link rel="stylesheet" href="footer.css">','<link rel="stylesheet" href="subpages.css"><link rel="stylesheet" href="footer.css">')
  .replace(/href="((?:\.\.\/)*[^"?]+\.css)(?:\?[^" ]*)?"/g, (_, path) => `href="${new URL(path, 'https://preview.local/ui_kits/mint/').pathname}?v=${hash}"`)
  .replace('<body class="wabi-page">','<body class="wabi-page mint-version">');
const { render } = createRequire(import.meta.url)(resolve('.build/mint-render.cjs'));
const escape = text => text.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
async function writePage(page, directory, title, description, guide) {
  const schema = guide ? {'@context':'https://schema.org','@type':'Article',headline:guide.title,description:guide.description,inLanguage:'nb-NO',author:{'@type':'Organization',name:'Wabi'},dateCreated:guide.createdAt,dateModified:guide.updatedAt,articleSection:guide.topic} : null;
  const head = `<meta name="description" content="${escape(description)}"><meta name="robots" content="noindex,follow"><meta property="og:title" content="${escape(title)}"><meta property="og:description" content="${escape(description)}"><meta property="og:type" content="${guide ? 'article' : 'website'}"><link rel="stylesheet" href="/ui_kits/mint/mint.css?v=${hash}"><link rel="stylesheet" href="/ui_kits/mint/guides.css?v=${hash}">${schema ? '<script type="application/ld+json">'+JSON.stringify(schema).replaceAll('<','\\u003c')+'</script>' : ''}`;
  const html = template.replace(/<title>[^<]*<\/title>/, `<title>${escape(title)}</title>`)
    .replace('<div id="root"></div>',`<div id="root" data-page="${escape(page)}">${render(page)}</div>`)
    .replace('</head>',head+'</head>')
    .replace('</body>',`<script defer src="/ui_kits/mint/mint.js?v=${hash}"></script></body>`);
  await mkdir(directory,{recursive:true});
  await writeFile(resolve(directory,'index.html'),html);
}
await writePage('hjem',output,'Wabi — praktisk AI · versjon 2','Praktisk AI for nordiske bedrifter. Utforsk mulighetene, prosjektene og menneskene i Wabi.');
await writePage('innsikt',resolve(output,'innsikt'),'Guider og artikler om AI for bedrifter | Wabi','Praktiske guider om AI-kartlegging, agenter, automatisering og gode arbeidsvaner.');
for (const guide of mintGuides) await writePage('artikkel:'+guide.slug,resolve(output,'innsikt',guide.slug),guide.title+' | Wabi',guide.description,guide);
console.log(`New version ready: http://127.0.0.1:8012/ui_kits/mint/ (${hash}) — ${mintGuides.length} article pages`);
