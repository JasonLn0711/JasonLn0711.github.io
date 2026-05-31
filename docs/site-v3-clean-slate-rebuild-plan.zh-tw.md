# Personal Website v3.0 Clean-Slate Rebuild Plan

Date: 2026-05-31
Status: clean-slate rebuild decision record and executable Codex goal prompt
Branch when recorded: `feat/full-rebuild-research-studio`

## Decision

v3.0 不是在現有 Astro 架構下繼續優化，也不是把 v2.0 的 CSS 再修漂亮。

v3.0 要視為一個全新的網站產品重建專案：

```text
content assets can be reused
architecture can be replaced
framework can be replaced
visual language must be rebuilt from design sources
```

目前已發布的 Astro 版本只保留為 fallback baseline。新版要從 first principles 重新決定：

- 訪客到底需要做什麼判斷；
- Jason 的人格與價值觀如何成為介面；
- 哪些內容應該公開；
- 哪些證據需要被檢視；
- 哪些邊界需要被保護；
- 哪種技術棧最適合承載互動與視覺語言。

## Implementation Checkpoint

2026-05-31 已將 v3.0 從決策記錄推進為可建置的 clean-slate SvelteKit static site。

目前事實狀態：

- 已從 Astro app foundation 轉為 `SvelteKit + @sveltejs/adapter-static + TypeScript + GSAP + native CSS tokens`。
- 主要 public route 已由 `src/routes/` 重新實作，內容集中在 `src/lib/content/site.ts`。
- v3 concept images 已複製到 `public/design/v3-concepts/`，並由 `/design/` 作為公開 design-source gallery。
- `/blog/` 與 `/blog/[slug]/` 保留為 writing archive 的 continuity aliases。
- Traditional Chinese 最小公開表面已落在 `/zh-tw/` 與 `/zh-tw/contact/`。
- `robots.txt` 已指向 `/sitemap.xml`，並加入 `public/.nojekyll` 以支援 GitHub Pages static output。

Implementation 的 FIRST PRINCIPLE 決策：

```text
Trust must not depend on animation finishing.
```

因此目前 motion 只做非關鍵的 transform / connector movement。內容在無 JS、慢載入、reduced motion、headless screenshot、或動畫尚未完成時都必須維持可讀，不再讓 reveal 控制透明度或清晰度。

已驗證：

```bash
npm run check
npm run build
```

已用 headless Chromium 檢查重點頁：

```text
/
/design/
/research/
/projects/
/contact/
/zh-tw/
```

## 2026-06-01 Live Smoke Follow-Up

2026-06-01 已確認 GitHub Pages deploy pipeline 使用 SvelteKit static output：

- `.github/workflows/deploy.yml` 透過 `npm ci`、`npm run check`、`npm run build` 建置網站。
- GitHub Pages artifact 來源為 `build/`，不是舊 Astro action。
- GitHub Actions run for `51a10c4` completed successfully.
- Live site smoke checks returned HTTP `200` for:

```text
/
/design/
/research/
/projects/
/contact/
/zh-tw/
/sitemap.xml
/rss.xml
```

FIRST PRINCIPLE follow-up:

```text
The release is complete only when the public route, not only local build output, preserves visitor trust.
```

因此此 release gate 狀態為：

```text
implemented -> deployed -> live-smoke verified -> monitoring mode
```

## Design Read

Reading this as: a clean-slate personal research website rebuild for academic reviewers, collaborators, regulated AI / medical cybersecurity stakeholders, students, builders, organizers, and people with early unclear ideas, with a warm evidence-led atlas language, leaning toward an image-first, high-art-direction static site rather than an incremental Astro redesign.

The desired public feeling is:

```text
Living Research Atlas
```

It should feel like a calm, warm, high-trust research studio where a visitor can bring an unclear AI, evidence, cybersecurity, medical, or governance problem and quickly understand:

```text
where to enter -> what Jason helps clarify -> what evidence exists -> what boundary applies -> what small next action makes sense
```

## Personality And Value Translation

The interface should not only present research identity. It should translate Jason's working style into visible interaction design.

Core personal signals to preserve:

- warm and caring;
- wants ability and action to help others;
- notices other people's pain points and wants to improve them;
- relaxed, chill, and easy to talk to;
- practical and grounded, but not severe;
- gives people a sense of safety, so they can say messy thoughts early;
- rigorous about evidence and scope without making the interaction feel cold.

