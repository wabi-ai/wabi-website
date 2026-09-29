# Guides and articles in the new concept

The homepage section follows the supplied reference: wide split cards in a horizontal, manually controlled rail. It appears between the process and team sections. Cards use existing Wabi artwork, with a readable text half and a visual half. Mobile cards stack their two halves. The rail supports touch, keyboard arrows, previous/next buttons, and reduced motion. There is no autoplay.

## Files and preview

- Content: `src/content/guides.json`
- Components: `src/preview/mint/Guides.jsx`
- Styles: `src/preview/mint/guides.css`
- Build: `npm run build:mint`
- Checks: `npm run check:mint`
- Library: `/ui_kits/mint/innsikt/`
- Article: `/ui_kits/mint/innsikt/{slug}/`

These are separate static HTML pages, with real links, page-specific titles and descriptions, visible answer summaries, section headings, dates, related reading and Article JSON-LD. They do not require JavaScript to expose article content. Filtering and carousel controls enhance that content in the browser. The older `/ui_kits/web/` homepage and production build are unchanged.

The three initial articles are **editorial drafts for the local concept**, not approved Wabi publications. Dates record actual content edits. `reviewStatus` is `draft`; no human review or named expert authorship is claimed. All concept pages have `noindex,follow`. Before production launch, review the content and authorship, migrate these routes to the chosen public location, configure absolute canonicals and social URLs, include approved pages in the production sitemap, and remove preview noindex for approved public pages. The production build currently does not import these drafts.

## Future update agent

No agent, schedule, or automatic publishing is installed. The content structure is ready for that later work:

- Stable `slug` identifies the article and should survive edits.
- `summary`, `sections`, `questions` and `sources` hold the editorial content independently of JSX.
- `createdAt` and `updatedAt` record creation and substantive changes. Do not bump dates for a scheduled check with no change.
- `reviewIntervalDays` gives a suggested review cadence, not a promise to readers.
- `reviewStatus` tracks `draft` or `reviewed`. Add a real reviewer and reviewed date when that workflow exists.
- Topic, tone, icon and related service determine presentation and relevant next steps.

A later agent can check articles due for review, revisit primary sources, flag changed facts and broken links, and propose a content diff with supporting URLs. Run the build and content checks on that diff, then send it through the editorial review workflow before publication. Start with review proposals; decide scheduling and publishing permissions when implementing the agent. Do not invent customer evidence, outcomes or individual author approvals. Prefer updating a useful existing article to generating overlapping pages.

## Search foundations

The pages make the answer accessible as text, link related material, and keep structured data consistent with visible content. There is no special AEO schema or guaranteed inclusion in AI answers. Google describes the same core SEO practices for its AI features:
https://developers.google.com/search/docs/appearance/ai-features

Article wording on agents versus workflows references Anthropic's conceptual distinction, not its older tooling recommendations:
https://www.anthropic.com/engineering/building-effective-agents
