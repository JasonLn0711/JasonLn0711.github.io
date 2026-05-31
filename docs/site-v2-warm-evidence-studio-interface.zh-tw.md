# Personal Website v2.0 Interface Design: Warm Evidence Studio

Date: 2026-05-31

## Design Read

v2.0 的個人網站不應只是更漂亮的作品集，也不應只是深色、冷硬、技術感很強的 research operating system。

真正適合 Jason 的方向是：

```text
Warm Evidence Studio
```

也就是一個溫暖但有證據力的公開研究工作室。它要讓人同時感受到：

- Jason 有能力處理複雜、高風險、需要證據的 AI / 資安 / 醫療部署問題。
- 跟 Jason 互動是安心、放鬆、自然、不壓迫的。
- Jason 會把別人的痛點、混亂想法、模糊問題，整理成可以理解、可以審查、可以往前走的下一步。

網站的第一印象應該是：

> 這個人很可靠、很踏實、很會把事情想清楚，但不是嚴肅或難靠近的人。
> 我可以放心把還沒整理好的問題跟他說，他會幫我一起釐清。

## Personality Model

這套設計要承載的個性不是單一的「專業」，而是幾個同時存在的面向：

| 面向 | 介面應呈現的感覺 |
| --- | --- |
| 溫暖 | 使用柔和的色溫、友善的語氣、清楚但不壓迫的 CTA |
| 關心他人 | 把能力翻成對別人的幫助，而不是只列技能 |
| 踏實 | 每個主張都有證據、成熟度、邊界與下一步 |
| Chill / 放鬆 | 留白、穩定節奏、慢一點的互動回饋，不做炫技動畫 |
| 安心 | 明確路徑、清楚邊界、可預期的導覽、沒有過度推銷 |
| 有判斷力 | 用 evidence ledger、validation path、readiness label 呈現思考深度 |

## Core Interface Principle

網站的核心不是「展示我很厲害」，而是：

```text
Help people feel safe enough to bring complex problems into conversation.
```

因此所有介面都應該遵守這個順序：

```text
visitor pain -> Jason helps clarify -> evidence surface -> safe boundary -> next gentle action
```

這比傳統 portfolio 的順序更適合 Jason：

```text
identity -> skills -> projects -> contact
```

## Visual Direction

### Visual Name

```text
Warm Evidence Studio
```

這不是 medical app、不是資安 terminal、不是 AI SaaS landing page。它比較像：

- 溫暖的研究工作室；
- 可以被審查的 evidence atlas；
- 對話前的安心整理桌；
- 把複雜問題攤開、分類、命名、找下一步的界面。

### Color System

目前網站的 graphite / cyan-green 可以保留，但要降低冷硬感，加入更細緻的人本溫度。

建議 tokens：

```css
:root {
  --color-bg: #0c1110;
  --color-bg-soft: #121917;
  --color-surface: rgba(245, 250, 246, 0.045);
  --color-surface-strong: rgba(245, 250, 246, 0.072);
  --color-surface-warm: rgba(215, 168, 90, 0.07);
  --color-line: rgba(220, 232, 224, 0.13);
  --color-text: #f1f6f2;
  --color-muted: #b8c7bf;
  --color-accent: #78dcc2;
  --color-accent-strong: #a7f0dd;
  --color-warm: #d7b46a;
  --color-human: #f0c79a;
}
```

Color rules:

- Cyan-green is for route, action, evidence connection, and focus.
- Warm amber is for maturity, status, human guidance, and review gates.
- Soft peach can appear only in small accents that express human warmth.
- Avoid purple / blue AI gradients.
- Avoid beige lifestyle palette; Jason is warm, but not a lifestyle brand.
- Avoid pure black; use green-black / graphite so the page feels deep but not harsh.

### Typography

Typography should feel clear, relaxed, and intelligent.

Recommended direction:

- Display: Satoshi, Geist, Cabinet Grotesk, or a similar modern sans.
- Body: IBM Plex Sans / Noto Sans stack for readability across English, Traditional Chinese, and Japanese.
- Mono: IBM Plex Mono only for evidence labels, dates, artifact names, maturity, versions, and route tags.

Typography rules:

- Avoid making the whole site feel like a terminal.
- Avoid overly academic serif styling as the main identity.
- Use generous line-height for body text so the page feels calm.
- Use strong but not aggressive display headings.
- Preserve readable Chinese and Japanese line breaks.

## Layout Philosophy

The interface should feel like someone is calmly sitting beside the visitor and saying:

> Let us first understand what you need, then we can open the right evidence.

Therefore, each major page follows this shape:

