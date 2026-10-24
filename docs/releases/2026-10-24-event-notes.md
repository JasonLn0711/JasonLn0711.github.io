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
