// GitHub Pages serves main:/; copy the Astro build there without removing source files.
import { cp, readdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const dist = join(root, 'site/dist');
for (const entry of await readdir(dist)) {
  await cp(join(dist, entry), join(root, entry), { recursive: true });
}
// Serve Astro's _astro/ bundles directly instead of processing them with Jekyll.
await writeFile(join(root, '.nojekyll'), '');
await writeFile(join(root, 'CNAME'), 'wabi.no\n');
console.log('Staged the Astro site in the repository root for GitHub Pages.');
