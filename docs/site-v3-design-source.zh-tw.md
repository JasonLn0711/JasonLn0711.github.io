# Personal Website v3.0 Design Source Record

Date: 2026-05-31
Status: active implementation source

## Design Read

Reading this as: a clean-slate personal research portfolio for academic reviewers, collaborators, regulated AI / medical cybersecurity stakeholders, students, hiring readers, event organizers, builders, and early-idea contacts, with a warm evidence-led atlas language, leaning toward SvelteKit static output, image-first section translation, and restrained GSAP motion.

## FIRST PRINCIPLE

The scarce resource is visitor trust under limited attention.

The site must help a visitor move through this chain:

```text
visitor pain -> Jason helps clarify -> evidence surface -> safe boundary -> next gentle action
```

## Skill-Derived Design Plan

Design dials:

- `DESIGN_VARIANCE: 7`
- `MOTION_INTENSITY: 5`
- `VISUAL_DENSITY: 5`
- `ART_DIRECTION: 8`
- `IMPLEMENTATION_CLARITY: 9`

Selected implementation language:

- Theme paradigm: Deep Dark Mode.
- Background character: subtle technical grid with photographic warmth.
- Typography character: refined grotesk plus restrained mono metadata.
- Hero architecture: cinematic centered hero over human portrait.
- Section system: asymmetric premium atlas flow.
- Signature components: route atlas, evidence ledger cards, bench/lab panels, intent accordions.
- Motion language: staggered float-up, pinned narrative energy only where it supports orientation, and reduced-motion fallback.

Guardrails:

- No generic AI purple / blue glow.
- No beige lifestyle portfolio palette.
- No repeated three-card feature grid as the main rhythm.
- No cards-inside-cards nesting beyond deliberate double-bezel panels.
- No decorative section-number labels as the main content.
- Motion must support comprehension, not spectacle.

## Source Asset Inventory

Original generated-image source directory:

```text
/home/jnln3799/.codex/generated_images/019e7811-a0b3-7ce0-b0ac-937981abcc1f/
```

Website asset directory:

```text
public/design/v3-concepts/
```

The original generated files stay in place. The website uses copied assets with stable names.

| Section | Website asset | Original file |
| --- | --- | --- |
| Hero / Living Research Atlas | `public/design/v3-concepts/01-hero-living-research-atlas.png` | `ig_030b63dd6dc29553016a1c3e013c688191b815774ff4a30bd5.png` |
| Audience route atlas | `public/design/v3-concepts/02-audience-route-atlas.png` | `ig_030b63dd6dc29553016a1c3e4d7fb881918679ec393591deea.png` |
| Research atlas | `public/design/v3-concepts/03-research-atlas.png` | `ig_030b63dd6dc29553016a1c3eaacc348191980f7a940e47a56c.png` |
| Project evidence lab | `public/design/v3-concepts/04-project-evidence-lab.png` | `ig_030b63dd6dc29553016a1c3f2794bc8191aa931c454a33fa3d.png` |
| Talks / public framing | `public/design/v3-concepts/05-talks-public-framing.png` | `ig_030b63dd6dc29553016a1c3fa735c0819189322dad11d073bb.png` |
| Writing / reasoning archive | `public/design/v3-concepts/06-writing-reasoning-archive.png` | `ig_030b63dd6dc29553016a1c4055dd888191b321b215cee62b63.png` |
| About / working model | `public/design/v3-concepts/07-about-working-model.png` | `ig_030b63dd6dc29553016a1c411188e881918bd6427879600b06.png` |
| Contact intents | `public/design/v3-concepts/08-contact-intents.png` | `ig_030b63dd6dc29553016a1c416e35a48191951f41fde1f05a9b.png` |

## Section Translation Notes

### 1. Hero / Living Research Atlas

- Purpose: establish Jason as a warm, credible, evidence-led researcher.
- Layout pattern: full-bleed human portrait, floating pill nav, centered name, two clear CTAs.
- Typography: very large grotesk name, small spaced metadata, concise subtitle.
- Palette: graphite green-black, cyan-green primary action, muted amber evidence marker.
- Component translation: hero background uses the real headshot with dark overlay; CTA buttons use tactile bordered treatment.
- Motion idea: hero copy fades up once; nav settles as a floating island.
- Mobile behavior: portrait becomes atmospheric background, H1 drops scale, CTA stack stays visible.
- Do not copy literally: the generated fake social icons and fake email values.

### 2. Audience Route Atlas

- Purpose: route visitors by role and intent before they inspect content.
- Layout pattern: orbital route map with seven intent cards around a central question.
- Typography: card titles in clear two-line statements, secondary text short.
- Palette: cyan route lines, amber numbered markers, soft graphite panels.
- Component translation: homepage and `/audiences/` use route cards connected by lightweight CSS lines rather than overbuilt canvas.
- Motion idea: hover focuses one route and dims siblings; reduced motion keeps static cards.
- Mobile behavior: central question becomes the section heading; cards stack in a guided list.
- Do not copy literally: the exact circular geometry at mobile sizes.