Design translation:

| Personal value | Interface expression |
| --- | --- |
| Warmth | softer copy, human entry points, calm spacing, portrait or human-context imagery where useful. |
| Care for others | audience-first routes that start from visitor needs instead of self-promotion. |
| Helpful action | every section ends with a small next action, not a hard sell. |
| Relaxed / chill | low-pressure contact intents, non-corporate language, generous white space, clear breathing rhythm. |
| Practical groundedness | evidence strips, project maturity labels, artifact links, clear status markers. |
| Trustworthiness | claim-evidence alignment, validation path, public proof, transparent boundaries. |
| Approachability | "bring the messy idea" contact route and wording that welcomes unclear early problems. |

The site should feel like a place where a visitor can think more clearly after arriving.

## FIRST PRINCIPLE

The scarce resource is not page count, animation, framework novelty, or a larger personal brand.

The scarce resource is:

```text
visitor trust under limited attention
```

Therefore, the rebuild should optimize for:

1. Fast orientation for different audiences.
2. Warmth without losing rigor.
3. Evidence visibility without overwhelming readers.
4. Clear claim boundaries.
5. Low-pressure routes into conversation.

## What Must Change From v2.0

v2.0 was useful as a conceptual and incremental interface pass, but it still lived inside the existing Astro structure.

v3.0 must change the working assumption:

| Area | v2.0 | v3.0 |
| --- | --- | --- |
| Architecture | Astro-first | clean-slate |
| Design source | concept translated into current components | generated design images become source of truth |
| Route structure | existing pages plus additions | rebuilt around audience tasks and evidence surfaces |
| UI language | improved dark evidence portfolio | Living Research Atlas / warm evidence studio |
| Implementation | patch existing components | rebuild app foundation if useful |
| Motion | minimal / global CSS | planned interaction choreography |
| Content | current data reused directly | content inventory and migration layer |
| Completion | site looks better | site is structurally new and publicly deployable |

## Skill Stack From `codex-skill-ui-taste-skill`

Use the adapted skill repo as the design control layer:

```text
../codex-skill-ui-taste-skill/
```

Required skills and roles:

| Skill | Role |
| --- | --- |
| `design-taste-frontend` | Read the brief, reject generic AI UI defaults, set design dials, choose the design language. |
| `imagegen-frontend-web` | Generate one separate horizontal reference image per major website section. |
| `image-to-code` | Treat generated images as visual source of truth, analyze them deeply, then implement. |
| `high-end-visual-design` | Enforce premium spacing, tactile surfaces, refined typography, micro-interactions, and high-end composition. |
| `gpt-taste` | Add stronger AIDA structure, motion discipline, bento math, anti-label sweep, and hero line checks. |
| `minimalist-ui` | Use only as restraint guardrail so the final site remains calm and readable. |

Do not use these skills as decorative prompts. Each skill must produce a checkable artifact or decision:

- design read;
- section image references;
- extracted design system;
- component architecture;
- motion plan;
- pre-flight checks;
- validation evidence.

## Design Source Handling

Generated section references must become first-class project assets.

Current generated-image source directory:

```text
/home/jnln3799/.codex/generated_images/019e7811-a0b3-7ce0-b0ac-937981abcc1f/
```

Selected May 31, 2026 v3 concept set:

| Section | Source image |
| --- | --- |
| Hero / Living Research Atlas | `ig_030b63dd6dc29553016a1c3e013c688191b815774ff4a30bd5.png` |
| Audience route atlas | `ig_030b63dd6dc29553016a1c3e4d7fb881918679ec393591deea.png` |
| Research atlas | `ig_030b63dd6dc29553016a1c3eaacc348191980f7a940e47a56c.png` |
| Project evidence lab | `ig_030b63dd6dc29553016a1c3f2794bc8191aa931c454a33fa3d.png` |
| Talks / public framing | `ig_030b63dd6dc29553016a1c3fa735c0819189322dad11d073bb.png` |
| Writing / reasoning archive | `ig_030b63dd6dc29553016a1c4055dd888191b321b215cee62b63.png` |
| About / working model | `ig_030b63dd6dc29553016a1c411188e881918bd6427879600b06.png` |
| Contact intents | `ig_030b63dd6dc29553016a1c416e35a48191951f41fde1f05a9b.png` |

