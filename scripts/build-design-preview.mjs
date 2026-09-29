// Keep the supplied prototype intact, applying reviewed changes in a generated preview.
import { cp, mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { createHash } from 'node:crypto';

const source = resolve(process.argv[2] || '/Users/eljar/Downloads/Wabi Design System');
const output = resolve('.build/design-preview');
await mkdir(output, { recursive: true });
for (const entry of ['assets', 'components', 'tokens', 'styles.css', '_ds_bundle.js', 'ui_kits/web']) {
  await cp(resolve(source, entry), resolve(output, entry), { recursive: true });
}
// Keep each component's text colour on hover, including light text on dark cards.
const baseCssPath = resolve(output, 'tokens/base.css');
await writeFile(baseCssPath, (await readFile(baseCssPath, 'utf8')).replace(/\.wabi-page a:hover\s*\{color:var\(--wabi-forest\)\s*;?\}/g, ''));
const baseCssVersion = createHash('sha256').update(await readFile(baseCssPath)).digest('hex').slice(0,12);
const stylesPath = resolve(output, 'styles.css');
await writeFile(stylesPath, (await readFile(stylesPath, 'utf8')).replace('tokens/base.css', `tokens/base.css?v=${baseCssVersion}`));
for (const name of ['Aiinput.svg', 'footer-bg.jpg', 'footer-atmosphere.png', 'footer-atmosphere-grain.png', 'footer-waves.png']) {
  await cp(resolve('assets', name), resolve(output, 'assets', name));
}
await cp('assets/logos', resolve(output, 'assets/logos'), { recursive: true });
const web = resolve(output, 'ui_kits/web');
// Newsletter signup lives in the shared footer, without a second homepage section.
const home = await readFile(resolve(web, 'Home.jsx'), 'utf8');
const toolRow = await readFile('src/preview/ToolRow.jsx', 'utf8');
await writeFile(resolve(web, 'Home.jsx'), home
  .replace(/function AiInput\(\) \{[\s\S]*?(?=function HomePage\()/, '').replace('<AiInput/>', '').replace("return <section style={{ ...wabiWrap, paddingTop: 120, display: 'grid'", "return <section id=\"om-oss\" style={{ ...wabiWrap, paddingTop: 120, display: 'grid'")
  .replace(/function ToolRow\(\) \{[\s\S]*?(?=function KartleggingBand\()/, () => toolRow + '\n'));
await cp('src/preview/tool-grid.css', resolve(web, 'tool-grid.css'));
const shell = await readFile(resolve(web, 'Shell.jsx'), 'utf8');
const routeAdapter = `
function RouteLink({ page = 'hjem', go, children, onNavigate, ...props }) {
  return <a href={'#' + page} {...props} onClick={event => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    onNavigate?.();
    const [target, anchor] = page.split('#');
    go(target);
    if (anchor) requestAnimationFrame(() => document.getElementById(anchor)?.scrollIntoView());
  }}>{children}</a>;
}
`;
const footer = (await readFile('src/pages/Footer.jsx', 'utf8')).replaceAll('/assets/design/', '/assets/');
const motion = await readFile('src/preview/Motion.jsx', 'utf8');
const sharedShell = await readFile('src/pages/Shell.jsx', 'utf8');
const header = sharedShell.slice(sharedShell.indexOf('function SiteHeader(')).replaceAll('/assets/design/', '/assets/');
await writeFile(resolve(web, 'Shell.jsx'), motion + '\n' + shell.slice(0, shell.indexOf('function SiteHeader(')) + routeAdapter + header + footer + '\nObject.assign(window, { SiteHeader, SiteFooter, wabiWrap });\n');
await cp('src/navigation.css', resolve(web, 'navigation.css'));
await cp('src/prose.css', resolve(web, 'prose.css'));
await cp('src/footer.css', resolve(web, 'footer.css'));
await cp('src/preview/motion.css', resolve(web, 'motion.css'));
// Normalize existing inline transitions; preserve longer, subtle artwork transforms.
for (const file of (await readdir(web)).filter(name => name.endsWith('.jsx'))) {
  let source = await readFile(resolve(web, file), 'utf8');
  source = source.replace(/transition: '([^']+)'/g, (_, value) => "transition: '" + value.replace(/(?:150|200)ms/g, '240ms').replace(/300ms/g, '320ms') + "'")
    .replaceAll("behavior: 'smooth'", 'behavior: wabiScrollBehavior()')
    .replaceAll('window.scrollTo(0, 0)', 'window.scrollTo({ top: 0, behavior: wabiScrollBehavior() })');
  if (file === 'Agents.jsx' || file === 'CaseWebsite.jsx') {
    source = source.replace('const [auto, setAuto]', 'const reducedMotion = useWabiReducedMotion();\n  const [auto, setAuto]')
      .replace('if (!auto) return;', 'if (!auto || reducedMotion) return;')
      .replace('}, [auto]);', '}, [auto, reducedMotion]);')
      .replace(/, (2200|2400)\)/g, ', 3600)')
      .replace("{auto ? 'Kjører' : 'Pause'}", "{auto && !reducedMotion ? 'Kjører' : 'Pause'}");
  }
  if (file === 'CaseClinic.jsx') {
    source = source.replace('const [active, setActive]', 'const reducedMotion = useWabiReducedMotion();\n  const [active, setActive]')
      .replace('React.useEffect(() => { const t = setInterval', 'React.useEffect(() => { if (reducedMotion) return; const t = setInterval')
      .replace(', 1800); return () => clearInterval(t); }, []);', ', 3200); return () => clearInterval(t); }, [reducedMotion]);');
  }
  await writeFile(resolve(web, file), source);
}
const html = await readFile(resolve(web, 'index.html'), 'utf8');
const navVersion = createHash('sha256').update(await readFile(resolve(web, 'navigation.css'))).digest('hex').slice(0,12);
await writeFile(resolve(web, 'index.html'), html
  .replace('</head>', '<link rel="stylesheet" href="footer.css"><link rel="stylesheet" href="navigation.css"><link rel="stylesheet" href="prose.css"><link rel="stylesheet" href="tool-grid.css"><link rel="stylesheet" href="motion.css"><style>:root{--footer-content-width:1072px;--page-gutter:clamp(24px,5vw,64px)}</style></head>')
  .replace('href="navigation.css"', `href="navigation.css?v=${navVersion}"`)
  .replace('<SiteHeader page={page} go={go}/>', '<SiteHeader page={page} go={go} overHero={false}/>')
  .replace('<SiteFooter go={go}/>', '<SiteFooter go={go} page={page}/>')
  .replace('<main style=', '<main key={page} className="wabi-page-content" style=')
  .replace('window.scrollTo(0,0)', "window.scrollTo({ top: 0, behavior: 'instant' })"));
console.log(`Design preview ready: ${output}/ui_kits/web/`);
