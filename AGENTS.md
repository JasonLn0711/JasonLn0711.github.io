# Repository Notes

## Talk Story Page

- Route: `src/pages/talks/regulated-ai-cybersecurity.astro`
- Content source: `src/data/talkStory.ts`
- Landing page entry point: `src/pages/talks.astro`

## How It Is Structured

- The one-page keynote uses the shared site layout in `src/layouts/BaseLayout.astro`.
- It reuses the global site primitives from `src/styles/global.css`, especially `shell`, `section`, `panel`, `eyebrow`, `pill`, and button classes.
- Shared talk-specific wrappers live in `src/components/talks/TalkStorySection.astro` and `src/components/talks/TalkStoryNav.astro`.
- The 20 sections are ordered by the `sections` array in `src/data/talkStory.ts`, with supporting labels and diagram data stored alongside it.

## Editing Content

- Update section labels, chapter ids, and diagram lists in `src/data/talkStory.ts`.
- Update event metadata or the talks landing-page card in `src/data/speaking.ts` and `src/pages/talks.astro`.
- Keep the page aligned with the existing site language instead of introducing a separate microsite style.

## Commands

- `npm run check`
- `npm run build`
