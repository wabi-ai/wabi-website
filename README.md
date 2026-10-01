# Wabi website

## Current production site (Astro)

The current website source is in `site/`. GitHub Pages serves the generated files
from the root of the `main` branch at **https://wabi.no**.

```sh
npm --prefix site ci
npm --prefix site run dev
```

For a release, run `npm run build:production` from the repository root. This builds
Astro, copies `site/dist/` into the published root, and writes `.nojekyll` so
GitHub Pages serves the `_astro/` bundles. Commit the source and generated output
together, then push to `main`. The existing `CNAME` domain is preserved.

Edit `site/src/` and `site/public/`; do not edit the generated root pages.
The root `npm run build`, React source under `src/`, and the documentation below
describe the previous implementation and are retained for reference.

## Previous implementation

The new Wabi website, adapted from the supplied **Wabi Design System** web prototype. It uses Manrope, warm paper and forest surfaces, atmospheric photography, restrained product previews, and Norwegian bokmål copy. Original brand artwork remains on service pages and portraits.

The source is React, compiled into static HTML pages and a local JavaScript bundle. Every page is rendered during the build, so the initial content is available before JavaScript loads. The generated files are committed alongside the source and can be served directly from the repository root, including on GitHub Pages.

## Preview

The generated site is ready to preview without installing dependencies:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://localhost:8000. Stop the server with `Ctrl+C`. Opening `index.html` directly from Finder is not supported because the site uses paths relative to the server root.

## Edit and build

Use Node.js 20 or newer and npm:

```sh
npm ci
npm run build
npm run check
npm run preview
```

Refresh the browser after rebuilding. There is no automatic rebuild watcher. Edit `src/`, not the generated HTML or `assets/site/` files.

| Location | Purpose |
| --- | --- |
| `src/pages/Home.jsx` | Homepage, client logos, three service levels, project carousel, and people. |
| `src/pages/Shell.jsx` | Header, mobile navigation, and page links. |
| `src/pages/Footer.jsx` | Shared photographic footer and AI-input signup. |
| `src/footer.css` | Original footer layout with current Wabi typography and colours. |
| `src/pages/Contact.jsx` | Contact form that prepares an email draft. |
| `src/pages/Assessment.jsx` | Five-step assessment and immediate recommendations. |
| `src/pages/Parts.jsx` | Shared service/project sections and diagrams. |
| `src/pages/` | Service pages and interactive project examples adapted from the prototype. |
| `src/App.jsx` | Routes, page titles, browser history, and page selection. |
| `src/site-data.js` | Shared service names, descriptions, and colours. |
| `src/site.css` | Site styling and mobile layout adjustments. |
| `src/navigation.css` | Floating header, visual dropdowns, and mobile navigation. |
| `src/cases.css` | Centred case carousel, project illustrations, and motion. |
| `src/home-sections.css` | Photo hero, client logos, three service levels, team, footer/newsletter, and reveal motion. |
| `src/prototype.css` | Layout rules retained from the supplied prototype. |
| `src/tokens/` | Design system colours, typography, and spacing. |
| `src/components/` | Reusable components from the supplied design system. |
| `assets/design/` | Supplied artwork, portraits, and logos used by the new site. |
| `assets/site/` | Generated production JavaScript and CSS. |
| `scripts/build.mjs` | Compiles the prototype's shared-scope page files, bundles React, and renders all routes. |
| `scripts/check.mjs` | Checks rendered headings, local assets, internal destinations, and form configuration. |
| `docs/design-system.md` | Original supplied brand and design guidance. |

Page files retain the prototype's shared function scope: the build assembles them in the order declared in `scripts/build.mjs`. Components under `src/components/` use ordinary module imports. To add a page, register it in the build list and in `src/App.jsx`.

## Pages

- `/` — homepage
- `/ai-agenter/`, `/automatisering/`, `/verktoy-og-programvare/`, `/kurs/` — services
- `/prosjekter/rapportering/`, `/prosjekter/bruktbil/`, `/prosjekter/legekontor/`, `/prosjekter/nettside/` — illustrative project examples
- `/kartlegging/` — five-step assessment
- `/kontakt/` — contact

URLs can be opened directly, refreshed, shared, and navigated with the browser's Back and Forward buttons. This edition follows the supplied Norwegian, light-theme design. The previous English translation file is retained in the repository but is not loaded by the remake.

## Navigation

The shared header contracts into a neutral frosted-glass floating pill after scrolling, with the desktop menu centred between the logo and contact button. The pill and dropdowns use a subtle glass finish with 70–78% opaque neutral tint, desaturated background blur, dark text, and a fine highlight. Browsers without backdrop-filter support, or with reduced transparency enabled, receive solid surfaces. “Hva vi gjør” opens a service list with artwork that changes on hover or keyboard focus; “Prosjekter” opens two visual example cards. Desktop menus support hover, click, Arrow Down, Tab, and Escape. On screens up to 860px, the menu becomes a tap-operated accordion. Outside clicks, focus leaving the header, and route changes close it. Reduced-motion preferences disable transitions.

## Case section

The homepage uses a centred, bounded horizontal rail of portrait cards, inspired by the spacing and hierarchy of Wonderful’s case section. The heading and controls are centred; soft edge fades blend the rail into the page. Fades do not intercept input and disappear while the rail contains keyboard focus. Muted backgrounds frame upright illustrative product interfaces for reporting, car sales, websites, and clinic administration. These are concept previews, not customer screenshots. The rail supports native touch/trackpad scrolling, snapping, previous/next controls, and Arrow Left/Right or Home/End when the rail is focused. Controls reflect scroll boundaries and a progress line follows the scroll position. Reduced-motion preferences remove transitions and smooth programmatic scrolling.