Earlier May 30 concept images in the same folder may be used as reference history, but the May 31 set is the current source set for implementation.

The rebuild should copy selected images into the repo, while leaving originals in place:

```text
public/design/v3-concepts/
```

Recommended filenames:

```text
01-hero-living-research-atlas.png
02-audience-route-atlas.png
03-research-atlas.png
04-project-evidence-lab.png
05-talks-public-framing.png
06-writing-reasoning-archive.png
07-about-working-model.png
08-contact-intents.png
```

Create a durable design-source record:

```text
docs/site-v3-design-source.zh-tw.md
```

For each image, record:

- section purpose;
- layout pattern;
- typography;
- palette;
- image treatment;
- component translation;
- motion idea;
- mobile behavior;
- what must not be copied literally.

Also create a public design preview page:

```text
/design/
```

The design page should show the concept images and explain that they are the v3 source references, not final content screenshots.

## Content Inventory

Before implementation, extract content assets from the current site without inheriting its architecture.

Canonical content sources:

```text
src/data/profile.ts
src/data/research.ts
src/data/speaking.ts
src/data/talkStory.ts
src/content/projects/
src/content/blog/
public/images/headshot.jpg
public/projects/
```

Create:

```text
docs/site-v3-content-inventory.zh-tw.md
```

The inventory should classify content into:

- identity and contact;
- research directions;
- project case studies;
- talks and public sessions;
- writing / essays;
- resume / professional evidence;
- public images and generated assets;
- sensitive or private material that must not be published.

Important rule:

```text
Do not weaken or inflate original claims.
```

Content may be reorganized, compressed, translated, or routed differently, but public claims must stay claim-evidence aligned.

## Recommended Technical Choice

Recommended stack:

```text
SvelteKit + static adapter + TypeScript + GSAP + native CSS design tokens
```

Reasoning:

- SvelteKit can output a static site suitable for GitHub Pages.
- Svelte is lighter and more direct for interaction-heavy, design-led sections.
- GSAP fits pinned sections, scrub reveals, card stacking, route atlas motion, and motion choreography.
- Native CSS tokens keep the visual system portable and avoid framework lock-in.
- It is a real clean-slate decision, not the default Astro continuation.

Rejected as primary choice:

| Option | Why not primary |
| --- | --- |
| Astro continuation | Too close to the previous incremental path. Useful fallback, not the clean-slate direction. |
| Next.js | Strong ecosystem, but heavier than needed for a static personal research site and less distinct. |
| Vite + React Router | Flexible, but content, routing, and SEO need more manual wiring. |
| 11ty + islands | Very fast, but less ergonomic for the motion-rich atlas UI. |

If implementation evidence later shows SvelteKit is a poor fit, record the reason and choose the next best stack explicitly.

## Proposed App Structure

If SvelteKit is chosen:

```text
src/
  app.html
  routes/
    +layout.svelte
    +page.svelte
    design/
      +page.svelte
    audiences/
      +page.svelte
    research/
      +page.svelte
      [slug]/
        +page.svelte
    projects/
      +page.svelte
      [slug]/
        +page.svelte
    talks/
      +page.svelte
      regulated-ai-cybersecurity/
        +page.svelte
    writing/
      +page.svelte
      [slug]/
        +page.svelte
    about/
      +page.svelte
    contact/
      +page.svelte
    resume/
      +page.svelte
  lib/
    assets/
    components/
      atlas/
      evidence/
      layout/
      motion/
      sections/
      typography/
    content/
    data/
    i18n/
    seo/
  styles/
    tokens.css
    global.css
```

Keep content data in structured files so future migrations remain possible.

## Route Plan

Minimum public routes for v3.0:

```text
/
/design/
/audiences/
/research/
/research/[slug]/
/projects/
/projects/[slug]/
/talks/
/talks/regulated-ai-cybersecurity/
/writing/
/writing/[slug]/
/about/
/contact/
/resume/
```

Multilingual routes should be planned early, not patched later:

```text
/zh-tw/
/zh-tw/research/
/zh-tw/projects/
/zh-tw/talks/
/zh-tw/about/
/zh-tw/contact/
/ja/
```

If full translation is too large for the first release, add a transparent localization boundary and do not pretend incomplete pages are complete translations.

## Homepage Section Plan

Use the generated section references as the visual source.

Required homepage sections:

1. Hero: Living Research Atlas.
2. Credibility / evidence strip.
3. Audience route atlas.
4. Research atlas.
5. Project evidence lab.
6. Talks and public framing.
7. Writing / reasoning archive.
8. About / working model.
9. Contact intents.

The homepage should not be a scrolling list of cards. Each section should have a different layout family.

## Page-Specific Requirements

### Research

Purpose:

```text
reviewer-facing research atlas
```

Must show:

- problem class;
- why it matters now;
- Jason's contribution lens;
- public evidence;
- validation path;
- claim boundary;
- next route.

### Projects

Purpose:

```text
project evidence lab
```

Must show:

- human pain;
- system response;
- artifact;
- maturity;
- readiness boundary;
- human benefit;
- next useful comparison.

### Talks

Purpose:

```text
public explanation and topic-fit matrix
```

Must show:

- topic;
- audience fit;
- decision value;
- public signal;
- format;
- invitation path.

### Writing

Purpose:

```text
reasoning archive
```

Must show:

- featured essay;
- recent notes;
- concept tags;
- related projects or research directions;
- clear boundary between informal reasoning and formal claims.

### About

Purpose:

```text
human working model
```

Must show:

- warmth;
- care for others;
- practical discipline;
- relaxed / chill collaboration style;
- investigation-informed thinking;
- how it feels to work with Jason.

### Contact

Purpose:

```text
low-pressure intent selector
```

Must include:

- research collaboration;
- medical / AI safety / cybersecurity problem;
- talk / seminar / workshop;
- early messy idea;
- guidance on what context to send;
- no formal corporate lead form as the primary interface.

### Resume

Purpose:

```text
professional evidence route
```

Must show:

- role;
- strengths;
- selected artifacts;
- speaking / writing proof;
- toolkit;
- team-fit language;
- direct but low-pressure contact route.

## Motion Plan

Motion should support orientation, not spectacle.

Recommended motion primitives:

- floating navigation with active route state;
- section fade-up using IntersectionObserver;
- route atlas hover focus;
- evidence connector reveal;
- project lab hover depth;
- pinned research atlas section;
- writing archive row reveal;
- contact intent drawer expansion;
- reduced-motion fallback.

GSAP can be used for:

- pinned research atlas;
- scroll-scrub route connector;
- card stacking;
- cinematic fade-through sections.

Do not animate layout-affecting properties. Use transform and opacity.

## Accessibility And UX Requirements

Must pass before release:

- desktop nav stays one line;
- mobile nav is usable and does not trap content;
- hero CTA visible without long scroll on common laptop height;
- no text overflow on mobile;
- no desktop CTA wraps;
- all buttons have visible focus states;
- color contrast is readable;
- reduced motion is respected;
- meaningful images have alt text;
- design concept images are labeled as references;
- no private planning details are exposed.

## Validation Plan

Required commands:

```bash
npm run check
npm run build
```

Required browser / screenshot checks:

```text
/
/design/
/audiences/
/research/
/projects/
/talks/
/writing/
/about/
/contact/
/resume/
/zh-tw/
/zh-tw/contact/
```

Viewport checks:

```text
1440 x 1200 desktop
1280 x 800 laptop
390 x 1200 mobile
768 x 1024 tablet
```

For visual validation, compare against the section reference images:

- hero matches the Living Research Atlas direction;
- audience section does not collapse into generic cards;
- research page feels like an atlas, not a list;
- projects feel like evidence benches, not a gallery;
- contact feels low-pressure and human;
- the whole site avoids generic AI purple / blue glow, beige lifestyle palette, and pure terminal aesthetic.

## Important Gaps To Treat As Release Gates

These are the issues that were easy to miss in the earlier conversation but must be handled before the v3 rebuild is considered complete:

1. Design references must be uploaded into the repo and shown on the website.
   The previous generated images were design sources only; they were not copied into `public/` or implemented. v3 must make them durable assets or explicitly replace them with a newer concept set.
2. The rebuild must separate content preservation from architecture preservation.
   Existing claims, projects, talks, and writing should be preserved where public-safe, but existing Astro routes and components should not define the final design.
3. Audience routing must be more important than chronology.
   Visitors should not have to infer whether they are a reviewer, collaborator, organizer, hiring reader, student, or early-idea contact.
