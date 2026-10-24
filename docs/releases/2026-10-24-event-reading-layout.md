# Workshop reading layout and chronology

The existing bilingual workshop page uses the site's article reading pattern: a linked chapter rail on the left, the main reading column in the center and event metadata in an independently scrollable right rail. At 1100px and below it becomes one column, with a collapsible contents list and metadata reachable through its anchor. Native links and disclosures work without JavaScript. The source order is header, contents, article, metadata, matching the mobile reading order.

All 16 knowledge topics remain, ordered by their first relevant recording segment. Stable chapter IDs preserve previous inbound anchors. Each chapter gives a relative recording range, session context, material/documentation supplements and an editorial exercise. The 13 existing Q&A entries are retained and sorted by their first source timestamp. Later revisits are identified in the relevant context paragraph. Examples remain suggested exercises; personal reflection and practice status are unchanged.

External citations now appear in one source list. Canonical deduplication removes fragments, trailing-slash variations and tracking/referral parameters for comparison, while preserving distinct document paths and meaningful query parameters. This collapses the Mografy README and its scene-model fragment into one resource; the GSAP homepage and its separate API/easing/scroll documentation remain distinct. Each language renders 30 unique external resources. Chapter, source-list and language/navigation links remain available.

The release checker now inspects the rendered article for duplicate canonical external resources, broken internal article anchors, 16 chronological chapter timestamps and 13 Q&A entries. A negative fixture confirms that adding a duplicate Hera link with tracking parameters and a fragment fails the checker.

## Local verification

- Existing tests: both test files pass (14 defined tests).
- Svelte: 0 errors / 0 warnings; build succeeds.
- Release check: 54 HTML pages and internal paths pass; both workshop articles pass the new resource and chronology check.
- Dependency audit: no high findings; three existing low findings remain.
- Separate headless Chromium: 390 / 1280 / 1680px in both languages; chapter navigation and browser Back, language switching, index search, keyboard disclosure and metadata scrolling, desktop sticky positions, reduced-motion computed style, and no horizontal overflow or page errors.
- JavaScript disabled: 390 / 1280px chapter links and full content remain usable.
- Semantic HTML/CSS diagram retained; no new image assets (0 bytes).

Previous production: main `d76d34f8e1de168c991ba6cfc484cb03a0232b47`, successful Cloudflare build `8d1b389b-9367-4c24-acf6-540c4ead99b6`. Release uses the existing PR, Git integration and exact-commit deployment checks. Final production evidence is recorded in Planning after live verification.