### 3. Research Atlas

- Purpose: show three research territories as inspectable evidence directions.
- Layout pattern: left explanatory rail plus three tall territory panels.
- Typography: large page title, compact ledger rows, small maturity stamps.
- Palette: dark atlas grid, cyan traces, amber maturity markers.
- Component translation: `/research/` uses territory cards with thesis, evidence ledger, validation path, and outputs.
- Motion idea: territory panels reveal sequentially; validation path dots animate only when visible.
- Mobile behavior: left rail becomes intro block; territory panels stack.
- Do not copy literally: any fake dates or unsupported maturity labels.

### 4. Project Evidence Lab

- Purpose: make selected systems inspectable as benches, not a generic portfolio grid.
- Layout pattern: large featured system bench, two smaller evidence instruments, side maturity rail.
- Typography: practical system labels, evidence artifact captions, readiness labels.
- Palette: green-cyan provenance lines, amber readiness stamps, dark lab panels.
- Component translation: `/projects/` uses one featured bench and compact cards for other projects.
- Motion idea: provenance line and bench steps reveal left-to-right.
- Mobile behavior: maturity rail becomes a compact status list.
- Do not copy literally: fake file names that imply artifacts not present.

### 5. Talks / Public Framing

- Purpose: show public communication as a decision-value surface.
- Layout pattern: cinematic speaker/photo area, topic-fit matrix, lower timeline.
- Typography: event title leads, topic matrix stays scannable.
- Palette: stage-like dark overlay, cyan check/focus marks, amber timeline point.
- Component translation: `/talks/` emphasizes CYBERSEC 2026 and CISC 2025 with audience-fit rows.
- Motion idea: timeline nodes reveal in sequence.
- Mobile behavior: matrix becomes stacked audience cards.
- Do not copy literally: incorrect event date/time in the generated image.

### 6. Writing / Reasoning Archive

- Purpose: frame writing as evidence of reasoning, not generic posts.
- Layout pattern: featured essay booklet, recent notes rail, semantic map.
- Typography: article titles are calm and readable; note metadata stays small.
- Palette: graphite, cyan reading path, amber marginalia.
- Component translation: `/writing/` and `/blog/` share the same archive source and routes.
- Motion idea: recent notes reveal as a vertical reading path.
- Mobile behavior: feature essay, note list, and semantic map stack.
- Do not copy literally: any fake note counts or dates not backed by current content.

### 7. About / Working Model

- Purpose: make Jason's personality legible: warm, relaxed, rigorous, and helpful.
- Layout pattern: portrait card, working model statement, four principles, journey strip.
- Typography: human-centered copy, not corporate biography.
- Palette: real portrait warmth against dark grid, cyan principle markers, amber path icons.
- Component translation: `/about/` anchors on the four working principles: bring the rough version, evidence stays visible, boundaries are care, next step is light.
- Motion idea: principles rise as separate calm cards.
- Mobile behavior: portrait appears first, then working model cards.
- Do not copy literally: generated signature or invented credentials.

### 8. Contact Intents

- Purpose: make outreach feel low-pressure and specific.
- Layout pattern: left contact promise, right intent accordion, bottom contact strip.
- Typography: direct and warm; avoid corporate lead form tone.
- Palette: cyan primary email action, amber guidance marker, graphite intent panels.
- Component translation: `/contact/` uses accessible intent disclosures and a mailto CTA.
- Motion idea: intent panels expand with transform/opacity only.
- Mobile behavior: email action stays near the top; intent panels stack below.
- Do not copy literally: generated `nycu.edu.tw` email if the source profile uses another public email.

## Pre-Flight Checks

- Hero headline stays within 2-3 lines on desktop and CTA is visible in the first viewport.
- Desktop navigation stays one line.
- CTAs do not wrap on desktop.
- There is no section-level theme flip from dark to light.
- At least four different section layout families appear on the homepage.
- `/design/` clearly labels concept images as references, not final screenshots.
- Reduced-motion users get static layout without pinned/scrub motion.
- Public claims are drawn from current public content sources only.

## Implementation Validation

2026-05-31 v3.0 implementation checkpoint:

- `/design/` now exposes all eight selected concept references from `public/design/v3-concepts/`.
- The homepage, design gallery, research atlas, project evidence lab, contact intents, and Traditional Chinese entry page were checked with headless Chromium screenshots.
- The first screenshot pass exposed an important motion risk: opacity / blur reveal states can make top-of-page content unreadable in automation or slow-load cases.
- The motion layer was revised so content visibility and text clarity do not depend on animation completion. Reveal motion now preserves readable text while using lightweight transform movement.
- `npm run check` and `npm run build` passed after the motion revision.