## Homepage design

The homepage follows a minimal sequence: photographic introduction, all 11 customer logos, four illustrative cases, the three service levels, and the team. The hero reuses the existing cloud photograph at `assets/footer-bg.jpg`, with a dark overlay, large regular-weight type, and a clear contact action. The header uses white text over the image and switches to neutral glass with dark text after scrolling. Service descriptions sit in open columns on a full-width forest background. The homepage footer keeps the original centered contact invitation and rounded oat card with AI-input signup and practical links. Its supplied wave artwork, `assets/footer-waves.png`, fades in gradually from the oat page colour at the top. The original gradient remains available at `assets/footer-atmosphere.png`. The footer uses the original flat layout. Service and project pages use an integrated paper footer with a small accent in the page colour; contact and assessment use a compact paper variant. Inner pages omit the repeated generic contact invitation.

Offscreen section headings and content receive a short, subtle entrance transition. Content is visible in the static HTML and without JavaScript; reduced-motion preferences bypass the effect. Native page scrolling is preserved. Desktop and a 400px mobile viewport were visually reviewed during this redesign, including the carousel controls and mobile navigation.

## Content retained from the previous site

The homepage includes all 11 unique customer logos from the previous “I godt selskap” strip. They appear in a static, responsive grid with a monochrome CSS treatment; the original assets are preserved. The service section retains “Tre nivåer. Én tilnærming.”: AI-agenter, automatiserte arbeidsflyter, and skreddersydd programvare, presented as three open columns using Wabi typography and light text on forest. The detailed service pages retain their signature colours.

The shared footer keeps the AI-input signup, navigation groups, locations, LinkedIn link, and Ulrik’s clickable portrait across three page-aware layouts. Only the homepage includes the photographic outro and centered contact invitation. The newsletter is now in the footer on every page. Generic link styles use low specificity so hovering a card preserves its own accessible text colour.

## Contact and newsletter

**Contact:** The form opens a populated email draft addressed to `ulrik@wabi.no`. Visitors send it using their email app. The page also provides a copy fallback. There is no contact backend, and the page never claims a message was received.

**Assessment:** Recommendations are calculated locally after five steps. Answers are held in memory for the current visit, and are not submitted or emailed automatically.

**Newsletter:** A native form posts to the existing Kit form, `9612918`, opening Kit in a new tab. The page does not show a local success message or assume delivery. A real submission can subscribe the entered address; use an address you control when checking the complete signup flow.

**Fonts:** Manrope is loaded from Google Fonts. The embedded product examples also use Inter and Hanken Grotesk, as in the supplied prototype.

## Content review

The source prototype explicitly described client names, prices, and performance numbers as placeholders. Until those details are confirmed, the remake labels project stories as illustrative examples and the product screens use dummy data. The Nuet client attribution has been removed from the visible examples pending confirmation. Review project claims, service promises, and subscription delivery before publishing.

SEO/AEO expansion is paused. Existing `robots.txt`, `sitemap.xml`, and `llms.txt` are retained; they have not been expanded into the previously discussed SEO programme.

## Publishing

Run `npm run build` and `npm run check`, review the result, then commit source and generated files together. Publishing still uses static files from the repository root. `CNAME` declares `wabi.no`; verify the repository hosting settings before deploying.

The build and static checks do not replace a browser review. Check desktop/mobile layouts, keyboard navigation, the assessment, contact fallback, and interactive examples before release. The old design remains available in Git history.

## Supplied design preview

The supplied prototype can be previewed with the shared restored footer, independently of the earlier homepage redesign:

```sh
node scripts/build-design-preview.mjs "/Users/eljar/Downloads/Wabi Design System"
python3 -m http.server 8012 --bind 127.0.0.1 --directory .build/design-preview
```

Open http://127.0.0.1:8012/ui_kits/web/. The script copies the supplied prototype into `.build/design-preview` and applies `src/pages/Footer.jsx` and `src/footer.css`; the original download stays intact. Re-run the script after editing the footer. This prototype retains its original CDN dependencies and placeholder content. Production pages still use `npm run build`.

The supplied design preview shares the navigation component and glass styling with the production build. Its navbar contracts on scroll, with service previews, project cards, a mobile disclosure menu, and reduced-motion/transparency fallbacks. Body paragraphs use justified alignment with Norwegian hyphenation in `src/prose.css`.

## Mintlify-inspired alternative

This separate concept keeps Wabi's colours, typography, company logos, transparent-to-glass header, and wave footer. It brings project examples forward through a large switchable showcase and smaller story cards, with a product preview beneath the introduction.

```sh
npm run build:mint
python3 -m http.server 8012 --bind 127.0.0.1 --directory .build/design-preview
```

Open http://127.0.0.1:8012/ui_kits/mint/. The previous design remains at http://127.0.0.1:8012/ui_kits/web/. Edit `src/preview/mint/` and rebuild to update the alternative. It bundles React locally and reuses the updated service, project, contact, and assessment components. Project visuals are illustrative, not attributed customer results. The build checks covered all 11 routes and their assets; this alternative still needs visual browser review.

The alternative now includes an **Innsikt** section with wide article cards, a filterable guide library and three draft article pages at `/ui_kits/mint/innsikt/`. Run `npm run check:mint` after rebuilding. Content lives in `src/content/guides.json`, independently of the page layout. See [the content workflow](docs/guide-content.md) for the future update-agent design and publication setup. The local concept is marked noindex; these drafts are not part of the production build.
