# Personal Website v2.0 Information Architecture

Date: 2026-05-31

## Design Read

這次 v2.0 不是把首頁再做得更漂亮，而是把整個網站重新定義成一個 public-facing research operating system。

網站要服務的不是單一身分，而是多種 TA 在不同時間壓力下的判斷需求：

- 研究審閱者需要快速判斷主張、證據、方法邊界與下一個 validation layer。
- 合作夥伴需要知道目前研究主軸、可合作切入點、公開成果與合理邊界。
- 工程 / 產品評估者需要看見 runnable system thinking、repo hygiene、測試與 handoff discipline。
- 醫療 / regulated stakeholders 需要看見安全、治理、scope control、human review 與 no-real-patient-data 邊界。
- 演講 / 活動主辦方需要迅速找到主題、受眾適配、公開場次與聯絡方式。
- 招募 / technical teams 需要看到技術範圍、工作方式、證據密度與溝通能力。
- 讀者需要找到文章、研究筆記與理解整體 worldview 的入口。

## First-Principles Architecture

稀缺資源不是版面空間，而是訪客的判斷注意力。

因此 v2.0 的核心不是展示更多內容，而是讓每個內容知道自己在回答哪一類問題：

```text
TA intent -> human-factors need -> public-safe evidence -> best route -> next action
```

網站公開層只呈現 repo-safe summary。Planning repo 和 sibling repos 提供內容雷達，但不直接被公開搬運：

```text
planning-everything-track = priority / capacity / status / locator / boundary
sibling repos = implementation / evidence / docs / checks / handoff
personal website = public narrative / audience routing / evidence map / invitation path
```

## Repo Signals Used For V2.0

從 `planning-everything-track` 與 sibling repos 抽出的公開安全訊號：

- `docs/11-cross-repo-first-principles-routing.md`：repo 是 decision surface，公開網站也要讓每個區塊有明確 ownership。
- `docs/17-project-lifecycle-and-review-queue.md`：專案要有 lifecycle/readiness，不應永久停留在 active surface。
- `docs/18-workload-portfolio-management.md`：工作不是越多越好，重點是 stable judgment 和 reliable delivery capacity。
- `data/projects/2026-05-tfsc-agentic-ai-governance-manuscript.md`：review scarcity、claim boundary、positive-scope reviewer-facing framing。
- `data/projects/2026-04-tfda-fda-regulatory-advisor.md`：meeting memory -> decision/evidence register -> source cards -> QA regression questions。
- `data/projects/2026-05-imedtac-er-triage-ekg-asr.md` 與 `../ai-triage-kiosk-demo/`：regulated product demo 需要 API contract、demo boundary、human review summary、no production clinical claim。
- `../urology-ai-previsit-demo/`：臨床 workflow demo 的 public-safe posture 是 contribution-first、scope-narrow、synthetic-data、reviewable evidence。
- `../brainstorming-lab/`：ideas are data，網站可呈現 idea/research maturation 的方法，而不是公開 raw brainstorm。

## V2.0 Content Model

### 1. Audience Navigator

首頁要先讓訪客依自己的任務進入：

- Research reviewers -> Research agenda / papers / validation path
- Collaborators -> Active directions / case studies / contact
- Engineering evaluators -> Projects / system boundaries / repo-style evidence
- Regulated stakeholders -> Talks / medical cybersecurity / clinical demo posture
- Organizers -> Talks / topics / speaker profile
- Hiring teams -> Resume / selected systems / working style
- Readers -> Blog / field notes / worldview

### 2. Operating Tracks

把 planning repo 中的多線工作壓成公開可理解的幾條 track：

- Agent governance and review scarcity
- Speech, transcript, and evidence workflows
- Regulated medical AI and cybersecurity
- Product-style clinical workflow demos
- Idea operating system and research maturation
- Security and coursework-derived technical discipline

每條 track 都要顯示：

- public-safe source signal
- visible website surface
- strongest audience fit
- current maturity / evidence posture

### 3. Evidence Protocol