1. Warm decision header.
2. Visitor intent route.
3. Pain-to-system map.
4. Evidence surface.
5. Boundary / readiness panel.
6. Gentle next action.

This means the website should not rely on repeated equal cards. Use different surfaces for different cognitive tasks:

| Cognitive task | Best surface |
| --- | --- |
| Choose where to go | Visitor intent map |
| Compare workstreams | Operating track map |
| Inspect credibility | Evidence ledger |
| Understand projects | Pain-to-system cards |
| Review maturity | Readiness / validation path |
| Invite a talk | Topic fit matrix |
| Start conversation | Contact intent selector |

## Homepage Design

### Purpose

Homepage is a warm dispatch center.

It should answer:

- Who is Jason?
- How can he help?
- Which path should I choose?
- What evidence exists?
- What is safe to ask him about?

### Hero

Current hero should move away from "technical profile first" and become a warm identity + visitor route.

Suggested English H1:

```text
I build evidence-aware AI systems for people working with high-stakes decisions.
```

Suggested Traditional Chinese H1:

```text
我把複雜的 AI、證據與部署問題，整理成能被理解、審查與使用的系統。
```

Hero should contain only:

- Jason name / short identity.
- One warm positioning sentence.
- Two CTAs max:
  - "Find your path"
  - "Start a conversation"
- A compact "How I help" panel.

Hero should not contain:

- too many metrics;
- three CTAs;
- long capability lists;
- dense terminal traces;
- social-proof overload.

### Homepage Sections

Recommended order:

1. Warm identity hero
2. What brings you here
3. How I help
4. Evidence map
5. Operating tracks
6. Research directions
7. Case-study wall
8. Talks and public framing
9. Writing and field notes
10. Working style
11. Contact by intent

## Page-Specific Design

### Research Page

Research should feel rigorous but not cold.

Each research direction should use this structure:

```text
Problem people are facing
Why it is hard
What I am building / studying
Evidence so far
Human benefit
Next validation layer
```

Design pattern:

- Use a vertical research matrix, not equal cards.
- Put "human benefit" close to technical evidence.
- Use "next validation" instead of apology-like limitations.
- Keep reviewer-facing language positive, bounded, and evidence-led.

### Projects Page

Projects should show how Jason helps a real pain become clearer.

Each project card should include:

- Pain point
- System response
- Evidence surface
- Maturity
- Human benefit
- Boundary

Project detail template:

1. What pain / uncertainty this addresses
2. System shape
3. Evidence path
4. Human review / risk boundary
5. What this proves
6. What it does not claim
7. Next validation

### Talks Page

Talks should make organizers feel safe inviting Jason.

Each talk topic should show:

- Best for
- Audience concern
- What listeners leave with
- Evidence base
- Format

The talks page should make clear:

- Jason can make hard topics understandable.
- The talk has decision value.
- The tone is practical, clear, and not performative.
- The content is grounded in evidence and scope control.

### About Page

About should carry the warmth most explicitly.

Add a section:

```text
How it feels to work with me
```

Possible content:

- I like making complex problems feel discussable.
- I care about lowering the cost of asking better questions.
- I prefer calm, concrete next steps over pressure.
- I try to make technical work feel safer to inspect.
- I am most useful when someone has a real problem, partial evidence, and needs a clearer path.

The page should explain why evidence matters to Jason in human terms:

> Evidence is not only for proving a point. It is how people can feel safer making decisions together.

### Resume Page

Resume should not only say "what Jason has done"; it should explain how he works with others.

Add sections:

- Working with Jason
- What I help clarify
- What I protect in a project
- Where I am most useful

This makes the page useful for hiring teams and collaborators who care about working style, not only skill keywords.

### Blog Page

Blog should become a reasoning archive.

Categories:

- Evidence-aware AI systems
- Speech and transcript workflows
- Regulated deployment
- Agent governance
- Field notes / operating notes

Use a publication rail instead of generic blog cards:

```text
title -> question answered -> related track -> reading purpose
```

### Contact Page

Contact should be the warmest conversion point.

Use intent-based contact:

- I want to discuss research collaboration.
- I want to invite a talk.
- I want to ask about an AI / medical / cybersecurity problem.
- I want to exchange ideas about agent workflows.
- I have an early, messy idea and want help clarifying it.

The final option is important because it directly expresses Jason's chill, safe, approachable personality.

## Component System

Recommended components:

```text
WarmHero
VisitorIntentMap
HowICanHelpPanel
PainToSystemMap
EvidenceLedger
HumanBenefitStrip
BoundaryPanel
ValidationPath
OperatingTrackMap
WorkingWithMe
TopicFitMatrix
ContactIntentCards
```

### PainToSystemMap

