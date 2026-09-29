import { build } from 'esbuild';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { resolve } from 'node:path';
import { createHash } from 'node:crypto';

await mkdir('.build', { recursive: true });
await mkdir('assets/site', { recursive: true });
const pages = ['Shell', 'Footer', 'Parts', 'Home', 'Agents', 'Automation', 'Software', 'ReportUI', 'DealerUI', 'CaseReport', 'CaseDealer', 'CaseClinic', 'CaseWebsite', 'Course', 'Assessment', 'Contact'];
const files = ['src/site-data.js', ...pages.map(p => `src/pages/${p}.jsx`), 'src/App.jsx'];
const source = `import * as React from 'react';\nimport * as DS from '../src/components/index.js';\nconst window = globalThis.window || {};\nwindow.WabiDesignSystem_66a19c = DS;\n` + (await Promise.all(files.map(f => readFile(f, 'utf8')))).join('\n');
await writeFile('.build/client.jsx', source + `\nimport { hydrateRoot } from 'react-dom/client';\nhydrateRoot(document.getElementById('root'), <App initialPage={routeFromPath(window.location.pathname)}/>);\n`);
await writeFile('.build/server.jsx', source + `\nimport { renderToString } from 'react-dom/server';\nexport { ROUTES };\nexport const render = page => renderToString(<App initialPage={page}/>);\n`);
await build({ entryPoints: ['.build/client.jsx'], bundle: true, minify: true, outfile: 'assets/site/app.js', define: { 'process.env.NODE_ENV': '"production"' }, target: ['es2020'], legalComments: 'eof' });
await build({ entryPoints: ['.build/server.jsx'], bundle: true, platform: 'node', format: 'cjs', outfile: '.build/render.cjs', define: { 'process.env.NODE_ENV': '"production"' }, legalComments: 'none' });
const cssFiles = ['colors','typography','spacing','base'].map(n => `src/tokens/${n}.css`).concat(['src/prototype.css','src/site.css','src/navigation.css','src/cases.css','src/home-sections.css','src/footer.css','src/prose.css']);
const css = (await Promise.all(cssFiles.map(f => readFile(f, 'utf8')))).join('\n');
await writeFile('assets/site/site.css', css);
const hash = createHash('sha256').update(await readFile('assets/site/app.js')).update(css).digest('hex').slice(0, 12);
const { ROUTES, render } = createRequire(import.meta.url)(resolve('.build/render.cjs'));
const escape = s => s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
for (const [page, route] of Object.entries(ROUTES)) {
  const dir = '.' + route.path;
  await mkdir(dir, { recursive: true });
  const html = `<!doctype html>
<html lang="nb"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escape(route.title)}</title><meta name="description" content="Wabi finner ut hvor AI gir verdi i bedriften din. Vi bygger AI-agenter, automatisering og programvare, og følger det videre.">
<link rel="canonical" href="https://wabi.no${route.path}"><meta name="theme-color" content="#F4F1E7">
<meta property="og:title" content="${escape(route.title)}"><meta property="og:type" content="website"><meta property="og:image" content="https://wabi.no/assets/og-image.jpg"><meta property="og:locale" content="nb_NO">
<link rel="icon" href="/assets/design/logo/wabi-mark-black.svg" type="image/svg+xml"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&family=Inter:wght@400;500;600;700&family=Hanken+Grotesk:wght@400;500;600;700;800&display=swap" rel="stylesheet">
${page === 'hjem' ? '<link rel="preload" as="image" href="/assets/footer-bg.jpg" fetchpriority="high">' : ''}
<link rel="stylesheet" href="/assets/site/site.css?v=${hash}"><script defer src="/assets/site/app.js?v=${hash}"></script></head>
<body class="wabi-page"><div id="root">${render(page)}</div><noscript><p class="container">Interaktive eksempler og kartlegging trenger JavaScript. Du kan kontakte oss på <a href="mailto:ulrik@wabi.no">ulrik@wabi.no</a>.</p></noscript></body></html>\n`;
  await writeFile(dir + 'index.html', html);
}
console.log(`Built ${Object.keys(ROUTES).length} static pages and a local production bundle (${hash}).`);