網站所有內容遵守同一個 protocol：

1. State the claim.
2. Show the evidence surface.
3. Mark the lifecycle or readiness.
4. Name the boundary as scope control.
5. Give the next route.

這可以避免網站退回普通 portfolio card list，也避免把 planning/private material 公開化。

## Page Planning

### Homepage

Role: dispatch center.

首頁應該回答：

- Jason 是誰？
- 哪些 TA 該去哪？
- 目前公開工作可以分成哪些 operating tracks？
- 哪些 evidence surface 已經可看？
- 下一步要聯絡、看研究、看專案或看演講？

### Research

Role: reviewer-facing agenda.

Research page 應該更像 research agenda，而不是 topic list。每個方向要有：

- problem class
- why now
- system principles
- human-factors summary
- evaluation agenda
- current activities

### Projects

Role: case-study evidence wall.

Projects page 應該讓工程 / 產品 / 合作方看到：

- project maturity
- implementation or prototype posture
- status
- risk / scope boundary
- what evidence exists now
- what would make it stronger

### Talks

Role: public technical framing.

Talks page 不只是活動清單，而是 topic fit matrix：

- audience
- decision value
- evidence base
- format
- invitation path

### About / Resume

Role: working style and professional fit.

這裡應該呈現 personality/work style：

- evidence-first
- first-principles routing
- bounded execution
- repo hygiene
- multilingual / cross-domain communication
- investigation-informed system thinking

### Blog

Role: reasoning archive.

Blog 不只放文章，而是放 worldview:

- evidence-aware systems
- speech workflows
- trust and investigation
- agent governance
- field deployment notes

## UX / Human-Factors Rules

- Do not make every visitor read the same sequence.
- Put route choice early, before dense evidence.
- Use matrices, ledgers, and timelines when users compare.
- Use short summary cards only when they reduce cognitive load.
- Keep claims near evidence and evidence near next action.
- Avoid private planning details, deadline clutter, raw contact history, or sensitive implementation mechanics.
- Treat uncertainty as scoped evidence or next validation, not apology.
- Make mobile scanning work: each section should collapse into one decision at a time.

## Implementation Slices

### Slice 1 - Audience Routing And Operating Tracks

This slice implemented the first v2.0 routing layer:

1. Add reusable v2 audience/workstream content data.
2. Add `AudienceNavigator` for homepage route choice.
3. Add `OperatingTracks` for public-safe workstream mapping.
4. Add `/audiences/` as a detailed TA-facing planning page, with localized routes.
5. Replace the old homepage getting-started/capability opening with the v2 TA/workstream opening.

### Slice 2 - Warm Evidence Studio Cross-Page Interface

This slice extends the same model across the main website surfaces:

1. Add `warmStudio` content data in `src/data/siteV2.ts`.
2. Add `WarmEvidenceFlow` as the shared page-level pattern for:
   - visitor pain;
   - Jason helps clarify;
   - evidence surface;
   - safe boundary;
   - next gentle action.
3. Add `WorkingWithMe` for the about-page working-style proof.
4. Add `ContactIntents` for low-pressure, intent-based contact.
5. Apply the flow to:
   - `/research/`;
   - `/research/[slug]/`;
   - `/projects/`;
   - `/projects/[slug]/`;
   - `/talks/`;
   - `/about/`;
   - `/contact/`;
   - `/resume/`;
   - `/blog/`.
6. Replace remaining old blue accent surfaces with the v2 cyan-green / warm-amber palette.

The current implementation keeps the original research, project, speaking, resume, and writing claims intact while adding a warmer route-and-evidence layer around them.

## Related Interface Design Record

The information architecture in this document defines the site structure and public-safe routing model.

The companion interface design philosophy is:

```text
docs/site-v2-warm-evidence-studio-interface.zh-tw.md
```

That document records the warmer v2.0 visual and interaction direction: a "Warm Evidence Studio" that keeps evidence, maturity, and claim boundaries visible while making the site feel calm, caring, approachable, and easy to start a conversation with.