4. Privacy boundaries must be designed, not patched.
   Planning notes, raw day notes, sensitive contacts, credentials, patient-like details, and patent-sensitive mechanics must stay out of the public website.
5. Localization must be planned early.
   Traditional Chinese surfaces should not become partial copies that look complete but are not maintained.
6. Motion must support cognition.
   Scroll effects, pinned sections, and transitions are useful only when they help orientation or evidence comparison.
7. The site needs a concept-gallery route.
   `/design/` makes the design process inspectable and prevents the generated visual work from disappearing into chat history.
8. Git publication must preserve both histories.
   Fetch and compare remote `main` before pushing; do not force-push over remote commits.
9. Planning updates belong in the planning repo as bridge/status records.
   Detailed implementation decisions stay in this website repo; planning notes should point to the durable docs and current state.
10. Completion requires browser inspection, not only successful build output.
    The site can compile while still failing the intended design through wrapping, weak hierarchy, poor mobile behavior, missing images, or generic section layouts.

## Git And Publishing Plan

Work on a clean branch:

```bash
git switch -c feat/site-v3-clean-slate-rebuild
```

Suggested commit slices:

1. `docs: define site v3 clean-slate rebuild`
2. `docs: add v3 design source and content inventory`
3. `chore: replace app foundation with sveltekit`
4. `feat: build v3 design system`
5. `feat: build v3 homepage`
6. `feat: build v3 content pages`
7. `feat: add v3 motion and responsive polish`
8. `docs: record v3 validation and deployment`
9. planning repo bridge commit in `planning-everything-track`.

Before pushing:

```bash
git fetch origin main
git rev-list --left-right --count HEAD...origin/main
git log --oneline --decorate --left-right HEAD...origin/main
```

Preserve both local and remote commits. Do not force-push away remote history.

Push when validated:

```bash
git push origin HEAD:main
```

## Immediate Next Actions

Before writing the new app:

1. Copy selected design images into `public/design/v3-concepts/`.
2. Create `docs/site-v3-design-source.zh-tw.md`.
3. Create `docs/site-v3-content-inventory.zh-tw.md`.
4. Create `/design/` concept gallery.
5. Decide the app foundation and record the stack decision.
6. Only then begin implementation.

## Codex Goal Prompt

Use the following prompt to execute the full rebuild:

