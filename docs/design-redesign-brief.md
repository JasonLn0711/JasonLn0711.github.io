# Evidence-Led Site Redesign Brief

## Design Read

Reading this as a personal research and engineering portfolio for research reviewers, collaborators, technical hiring teams, and conference organizers, with a trust-first technical editorial language, leaning toward an evidence-led research operating system built in the existing Astro and Tailwind v4 stack.

## Content Freeze

The redesign preserves the existing research claims, project summaries, speaking records, and article descriptions. Core content stays authoritative in `src/data/*.ts` and `src/content/**/*`.

Allowed changes:

- Recompose sections, density, hierarchy, and navigation paths.
- Replace repeated cards with ledgers, routes, matrices, timelines, proof strips, and case-study walls.
- Use existing content in a different visual order when it improves inspection.
- Adjust component markup and CSS primitives while preserving Astro routes and data ownership.

Not allowed:

- Rewrite research claims to make stronger unsupported claims.
- Move canonical project or article content out of the content collections.
- Turn a portfolio route into a separate microsite language.
- Add a new framework or design-system dependency for this redesign.

## Skill-Derived Direction

The `redesign-skill` audit identified the main failure mode: too many repeated glass cards, repeated three-column grids, dense eyebrow labels, and a hero carrying too many jobs.

The `taste-skill` dials for this site:

- `DESIGN_VARIANCE: 6` - structured editorial variation, not chaotic agency work.
- `MOTION_INTENSITY: 3` - restrained hover and reveal affordances, no heavy scroll hijacking.
- `VISUAL_DENSITY: 5` - enough density for evidence inspection, with stronger spacing rhythm.

The `brandkit` direction:

- Dark graphite and ink backgrounds, not generic black.
- Single desaturated cyan-green accent for action and connective lines.
- Amber reserved for status and maturity signals.
- Sparse technical typography, tabular metadata, and ledger-style surfaces.
- Visual metaphors: evidence ledger, research map, case-study wall, publication rail, speaking timeline.

The `imagegen-frontend-web` reference set was generated as six horizontal section concepts:

1. Hero as a technical editorial evidence map.
2. Credibility strip plus route selector.
3. Capability map plus evidence ledger.
4. Research matrix plus case-study wall.
5. Writing rail plus speaking timeline.
6. About/contact dossier close.

Generated references are intentionally used as art direction, not copied as static page images.

## Homepage Composition

The homepage keeps the same source content but changes the visitor flow:

1. **Hero** - first-view identity, research promise, two primary routes, and a compact inspection panel.
2. **Evidence Strip** - three proof signals and the keynote path.
3. **Visit Routes** - purpose-based entry points for collaborators, hiring teams, organizers, and readers.
4. **Capability Map** - pipeline model plus capability bands.
5. **Evidence Ledger** - claim/evidence/artifact/status table as the site signature.
6. **Research Matrix** - research pillars as inspectable rows rather than equal cards.
7. **Case-Study Wall** - featured systems with a lead case and compact supporting cases.
8. **Writing Rail** - article previews as a publication rail.
9. **Speaking Timeline** - keynote and conference-facing material as a timeline.
10. **About Dossier** - portrait, quick facts, and background signals.
11. **Contact Close** - collaboration topics and direct contact path.

## Design Primitives

The implementation should prefer these reusable primitives:

- `panel`: stronger physical surface, used sparingly for framed inspection.
- `surface-card`: compact evidence tiles and local facts.
- `technical-card`: clickable route or capability module.
- `proof-strip`: horizontal credibility band.
- `route-board`: purpose-based entry selector.
- `research-matrix`: research direction rows.
- `case-study-wall`: asymmetric project wall.
- `publication-rail`: writing rows.
- `timeline-stack`: speaking and event timeline.
- `dossier-panel`: closing about/contact frame.

## Verification Gates

Before calling the redesign complete:

- `npm run check`
- `npm run build`
- Render homepage in English, Traditional Chinese, and Japanese.
- Inspect desktop and mobile screenshots for nav wrapping, CTA wrapping, text overflow, section overlap, and focus/contrast regressions.
- Confirm `src/data/*.ts` and `src/content/**/*` core claims were not rewritten for design convenience.
