# Repository Notes

## Current Site

- Current version: Living Research Atlas v3.0.
- Framework: SvelteKit with static adapter.
- Primary content source: `src/lib/content/site.ts`.
- Routes: `src/routes/`.
- Shared shell: `src/routes/+layout.svelte`.
- Shared global styles: `src/app.css` and `src/lib/styles/tokens.css`.
- Shared components: `src/lib/components/`.
- Generated design references: `public/design/v3-concepts/`.
- Design/source records: `docs/site-v3-*.zh-tw.md`.

## Editing Content

- Update public identity, research, projects, talks, writing, routes, and localized copy in `src/lib/content/site.ts`.
- Keep old `src/data/` and `src/content/` material as migration/source inventory unless a later cleanup explicitly removes it.
- Update `/design/` source references when concept images change.
- Keep public claims evidence-led and bounded. Do not publish private planning notes, raw contact context, credentials, tokens, patient-like data, or patent-sensitive mechanics.

## Design Direction

- First principle: visitor trust under limited attention.
- Core chain: `visitor pain -> Jason helps clarify -> evidence surface -> safe boundary -> next gentle action`.
- Tone: warm, relaxed, rigorous, and helpful.
- Interface language: deep graphite research atlas, cyan action states, restrained amber evidence markers, readable type, visible evidence surfaces, and low-pressure CTAs.
- Motion should support orientation and must never make content unreadable. Reduced-motion users should get a static readable layout.

## Commands

- `npm run check`
- `npm run build`
- `npm run preview`
