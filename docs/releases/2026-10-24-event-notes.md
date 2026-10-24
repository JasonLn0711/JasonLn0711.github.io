# Talks & Workshops notes

Adds dated attendance notes to the existing personal site, separate from the owner's speaking and teaching pages. The first entry covers the October 24 online brand-motion workshop. Public source summaries, edited Q&A, optional self-check, reflection and practice status remain distinct.

## Content and maintenance

- Canonical content: `src/lib/content/site.ts`, rendered by `EventNotes.svelte`.
- English: `/event-notes/`; Traditional Chinese: `/zh-tw/event-notes/`. Each has a dated detail page and matching language switch, canonical, alternate-language links and sitemap entry.
- Existing navigation, Blog and Talks link to the section. The personal site had no shared search component; a small bilingual keyword filter searches these notes with an explicit empty state and a no-JavaScript full list.
- Metadata includes event, date, scheduled time/timezone, type, online/in-person format, public presenter attribution, organizer/co-organizer, public platform, registration/source, materials, update date and coverage limits. Unknown facts stay unconfirmed. Scheduled time is not completion evidence.
- Public slide attribution is Nocts. Private chat, names without public attribution, meeting details, personal messages, private repository locators and third-party image copies are excluded.
- The diagram uses semantic HTML/CSS. New image assets: 0; image bytes: 0. Its caption explains the simplified p5.js flow. Existing site palette and reduced-motion behavior are retained.
- Future publication is manual and requires public-safe editorial review. This feature does not auto-publish private notes or infer learning completion.

## Verification before publication

- `npm test`: passed (both test files).
- `npm run check`: 0 errors, 0 warnings.
- `npm run build`: static output generated.
- `node scripts/check-release.mjs`: 54 HTML pages and internal paths passed.
- Isolated Chromium at 390px and 1280px: bilingual keyword search, empty state, same-article language switch, keyboard answer disclosure and mobile menu Escape passed; no horizontal overflow or page errors. Article readable with JavaScript disabled. Reduced-motion preference enabled. Screenshot review performed.
- `git diff --check`: passed.
- Existing `npm audit --audit-level=high` initially found a newly reported high Undici advisory in the build tooling. Scoped Miniflare override moves Undici 7.29.1 to 7.30.1. Audit now passes; three pre-existing low findings remain. No framework major upgrade.
- Local Vite preview could not locate its server manifest; generated static files were served independently for browser QA. Production routing still requires post-deployment checks.

## Release evidence

Previous production head: `77dd3a0`, Cloudflare Workers build `59bc9629-aba8-4ac2-944f-ac470d054366` successful. Release uses the existing Git integration and unchanged domain/security configuration. Post-deployment results belong in the release receipt and Planning publication mirror.

Cloudflare's npm 10.9.2 preview rejected the initial npm 12 scoped override lockfile (`Missing: undici@7.29.1 from lock file`). The override was moved to the Undici package level and checked with npm 10.9.2 clean install; the dependency remains confined to development tooling.

## Event metadata update

The October 24 follow-up adds the organizer (Claude x Codex online study group), presenter Nocts (奇昌), free Zoom format and public registration source. Dennis is not credited as presenter. The registration announcement title and actual slide-deck title are displayed separately without inferring an event change. Organizer background/topics are attributed; no independently unverified award detail is published.

Read-only HTTP checks returned 200 for the supplied public form and slide deck. The form currently says registration is closed, so its link is presented as a source rather than an invitation to register. No form was submitted. Co-organizer, replay availability, attendance completion, reflection and practice evidence remain unconfirmed. Private correspondence, meeting identifiers and personal learning goals remain outside public output. The existing diagram and Q&A are preserved.

The same metadata release adds presenter-shared Hera and Motion UX references. Hera's clean homepage and the supplied YouTube channel entrance returned HTTP 200. YouTube's own canonical identifies channel `UCPOmpoL4tsc9ZLtCotluXYg`. Public copy attributes product/channel descriptions and does not claim tested generation or watched videos. The referral query is retained only in private source history.

GSAP's shared official homepage is also included once in the workshop resource list, linked to the existing p5.js / GSAP / Three.js comparison. The earlier API-documentation citation remains at the technical claim. No package is installed, and no open-source licensing claim is made.

Combined update regression: tests pass; Svelte reports 0 errors / 0 warnings; build and 54-page release/link check pass. New-tab browser checks at 390px and 1280px confirm no overflow, bilingual metadata, keyboard disclosure, same-article language switching, the GSAP comparison anchor and retained diagram/Q&A. Output checks exclude private message identifiers, referral query, meeting URLs and email-source links.
