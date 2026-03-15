type PromptSection = {
  id: string;
  label: string;
  kind: string;
  title: string;
  summary: string;
  prompt: string;
};

export const talkPromptDeck = {
  pathname: "/talks/designing-cybersecurity-for-ai-in-regulated-environments/",
  hero: {
    eyebrow: "Talks / Session Companion",
    title: "AI Medical Device Security Prompt Deck",
    description:
      "A one-stop companion page for the keynote deck behind \"Designing Cybersecurity for AI in Regulated Environments,\" rebuilt as copy-ready prompts for Gamma, Beautiful.ai, ChatGPT, PowerPoint Copilot, and Canva.",
    detail:
      "This page keeps the talk flow coherent from opening contrast and FDA 524B through full-stack security, federated learning, trust, patch governance, patient safety, and the closing thesis."
  },
  compatibleTools: ["Gamma", "Beautiful.ai", "ChatGPT", "PowerPoint Copilot", "Canva"],
  usageSteps: [
    "Paste the global control prompt once before generating any slide-specific content.",
    "Then paste the slide prompts one by one so the deck keeps a stable visual language.",
    "Use the final master prompt if you want a full-deck generation pass in one shot."
  ],
  deckFlow: [
    "Opening contrast and real-world hospital context",
    "The Untouched Model Paradox and FDA 524B framing",
    "Full-stack attack surface from hardware to governance",
    "Federated learning, leakage, trust, and governance controls",
    "Clinical patch tradeoffs, patient safety, and closing thesis"
  ],
  designDirection: [
    "Apple keynote feel with high-end medical technology restraint",
    "Serious cybersecurity conference tone without hacker cliches",
    "Minimal, stage-readable composition with one strong idea per slide"
  ],
  sections: [
    {
      id: "global-control-prompt",
      label: "0",
      kind: "Global Prompt",
      title: "全域總控 prompt",
      summary:
        "先貼一次這段，讓工具先吃到整體 deck 的視覺規則、字體階層、配色、圖像方向與安全邊界。",
      prompt: `
You are a world-class keynote slide designer with exceptional taste in Apple-style presentation design.
Design a premium conference deck for a cybersecurity talk about AI medical device security in regulated environments.

Overall design direction:
- Visual tone: Apple keynote meets high-end medical technology conference
- Mood: precise, calm, premium, minimal, intelligent, high-trust
- Audience: cybersecurity professionals, technology leaders, architects, regulators, healthcare AI practitioners
- Language on slides: keep existing English slide titles unless explicitly changed; if any Chinese appears, it must be Traditional Chinese used in Taiwan, never simplified Chinese
- Aspect ratio: 16:9 widescreen
- Design principle: one core message per slide, minimal text, maximum clarity, strong negative space
- Avoid anything that feels like a dashboard, enterprise template, MBA consulting slide, or academic poster

Typography:
- Preferred English fonts: SF Pro Display for titles, SF Pro Text for body
- Preferred Traditional Chinese font: PingFang TC
- Fallback fonts if unavailable: Helvetica Neue, Inter, Noto Sans TC, Microsoft JhengHei
- Title size: 30–38 pt
- Hero statement size: 42–56 pt
- Body text: 16–20 pt
- Caption / source / micro label: 10–12 pt
- Use bold sparingly, only for the most important phrase
- Avoid italics unless quoting
- Never let a slide title wrap into two lines unless absolutely unavoidable

Color system:
- Background: pure white #FFFFFF or warm white #F5F5F7
- Primary text: near-black #111111
- Secondary text: Apple gray #6E6E73
- Divider lines / diagram strokes: #D2D2D7
- Trust / neutral accent: blue #0A84FF
- Risk / attack accent: red #FF453A
- Use only one accent color strongly per slide; do not overuse color

Layout system:
- Use a 12-column invisible grid
- Generous outer margins
- Strong left alignment for most slides
- Keep 15–25% breathing room on every slide
- Prefer one dominant composition, not many little boxes
- Avoid crowded bullet lists; if bullets are needed, maximum 3 very short bullets
- Use simple, elegant divider lines and connectors
- Use rounded corners lightly, not excessively
- Diagrams should have thin lines, clean connectors, and no crossed arrows

Image direction:
- Use editorial-quality imagery, not cliché stock photos
- Prefer grayscale or slightly desaturated imagery with a single accent color overlay
- Avoid hooded hackers, green code rain, glowing padlocks, handshake photos, random people staring at laptops, cheap stock hospital photos, and cyberpunk neon aesthetics
- If using medical imagery, it must feel clinical, precise, and de-identified
- If using hospital visuals, prefer architecture, corridor, workstation, radiology console, MRI / DICOM-like visuals, servers, or infrastructure
- If using cybersecurity visuals, prefer abstract system diagrams, hardware close-ups, networks, connectors, runtimes, chips, memory maps, control paths

Diagram rules:
- Use elegant technical diagrams, not childish icons
- Keep diagrams abstract and executive-friendly
- Show attack surfaces conceptually, not operationally
- For attack-path slides, keep them high-level and safe: no exploit commands, no code, no step-by-step hacking instructions
- Diagram connectors should sit behind the main nodes
- Use orthogonal or gently curved connectors, never messy spaghetti arrows

Content rules:
- Do not overload the slide with text
- Every slide should feel stage-ready and readable from the back row
- Each slide must visually support the speaker’s pacing
- The deck should feel like one coherent keynote, not a collection of unrelated pages

Output expectations for each slide:
1. Exact on-slide text
2. Layout description
3. Image / visual generation direction
4. Diagram instruction if needed
5. Specific typography and emphasis decisions
6. “Do not do” constraints for that slide
`
    },
    {
      id: "slide-0-title-slide",
      label: "Slide 0",
      kind: "Title Slide",
      title: "Title Slide",
      summary:
        "建立 keynote 等級的第一印象，讓觀眾一開始就知道這不是泛 AI 演講，而是高風險、受規範的醫療 AI 資安議題。",
      prompt: `
Using the global design system above, create the title slide.

Slide purpose:
Establish a premium, serious, keynote-level first impression. The slide should instantly communicate that this is not a generic AI talk, but a high-stakes talk about AI cybersecurity in regulated medical environments.

Exact on-slide text:
Title:
Designing Cybersecurity for AI in Regulated Environments

Subtitle:
Lessons from FDA Section 524B

Supporting line:
Why AI Security is a System Problem, Not a Model Problem

Speaker line:
Chia-Sheng (Jason) Lin
National Yang Ming Chiao Tung University

Layout:
- Use a 55/45 split layout
- Left side: typography block with the title and subtitle stacked cleanly
- Right side: one hero visual
- Keep generous white space around the title block
- Speaker line should be small and quiet, aligned near the lower left

Visual direction:
- Use one editorial medical-technology hero image on the right
- Ideal visual: grayscale radiology / MRI-like image or clinical imaging interface with one precise red contour line or one subtle highlighted lesion boundary
- The image should not contain visible faces
- It should feel clinical, exact, and high-trust
- Keep the right image dark enough for contrast, but not dramatic or horror-like

Typography:
- Title large, bold, 36–40 pt
- Subtitle 18–20 pt, medium weight
- Supporting line 16–18 pt, gray
- Speaker line 11–12 pt, gray
- Highlight only “System Problem” or “Not a Model Problem” with slightly stronger weight, not with a bright color

Do not do:
- No logos except maybe a very subtle institutional line if necessary
- No busy collage
- No shield icon
- No cyberpunk hacker imagery
- No centered everything; keep it elegant and grounded
`
    },
    {
      id: "slide-1-opening-keynote",
      label: "Slide 1",
      kind: "Opening Keynote",
      title: "Opening Keynote",
      summary:
        "用電影推薦與腫瘤描邊的對比，快速把風險層級從 consumer AI 拉到臨床事故。",
      prompt: `
Using the global design system above, create the opening keynote slide.

Slide purpose:
This slide must create dramatic contrast and emotional tension. It should visually support the opening rhetorical question: AI making a bad recommendation is harmless; AI outlining a tumor is not.

Exact on-slide text:
Primary hero text:
If an AI recommends the wrong movie, it’s fine.

Secondary hero text:
But what if that AI is outlining a tumor?

Small supporting line:
That is not a bug.
That is a medical incident.

Layout:
- No conventional title bar
- Use a highly minimal composition
- Left 50%: large hero text in 2 or 3 stacked blocks
- Right 50%: one precise clinical visual
- The last supporting line should sit lower, smaller, and feel final
- Leave visible breathing room between the two hero statements

Visual direction:
- Use a grayscale MRI / CT / radiology visual on the right
- Add one thin red contour line or one highlighted tumor boundary, very precise, very restrained
- The visual should feel like treatment planning or medical imaging, not a TV medical drama
- The image must leave clean negative space on the left for the typography

Typography:
- First line large, 36–42 pt
- Second line even larger, 44–52 pt
- “outlining a tumor” should carry the strongest visual emphasis
- Supporting line smaller, 16–18 pt, medium weight, darker gray or near-black

Do not do:
- No bullet points
- No data chart
- No doctor portrait
- No cheesy red alarm effects
- No overexposed medical stock image
`
    },
    {
      id: "slide-1-1-mackay-incident",
      label: "Slide 1-1",
      kind: "Real-World Incident",
      title: "The Real-World Incident (MacKay Memorial Hospital)",
      summary:
        "把演講落回台灣脈絡，強調事件是真實、在地、事實導向，而且受影響的是系統，不是模型。",
      prompt: `
Using the global design system above, create the slide for the MacKay Memorial Hospital ransomware incident.

Slide purpose:
Ground the talk in a real Taiwan context. The slide should feel factual, sober, local, and immediate — not sensational.

Exact on-slide text:
Title:
A Real-World Incident in Taiwan

Main headline:
MacKay Memorial Hospital
Ransomware attack

Supporting lines:
Taipei
Medical IT infrastructure disrupted
This was not an attack on the model.
It was an attack on the system.

Optional small stat block:
500+ computers affected

Layout:
- Use a clean editorial news layout
- Left side: strong headline stack and one bold number if used
- Right side: either one respectful hospital / workstation image or a cleanly cropped news-style visual
- Bottom area: a thin horizontal line with tiny metadata like “Taipei · 2025”
- Keep it sparse; do not turn it into a newspaper collage

Visual direction:
- Preferred image: hospital corridor, radiology workstation, or hospital exterior in a sober documentary style
- Alternate option: one cropped news screenshot integrated elegantly into the layout
- Tone must be factual and respectful
- Use one subtle red accent to indicate disruption

Typography:
- Title 28–32 pt
- Hospital name 24–28 pt
- “Ransomware attack” 18–22 pt
- Supporting lines 14–16 pt
- Stat “500+” can be large, 42–48 pt, if included

Do not do:
- No giant red warning triangle
- No explosion / glitch effects
- No cluttered screenshot collage
- No sensational tabloid look
`
    },
    {
      id: "slide-2-untouched-model-paradox",
      label: "Slide 2",
      kind: "Core Thesis",
      title: "The Untouched Model Paradox",
      summary:
        "這一頁提出整場演講的中心命題：模型本身可以完全沒被動到，但整個 AI 系統仍然會失去可信度。",
      prompt: `
Using the global design system above, create the slide for “The Untouched Model Paradox.”

Slide purpose:
Introduce the central thesis that a model can remain untouched while the AI system still becomes unsafe or untrustworthy.

Exact on-slide text:
Title:
The Untouched Model Paradox

Hero statement:
The model can remain untouched.
The system can still be compromised.

Supporting line:
Model integrity does not guarantee clinical trust.

Layout:
- Use a single dominant central diagram
- Top left: title
- Center: layered AI stack diagram
- Bottom right or bottom center: the supporting line
- The slide should feel conceptual, elegant, and memorable

Diagram direction:
- Build a five-layer stack with elegant, slightly translucent horizontal layers
- Layers:
  Hardware
  Kernel
  Runtime
  Model
  Governance
- Visually show the Model layer as intact / clean / neutral
- Visually show lower layers with subtle red fracture lines, attack markers, or disturbance signals
- Use thin technical connector lines and minimal labels

Visual language:
- This must not look like a cartoon infographic
- It should feel like an Apple keynote technical architecture diagram
- Slight glass / layered panel feel is acceptable if done subtly

Typography:
- Title 30–34 pt
- Hero statement 28–34 pt, two lines
- Supporting line 14–16 pt

Do not do:
- No giant list of attacks
- No crowded STRIDE matrix here
- No dozens of icons
- No messy arrows
`
    },
    {
      id: "slide-3-clinical-risk",
      label: "Slide 3",
      kind: "Regulatory Shift",
      title: "In Healthcare, AI Is Not Just Software. It Is Clinical Risk.",
      summary:
        "把論述從 insight 推向 law，讓聽眾清楚知道 AI 資安在醫療不是可選最佳實務，而是法規與治理要求。",
      prompt: `
Using the global design system above, create the FDA / regulatory slide.

Slide purpose:
Shift the talk from insight to law and governance. This slide must feel authoritative, not academic and not bureaucratic.

Exact on-slide text:
Title:
In healthcare, AI is not just software.
It is clinical risk.

Regulatory label:
FDA Section 524B

Three requirement labels:
SBOM
Postmarket vulnerability monitoring
Patching / update capability

Hero statement near bottom:
AI security is no longer a best practice.
It is a legal requirement.

Layout:
- Left side: bold title and the final hero statement
- Right side: an elegant vertical 3-part structure for the three requirements
- Put “FDA Section 524B” as a small but strong anchor above or beside the three requirements
- Use thin lines to connect the statute label to the three requirements
- This slide should feel like one clean composition, not three separate business cards

Visual direction:
- No photo necessary if the diagram is strong enough
- Optional background texture: very faint document / regulatory paper abstraction or subtle line framework
- Keep the emphasis on type and structure

Typography:
- Title 30–34 pt
- “clinical risk” slightly larger or bolder
- Requirement labels 16–18 pt
- Hero statement 22–26 pt, strong emphasis on “legal requirement”

Do not do:
- No paragraph text
- No giant legal citation blocks
- No scales-of-justice cliché icon
- No crowded timeline
`
    },
    {
      id: "slide-4-defending-full-stack",
      label: "Slide 4",
      kind: "Architecture",
      title: "Defending the Full Stack: A New Architectural Paradigm",
      summary:
        "建立觀眾的心智模型，從 model-centric 重新轉成 full-stack 觀點，並把治理放進結構本身。",
      prompt: `
Using the global design system above, create the full-stack architecture slide.

Slide purpose:
Build the audience’s mental model. This slide should reframe AI security from model-centric to full-stack.

Exact on-slide text:
Title:
Defending the full stack:
A new architectural paradigm

Layer labels:
Hardware
Kernel
Runtime
Model
Governance

Supporting line:
AI security is not only an engineering problem.
It is also a governance problem.

Layout:
- Central or slightly left-centered dominant architecture diagram
- Top left: title
- Bottom or lower right: supporting line
- The stack should be visually beautiful enough that the speaker can pause for 2 seconds without talking

Diagram direction:
- Show the stack as five clean layers, bottom to top
- Preferred order visually:
  Governance as foundation rail
  Hardware
  Kernel
  Runtime
  Model
- Or, if you prefer, four technical layers in the middle with Governance as a frame around the whole system
- Use simple elegant labels, no long explanations on the slide
- Optional tiny micro-labels under Runtime: containers / CUDA / Python
- Optional tiny micro-labels under Model: training / inference / data pipeline

Typography:
- Title 30–34 pt
- Layer labels 15–17 pt
- Supporting line 18–20 pt

Do not do:
- No rainbow colors
- No overloaded architecture legend
- No enterprise cloud icons everywhere
- No 3D perspective that looks gimmicky
`
    },
    {
      id: "slide-5-foundation-of-fragility",
      label: "Slide 5",
      kind: "Hardware / Kernel",
      title: "The Foundation of Fragility: Hardware and Kernel Exploits",
      summary:
        "第一個真正技術性的衝擊點，讓觀眾感受到脆弱性可能出現在最底層，而不是模型表面。",
      prompt: `
Using the global design system above, create the hardware / kernel fragility slide.

Slide purpose:
Deliver the first real technical shock. The slide must feel sharp, intelligent, and slightly unsettling — but still premium and controlled.

Exact on-slide text:
Title:
The foundation of fragility:
Hardware and Kernel exploits

Hero statement:
Flip a single bit.
Collapse trust.

Supporting labels:
Hardware
Kernel
Bit-flip attacks
Privilege escalation
Container escape

Optional micro line:
The most fragile layer is not always the model.

Layout:
- Split composition
- Left: a highly visual technical concept
- Right: bold hero text and 2–4 small technical labels
- Keep strong white space
- The hero text should dominate the right side

Visual direction:
- Create a clean technical visual of memory cells / chip / GPU / bit matrix
- One single red bit should be visibly flipped in an otherwise neutral grayscale field
- Above or behind this, subtly suggest a chip / board / GPU topology
- The visual should feel scientific, not gamer / cyberpunk
- Kernel can be represented as a thin ring or privileged boundary above the hardware visual

Typography:
- Title 28–32 pt
- Hero text 36–44 pt
- Technical labels 12–15 pt
- “single bit” or “Collapse trust” may use the red accent

Do not do:
- No hacker hoodie
- No green terminal rain
- No huge paragraph about Rowhammer
- No gratuitous scare graphics
`
    },
    {
      id: "slide-6-protocol-frontier",
      label: "Slide 6",
      kind: "Protocol Frontier",
      title: "The Protocol Frontier: Exploiting Frameworks and Agents",
      summary:
        "說明現代 AI 系統一旦接上工具、記憶體、外部服務與 orchestration，攻擊面就已經超出模型本身。",
      prompt: `
Using the global design system above, create the slide about AI frameworks, agents, and expanding protocol attack surfaces.

Slide purpose:
Show that modern AI systems become more exposed as they connect to tools, frameworks, external services, and orchestrated workflows.

Exact on-slide text:
Title:
The Protocol Frontier:
Exploiting frameworks and agents

Supporting line:
As AI systems gain tools, memory, and orchestration,
the attack surface expands beyond the model.

Minimal labels for diagram:
Model
Agent
Tools
Connectors
Clinical systems

Layout:
- Use a clean horizontal system diagram across the center of the slide
- Title top left
- Supporting line under title or lower left
- Main diagram across the middle with one broken or risky connector highlighted
- Keep it elegant and sparse

Diagram direction:
- Show a flow like:
  Model → Agent / Orchestrator → Tool layer → External connectors → Clinical systems
- Clinical systems can be abstract blocks such as EHR, PACS, reporting, scheduling
- Highlight one or two vulnerable connector points in red
- Use only a few labels, not a full systems map
- The visual should feel forward-looking and architectural

Typography:
- Title 28–32 pt
- Supporting line 15–17 pt
- Diagram labels 11–13 pt

Do not do:
- No dense network map
- No 20 logos
- No exploit jargon overload
- No step-by-step offensive content
`
    },
    {
      id: "slide-7-local-privilege-escalation",
      label: "Slide 7",
      kind: "Conceptual Attack Path",
      title: "Anatomy of a Local Privilege Escalation in Medical AI",
      summary:
        "這頁需要技術感，但仍維持高階抽象，只讓觀眾理解風險邏輯，不提供操作性細節。",
      prompt: `
Using the global design system above, create the slide for a conceptual local privilege escalation attack path in a medical AI environment.

Slide purpose:
Explain the anatomy of risk at a conceptual level. It must look technical and serious, but it must not provide operational exploit instructions.

Exact on-slide text:
Title:
Anatomy of a local privilege escalation
in Medical AI

Step labels:
1. Low-privilege foothold
2. Shared memory / queue access
3. Inference path tampering
4. Clinician-facing output impact

Supporting line:
Conceptual attack anatomy only

Layout:
- Use a left-to-right 4-step flow across the slide
- Each step should be one clean node with a concise label
- Title top left
- Tiny supporting line at the bottom or top right saying “Conceptual attack anatomy only”
- Use thin red arrows to connect the steps

Diagram direction:
- Step 1: a low-privilege process or compromised service box
- Step 2: shared memory / IPC / queue box
- Step 3: inference or output pipeline box
- Step 4: clinician workstation / diagnostic interface box
- Add one faint DICOM or imaging thumbnail as a contextual element, but keep it abstract and de-identified
- The emphasis should be on boundary crossing, not hacking theatrics

Typography:
- Title 28–32 pt
- Step labels 14–16 pt
- Supporting line 10–11 pt

Do not do:
- No exploit code
- No terminal screenshots
- No specific commands
- No procedural instructions
`
    },
    {
      id: "slide-8-data-never-leaves",
      label: "Slide 8",
      kind: "Myth Busting",
      title: "If Data Never Leaves the Hospital, Is It Really Safe?",
      summary:
        "打破 on-premise 就等於安全的假設，視覺上讓風險停留在醫院邊界內部，而不是外部雲端。",
      prompt: `
Using the global design system above, create the “data stays local” myth-busting slide.

Slide purpose:
Break the false assumption that on-premise or in-hospital deployment automatically means safe.

Exact on-slide text:
Title:
If Data Never Leaves the Hospital,
Is It Really Safe?

Supporting phrases:
On-premise does not equal trusted.
Inside the hospital does not equal secure.

Small labels for diagram:
Identity
Lateral movement
Insider risk
Misconfiguration

Layout:
- Large question on the left, occupying about 45% of the slide
- On the right, a hospital-shaped or hospital-blueprint-inspired network visual
- Use internal movement lines inside the hospital boundary to imply risk remains internal
- Keep bottom area clean

Visual direction:
- Create a refined architectural / blueprint-style hospital silhouette or interior infrastructure outline
- Inside the boundary, show subtle internal paths and trust failures
- Highlight only a few internal risk points in red
- Use blue for neutral infrastructure, red only for risk

Typography:
- Question large, 34–42 pt
- Supporting phrases smaller, 14–16 pt
- Diagram labels 11–12 pt

Do not do:
- No cartoon hospital icon
- No giant lock icon
- No cloud-vs-hospital cliché split
- No dense explanatory copy
`
    },
    {
      id: "slide-9-federated-learning",
      label: "Slide 9",
      kind: "Concept Explainer",
      title: "What is Federated Learning?",
      summary:
        "要在 10 秒內講清楚概念：資料留在本地，移動的是 model updates，而不是原始病歷或影像。",
      prompt: `
Using the global design system above, create an elegant explanatory slide for Federated Learning.

Slide purpose:
Teach the concept quickly and visually. It should feel educational, clean, and easy to understand in under 10 seconds.

Exact on-slide text:
Title:
What is Federated Learning?

Supporting line:
Data stays local.
Model updates travel.

Minimal node labels:
Hospital A
Hospital B
Hospital C
Coordinator
Local training
Shared updates

Layout:
- Use a centered diagram
- Title top left
- Supporting line under the title
- The diagram occupies the middle two-thirds of the slide
- Leave generous margins

Diagram direction:
- Three hospitals or sites at the bottom or sides
- One central coordinator near the top or middle
- Local data stays inside each hospital block
- Only model updates move toward the coordinator
- Use blue / gray for the normal flow
- Add tiny “local data” locks or containment rings only if subtle and elegant

Typography:
- Title 28–32 pt
- Supporting line 15–17 pt
- Diagram labels 11–13 pt

Do not do:
- No textbook clutter
- No giant paragraph
- No 3D globe
- No too many arrows
`
    },
    {
      id: "slide-10-information-leak",
      label: "Slide 10",
      kind: "Leakage Paradox",
      title: "Data May Stay… But Information Can Still Leak",
      summary:
        "原始資料可以不動，但風險仍可經由 gradients、updates 或 membership inference 滲出，這頁需要冷靜而不安的感覺。",
      prompt: `
Using the global design system above, create the privacy-leakage paradox slide.

Slide purpose:
Show that even if raw data does not move, information may still leak through model updates or gradients. This slide should feel conceptually sharp and slightly uncomfortable.

Exact on-slide text:
Title:
Data May Stay…
But Information Can Still Leak

Supporting line:
Data does not move.
Risk can still exist.

Optional small labels:
Gradients
Updates
Reconstruction risk
Membership inference

Layout:
- Left side: strong title and supporting line
- Right side: one abstract conceptual visual
- The right-side visual should be more important than any text bullets
- Keep the slide extremely clean

Visual direction:
- Use an abstract reconstruction metaphor
- Example: fragmented gradient-like vectors or blocks partially reconstructing a medical image silhouette
- Another option: one blurred patient / imaging silhouette emerging from update signals
- The visual must not be sensational; it should be analytical and elegant
- Use red only sparingly at the leak point

Typography:
- Title 30–34 pt
- Supporting line 16–18 pt
- Optional labels 10–12 pt

Do not do:
- No equations
- No research paper screenshot
- No giant matrix of privacy attack taxonomy
- No cheesy dripping leak metaphor
`
    },
    {
      id: "slide-11-trust",
      label: "Slide 11",
      kind: "Trust Thesis",
      title: "The Real Problem Was Not Accuracy… It Was Trust",
      summary:
        "把討論重心從 benchmark accuracy 提升到 system trust，這一頁應該像 keynote thesis slide 一樣有記憶點。",
      prompt: `
Using the global design system above, create the trust slide.

Slide purpose:
Elevate the conversation from model accuracy to system trust. This should feel like a keynote “thesis” slide.

Exact on-slide text:
Title:
The Real Problem Was Not Accuracy…
It Was Trust

Supporting line:
A trustworthy AI system depends on a trustworthy chain.

Trust chain labels:
Data
Runtime
Output
Clinician

Layout:
- Very typographic slide
- Title dominates the upper left or center-left
- Lower half contains a clean trust-chain diagram or sequence
- One chain link or one pipeline segment should be subtly broken or highlighted

Visual direction:
- Use a minimalist chain / sequence / pipeline metaphor
- Prefer a clean trust chain of four nodes:
  Data → Runtime → Output → Clinician
- Show one break or integrity warning in the middle
- Keep the visual thin, elegant, and abstract

Typography:
- Title 34–42 pt
- “Trust” can be larger and heavier
- Supporting line 15–17 pt
- Chain labels 11–13 pt

Do not do:
- No giant padlock
- No “100% accuracy” comparison chart
- No cliché trust badge
- No crowded checklist
`
    },
    {
      id: "slide-12-leakpro",
      label: "Slide 12",
      kind: "Validation Mindset",
      title: "LeakPro: Test the Model Before You Share It",
      summary:
        "把 LeakPro 放在 pre-release privacy risk assessment 的語境裡，而不是產品宣傳或 flashy demo。",
      prompt: `
Using the global design system above, create the slide about pre-release privacy risk assessment using LeakPro.

Slide purpose:
Present LeakPro as a governance / validation mindset, not as a flashy product demo.

Exact on-slide text:
Title:
LeakPro:
Test the Model Before You Share It

Supporting line:
Do not only ask whether a model is accurate.
Ask whether it leaks.

Optional audit labels:
Privacy risk
Model sharing
Pre-release testing
Evidence

Layout:
- Left side: title and supporting line
- Right side: a refined audit / assessment visual
- The slide should feel like a product-quality validation checkpoint, not a software demo page

Visual direction:
- Show a model package or model card moving through an audit gate
- The audit gate produces a restrained risk panel or assessment output
- Use a minimal report card / evaluation sheet aesthetic
- Use gray and blue for normal, red only for highlighted risk areas
- If showing a UI-like element, keep it extremely simplified and not dashboard-heavy

Typography:
- Title 28–32 pt
- Supporting line 16–18 pt
- Micro labels 11–12 pt

Do not do:
- No full screenshot of terminal output
- No giant shield icon
- No product marketing vibe
- No crowded benchmark panel
`
    },
    {
      id: "slide-13-future-question",
      label: "Slide 13",
      kind: "Future Governance",
      title: "The Future Question for Medical AI",
      summary:
        "從靜態裝置轉向持續演化的系統，視覺和語氣都要帶出未來性與策略感。",
      prompt: `
Using the global design system above, create a forward-looking slide about the future governance question for medical AI.

Slide purpose:
Move the audience from static devices to evolving systems. This should feel reflective, strategic, and future-oriented.

Exact on-slide text:
Title:
The Future Question for Medical AI

Hero question:
How do we govern systems
that keep changing?

Lifecycle labels:
Build
Validate
Deploy
Monitor
Update
Revalidate

Layout:
- Title at top left
- Hero question large in the left or center-left
- On the right or around the question, place a lifecycle loop diagram
- The composition should feel open and forward-looking

Diagram direction:
- Create a circular or orbital lifecycle loop
- The loop should feel elegant and lightweight, not like a heavy process map
- The six lifecycle labels should sit around the loop
- Optional subtle progress line or orbit ring
- Keep the diagram minimal and stage-readable

Typography:
- Title 28–32 pt
- Hero question 32–40 pt
- Lifecycle labels 11–13 pt

Do not do:
- No generic “future AI” robot imagery
- No timeline clutter
- No excessive regulatory jargon on the slide
- No crowded roadmap
`
    },
    {
      id: "slide-14-samd-dna",
      label: "Slide 14",
      kind: "Secure by Design",
      title: "Embedding Security into the SaMD DNA",
      summary:
        "把 STRIDE、trust boundary、assets、data flow 與 control points 做成一個成熟的系統設計語言，而不是 compliance 海報。",
      prompt: `
Using the global design system above, create the STRIDE / secure-by-design slide for SaMD.

Slide purpose:
Show that security must be designed into the product DNA, not bolted on later. This slide must feel like rigorous system design.

Exact on-slide text:
Title:
Embedding security into the SaMD DNA

Supporting line:
Threat modeling turns architecture into control points.

Minimal labels:
STRIDE
Trust boundary
Assets
Data flow
Control points

Layout:
- Title top left
- Main body: one central architecture / threat-model composition
- Keep the slide technical but elegant
- Use one principal diagram only

Diagram direction:
- Show a simplified SaMD architecture with trust boundaries and data flow
- Around the architecture, place tiny STRIDE-inspired risk labels or nodes
- Another acceptable approach: a subtle DNA-like line structure morphing into system nodes and trust boundaries
- The architecture must remain the primary metaphor, not a decorative DNA stock image
- Use blue for normal architecture, red for risk points

Typography:
- Title 28–32 pt
- Supporting line 15–17 pt
- Diagram labels 10–12 pt

Do not do:
- No giant helix stock art
- No crowded security taxonomy
- No six giant colored bubbles
- No compliance poster look
`
    },
    {
      id: "slide-15-default-deny",
      label: "Slide 15",
      kind: "Default-Deny",
      title: "The ‘Default-Deny’ Clinical Environment",
      summary:
        "把 Zero Trust 與 boundary management 轉成臨床環境裡的 zone-based architecture，重點是只允許必要路徑。",
      prompt: `
Using the global design system above, create the Default-Deny clinical environment slide.

Slide purpose:
Translate Zero Trust and boundary management into a visual, clinical architecture mindset.

Exact on-slide text:
Title:
The ‘Default-Deny’ clinical environment

Supporting line:
Inside the hospital is not the same as trusted.

Zone labels:
Clinician workstation
AI inference enclave
Hospital core systems
Vendor access
Allowed paths only

Layout:
- Title top left
- The main diagram should occupy the center and right side
- Use a zone-based architecture visual with very few allowed connections highlighted
- The allowed paths should be blue; denied or blocked paths should be pale gray or thin red marks

Diagram direction:
- Draw 3–4 clean architectural zones
- Show only explicitly allowed paths
- Show blocked or absent paths implicitly, not dramatically
- Vendor access should be visually constrained and isolated
- The slide should feel like a secure operating environment blueprint

Typography:
- Title 28–32 pt
- Supporting line 15–17 pt
- Zone labels 11–13 pt

Do not do:
- No giant firewall icon
- No messy network spaghetti
- No dense network legend
- No giant red X everywhere
`
    },
    {
      id: "slide-16-clinical-stability",
      label: "Slide 16",
      kind: "Patch Governance",
      title: "Balancing Clinical Stability with Cybersecurity Responsiveness",
      summary:
        "這頁要成熟、克制，講的是治理判斷，不是簡單的快修補 versus 慢修補二分法。",
      prompt: `
Using the global design system above, create the patch governance tradeoff slide.

Slide purpose:
Show the tension between security speed and clinical stability in a mature, executive-level way. This should feel nuanced and responsible.

Exact on-slide text:
Title:
Balancing clinical stability
with cybersecurity responsiveness

Supporting line:
The right patch decision is not the fastest one.
It is the most controllable one.

Decision inputs:
Exploitability
Clinical impact
Validation burden
Rollback readiness

Layout:
- Use a sophisticated balance / spectrum composition
- Title on the upper left
- Main graphic centered: a horizontal spectrum or calibrated balance line
- Decision inputs sit below the main graphic as four small anchors
- Keep the visual restrained and mature

Visual direction:
- Prefer a precision instrument / calibrated spectrum visual over a cartoon seesaw
- Show two poles:
  Clinical stability
  Cybersecurity responsiveness
- Highlight a controlled decision zone, not a perfect center cliché
- This should feel like governance and operational judgment

Typography:
- Title 28–32 pt
- Supporting line 16–18 pt
- Input labels 11–12 pt

Do not do:
- No childish balance scale icon
- No giant red-green dichotomy
- No dense policy text
- No KPI dashboard
`
    },
    {
      id: "slide-17-patient-safety",
      label: "Slide 17",
      kind: "Manifesto Slide",
      title: "Patient Safety Supersedes Cybersecurity Speed",
      summary:
        "用安靜但堅定的方式做出倫理與營運上的宣示，接近 keynote creed 的感覺。",
      prompt: `
Using the global design system above, create a manifesto-style slide.

Slide purpose:
Make a strong ethical and operational statement. This slide should feel calm, authoritative, and final — almost like a keynote creed.

Exact on-slide text:
Hero statement:
Patient safety
supersedes
cybersecurity speed.

Supporting line:
In clinical environments, patching must be fast enough,
but also safe enough to trust.

Layout:
- This should be an almost all-typography slide
- Large hero statement on the left or centered-left
- A very quiet supporting line below
- Optional minimal image strip or faint clinical texture at the very bottom or far right
- Plenty of white space

Visual direction:
- If an image is used, it must be very quiet:
  a clinician workstation silhouette,
  a radiology console,
  or a faint medical device edge detail
- The image must not compete with the text

Typography:
- Hero statement 44–56 pt
- “Patient safety” should carry the most weight
- Supporting line 14–16 pt
- Consider using gray for “cybersecurity speed” so “Patient safety” leads visually

Do not do:
- No red emergency styling
- No emotional hospital stock photo
- No crowded supporting bullets
- No large icons
`
    },
    {
      id: "slide-18-closing-quote",
      label: "Slide 18",
      kind: "Closing Quote",
      title: "Closing Quote",
      summary:
        "最後一頁只保留 thesis，本體是 full-stack trust，不要讓 ending 變成 logo wall 或 thank-you collage。",
      prompt: `
Using the global design system above, create the final closing quote slide.

Slide purpose:
Deliver the final thesis with maximum clarity and elegance. This is the final memory slide.

Exact on-slide text:
AI security is not about protecting models.
It is about protecting the entire computing stack.

Optional small line:
From model security to full-stack trust

Layout:
- Make this slide extremely minimal
- Preferred option: dark finale slide with near-black background and white text
- Center-left or centered composition
- Optional faint ghosted outline of the stack in the background
- No other major visual elements

Visual direction:
- If using a background motif, use a very faint layered stack silhouette or thin-line architecture ghost
- Keep it almost invisible
- The text must be the hero

Typography:
- Main quote 34–44 pt, white
- Optional small line 12–14 pt, muted gray or blue
- Break the quote into two balanced lines
- Emphasize “entire computing stack”

Do not do:
- No applause graphic
- No thank-you collage
- No institutional logo wall
- No over-designed ending
`
    },
    {
      id: "appendix-acknowledgement",
      label: "Appendix",
      kind: "Appendix",
      title: "Acknowledgement",
      summary:
        "這頁建議放附錄，不打斷主流程，只保留安靜、尊重的致謝語氣。",
      prompt: `
Using the global design system above, create a quiet acknowledgment slide for the appendix.

Slide purpose:
Respectfully thank collaborators without interrupting the keynote flow.

Exact on-slide text:
Acknowledgement

Yu‑Te Wu
Jing‑Zhong Chen

Optional small supporting line:
With gratitude for guidance, collaboration, and technical discussion.

Layout:
- Very minimal white slide
- Title small at top left
- Two names centered-left or left aligned in the middle area
- Supporting line small and gray beneath
- Large whitespace

Typography:
- Title 20–24 pt
- Names 22–26 pt
- Supporting line 12–14 pt

Do not do:
- No portrait photos
- No long paragraph
- No decorative elements
- No heavy emphasis
`
    },
    {
      id: "full-deck-master-prompt",
      label: "Final",
      kind: "Master Prompt",
      title: "整份 deck 一次生成",
      summary:
        "如果想直接把整份 deck 一次交給 GPT，可以使用這段總 prompt，讓整體敘事與視覺更連貫。",
      prompt: `
Using the global design system already provided, design a complete keynote deck for the following slide sequence.
The deck must feel like one coherent Apple-level presentation for a cybersecurity conference.
Do not make it look like an academic poster or enterprise template.
Keep it premium, sparse, stage-readable, and technically credible.

Slide sequence:
1. Title slide
2. Opening keynote: movie vs tumor contrast
3. Real-world Taiwan incident: MacKay Memorial Hospital ransomware
4. The Untouched Model Paradox
5. In healthcare, AI is not just software. It is clinical risk. (FDA Section 524B)
6. Defending the full stack: a new architectural paradigm
7. The foundation of fragility: Hardware and Kernel exploits
8. The Protocol Frontier: Exploiting frameworks and agents
9. Anatomy of a local privilege escalation in Medical AI
10. If Data Never Leaves the Hospital, Is It Really Safe?
11. What is Federated Learning?
12. Data May Stay… But Information Can Still Leak
13. The Real Problem Was Not Accuracy… It Was Trust
14. LeakPro: Test the Model Before You Share It
15. The Future Question for Medical AI
16. Embedding security into the SaMD DNA
17. The ‘Default-Deny’ clinical environment
18. Balancing clinical stability with cybersecurity responsiveness
19. Patient safety supersedes cybersecurity speed
20. Closing quote

For each slide, provide:
- exact on-slide text
- layout direction
- visual / image direction
- diagram structure
- type hierarchy
- what to avoid
`
    }
  ] satisfies PromptSection[]
};

export type TalkPromptDeck = typeof talkPromptDeck;
