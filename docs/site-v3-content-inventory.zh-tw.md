# Personal Website v3.0 Content Inventory

Date: 2026-05-31
Status: active migration inventory

## FIRST PRINCIPLE

The scarce resource is claim-evidence trust. The rebuild may change architecture, layout, route flow, component naming, and copy structure, but it must preserve public meaning and keep unsupported claims out.

## Canonical Public Sources

| Source | Migration use |
| --- | --- |
| `src/data/profile.ts` | Identity, title, lab, public links, bio, toolkit, contact topics, working background. |
| `src/data/research.ts` | Three research territories, thesis statements, evidence signals, human-factors framing, evaluation agenda. |
| `src/data/speaking.ts` | CYBERSEC 2026 session, CISC 2025 papers, talk topics, invitation formats. |
| `src/data/talkStory.ts` | Long-form regulated AI cybersecurity talk narrative and section structure. |
| `src/content/projects/*.md` | Public project case studies and readiness framing. |
| `src/content/blog/*.mdx` | Public writing archive source. |
| `public/images/headshot.jpg` | Real portrait / human warmth asset. |
| `public/projects/*.svg` | Public-safe project visuals. |
| `public/og/default.png` | Fallback social image. |
| `public/design/v3-concepts/*.png` | v3 concept references for `/design/`. |

## Identity And Contact

Public facts to preserve:

- Name: Jason Chia-Sheng Lin.
- Current role: doctoral researcher.
- Lab: Artificial Intelligence in Medical Imaging / Signal Analysis Lab, National Yang Ming Chiao Tung University.
- Location: Taiwan.
- Public email: `cre062400@gmail.com`.
- Public links: GitHub, LinkedIn, lab site, CYBERSEC profile.

Public positioning:

- AI agents, trustworthy AI, speech intelligence, ASR + LLM + RAG workflows, cybersecurity, high-stakes deployment, AI SaMD / regulated environments.
- Investigation-informed systems thinking is part of the public professional story.

Do not publish:

- private planning notes;
- raw day-note material;
- private contacts;
- credentials, tokens, or deployment secrets;
- patient-like or transcript-bearing sensitive data;
- patent-sensitive mechanics.

## Research Directions

The v3 research atlas should preserve these territories:

1. Trustworthy AI and Agent Systems.
2. Speech, Language, and Agent Workflows.
3. Security and High-Stakes Deployment.

Each direction should expose:

- problem class;
- why now;
- Jason's contribution lens;
- human-factors implication;
- evidence signals;
- evaluation agenda;
- scope boundary;
- next route.

## Project Case Studies

Initial public project set:

1. Speech Evidence Intelligence Pipeline.
2. Fraud Conversation Analysis with RAG.
3. Federated Learning Leakage Study.

Each project should expose:

- human pain;
- system response;
- artifact or evidence surface;
- maturity / readiness state;
- boundary;
- next useful comparison or contact route.

Do not imply production deployment unless the source file supports it.

## Talks And Public Sessions

Public talk evidence:

- CYBERSEC 2026 official session on cybersecurity design for AI software medical devices.
- CISC 2025 paper on AI-era ransomware / Medusa / CrazyHunter.
- CISC 2025 paper on Threat Pulse Modeling and ZTAID zero-trust maturity assessment.

Talk pages should show:

- topic;
- audience fit;
- decision value;
- public signal;
- format;
- invitation path.

The generated talk concept image contains visual placeholders and possible fake event timing. Use `src/data/speaking.ts` as the factual authority.

## Writing Archive

Initial writing set:

- Designing Speech Evidence Pipelines with ASR and LLMs.
- From Cybercrime Investigation to Trustworthy AI.
- Flat UI to Spatial Interface.
- Cross-Node Fraud Intelligence Minimal Disclosure.

The writing page should present writing as reasoning evidence, with a clear boundary between informal notes and formal research claims.

## Localization

Minimum v3 release surface:

- `/zh-tw/`
- `/zh-tw/contact/`

The Traditional Chinese pages may be a focused public surface first. Do not make incomplete translations look complete.

## Route Mapping

| v3 route | Source material |
| --- | --- |
| `/` | profile, research, projects, speaking, writing, v3 design language. |
| `/design/` | copied v3 concept images and this design source record. |
| `/audiences/` | audience route atlas and contact intents. |
| `/research/` | research territories from `src/data/research.ts`. |
| `/research/[slug]/` | territory detail pages from research data. |
| `/projects/` | project case-study inventory. |
| `/projects/[slug]/` | project detail pages. |
| `/talks/` | speaking data. |
| `/talks/regulated-ai-cybersecurity/` | featured CYBERSEC session plus talk-story narrative. |
| `/writing/` | blog / essay archive. |
| `/writing/[slug]/` | writing detail pages. |
| `/blog/` | alias to writing archive for old-route continuity. |
| `/blog/[slug]/` | alias to writing detail pages for old-route continuity. |
| `/about/` | profile, working principles, background. |
| `/contact/` | profile email, contact topics, intent cards. |
| `/resume/` | public professional evidence route. |

## Migration Rule

For implementation, prefer a structured data layer such as `src/lib/content/site.ts`. The old Astro content may remain in the repo as source inventory during the clean-slate conversion, but public routes should render through the new SvelteKit route system.

## Implementation Status

2026-05-31 v3.0 migration status:

- Public routes now render through SvelteKit route files under `src/routes/`.
- The active structured content layer is `src/lib/content/site.ts`.
- Old `src/data/` and `src/content/` materials remain in the repository as source inventory and continuity evidence.
- `/writing/` is the current reasoning archive. `/blog/` remains as an old-route continuity alias.
- Traditional Chinese release scope is intentionally limited to `/zh-tw/` and `/zh-tw/contact/` for this checkpoint, rather than implying full translation coverage.
- Public claims were compressed and reorganized, but not expanded into unsupported deployment or credential claims.

## Completion Boundary

The content migration is complete only when:

- all required routes render from public-safe data;
- old important routes have either equivalent pages or redirects / aliases;
- `/design/` exposes the concept references;
- sitemap and robots point to static deployable routes;
- check/build pass;
- browser inspection confirms the content is readable on desktop and mobile.