This is the key new component.

It maps:

```text
Pain -> What Jason helps clarify -> Evidence / system response -> Next step
```

Example:

```text
Pain:
AI outputs sound plausible, but reviewers cannot tell what evidence supports them.

Jason helps clarify:
Where evidence enters, how it changes, what remains uncertain, and where human review stays in control.

Evidence / system response:
Speech evidence pipeline, grounded fraud RAG, agent governance research.

Next step:
Review the research agenda or open a case study.
```

## Motion And Interaction

Motion should feel like gentle guidance.

Allowed:

- 1-2px hover lift
- soft border glow
- slow opacity / transform reveal
- route selection highlight
- focus rings with clear contrast
- subtle progress / path indicators

Avoid:

- scroll hijacking;
- fast parallax;
- aggressive 3D;
- flashing gradients;
- motion that makes the page feel like a tech demo.

Reduced motion must be supported.

## Copywriting Rules

The voice should be:

- clear;
- warm;
- grounded;
- non-defensive;
- invitational;
- specific.

Use more:

```text
I help make...
This is useful when...
The next useful question is...
This work helps reviewers see...
This boundary keeps the system honest...
```

Use less:

```text
I specialize in...
I optimize...
I deliver...
Next-generation...
Seamless...
Cutting-edge...
```

Boundary language should sound like stewardship:

```text
This is a synthetic-data demo designed for review and workflow clarity.
```

Not:

```text
This is only a demo and cannot...
```

## Implementation Plan

### Phase 1 - Interface Spec

- Create this interface design record.
- Align it with `docs/site-v2-information-architecture.zh-tw.md`.
- Decide tokens, component vocabulary, motion rules, and copy rules.

### Phase 2 - Design Tokens

- Refine `src/styles/global.css` tokens.
- Add warm surface variants.
- Add button, focus, hover, and route-state consistency.
- Audit contrast after token changes.

### Phase 3 - Homepage

- Replace current technical-first hero with `WarmHero`.
- Add `HowICanHelpPanel`.
- Convert audience route section into warmer `What brings you here`.
- Keep evidence map below the warm entry, not above it.

### Phase 4 - About + Contact

- Add `How it feels to work with me`.
- Add intent-based contact section.
- Add low-pressure conversation entry for early, messy ideas.

### Phase 5 - Projects + Research

- Add `PainToSystemMap` and `HumanBenefitStrip`.
- Extend project cards with pain, benefit, boundary, and maturity.
- Add human benefit and validation path to research direction pages.

### Phase 6 - Talks + Resume + Blog

- Convert talks into topic-fit matrix.
- Convert resume into working-style proof.
- Convert blog into reasoning archive / publication rail.

### Phase 7 - Verification

Run:

```bash
npm run check
npm run build
```

Then inspect screenshots for:

- desktop homepage;
- mobile homepage;
- Traditional Chinese homepage;
- `/about/`;
- `/contact/`;
- `/projects/`;
- `/research/`;
- `/talks/`.

Check:

- text overflow;
- CTA wrapping;
- mobile scanning;
- focus states;
- contrast;
- whether the site feels warm rather than cold;
- whether evidence still remains clear.

## Current Implementation Record

Date: 2026-05-31

The current v2.0 implementation turns the design principle into reusable code rather than leaving it as a one-page concept.

Implemented shared surfaces:

- `src/data/siteV2.ts`
  - `siteV2`: audience routing, operating tracks, and evidence protocol.
  - `warmStudio`: cross-page Warm Evidence Studio content model.
- `src/components/home/AudienceNavigator.astro`
  - Homepage visitor-intent routing.
- `src/components/home/OperatingTracks.astro`
  - Public-safe workstream map from planning/sibling-repo signals to website surfaces.
- `src/components/v2/WarmEvidenceFlow.astro`
  - Shared cross-page structure:
    - visitor pain;
    - Jason helps clarify;
    - evidence surface;
    - safe boundary;
    - next gentle action.
- `src/components/v2/WorkingWithMe.astro`
  - About-page working-style proof for warmth, calmness, rigor, and low-pressure collaboration.
- `src/components/v2/ContactIntents.astro`
  - Intent-based contact cards, including the early messy idea path.

Applied pages:

- `/`;
- `/audiences/`;
- `/research/`;
- `/research/[slug]/`;
- `/projects/`;
- `/projects/[slug]/`;
- `/talks/`;
- `/about/`;
- `/contact/`;
- `/resume/`;
- `/blog/`.

The implementation preserves the original public claims and artifacts. It adds an explicit human-centered route-and-evidence layer around them so each page answers:

```text
What is the visitor trying to decide?
How does Jason help clarify it?
What public evidence can they inspect?
What boundary keeps the claim honest?
What is the next gentle action?
```

Visual implementation notes:

- Keep the green-black / graphite base.
- Use cyan-green for routes, focus, and evidence links.
- Use warm amber for guidance, maturity, and human warmth.
- Remove leftover blue AI-glow surfaces from the main interface and talk story page.
- Keep pages calm and scan-friendly rather than turning the site into a dense dashboard.

Verification evidence for this pass:

- `npm run check` passed with `0` errors, `0` warnings, and `0` hints.
- `npm run build` passed and generated `64` pages.
- Chromium screenshots were inspected for:
  - English homepage desktop;
  - Traditional Chinese homepage mobile;
  - Traditional Chinese contact mobile;
  - English research desktop;
  - English projects desktop;
  - English talks desktop;
  - English about desktop;
  - English contact desktop.

## Codex Goal Prompt

Use this prompt when creating a Codex goal for the full UI redesign:

```text
Using FIRST PRINCIPLE, redesign the JasonLn0711.github.io personal website v2.0 interface into a "Warm Evidence Studio": a warm, calm, evidence-led public research portfolio that reflects Jason's personality as caring, approachable, relaxed, trustworthy, practical, and helpful, while preserving rigorous claim-evidence boundaries.

Core design objective:
- The site should feel like a warm research companion, not a cold dashboard or generic portfolio.
- Visitors should feel safe bringing complex, not-yet-organized problems into conversation with Jason.
- The interface should show that Jason helps people clarify AI, evidence, cybersecurity, medical AI, speech workflow, and agent-system problems into understandable, reviewable, and actionable next steps.

Content and boundary rules:
- Preserve existing core research claims in src/data/*.ts and src/content/**/* unless a narrow copy change is required for the new interface model.
- Do not expose private planning details, sensitive raw evidence, credentials, private contact threads, patient-like data, patent-sensitive implementation mechanics, or raw day-note material.
- Planning and sibling repos may be inspected as content radar only; public website output must remain repo-safe.
- Boundaries should be framed as scope control, validation layers, human-review requirements, or claim-evidence alignment, not defensive apology.

Design personality:
- Warm, calm, chill, approachable, trustworthy, and human.
- Still rigorous, evidence-led, and technically credible.
- Avoid cold military/terminal aesthetics, AI-purple gradients, generic glass-card grids, excessive motion, and overly serious academic visual language.

Visual direction:
- Use a green-black / graphite base with warmer human accents.
- Keep cyan-green for route, action, focus, and evidence connection.
- Use muted amber or soft peach sparingly for warmth, maturity, and guidance.
- Avoid beige lifestyle branding and avoid pure black.
- Use readable multilingual typography for English, Traditional Chinese, and Japanese.

Information architecture:
- Homepage becomes a warm dispatch center:
  1. Warm identity hero
  2. What brings you here / visitor intent map
  3. How I help
  4. Evidence map
  5. Operating tracks
  6. Research directions
  7. Case-study wall
  8. Talks and public framing
  9. Writing and field notes
  10. Working style
  11. Contact by intent
- About page must include "How it feels to work with me".
- Contact page must become intent-based and include a low-pressure path for early, messy ideas.
- Projects should map pain -> system response -> evidence -> maturity -> human benefit -> boundary.
- Research should map problem -> why hard -> what Jason studies/builds -> evidence -> human benefit -> next validation.
- Talks should become a topic-fit matrix for organizers.
- Resume should include working style and team-fit proof.
- Blog should become a reasoning archive / publication rail.

Implementation requirements:
- Work with the existing Astro + Tailwind v4 stack.
- Keep changes reviewable and component-based.
- Add or update shared components such as WarmHero, VisitorIntentMap, HowICanHelpPanel, PainToSystemMap, HumanBenefitStrip, BoundaryPanel, ValidationPath, WorkingWithMe, TopicFitMatrix, and ContactIntentCards where useful.
- Update docs/site-v2-warm-evidence-studio-interface.zh-tw.md if implementation decisions change.
- Validate with npm run check and npm run build.
- Use Playwright screenshots for desktop and mobile, including Traditional Chinese pages, to check warmth, hierarchy, overflow, contrast, focus states, CTA wrapping, and mobile readability.

Done condition:
- The site feels warm, approachable, calm, and human while remaining evidence-led and rigorous.
- A visitor can quickly understand how Jason can help them.
- Research reviewers can still inspect claims, evidence, maturity, and validation paths.
- Collaborators and organizers feel invited into a clear next conversation.
- The website no longer feels like a generic dark technical portfolio or cold dashboard.
```