```text
Using FIRST PRINCIPLE, rebuild the JasonLn0711.github.io personal website as a clean-slate v3.0 "Living Research Atlas", not as an incremental Astro redesign.

Core objective:
Create a new public personal research website that feels warm, calm, evidence-led, human, and highly designed. The site should reflect Jason as caring, approachable, relaxed, trustworthy, practical, helpful, and rigorous. It should help academic reviewers, collaborators, medical / AI safety stakeholders, students, builders, organizers, hiring teams, and people with early unclear ideas find the right path quickly.

Important correction:
Do not treat the existing Astro structure, routes, or components as constraints. The current site can be used as a content inventory and fallback baseline only. You may choose a different technical stack if it better serves the design. Do not simply patch existing Astro components unless you explicitly justify why that is still the best clean-slate implementation.

FIRST PRINCIPLE:
The scarce resource is visitor trust under limited attention. Optimize the website for quick orientation, warmth, evidence visibility, claim boundaries, and low-pressure next actions.

Design principle:
visitor pain -> Jason helps clarify -> evidence surface -> safe boundary -> next gentle action

Required skill usage:
Use the local `../codex-skill-ui-taste-skill/` repo as the design control layer.
Use these skills as applicable:
- `design-taste-frontend` for design read, anti-template constraints, and visual direction.
- `imagegen-frontend-web` to generate one separate horizontal design reference image per major section.
- `image-to-code` to treat generated images as the visual source of truth, analyze them, and then implement.
- `high-end-visual-design` for premium spacing, tactile surfaces, typography, and motion quality.
- `gpt-taste` for AIDA structure, GSAP / motion discipline, hero line checks, bento math, and anti-label sweep.
- `minimalist-ui` only as a restraint guardrail so the site remains calm and readable.

Design-source requirements:
1. Locate the generated images under `/home/jnln3799/.codex/generated_images/019e7811-a0b3-7ce0-b0ac-937981abcc1f/`.
2. Select the v3 section references and copy them into `public/design/v3-concepts/`, leaving the originals in place.
3. Create `docs/site-v3-design-source.zh-tw.md`.
4. Create a public `/design/` concept-gallery route that shows the v3 design references and explains how they map to the rebuild.
5. Use these design images as the implementation source of truth, not just inspiration.

Planning and documentation requirements:
1. Create or update `docs/site-v3-clean-slate-rebuild-plan.zh-tw.md`.
2. Create `docs/site-v3-content-inventory.zh-tw.md`.
3. Update README with the v3 rebuild direction and links to the design docs.
4. Take notes on today's day note in the `planning-everything-track` repo, using planning as the bridge/status layer only. Do not copy implementation details or raw generated assets into planning.

Technical-stack decision:
Evaluate the stack from first principles. Recommended default is:
`SvelteKit + static adapter + TypeScript + GSAP + native CSS design tokens`.
Use it unless evidence shows another stack better serves the clean-slate site. Record the final decision and why.

Minimum routes:
- `/`
- `/design/`
- `/audiences/`
- `/research/`
- `/research/[slug]/`
- `/projects/`
- `/projects/[slug]/`
- `/talks/`
- `/talks/regulated-ai-cybersecurity/`
- `/writing/`
- `/writing/[slug]/`
- `/about/`
- `/contact/`
- `/resume/`
- Traditional Chinese route surface, at minimum `/zh-tw/` and `/zh-tw/contact/`.

Homepage sections:
1. Living Research Atlas hero
2. Credibility / evidence strip
3. Audience route atlas
4. Research atlas
5. Project evidence lab
6. Talks and public framing
7. Writing / reasoning archive
8. About / working model
9. Contact intents

Content rules:
- Reuse public-safe content from the current repo.
- Preserve the original intended research and professional claims.
- Do not weaken supported claims.
- Do not inflate unsupported claims.
- Do not expose private planning details, raw day notes, sensitive contact material, credentials, patient-like data, or patent-sensitive implementation details.
- Present boundaries as scope control, validation layers, human-review requirements, readiness labels, or claim-evidence alignment.

Visual direction:
- Living Research Atlas / Warm Evidence Studio.
- Deep graphite green-black base.
- Cyan-green for route, action, evidence, and focus.
- Muted amber for maturity, guidance, status, and review markers.
- Soft human warmth may appear through portrait, texture, and restrained peach/amber accents.
- Avoid generic AI purple / blue glow, beige lifestyle portfolio, pure black terminal aesthetic, and repeated three-card layouts.
- Use real visual assets, design-reference images, and carefully treated portrait/project imagery.

Motion and interaction:
- Add floating navigation, section reveals, route atlas hover focus, project evidence lab hover depth, contact intent drawers, and reduced-motion fallback.
- Use GSAP only where it adds orientation value: pinned research atlas, scroll-scrub connectors, or card stacking.
- Animate transform and opacity only.
- Do not let motion harm mobile performance or readability.

Validation:
- Run `npm run check`.
- Run `npm run build`.
- Verify generated static output is deployable to GitHub Pages.
- Inspect screenshots or browser output for:
  - `/`
  - `/design/`
  - `/research/`
  - `/projects/`
  - `/talks/`
  - `/about/`
  - `/contact/`
  - `/resume/`
  - `/zh-tw/`
  - `/zh-tw/contact/`
- Check desktop, laptop, tablet, and mobile widths.
- Confirm nav does not wrap, CTA labels do not wrap on desktop, text does not overflow on mobile, contrast is readable, and reduced-motion behavior exists.

Git and publication:
- Work in logical commits:
  1. docs for v3 plan and source inventory
  2. design assets / concept gallery
  3. app foundation
  4. design system
  5. homepage
  6. content pages
  7. motion and responsive polish
  8. validation / docs closeout
  9. planning bridge in `planning-everything-track`
- Before pushing, run:
  `git fetch origin main`
  `git rev-list --left-right --count HEAD...origin/main`
  `git log --oneline --decorate --left-right HEAD...origin/main`
- Preserve both local and remote commits.
- Do not force-push away remote history.
- Push the final validated branch to remote `main`.

Completion definition:
The goal is complete only when the published website is a clean-slate v3.0 rebuild, the generated design references are visible and documented, the chosen stack is recorded, the main routes are implemented, validation passes, screenshots/browser checks are inspected, docs are updated, commits are logically separated, and the final branch is pushed to remote `main` without discarding remote history.
```
