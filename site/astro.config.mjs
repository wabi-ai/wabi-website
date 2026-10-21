import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import { copyFile, readdir, readFile } from 'node:fs/promises';

// Guides carry real publish/update dates in their front matter; use them as <lastmod>.
// Other pages have no reliable date, so they get none rather than a misleading build date.
const guidesDir = new URL('./src/content/innsikt/', import.meta.url);
const guideDates = {};
for (const file of await readdir(guidesDir)) {
  if (!file.endsWith('.md')) continue;
  const front = (await readFile(new URL(file, guidesDir), 'utf8')).split('---')[1] || '';
  const date = (front.match(/^updated:\s*(\S+)/m) || front.match(/^date:\s*(\S+)/m) || [])[1];
  if (date) guideDates[`https://wabi.no/innsikt/${file.replace(/\.md$/, '')}/`] = new Date(date).toISOString();
}

// Crawlers often guess /sitemap.xml. Serve the same index there so they never find a stale list.
const sitemapAlias = {
  name: 'wabi-sitemap-alias',
  hooks: { 'astro:build:done': async ({ dir }) => copyFile(new URL('sitemap-index.xml', dir), new URL('sitemap.xml', dir)) },
};

export default defineConfig({
  site: 'https://wabi.no',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: page => !page.includes('/personvern/'),
      serialize: item => (guideDates[item.url] ? { ...item, lastmod: guideDates[item.url] } : item),
    }),
    sitemapAlias,
    react(),
  ],
  devToolbar: { enabled: false },
});
