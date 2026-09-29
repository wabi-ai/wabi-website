# Wabi Design System

Wabi is a practical AI partner from Trøndelag (and Singapore) for Nordic businesses. They sit down inside the client's business, find where AI is actually worth using, build it, put it into operation and follow it up. The hard part isn't the technology — it's knowing where it creates value. The name comes from **wabi-sabi**: progress over perfection, simplicity, human leadership, improvement along the way.

The design is used across **presentations, workshops, documents and web**, always in **Norwegian bokmål**.

**Most important rule:** Wabi is practical. Design shows how something is actually done — real examples, real prompts, før/etter, timer spart — never how impressive AI is. No brains, robots, circuit boards or glowing networks.

## Sources
- `uploads/DESIGN.md (wabi)` — the brand spec (tokens + prose). Copied values verbatim into `tokens/`.
- Logo, blob, portraits and 36 icons uploaded as files (now in `assets/`).
- No codebase, Figma, website source or slide deck was provided. UI kit and slides are composed from DESIGN.md rules, not recreated from existing screens.

## Index
- `styles.css` — entry point (imports only) → `tokens/fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css` (utility classes `.wabi-page`, `.wabi-display-lg`, `.wabi-headline-*`, `.wabi-eyebrow`, …)
- `assets/logo/` — `wabi-mark-black.svg`, `wabi-mark-white.svg`
- `assets/blob/` — `wabi-blob.webp` (+ `.png` master, 1402×1500)
- `assets/portraits/` — finished arch portraits (`*-bue-blob-{hoyre|venstre}`), B/W cut-outs (`*-utklipp-sh.png`), building blocks (`bue-bakgrunn-blob-*`, `bue-maske.png`)
- `assets/third-party/` — 44 third-party tool marks (Simple Icons, CC0) used by `ToolLogo`
- `assets/icons/` — 36 `wabi-icon-*.svg` (web variant: `currentColor` + `--wabi-icon-accent`)
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/` — React primitives (below)
- `ui_kits/web/` — wabi.no click-through: Hjem, AI-agenter, Automatisering, Verktøy og programvare, Kartlegging, Kontakt
- `ui_kits/web-v1/` — earlier conventional version, kept for reference
- `slides/` — 8 sample 1920×1080 slide layouts
- `SKILL.md` — Agent Skill wrapper

## Components
- **brand/** — `WabiMark`, `Icon` (36 icons, data in `iconData.js`), `Blob`, `BlobPanel`, `Portrait`, `ToolLogo` / `ToolChip` / `LogoStrip` (third-party tool marks, `TOOL_CATALOG`)
- **core/** — `Button` (primary/secondary), `Tag`, `Eyebrow`
- **content/** — `Card` (default/raised/tint/feature), `StatCard`, `SectionHeader`, `NumberedList`, `ProcessSteps` (timeline/arrows), `QRBlock`, `LogoWall`
- **practical/** — `PromptBlock`, `BeforeAfter`

All components come from the DESIGN.md "Components" section, except these **intentional additions**:
- `Icon`, `WabiMark`, `Blob`, `Portrait` — wrappers so the brand's assets are used exactly as specified.
- `ToolLogo`, `ToolChip`, `LogoStrip` — Wabi constantly names the tools it works in (Claude, ChatGPT, Slack, Teams, HubSpot …); a single catalogue keeps those references consistent.
- `BlobPanel` — atmospheric web panels requested by Wabi (inspired by wonderful.ai), built only from the real blob image.
- `PromptBlock`, `BeforeAfter` — the brief asks that design shows real prompts, før/etter and time saved; DESIGN.md mentions «etter»-boxes and stats but has no dedicated components.

## Content fundamentals
- **Language:** Norwegian bokmål. Direct, short sentences. Talks *with* people, not *to* them. Uses "du/dere" for the reader and "vi" for Wabi.
- **Casing:** Sentence case in all titles («De fire lagene», «Fem eksempel på AI-initiativ»). Capitals only in eyebrows («FAKTA», «MED GEMINI»). Name written as «Wabi» in text, «WABI.NO» in contact info.
- **Emphasis:** Key words in **Bold in the same color** — «All **AI-inputen** du trenger». Never a different color.
- **Tone:** grounded, human, practical, calm. The audience is curious about AI but tired of hype. No superlatives, no "revolusjonerende", no futurism.
- **Show, don't tell:** prefer a concrete example over a claim. «Utkast klart mandag 07:00» beats «økt effektivitet». Numbers are approximate and honest: «~70%», «~6t/uke», «1 mill.+».
- **Emoji:** never. **Unicode as icons:** only a plain → in process flows.
- Example copy: «Det vanskelige er ikke teknologien, det er å vite hvor den gir verdi.» · «Scan koden» · «Her jobber vi i dag» · «Sammen med Wabi».

## Visual foundations
- **Paper + one ink.** Everything sits on Oat `#F4F1E7`, never pure white. Ink is one green family: Forest `#143D24` (titles, text, QR), Moss `#1E5631` (buttons, tags, feature cards, eyebrows), Evergreen `#065222` (large Regular display titles only). Ink `#040404` for long body/table rows, Muted `#5E6570` for metadata/page numbers. No blue, navy or other accents.
- **Type:** Manrope only, three weights. Display Regular 400 with tight tracking (−0.035em) for openings; ExtraBold 800 for content headlines; Bold 700 for card titles/labels. Slides scale web sizes ×1.5 (display ~120px, headline 72px, body 28–30px).
- **Web blob fields (BlobPanel):** tall or wide panels made only from the blob image, cropped inside a base tone. Tones come from the brand + blob palette so a row never reads as all-green: forest, moss, deep `#214F57`, slate `#4E6868` (blob desaturated to mist), oat/mist (on Raised with Outline). Neighbouring panels use different tones and presets (a–e tall, w1–w3 wide). A tonal protection layer (base colour → transparent) keeps the text zone calm. Text centred, bottom-aligned: Oat or Forest title in Manrope Regular, Sage/Tint sub, pill button (secondary on dark, primary on light). Hover: blob drifts (scale 1.04). Never CSS-gradient fog.
- **Service signatures (blob variants):** the same blob shape, gradient-mapped into three colourways so services are told apart like chapters: **fjord** (blue) = AI-agenter, **ember** (red) = Automatisering, **sand** (gold/olive) = Verktøy og programvare. Files: `assets/blob/wabi-blob-{fjord|ember|sand}.webp`. **AI-kartlegging** is the entry service and keeps the original green blob; on the home page it sits as a full-width banner above the three service panels.
- **Filled service panels:** the three services use `BlobPanel` with the tone ground (`fjord` #24466F, `ember` #6E1D14, `sand` #4F5530) so the colour fills the whole panel, with the service's blob colourway melting into it (presets t1–t3 tall, k1–k2 wide heroes/CTAs with `layout="left"`, a–e cards). Oat title, light sub, secondary (Raised) pill buttons. The same fill carries from the home panel into the service's hero, CTA, case card and "Mer vi gjør".
- **Kartlegging on paper:** AI-kartlegging is the one panel on paper — `ground="paper"`, original green blob, Forest text, primary button — full width above the three services, the same look as the home hero.
- **Project pages (Prosjekter):** a case = service-coloured hero BlobPanel → facts row (Kunde, Bygget, Kanaler, Oppsett) → a working recreation of what was built, in Wabi tokens with **dummy data only** (client work is confidential) → "Hva vi bygde" cards → før/etter → CTA. Home carousel is titled «Prosjekter».
- **Service pages:** each service has its own practical page: hero BlobPanel → sections with eyebrow + Regular display title + lead → one concrete visual per section (agent loop with live log, chat thread in a channel, vague vs specified task, sub-agent tree, trigger → AI-step → action flow, tool audit table) → CTA BlobPanel → other services.
- **Web hero:** full-width Oat with two large blob placements framing a calm, centred Oat zone for a Display title (centred is allowed for opening surfaces). Sparse 5px square registration marks (Outline tint, a few Moss) frame the zone, plus up to two small Raised chips naming real work («Prompt · ukesrapport», «~6t spart per uke»). Chips hide below 1100px.
- **Layout:** left-aligned, airy, one clear column or a calm grid of 2–4 equal-height cards. Web 1200px max, 64px margins, 8px scale; sections separated by ≥64px of air, not boxes or bands. Slides: mark top-left (~38px), page number bottom-right, titles start in the same place, ≥40% empty.
- **Text placement (slides, 1920×1080):** margins 128px left/right, 96px top/bottom; 12 columns with 24px gutters. The W-mark, eyebrows and titles share one left edge (x=128). Content titles always start at y=240. Text lives in columns 1–7 (max 960px wide); the blob and images go in columns 9–12 or bleed off a corner, never into the text column. Opening and closing slides anchor the text block bottom-left (bottom at y=904), not centred. The page number sits bottom-right inside the margin. Contact details (e-post, nettside) are set in Bold with an eyebrow label, on calm Oat. See `guidelines/slide-grid.html`.
- **Blob on every slide:** every slide and content view carries the blob, placed differently each time (corner, edge, rotation, mirroring) so no two neighbouring slides look stamped. Current deck: 01 top-right large · 02 bottom-left −68° mirrored · 03 top-right 10° · 04 bottom-left −68° · 05 bottom-left −68° mirrored · 06 top-right mirrored −12° · 07 bottom-left 170° · 08 top-right behind the QR block.
- **Backgrounds:** the one signature blob image — grainy, soft fog from lime to teal to slate. Placed, rotated (10°, −68°), mirrored and scaled; always bleeding off at least one edge, never whole, never behind body text. Content views: one corner, ≤25–35%. Opening/break/contact views may let it cover more. Never recreated as CSS gradient; no other gradients, meshes, patterns or textures.
- **Elevation:** flat. Depth from tonal layers: Oat → Card `#F6F5EC` / Raised `#FDF9F1` → Tint `#E9F0E9` → Moss/Forest (heaviest, for the one thing that matters). **No shadows, glass, blur, glow or neon.**
- **Borders:** 1–1.5px warm beige Outline `#E2DECF` on cards and list dividers; Tint cards use `#C8DAC8`.
- **Radii:** 12px cards/images/blocks, 6px small chips/inputs, pill for buttons/tags, **arch** (semicircle top) reserved for portraits.
- **Cards:** Card surface + 12px radius + Outline, 24px padding (40px on slides). Tint for solutions/«etter». Feature = Moss with Oat title and Sage `#CFE0D4` body; max 1–2 per view.
- **Imagery:** people in B/W cut-out, slightly raised contrast, inside an arch with the blob behind — the calm B/W human vs the living green. Other photos: real work (workshops, client visits, screens in use), 12px radius rectangles. Never stock photos. Never mix color and B/W portraits.
- **Hover / press:** primary button darkens Moss → Forest; secondary Raised → Card. Press scales to 0.98. Links: Moss underline → Forest. No opacity-fade hovers.
- **Animation:** minimal and calm — short 150–240ms color/transform transitions with a standard ease-out. No bounces, no looping motion, no animated blobs.
- **Transparency:** only in the blob and portrait PNG/WebP files. No translucent UI.
- **Diagrams:** 2×2 frameworks from Moss tiles with small gaps and thin Forest axes; steps as Forest circles with Oat number; processes as horizontal steps with arrows or a timeline.

## Iconography
- Wabi's own set, style **«brutt strek»** (broken stroke): 36 icons on a 24×24 grid, 0.8 stroke (1.6px at 48px), round caps/joins. Each icon has exactly **one break** in one contour and **one Moss accent** element carrying the meaning.
- Files: `assets/icons/wabi-icon-*.svg` — main stroke `currentColor`, accent `var(--wabi-icon-accent, #1E5631)`. On Moss/Forest: `color:#F4F1E7; --wabi-icon-accent:#CFE0D4`.
- In React use `<Icon name="…"/>` (paths inlined from `components/brand/iconData.js`, so it colors correctly).
- Designed for **48px+**, minimum 32px. May sit in a small Raised box with 12px radius.
- Never mixed with Lucide/Canva/other libraries; new icons are drawn to the same rules. No emoji, no unicode glyph icons (except → in flows).
- The Canva variant (fixed hex colors) and `wabi-icons-preview.png` mentioned in DESIGN.md were not uploaded.

## Third-party tool logos
- **Original colours**, so people recognise them. Multi-colour originals from svgl (`assets/third-party/color/`, 36 logos); single-colour marks from Simple Icons (CC0, `assets/third-party/`) rendered in each brand's own hex where no original exists (HubSpot, Jira, Zapier, Make, LangChain, CrewAI, Confluence, Airtable, Cline). Both are inlined via `components/brand/toolLogoData.js`. Trademarks belong to their owners; use only to say which tools Wabi works in.
- This is the one place outside the blob and photos where non-Wabi colours appear. Keep logos small (16–28px), on Oat/Raised surfaces, never larger than the Wabi mark on the same surface, and always next to the product name unless in a strip of well-known logos. On Moss/Forest panels use `mode="mono"`.
- Where they appear: home strip under the hero, agent page channels + models/harnesses, automation systems grid, tool audit table, chat demo header.
- Product → logo: Claude Code / Claude Cowork → Claude; ChatGPT / Codex → OpenAI; Microsoft Copilot → Copilot. **Missing (initial tile until official files are added):** Hermes Agent, Tripletex, Visma, Fiken.

## Logo
W-mark only, no wordmark. Pure black `#000` on light, pure white `#FFF` on dark — never recolored, rotated, outlined or effected. Web header 32–40px, slides ~38px, min 20px, clear space ≥ half its height. `<WabiMark tone="black|white" width={40}/>`.

## Fonts
Manrope is loaded from Google Fonts (`tokens/fonts.css`). No font binaries were supplied — add self-hosted `.woff2` files if offline/production use needs them.
