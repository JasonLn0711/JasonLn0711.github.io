export const site = {
  name: "Jason Chia-Sheng Lin",
  shortName: "Jason Lin",
  title: "Doctoral Researcher, Artificial Intelligence in Medical Imaging / Signal Analysis Lab",
  institution: "National Yang Ming Chiao Tung University",
  lab: "Artificial Intelligence in Medical Imaging / Signal Analysis Lab",
  url: "https://cs-kairos.com",
  learningUrl: "https://learn.cs-kairos.com",
  email: "contact@cs-kairos.com",
  github: "https://github.com/JasonLn0711",
  linkedin: "https://www.linkedin.com/in/jason-lin-1a648813b/",
  avatar: "/images/headshot.jpg",
  defaultTitle: "Jason Chia-Sheng Lin | Evidence-aware AI systems",
  description:
    "Personal research site and blog for evidence-aware AI systems in speech, clinical workflow support, agent governance, cybersecurity, and enterprise AI education.",
  nav: [
    { href: "/event-notes/", label: "Talks & Workshops", labelZh: "演講與工作坊筆記" },
    { href: "/blog/", label: "Blog", labelZh: "文章" },
    { href: "/research/", label: "Research", labelZh: "研究" },
    { href: "/projects/", label: "Projects", labelZh: "作品" },
    { href: "/teaching/", label: "Teaching", labelZh: "教學" },
    { href: "/about/", label: "About", labelZh: "關於我" }
  ]
} as const;

export const currentSnapshot = {
  period: "April-June 2026",
  headline: "Evidence-aware AI systems for high-stakes work.",
  summary:
    "I build and study AI systems where the hard part is not only model output, but evidence, review, governance, and safe handoff: speech decision stability, clinical workflow support, agent governance, cybersecurity evidence, and practical AI systems education.",
  focusAreas: [
    "Research evidence for speech-to-decision stability, provenance-bounded evidence packets, and false-governability forecasting.",
    "Public-safe prototypes for urology previsit support, vital-aware kiosk intake, realtime voice interaction, and local meeting-summary trust.",
    "Teaching materials that translate AI Gateway, agent governance, model serving, voice AI, and security into deployable engineering practice."
  ],
  boundary:
    "Recent work is summarized from public-safe repo artifacts and planning summaries. Raw planning notes, private contacts, patient-like data, raw transcripts, credentials, and patent-sensitive mechanics are intentionally kept out of the website."
} as const;

export const workTracks = [
  {
    title: "Research evidence",
    summary:
      "Turning manuscript and benchmark work into claim-gated evidence surfaces: CDS-ASR, PB-EGP/STV, TFSC false governability, and WISA CaseTrace.",
    href: "/research/"
  },
  {
    title: "Deployable prototypes",
    summary:
      "Building narrow, reviewable systems that demonstrate the workflow before making larger claims: UroPrevisit Navigator, AI Triage Kiosk, Jarvis Voice Sight, and Project AURA.",
    href: "/projects/"
  },
  {
    title: "Teaching and translation",
    summary:
      "Packaging AI systems engineering into practical learning artifacts: AI Gateway, agent governance, model serving, voice AI, cybersecurity, and enterprise delivery.",
    href: "/teaching/"
  }
] as const;

export const recentHighlights = [
  {
    date: "2026-06",
    period: "June 2026",
    category: "Teaching",
    title: "7-day Enterprise Voice AI Systems onboarding tutorial",
    summary:
      "Packaged the AI Systems Engineering Handbook into a 7-day consulting-style onboarding path for enterprise voice AI, AI Gateway, agent governance, red teaming, K8s, GPU sizing, and customer acceptance evidence.",
    status: "7-day Traditional Chinese tutorial with architecture, governance, security, deployment, and onboarding artifacts",
    href: "/teaching/enterprise-ai-architecture-sprint/"
  },
  {
    date: "2026-06",
    period: "June 2026",
    category: "Research",
    title: "CDS-ASR / JANUS evidence hardening",
    summary:
      "Advanced a speech-to-decision stability research line that tests whether downstream decisions remain stable under plausible ASR alternatives.",
    status: "Selected-300 aggregate review complete; raw audio and transcripts remain private",
    href: "/research/counterfactual-decision-stability-asr/"
  },
  {
    date: "2026-06",
    period: "June 2026",
    category: "Research",
    title: "PB-EGP and Support-Transfer Validation",
    summary:
      "Developed provenance-bounded evidence graph packet work for small-model decision support, with release gates, audit protocols, and public-benchmark orientation.",
    status: "Fallback package and validation gates ready for owner release-channel decision",
    href: "/research/provenance-bounded-evidence-packets/"
  },
  {
    date: "2026-05",
    period: "May-June 2026",
    category: "System",
    title: "AI Triage Kiosk demo",
    summary:
      "Built a synthetic vital-aware intake and staff-review summary demo for a June market demonstration, with a narrow API contract and explicit clinical-scope controls.",
    status: "Synthetic-data market demo; no autonomous diagnosis or production clinical triage",
    href: "/projects/ai-triage-kiosk-demo/"
  },
  {
    date: "2026-05",
    period: "May-June 2026",
    category: "System",
    title: "UroPrevisit Navigator",
    summary:
      "Hardened a urology previsit workflow prototype for adaptive question navigation, missing-field repair, clinician-review summaries, and PSA/CRM-ready proposal framing.",
    status: "Synthetic-data workflow prototype for staff-review support",
    href: "/projects/uroprevisit-navigator/"
  },
  {
    date: "2026-06",
    period: "June 2026",
    category: "System",
    title: "Jarvis Voice Sight",
    summary:
      "Built a mock-first realtime voice agent path with always-listening interaction, VAD, barge-in, turn isolation, streaming TTS, and Ollama/vLLM runtime support.",
    status: "Realtime prototype with typecheck, lint, test, smoke, health, and demo gates",
    href: "/projects/jarvis-voice-sight/"
  },
  {
    date: "2026-05",
    period: "May 2026",
    category: "Speaking",
    title: "CYBERSEC 2026 AI SaMD cybersecurity talk",
    summary:
      "Delivered a 30-minute session on cybersecurity practice for AI software medical devices, connecting FDA 524B, threat modeling, SBOM, Zero Trust, and auditable risk governance.",
    status: "Delivered May 6, 2026",
    href: "/talks/regulated-ai-cybersecurity/"
  },
  {
    date: "2026-05",
    period: "May-June 2026",
    category: "Research",
    title: "TFSC false-governability manuscript",
    summary:
      "Rebuilt an AI governance manuscript around false-governability onset, review scarcity, bounded authority, and reconstructable runtime governance.",
    status: "Submission-candidate package with public-safe evidence framing",
    href: "/research/false-governability-runtime-governance/"
  }
] as const;

export const timelineMonths = [
  {
    month: "April 2026",
    summary:
      "Research and public-profile foundations: journal-path revision, urology demo readiness, governed scam-content research routing, Network Security and coursework packaging, and CYBERSEC talk preparation.",
    items: [
      "Prepared evidence-led public-site and resume direction around trustworthy AI and speech systems.",
      "Moved urology previsit work toward a safe local demo and reviewer-ready workflow evidence.",
      "Kept Meta/Threads research bounded as reviewer-support and public-interest scam-risk work."
    ]
  },
  {
    month: "May 2026",
    summary:
      "Clinical workflow prototypes and manuscript reframing became the center of gravity: AI triage, UroPrevisit Navigator, Project AURA, TFSC, WISA, and CYBERSEC delivery.",
    items: [
      "Delivered CYBERSEC 2026 medical cybersecurity session.",
      "Converted imedtac AI triage into a narrow synthetic vital-aware demo with a staff-review summary boundary.",
      "Clarified the Health Taiwan / urology proposal route as PSA follow-up, adaptive previsit questions, clinician-review summaries, and CRM-ready fields."
    ]
  },
  {
    month: "June 2026",
    summary:
      "The work shifted into evidence hardening, release gates, and education packaging across CDS-ASR, PB-EGP/STV, TFSC, WISA, Jarvis Voice Sight, Project AURA, and the AI Systems Engineering Handbook.",
    items: [
      "Completed aggregate-safe research evidence surfaces for speech decision stability and evidence-packet work.",
      "Built AI systems engineering teaching packets around AI Gateway, agent governance, model serving, vLLM/SGLang, and enterprise delivery.",
      "Advanced realtime voice interaction and local meeting-summary trust prototypes with explicit runtime validation gates."
    ]
  }
] as const;

export const researchPillars = [
  {
    slug: "counterfactual-decision-stability-asr",
    title: "Counterfactual Decision-Stability ASR",
    shortTitle: "CDS-ASR",
    maturity: "Manuscript hardening",
    summary:
      "A speech-to-decision stability research line that asks whether downstream decisions remain stable under plausible transcript alternatives.",
    thesis:
      "ASR quality should be evaluated not only by word error, but by whether plausible recognition alternatives change downstream decisions in high-stakes conversational workflows.",
    why:
      "Real deployments use transcripts as input to decisions, summaries, and escalation logic. A transcript can look acceptable while still changing the action a downstream system takes.",
    evidence: [
      "JANUS workspace organized around audio, ASR hypotheses, risk atoms, counterfactual variants, CEIS scoring, and constrained recovery.",
      "Selected-300 aggregate review surface completed with dual-review and model-level assessment summaries.",
      "Evidence-chain audits preserve aggregate counts and readiness gates while keeping audio, transcripts, row IDs, and reviewer notes outside the public site."
    ],
    validation: ["ASR hypotheses", "Risk atoms", "Counterfactual variants", "Decision stability"],
    outputs: "Manuscript evidence, aggregate audits, recovery-policy checks, and submission-readiness artifacts.",
    boundary:
      "Public pages describe the research question and aggregate readiness only. Raw audio, transcripts, row content, local hypotheses, and reviewer notes remain private.",
    questions: [
      "Which transcript alternatives are plausible enough to matter for downstream review?",
      "When does low WER still hide decision-relevant risk?",
      "What recovery policy is conservative enough for high-stakes speech workflows?"
    ]
  },
  {
    slug: "provenance-bounded-evidence-packets",
    title: "Provenance-Bounded Evidence Packets",
    shortTitle: "PB-EGP / STV",
    maturity: "Benchmark design",
    summary:
      "Research on evidence graph packets that help small models make more stable, better-grounded decisions under the same token budget.",
    thesis:
      "For sub-10B models, the decisive question is often not more context, but better evidence discipline: source-bounded packets, valid provenance, and stable decision transfer.",
    why:
      "Organizations want smaller, cheaper, local, or private models to support decisions, but weak grounding can create unsupported claims and brittle outputs.",
    evidence: [
      "PB-EGP scope defines provenance-bounded evidence graph packets against top-k text, summaries, graph pruning, and context compression.",
      "Support-Transfer Validation work advanced through adjudication, fallback packaging, release manifests, and semantic validation.",
      "Pilot design focuses on public SciFact and FEVEROUS records with unsupported-claim, provenance-validity, correctness, and stability metrics."
    ],
    validation: ["Public records", "Packet schema", "Audit rubric", "Decision stability"],
    outputs: "Research charter, schemas, pilot fixtures, validation gates, and manuscript strategy.",
    boundary:
      "Benchmark rows, gold files, prompts, packet internals, and raw source text stay in the execution repo until a deliberate public release channel is chosen.",
    questions: [
      "What evidence structure helps a small model stay grounded under a fixed token budget?",
      "How should provenance validity be measured separately from answer correctness?",
      "When is a fallback-scope research package ready for public artifact release?"
    ]
  },
  {
    slug: "false-governability-runtime-governance",
    title: "False Governability and Runtime Governance",
    shortTitle: "False Governability",
    maturity: "Submission candidate",
    summary:
      "A technology-governance research line on how action-capable AI can appear governable while reconstructability collapses underneath.",
    thesis:
      "AI action scaling creates a review-scalability gap: organizations may preserve visible governance signals while losing the ability to reconstruct authority, evidence, review, and accountability.",
    why:
      "High-audit AI systems increasingly draft, route, classify, recommend, and act. Governance must therefore preserve action-episode accountability, not only policy language.",
    evidence: [
      "TFSC-facing manuscript rebuilt around false-governability onset under review scarcity.",
      "Taiwan 165 is used as a public-safe parameterization anchor for high-audit governance pressure.",
      "Evidence framing separates throughput from audit completeness, reconstructability, review backlog, and bounded-authority controls."
    ],
    validation: ["Governance mechanism", "Public-safe anchor", "Runtime accountability", "Submission proof"],
    outputs: "Manuscript package, conceptual figures, public-safe evidence architecture, and portal-proof artifacts.",
    boundary:
      "The website summarizes the governance mechanism and manuscript state. Protected records, legal claims, deployment claims, and domain-specific outcome claims require separate authorized evidence.",
    questions: [
      "How early can an organization forecast false-governability onset?",
      "Which traces preserve reconstructability when human review is scarce?",
      "What should governance block before unsupported action chains become institutional risk?"
    ]
  },
  {
    slug: "security-evidence-casetrace",
    title: "Security Evidence and CaseTrace",
    shortTitle: "CaseTrace",
    maturity: "Conference paper path",
    summary:
      "A security-evidence research direction that turns reviewer feedback into traceable public-source case evidence, uncertainty labels, and baseline comparison.",
    thesis:
      "Security papers become stronger when claims are mapped to reproducible case evidence, uncertainty, defense-control implications, and explicit comparison instead of broad threat narratives.",
    why:
      "AI/security research is often evaluated under scarce reviewer attention. Traceable evidence methods help reviewers see the technical contribution and its limits quickly.",
    evidence: [
      "WISA 2026 package reframed around a new contribution-first CaseTrace direction rather than a polished resubmission.",
      "Evidence package records 18 coded rows across 3 cases, source corpus, case index, missing-evidence notes, baseline comparison, and LNCS structure.",
      "CYBERSEC medical cybersecurity work translates FDA 524B, threat modeling, SBOM, Zero Trust, and Patch SLA into public teaching material."
    ],
    validation: ["Case corpus", "Uncertainty labels", "Baseline comparison", "Reviewer gates"],
    outputs: "CaseTrace manuscript path, readiness checklist, public talk material, and evidence mapping templates.",
    boundary:
      "The site only presents public-source methodology and teaching artifacts. Sensitive case material, controlled evidence, and unpublished details stay in their execution repos.",
    questions: [
      "What evidence makes a security case study reproducible enough for reviewer scrutiny?",
      "How can uncertainty labels prevent overclaiming in AI/security papers?",
      "What public teaching surface helps medical-AI teams operationalize cybersecurity controls?"
    ]
  }
] as const;

export const projects = [
  {
    slug: "uroprevisit-navigator",
    title: "UroPrevisit Navigator",
    category: "Clinical workflow support",
    readiness: "Synthetic workflow prototype",
    summary:
      "A urology previsit workflow that uses synthetic cases, adaptive governed questions, missing-field repair, and clinician-review summaries for PSA follow-up and CRM-ready proposal work.",
    humanPain:
      "Urology previsit work can lose useful context before the clinician sees the patient: symptoms, PSA follow-up signals, missing fields, and patient questions arrive in fragmented form.",
    systemResponse:
      "The prototype keeps the workflow narrow: synthetic intake, governed adaptive previsit questions, source-attributed state, role-separated outputs, and clinician-review summaries.",
    evidence: [
      "Versioned synthetic-case workflow with patient, nurse, clinician, visit-packet, and reviewer views.",
      "ASR-ready adaptive-question path that stops before diagnostic drift.",
      "Deep-cultivation positioning around PSA follow-up, clinician-review summaries, and CRM-ready fields."
    ],
    stack: ["Static web", "Synthetic cases", "Adaptive questions", "Local ASR", "Workflow validation"],
    cover: "/og/default.png",
    next: "Use the governed proposal route to clarify owners, data path, procurement, SOP, and CRM support before any production integration claim."
  },
  {
    slug: "ai-triage-kiosk-demo",
    title: "AI Triage Kiosk Demo",
    category: "Market demo / staff-review support",
    readiness: "Public-safe demo",
    summary:
      "A synthetic vital-aware kiosk intake demo that returns governed English follow-up questions and a staff-review summary for an imedtac market demonstration.",
    humanPain:
      "A customer-facing kiosk demo needs to show AI capability without implying autonomous clinical triage, diagnosis, treatment, or production HIS/EMR integration.",
    systemResponse:
      "The demo uses a fixed narrow contract: synthetic vital payload, choice-only follow-up, session continuity, safe fallback behavior, and staff-review summary output.",
    evidence: [
      "Two-endpoint API and field semantics aligned for the June demo baseline.",
      "Runtime checks for demo-only safety boundaries and governed-question ranking.",
      "QR summary bridge, option-label handling, partial-vitals behavior, and bearer-token rehearsal API hardened."
    ],
    stack: ["Static web", "JavaScript", "REST API", "Governed question routing", "Demo validation"],
    cover: "/og/default.png",
    next: "Keep future endpoint, wording, field, or UI changes under recorded change control with imedtac before widening scope."
  },
  {
    slug: "jarvis-voice-sight",
    title: "Jarvis Voice Sight",
    category: "Voice AI",
    readiness: "Realtime prototype",
    summary:
      "A mock-first realtime voice agent prototype with always-listening interaction, VAD, barge-in, turn isolation, sentence-level streaming TTS, and Ollama/vLLM runtime support.",
    humanPain:
      "Voice assistants often fail when conversation becomes interruptible, long-form, or latency-sensitive. The user needs to keep speaking without the system losing turn state.",
    systemResponse:
      "The prototype separates the frontend from an orchestrator and replaceable ASR, LLM, TTS, and emotion adapters, then measures whether users continue beyond the first exchange.",
    evidence: [
      "Realtime mode, stale-audio discard, cancellable TTS queue, and sentence-level audio streaming.",
      "Mock mode for microphone-unavailable contexts while preserving the full pipeline contract.",
      "Typecheck, lint, test, benchmark, realtime smoke, health, preflight, and demo scripts."
    ],
    stack: ["TypeScript", "Voice AI", "VAD", "Streaming TTS", "Ollama", "vLLM"],
    cover: "/og/default.png",
    next: "Use session memory and retrieval as the next design layer only after the continuous conversation loop remains stable."
  },
  {
    slug: "project-aura",
    title: "Project AURA",
    category: "Local meeting-summary trust",
    readiness: "Local desktop workflow",
    summary:
      "A local-first meeting-summary workflow that turns corrected transcripts into structured reports while making runtime model readiness and error states visible.",
    humanPain:
      "Meeting summaries are useful only if the user can trust the input, model runtime, field structure, and failure behavior instead of receiving a fluent but uninspectable digest.",
    systemResponse:
      "The workflow consumes corrected transcripts, runs local layered extraction, renders structured JSON to Markdown, and checks the local Ollama model path before use.",
    evidence: [
      "Parallel layered extraction, field schemas, prompts, sample report, and tests.",
      "Local Ollama preflight with exact model-tag checking and user-confirmed model pull behavior.",
      "Runtime hardening separated model, environment, and UI error states."
    ],
    stack: ["Python", "PyQt", "Ollama", "Local LLM", "Structured extraction"],
    cover: "/og/default.png",
    next: "Run the workflow on real corrected meeting transcripts and decide whether the next step is UI polish or real-use accumulation."
  },
  {
    slug: "speech-evidence-intelligence-pipeline",
    title: "Speech Evidence Intelligence Pipeline",
    category: "AI systems",
    readiness: "Prototype",
    summary:
      "An evidence-aware speech intelligence pipeline using ASR, retrieval, and LLM extraction to turn long-form conversational audio into structured, reviewable outputs.",
    humanPain:
      "Long-form conversational audio is hard to review because transcripts are noisy, speaker turns can be ambiguous, and evidence is scattered across time.",
    systemResponse:
      "The pipeline keeps audio, transcript spans, retrieval context, and final claims connected so reviewers can inspect where an output came from.",
    evidence: ["ASR and transcript segmentation", "Retrieval over evidence-bearing spans", "Structured extraction for reviewer handoff"],
    stack: ["Python", "ASR", "Whisper", "RAG", "LLM pipelines"],
    cover: "/projects/speech-evidence-intelligence-pipeline.svg",
    next: "Expand evaluation notes for transcript quality, retrieval grounding, and analyst review effort."
  },
  {
    slug: "fraud-conversation-analysis-rag",
    title: "Fraud Conversation Analysis with RAG",
    category: "Fraud analysis",
    readiness: "Research seed",
    summary:
      "A research-led case study on retrieval-augmented fraud conversation analysis designed to keep LLM outputs grounded in transcript evidence.",
    humanPain:
      "Fraud conversations contain intent, persuasion patterns, role shifts, and evidence cues that fluent summaries can flatten or overstate.",
    systemResponse:
      "Grounded retrieval surfaces relevant transcript segments before reasoning, so generated answers remain tied to recoverable dialogue evidence.",
    evidence: ["Transcript indexing", "Evidence-bearing dialogue retrieval", "Grounding and hallucination-control evaluation"],
    stack: ["Python", "RAG", "LLM pipelines", "Transcript analysis"],
    cover: "/projects/fraud-conversation-analysis-rag.svg",
    next: "Add explicit retrieval-quality and evidence-support evaluation artifacts."
  },
  {
    slug: "federated-learning-leakage-study",
    title: "Federated Learning Leakage Study",
    category: "Cybersecurity",
    readiness: "Research seed",
    summary:
      "A research case study on federated learning privacy leakage, gradient inversion risk, and defense trade-offs for sensitive collaborative training.",
    humanPain:
      "Federated learning can be mistaken for privacy safety even when gradients, model updates, or threat assumptions still expose sensitive data.",
    systemResponse:
      "The study compares collaborative training assumptions against realistic leakage scenarios and defense trade-offs.",
    evidence: ["Threat-model framing", "Gradient leakage literature", "Secure aggregation and privacy-utility comparison"],
    stack: ["PyTorch", "Federated learning", "Privacy", "Gradient leakage"],
    cover: "/projects/federated-learning-leakage-study.svg",
    next: "Compare attack and defense assumptions across collaborative training scenarios."
  }
] as const;

export const teachingHighlights = [
  {
    title: "7-day Enterprise Voice AI Systems onboarding tutorial",
    date: "June 2026",
    audience: "Students, builders, and enterprise AI teams",
    summary:
      "A 7-day public-safe sprint that turns enterprise voice AI / AI Coach / agent governance onboarding into concrete review artifacts: domain map, voice pipeline, gateway architecture, red-team harness, PII event schema, K8s checklist, GPU sizing table, demo memo, and first-30-days plan.",
    status: "Canonical 7-day version lives in the ai-systems-engineering-handbook accelerator repo.",
    href: "/teaching/enterprise-ai-architecture-sprint/"
  },
  {
    title: "Expanded 28/30-day enterprise AI bootcamp path",
    date: "June 2026",
    audience: "Course designers and technical mentors",
    summary:
      "The handbook keeps the 7-day onboarding tutorial as the first map, then expands the same enterprise voice AI, gateway, governance, security, deployment, and acceptance themes into a 28-day spiral bootcamp plus 2-day review and portfolio packaging layer.",
    status: "Expanded bootcamp path remains canonical in the handbook repo.",
    href: "/teaching/enterprise-ai-architecture-sprint/"
  },
  {
    title: "Medical AI cybersecurity teaching package",
    date: "May-June 2026",
    audience: "Medical-device and regulated-AI teams",
    summary:
      "Slide, audio, transcript, and test-question support around AI software medical-device cybersecurity, FDA 524B, threat modeling, SBOM, Zero Trust, and Patch SLA.",
    status: "CYBERSEC talk delivered; CDE teaching handoff prepared.",
    href: "/talks/regulated-ai-cybersecurity/"
  }
] as const;

export const teachingAccelerators = [
  {
    slug: "enterprise-ai-architecture-sprint",
    title: "7-day Enterprise Voice AI Systems Onboarding",
    date: "June 2026",
    audience: "Students, builders, course designers, and enterprise AI teams",
    summary:
      "A Traditional Chinese 7-day consulting-style onboarding tutorial for enterprise voice AI / AI Coach / agent governance delivery, built around architecture, governance, security, deployment, validation, and customer-acceptance evidence.",
    thesis:
      "Enterprise AI onboarding is strongest when a learner can explain the end-to-end system, produce reviewable artifacts, and name the next validation layer for deployment, safety, latency, cost, and customer acceptance.",
    sourceRepo: "ai-systems-engineering-handbook",
    sourcePath: "src/content/teaching/enterprise-ai-architecture-sprint/",
    sourceHref: "/teaching/enterprise-ai-architecture-sprint/",
    boundary:
      "The website publishes the full public-safe 7-day onboarding pages. The handbook repo remains the broader source package for worksheets, instructor guides, rubrics, reference answers, handoffs, and expanded 28/30-day bootcamp materials.",
    evidenceDefinition: [
      "one-page domain brief",
      "50 survival terms",
      "enterprise voice pipeline diagram",
      "AI Gateway architecture and tool registry",
      "red-team mini harness and PII policy event schema",
      "K8s checklist and GPU sizing table",
      "demo script, architecture memo, onboarding pack, and first-30-days plan"
    ],
    expansionModel: [
      "The 7-day version builds the first system map and artifact set.",
      "The 28-day spiral bootcamp deepens the same topics into deployable capability.",
      "The 30-day version adds mock review and portfolio packaging before handoff."
    ],
    days: [
      {
        number: 1,
        day: "Day 1",
        slug: "day-01-domain-map",
        title: "Domain map and interview-signal issue tree",
        status: "Canonical in the 7-day tutorial",
        published: true,
        href: "/teaching/enterprise-ai-architecture-sprint/day-01-domain-map/",
        sourcePath: "src/content/teaching/enterprise-ai-architecture-sprint/day-01-domain-map.md",
        sourceHref: "/teaching/enterprise-ai-architecture-sprint/day-01-domain-map/",
        description:
          "Learners convert enterprise AI signals into a domain brief, 50 survival terms, and an issue tree for voice AI / AI Coach system delivery.",
        firstConclusion:
          "The first delivery task is a system map, not a model list.",
        outcomes: [],
        deliverables: ["One-page domain brief.", "50 survival terms.", "Issue tree."],
        sections: [],
        requestLifecycle: [],
        vocabulary: [],
        riskControls: [],
        worksheetPrompts: [],
        nextGate:
          "Day 2 turns the system map into a voice AI pipeline and model inventory."
      },
      {
        number: 2,
        day: "Day 2",
        slug: "day-02-voice-ai-pipeline",
        title: "Voice AI pipeline",
        status: "Canonical in the 7-day tutorial",
        published: true,
        href: "/teaching/enterprise-ai-architecture-sprint/day-02-voice-ai-pipeline/",
        sourcePath: "src/content/teaching/enterprise-ai-architecture-sprint/day-02-voice-ai-pipeline.md",
        sourceHref: "/teaching/enterprise-ai-architecture-sprint/day-02-voice-ai-pipeline/",
        description:
          "Learners map VAD, diarization, overlap handling, hotword correction, ASR, TTS latency, model inventory, and latency evidence.",
        firstConclusion:
          "Enterprise voice AI quality depends on pipeline evidence, not transcription alone.",
        outcomes: [],
        deliverables: ["Voice pipeline diagram.", "Model inventory.", "Latency table."],
        sections: [],
        requestLifecycle: [],
        vocabulary: [],
        riskControls: [],
        worksheetPrompts: [],
        nextGate:
          "Day 3 connects the voice pipeline to RAG, agent tools, and AI Gateway control boundaries."
      },
      {
        number: 3,
        day: "Day 3",
        slug: "day-03-rag-agent-gateway",
        title: "RAG, agent, tool use, and AI Gateway",
        status: "Canonical in the 7-day tutorial",
        published: true,
        href: "/teaching/enterprise-ai-architecture-sprint/day-03-rag-agent-gateway/",
        sourcePath: "src/content/teaching/enterprise-ai-architecture-sprint/day-03-rag-agent-gateway.md",
        sourceHref: "/teaching/enterprise-ai-architecture-sprint/day-03-rag-agent-gateway/",
        description:
          "Learners connect retrieval schemas, tool registries, agent boundaries, and gateway control-plane decisions.",
        firstConclusion:
          "RAG and agents become enterprise-ready when gateway, tool, data, memory, policy, and audit boundaries are explicit.",
        outcomes: [],
        deliverables: ["RAG schema.", "Tool registry.", "Gateway architecture."],
        sections: [],
        requestLifecycle: [],
        vocabulary: [],
        riskControls: [],
        worksheetPrompts: [],
        nextGate:
          "Day 4 turns the gateway and agent assumptions into safety and red-team evidence."
      },
      {
        number: 4,
        day: "Day 4",
        slug: "day-04-pii-guardrails-red-team",
        title: "PII, guardrails, and red teaming",
        status: "Canonical in the 7-day tutorial",
        published: true,
        href: "/teaching/enterprise-ai-architecture-sprint/day-04-pii-guardrails-red-team/",
        sourcePath: "src/content/teaching/enterprise-ai-architecture-sprint/day-04-pii-guardrails-red-team.md",
        sourceHref: "/teaching/enterprise-ai-architecture-sprint/day-04-pii-guardrails-red-team/",
        description:
          "Learners define red-team cases, expected controls, pass/fail rules, audit evidence, and PII policy event schema.",
        firstConclusion:
          "Red teaming is regression evidence for enterprise controls.",
        outcomes: [],
        deliverables: ["Red-team mini harness spec.", "PII policy event schema."],
        sections: [],
        requestLifecycle: [],
        vocabulary: [],
        riskControls: [],
        worksheetPrompts: [],
        nextGate:
          "Day 5 connects safety evidence to deployment and capacity planning."
      },
      {
        number: 5,
        day: "Day 5",
        slug: "day-05-k8s-gpu-sizing",
        title: "Docker, K8s, GPU sizing, and vLLM",
        status: "Canonical in the 7-day tutorial",
        published: true,
        href: "/teaching/enterprise-ai-architecture-sprint/day-05-k8s-gpu-sizing/",
        sourcePath: "src/content/teaching/enterprise-ai-architecture-sprint/day-05-k8s-gpu-sizing.md",
        sourceHref: "/teaching/enterprise-ai-architecture-sprint/day-05-k8s-gpu-sizing/",
        description:
          "Learners connect containers, deployment manifests, model weights, KV cache, context length, concurrency, VRAM, and p50/p95 latency.",
        firstConclusion:
          "Deployment readiness needs capacity and latency math.",
        outcomes: [],
        deliverables: ["K8s manifest checklist.", "GPU sizing spreadsheet."],
        sections: [],
        requestLifecycle: [],
        vocabulary: [],
        riskControls: [],
        worksheetPrompts: [],
        nextGate:
          "Day 6 integrates the architecture into a reviewable demo and memo."
      },
      {
        number: 6,
        day: "Day 6",
        slug: "day-06-integrated-demo-memo",
        title: "Integrated demo and architecture memo",
        status: "Canonical in the 7-day tutorial",
        published: true,
        href: "/teaching/enterprise-ai-architecture-sprint/day-06-integrated-demo-memo/",
        sourcePath: "src/content/teaching/enterprise-ai-architecture-sprint/day-06-integrated-demo-memo.md",
        sourceHref: "/teaching/enterprise-ai-architecture-sprint/day-06-integrated-demo-memo/",
        description:
          "Learners package the demo flow, architecture memo, known limits, validation hooks, and customer-acceptance evidence.",
        firstConclusion:
          "A demo becomes useful when reviewers can inspect the evidence behind it.",
        outcomes: [],
        deliverables: ["Demo script.", "Two-page architecture memo.", "Known limits."],
        sections: [],
        requestLifecycle: [],
        vocabulary: [],
        riskControls: [],
        worksheetPrompts: [],
        nextGate:
          "Day 7 turns the sprint into onboarding questions and a first-30-days plan."
      },
      {
        number: 7,
        day: "Day 7",
        slug: "day-07-onboarding-pack",
        title: "Onboarding pack and first 30 days",
        status: "Canonical in the 7-day tutorial",
        published: true,
        href: "/teaching/enterprise-ai-architecture-sprint/day-07-onboarding-pack/",
        sourcePath: "src/content/teaching/enterprise-ai-architecture-sprint/day-07-onboarding-pack.md",
        sourceHref: "/teaching/enterprise-ai-architecture-sprint/day-07-onboarding-pack/",
        description:
          "Learners consolidate artifacts into an onboarding pack, first-week question list, milestone plan, and 30-day validation path.",
        firstConclusion:
          "The sprint closes by making the first week and first month executable.",
        outcomes: [],
        deliverables: ["Onboarding pack.", "First-week question list.", "30-day plan."],
        sections: [],
        requestLifecycle: [],
        vocabulary: [],
        riskControls: [],
        worksheetPrompts: [],
        nextGate:
          "Use the expanded 28/30-day spiral bootcamp when this first map needs deeper implementation practice."
      }
    ]
  }
] as const;

export const writings = [
  {
    slug: "speech-evidence-pipelines",
    title: "Designing Speech Evidence Pipelines with ASR and LLMs",
    date: "2026-02-18",
    category: "Research note",
    readTime: "8 min",
    summary:
      "Speech intelligence becomes more useful when it preserves evidence, exposes uncertainty, and helps people review complex conversations with more confidence.",
    tags: ["Speech", "ASR", "Evidence"],
    body: [
      "Speech intelligence becomes much more useful when it goes beyond raw transcription. In many real settings, a transcript is only the first step.",
      "Instead of treating the task as transcription plus summarization, I prefer to frame it as evidence-aware conversational analysis.",
      "The most useful speech intelligence systems are not the ones that sound the smartest. They are the ones that preserve evidence, expose uncertainty, and help people review complex conversations."
    ]
  },
  {
    slug: "investigation-and-trustworthy-ai",
    title: "From Cybercrime Investigation to Trustworthy AI",
    date: "2026-02-04",
    category: "Essay",
    readTime: "7 min",
    summary:
      "Investigation work shaped how I think about evidence, adversarial behavior, failure analysis, and AI systems that need to be trusted in practice.",
    tags: ["Trustworthy AI", "Investigation", "Systems"],
    body: [
      "Investigation-informed thinking changes the way an AI system is evaluated. The central question is not whether the answer sounds fluent, but whether the evidence path survives scrutiny.",
      "That background makes traceability, uncertainty, and recovery behavior feel like system requirements rather than optional polish.",
      "Trustworthy AI work benefits when builders treat evidence, failure modes, and human judgment as part of the architecture."
    ]
  },
  {
    slug: "flat-ui-to-spatial-interface",
    title: "From Flat UI to Spatial Interface",
    date: "2026-01-24",
    category: "Design note",
    readTime: "6 min",
    summary:
      "A note on interface depth, spatial hierarchy, and why evidence-heavy systems need more than flat lists of generated text.",
    tags: ["Interface", "UX", "AI Systems"],
    body: [
      "Evidence-heavy AI interfaces need spatial hierarchy. Reviewers need to see what is primary, what supports it, and what remains uncertain.",
      "Flat lists are easy to generate but hard to inspect under pressure. A spatial interface can make sources, claims, risks, and next actions legible.",
      "The goal is not decorative depth. The goal is lower cognitive load for people making careful decisions."
    ]
  },
  {
    slug: "cross-node-fraud-intelligence-minimal-disclosure",
    title: "Cross-Node Fraud Intelligence with Minimal Disclosure",
    date: "2026-01-10",
    category: "Research sketch",
    readTime: "9 min",
    summary:
      "A sketch on sharing useful fraud-intelligence signals across nodes while preserving privacy, scope, and review boundaries.",
    tags: ["Fraud", "Privacy", "Evidence"],
    body: [
      "Fraud intelligence becomes more useful when patterns can be compared across nodes, but disclosure needs to remain bounded.",
      "The design problem is to expose enough signal for coordination while keeping raw sensitive evidence protected.",
      "A useful system should help reviewers understand what pattern was found, what supports it, and what should stay local."
    ]
  }
] as const;

export const talkHighlights = [
  {
    slug: "cybersec-2026",
    event: "CYBERSEC 2026",
    title: "AI software medical-device cybersecurity: from FDA 524B to threat modeling and Patch SLA",
    summary:
      "Breakout session on cybersecurity practice for AI software medical devices, connecting FDA 524B, threat modeling, SBOM, Zero Trust design, and auditable risk governance.",
    schedule: "May 6, 2026 · 16:15-16:45",
    venue: "Taipei Nangang Exhibition Center Hall 2 · 4F Conference Room 4A",
    format: "Breakout session",
    href: "/talks/regulated-ai-cybersecurity/"
  },
  {
    slug: "ai-systems-handbook",
    event: "AI Systems Engineering Handbook",
    title: "7-day enterprise voice AI systems onboarding",
    summary:
      "Traditional Chinese onboarding tutorial that turns enterprise voice AI, AI Gateway, agent governance, red teaming, PII controls, K8s deployment, GPU sizing, and customer acceptance into reviewable artifacts.",
    schedule: "June 2026",
    venue: "Public learning repository",
    format: "Teaching system",
    href: "/teaching/enterprise-ai-architecture-sprint/"
  },
  {
    slug: "cisc-2025-ransomware",
    event: "CISC 2025",
    title: "Evolution and Defense Challenges of Ransomware-as-a-Service in the AI Era",
    summary:
      "English conference paper using Medusa and CrazyHunter to connect AI-era RaaS tradecraft with practical zero-trust defense.",
    schedule: "May 28-29, 2025",
    venue: "Feng Chia University",
    format: "Conference paper",
    href: "/talks/"
  },
  {
    slug: "cisc-2025-threat-pulse",
    event: "CISC 2025",
    title: "Integration of Threat Pulse Modeling into the ZTAID Zero Trust Maturity Assessment Model",
    summary:
      "English conference paper proposing a way to translate live cyber threat intelligence into ZTAID maturity signals.",
    schedule: "May 28-29, 2025",
    venue: "Feng Chia University",
    format: "Conference paper",
    href: "/talks/"
  }
] as const;

export const workingPrinciples = [
  {
    title: "Evidence stays visible.",
    subtitle: "Claims need a trail.",
    body:
      "I prefer systems and writing where sources, assumptions, scope, and decisions stay inspectable instead of being buried behind polished language."
  },
  {
    title: "Boundaries are design controls.",
    subtitle: "Clarity builds trust.",
    body:
      "Clinical, security, privacy, and publication boundaries are part of the architecture. Narrow scope is useful when it makes review and validation stronger."
  },
  {
    title: "Build the smallest honest demo.",
    subtitle: "Proof before expansion.",
    body:
      "The useful first artifact is often a narrow workflow that makes one claim testable: a staff-review summary, an evidence packet, a voice turn, or a validation gate."
  },
  {
    title: "Translate across audiences.",
    subtitle: "Research should become usable.",
    body:
      "I care about turning technical research into reviewer-facing manuscripts, demos, teaching packets, and operational checklists without losing claim discipline."
  }
] as const;

export const contactIntents = [
  {
    title: "Research collaboration",
    summary: "Explore joint research, datasets, benchmarks, manuscripts, or new evidence-aware AI problems worth studying.",
    prompt: "Send the research question, current evidence, timeline, and what kind of collaboration would be useful."
  },
  {
    title: "Clinical workflow or regulated AI demo",
    summary: "Discuss a synthetic-data workflow, staff-review support tool, cybersecurity evidence map, or deployment-governance question.",
    prompt: "Share the setting, decision pressure, stakeholders, and what cannot be exposed publicly."
  },
  {
    title: "Teaching, seminar, or workshop",
    summary: "Invite me to speak or help structure a learning package around AI systems engineering, voice AI, cybersecurity, or agent governance.",
    prompt: "Include audience, format, date range, language, and the learning outcome the session should support."
  },
  {
    title: "Early idea or messy draft",
    summary: "Share a nascent idea, rough plan, or half-formed thought that needs clearer scope, evidence, or next action.",
    prompt: "Send the rough version, what feels unclear, and the smallest next answer that would help."
  }
] as const;

export const audienceRoutes = [
  {
    slug: "new-visitor",
    title: "I do not know Jason yet.",
    audience: "New visitors, recruiters, collaborators, and reviewers.",
    pain: "You need a fast map of identity, recent work, and collaboration fit.",
    helps: "Start with the Now page, then choose Research, Systems, or Writing.",
    href: "/now/"
  },
  {
    slug: "reviewing",
    title: "I am reviewing or evaluating.",
    audience: "Reviewers, program committees, hiring readers, and evaluation teams.",
    pain: "You need evidence, scope, and reasoning without a long discovery path.",
    helps: "Start from research programs, public artifacts, and validation paths.",
    href: "/research/"
  },
  {
    slug: "building",
    title: "I want to inspect systems.",
    audience: "Engineers, collaborators, and technical partners.",
    pain: "You need to know what exists, what it proves, and what remains bounded.",
    helps: "Open the Systems page and inspect each workflow by capability, evidence, and next validation layer.",
    href: "/projects/"
  },
  {
    slug: "learning",
    title: "I want to learn from the work.",
    audience: "Students, builders, and early researchers.",
    pain: "You need readable explanations and reusable learning paths.",
    helps: "Use Teaching and Writing for long-form notes, course surfaces, and public framing.",
    href: "/teaching/"
  }
] as const;

export const designConcepts = [
  {
    slug: "hero-living-research-atlas",
    title: "Hero / Living Research Atlas",
    image: "/design/v3-concepts/01-hero-living-research-atlas.png",
    purpose: "Open with a human, warm, evidence-led research identity.",
    translation: "Archived v3 design reference retained as source history."
  },
  {
    slug: "audience-route-atlas",
    title: "Audience Route Atlas",
    image: "/design/v3-concepts/02-audience-route-atlas.png",
    purpose: "Let different visitors enter by intent instead of guessing the right page.",
    translation: "Archived v3 design reference retained as source history."
  },
  {
    slug: "research-atlas",
    title: "Research Atlas",
    image: "/design/v3-concepts/03-research-atlas.png",
    purpose: "Show three research territories as inspectable evidence directions.",
    translation: "Archived v3 design reference retained as source history."
  },
  {
    slug: "project-evidence-lab",
    title: "Project Evidence Lab",
    image: "/design/v3-concepts/04-project-evidence-lab.png",
    purpose: "Turn projects into benches that show problem, system, evidence, and maturity.",
    translation: "Archived v3 design reference retained as source history."
  },
  {
    slug: "talks-public-framing",
    title: "Talks / Public Framing",
    image: "/design/v3-concepts/05-talks-public-framing.png",
    purpose: "Make talks readable by audience fit and decision value.",
    translation: "Archived v3 design reference retained as source history."
  },
  {
    slug: "writing-reasoning-archive",
    title: "Writing / Reasoning Archive",
    image: "/design/v3-concepts/06-writing-reasoning-archive.png",
    purpose: "Present writing as inspectable reasoning rather than generic posts.",
    translation: "Archived v3 design reference retained as source history."
  },
  {
    slug: "about-working-model",
    title: "About / Working Model",
    image: "/design/v3-concepts/07-about-working-model.png",
    purpose: "Translate Jason's calm, caring, rigorous style into collaboration principles.",
    translation: "Archived v3 design reference retained as source history."
  },
  {
    slug: "contact-intents",
    title: "Contact Intents",
    image: "/design/v3-concepts/08-contact-intents.png",
    purpose: "Make outreach specific, low-pressure, and easy to start.",
    translation: "Archived v3 design reference retained as source history."
  }
] as const;

export const zhTw = {
  homeTitle: "把複雜的高風險 AI 工作整理成可被信任的證據路徑。",
  homeLead:
    "這是 Jason Chia-Sheng Lin 的個人研究網站與寫作空間：整理近期在可信任 AI、語音決策穩定性、臨床流程支援、AI agent governance、資安與 AI 系統工程教學上的公開安全成果。",
  contactTitle: "先把粗略版本寄來就可以。",
  contactLead:
    "如果你有研究合作、受規範 AI 問題、演講邀請，或還沒有整理好的初步想法，可以用低壓力的方式開始。"
} as const;

export function findResearch(slug: string) {
  return researchPillars.find((item) => item.slug === slug);
}

export function findProject(slug: string) {
  return projects.find((item) => item.slug === slug);
}

export function findWriting(slug: string) {
  return writings.find((item) => item.slug === slug);
}

export function findTeachingAccelerator(slug: string) {
  return teachingAccelerators.find((item) => item.slug === slug);
}

export function findTeachingDay(acceleratorSlug: string, daySlug: string) {
  const accelerator = findTeachingAccelerator(acceleratorSlug);

  if (!accelerator) {
    return undefined;
  }

  return accelerator.days.find((day) => day.slug === daySlug);
}

export const routePaths = [
  "/event-notes/", "/zh-tw/event-notes/",
  "/event-notes/2026-10-24-web-animation/", "/zh-tw/event-notes/2026-10-24-web-animation/",
  "/",
  "/now/",
  "/design/",
  "/audiences/",
  "/research/",
  ...researchPillars.map((item) => `/research/${item.slug}/`),
  "/projects/",
  ...projects.map((item) => `/projects/${item.slug}/`),
  "/teaching/",
  ...teachingAccelerators.map((item) => `/teaching/${item.slug}/`),
  ...teachingAccelerators.flatMap((accelerator) =>
    accelerator.days.filter((day) => day.published).map((day) => day.href)
  ),
  "/talks/",
  "/talks/regulated-ai-cybersecurity/",
  "/writing/",
  "/blog/",
  "/about/",
  "/contact/",
  "/resume/",
  "/links/",
  "/zh-tw/",
  "/zh-tw/contact/"
];


// Homepage curation references published records; translations describe the same articles.
export const homeFeaturedSlugs = [
  "investigation-and-trustworthy-ai",
  "speech-evidence-pipelines",
  "flat-ui-to-spatial-interface"
] as const;

export const homeArticleZh: Record<string, { title: string; description: string }> = {
  "investigation-and-trustworthy-ai": {
    title: "從科技犯罪偵查到可信任 AI",
    description: "科技犯罪偵查的經驗，如何影響我對證據、對抗行為與高風險 AI 系統的思考。"
  },
  "speech-evidence-pipelines": {
    title: "用 ASR 與 LLM 設計語音證據流程",
    description: "結合語音辨識、檢索與語言模型，讓分析結果能回到逐字稿中的證據。"
  },
  "flat-ui-to-spatial-interface": {
    title: "從平面 UI 到空間介面",
    description: "從 Liquid Glass、visionOS 與 AI，思考搜尋、工具協作和跨應用操作的介面變化。"
  },
  "cross-node-fraud-intelligence-minimal-disclosure": {
    title: "詐欺情資的最小揭露：跨節點形成模式",
    description: "當證據分散在不同節點，如何在資訊揭露的限制下辨識共同模式，並保留可檢視的依據。"
  },
  "recent-work-apr-jun-2026": {
    title: "2026 年 4–6 月工作整理：以證據為基礎的 AI 系統",
    description: "整理語音決策穩定性、臨床流程原型、即時語音、執行時治理與 AI 系統工程教材的公開成果。"
  }
};

export const homeCopy = {
  en: {
    eyebrow: "AI · Cybersecurity · Learning",
    role: "Doctoral researcher at National Yang Ming Chiao Tung University",
    intro: "I study AI and cybersecurity, and share what I learn about speech systems, technical practice, and working across disciplines.",
    detail: "My background in cybercrime investigation shapes how I think about evidence, security, and human judgment.",
    start: "Start reading", about: "About me", featured: "A few places to start",
    featuredNote: "Selected essays on the questions behind my work.",
    latest: "Latest writing", latestNote: "Notes, essays, and updates, by publication date.",
    all: "All articles", topics: "Follow a thread", topicsNote: "Choose a subject and keep reading.",
    work: "Research & practice", workNote: "The research, systems, and teaching behind the writing.",
    empty: "No articles have been published yet.", emptyLink: "Explore the teaching materials",
    footer: "Keep in touch", footerNote: "For research conversations, teaching, and collaboration.",
    cv: "CV", now: "Work archive", contact: "Contact", home: "Home", skip: "Skip to content"
  },
  "zh-Hant": {
    eyebrow: "AI · 資安 · 學習",
    role: "國立陽明交通大學博士研究者",
    intro: "我是 Jason，研究 AI 與資安，也分享語音系統、技術實作與跨領域學習的筆記。",
    detail: "過去從事科技犯罪偵查的經驗，持續影響我對證據、安全與人的判斷的思考。",
    start: "開始閱讀", about: "關於我", featured: "從這幾篇開始",
    featuredNote: "先透過文章，認識我關注的問題。",
    latest: "最新文章", latestNote: "依發布日期排列的筆記、文章與工作整理。",
    all: "所有文章", topics: "沿著主題閱讀", topicsNote: "選一個感興趣的方向，繼續讀下去。",
    work: "研究與實作", workNote: "文章背後的研究、系統與教學。",
    empty: "目前尚無已發布的文章。", emptyLink: "先看看教學內容",
    footer: "保持聯繫", footerNote: "歡迎交流研究問題、教學與合作想法。",
    cv: "履歷", now: "歷年工作", contact: "聯絡", home: "首頁", skip: "跳至主要內容"
  }
} as const;

export const homeTopics = [
  { href: "/blog/series/evidence-aware-ai/", en: "AI & evidence", zh: "AI 與證據", type: "Reading series", typeZh: "系列閱讀" },
  { href: "/talks/regulated-ai-cybersecurity/", en: "Security & governance", zh: "資安與治理", type: "Talk", typeZh: "公開講座" },
  { href: "/blog/speech-evidence-pipelines/", en: "Speech & systems", zh: "語音與系統", type: "Research note", typeZh: "研究筆記" },
  { href: "/teaching/", en: "Teaching & learning", zh: "教學與學習", type: "Teaching materials", typeZh: "教學內容" }
] as const;

const homeResearch = findResearch("counterfactual-decision-stability-asr")!;
const homeProject = findProject("project-aura")!;
const homeTeaching = findTeachingAccelerator("enterprise-ai-architecture-sprint")!;
export const homeWork = [
  {
    title: "CDS-ASR / JANUS", titleZh: "CDS-ASR / JANUS",
    href: `/research/${homeResearch.slug}/`, kind: "Research", kindZh: "研究",
    summary: homeResearch.summary, status: homeResearch.maturity,
    summaryZh: "研究合理的語音辨識差異，是否會改變後續判斷。", statusZh: "論文證據強化階段"
  },
  {
    title: homeProject.title, titleZh: homeProject.title,
    href: `/projects/${homeProject.slug}/`, kind: "System", kindZh: "系統",
    summary: homeProject.summary, status: homeProject.readiness,
    summaryZh: "從校正後逐字稿產生結構化會議報告，並呈現本機模型的執行狀態與錯誤。", statusZh: "本機桌面工作流程"
  },
  {
    title: homeTeaching.title, titleZh: "企業語音 AI 系統：七日入門教材",
    href: homeTeaching.sourceHref, kind: "Teaching", kindZh: "教學",
    summary: homeTeaching.summary, status: homeTeaching.date,
    summaryZh: "以架構、治理、安全、部署與驗收產出，逐步認識企業語音 AI 系統。", statusZh: "2026 年 6 月教材"
  }
] as const;

// Public editorial notes only. Future entries require a separate publication review.
export const eventNotes = [{
  slug: "2026-10-24-web-animation",
  date: "2026-10-24", updated: "2026-10-24",
  scheduledTime: "14:00–15:00", timezone: "Asia/Taipei (UTC+08:00)",
  registrationUrl: "https://docs.google.com/forms/d/e/1FAIpQLScMeJDhCFqzrYfCtlqkIiV9_gLlUVybOL_EAJn6kkDK6JGGqA/viewform",
  en: {
    title: "AI-assisted brand motion: workshop notes",
    event: "October 24 free online talk | Build animated, interactive websites with AI",
    announcedTopic: "AI-powered web motion | Interactive website design in practice (AI 讓網頁動起來｜互動網頁設計實戰)",
    slidesTitle: "AI-powered brand motion | Motion design in practice (AI 讓品牌動起來｜動態設計實戰)",
    titleNote: "The registration announcement and the slide deck are recorded under their respective titles.",
    organizer: "Claude x Codex online study group", platform: "Zoom · free online session",
    registrationStatus: "Registration closed (public form checked on October 24). Link retained as an event source.",
    speakerBio: "The organizer introduces Nocts as a UI/UX and web designer who combines frontend development, web motion and AI coding to turn designs into working websites.",
    announcedContent: "The announcement covers interaction and animation, explaining content, style and interaction needs to AI, a one-page demonstration and a public prompt guide. It welcomes beginners building personal sites, portfolios or brand pages, as well as engineers and designers; no AI experience, project idea or preparation is required.",
    type: "Talk", format: "Online",
    summary: "From brand personality and storyboards to AI workflows, web effects, media performance and session Q&A.",
    attribution: "Nocts (奇昌) · presenter named in the event announcement",
    status: "Workshop ended; notes updated from the supplied session transcript.",
    scope: "Original synthesis of session topics, materials and official technical references. Visual media, hands-on results and the promised follow-up video remain to be reviewed.",
    sections: [
      {
            "title": "Choose the medium and the message",
            "text": "Website intros establish a first impression; scroll reveals pace a story; loading states, transitions and notifications explain app state; product explainers condense a workflow into a readable sequence. Give each moment one focal point, then coordinate attention, rhythm, feedback and continuity.",
            "source": "https://web-animation-course.vercel.app/",
            "sourceLabel": "Workshop slides",
            "id": "note-1",
            "time": "00:00:12–00:03:12",
            "context": "The opening asks where motion will appear. A website, app and explainer each give the viewer a different job, which shapes the visual focus.",
            "practice": "Pick one portfolio card: show its title first, then reveal the result after expansion. Next decide how quickly that change should happen."
      },
      {
            "title": "Easing curves and springs",
            "text": "Easing controls the rate of change; physical models also account for spring force and damping. Legacy Material guidance commonly decelerates entrances and accelerates exits. Its Standard curve is cubic-bezier(0.4, 0, 0.2, 1); Sharp is cubic-bezier(0.4, 0, 0.6, 1). Damping suppresses oscillation; sufficient damping allows settling without overshoot. Choose a response around the interaction.",
            "source": "https://m1.material.io/motion/duration-easing.html",
            "sourceLabel": "Material: duration and easing; spring reference below",
            "id": "note-10",
            "time": "00:03:12–00:07:51",
            "context": "App loading states, buttons and notifications introduce timing. Material and spring documentation add the distinction between a speed curve and a settling response.",
            "practice": "Let a notification decelerate into a readable resting position. For a dragged object returning home, consider a spring response. Choose the interaction before tuning parameters."
      },
      {
            "title": "Turn a screen recording into a product story",
            "text": "The quotation-tool example focused on simplifying a recorded workflow into inputs, actions and results. Recordings, screenshots and text supply the material for a storyboard. Emphasize the main action, quiet secondary UI and leave time to read the result. A roughly 35-second UI brief and a short bank-animation brief illustrated the same method: establish content and purpose before choosing shots.",
            "source": "https://hackmd.io/@zz41354899/H14KjaJ9Ml",
            "sourceLabel": "Session examples and shared notes",
            "id": "note-5",
            "time": "00:08:15–00:12:53",
            "context": "The product explainer demonstrates how a recording supplies material while a storyboard highlights inputs, actions and results.",
            "practice": "Sketch three cards: enter a request → generate → inspect the result. Quiet unrelated interface details and check whether the sequence is understandable."
      },
      {
            "title": "Effect glossary: attention, transitions and beats",
            "text": "Push-ins focus attention on detail; typing and cursors make actions visible; staggered entrances establish reading order. Sweeps, morphs, match cuts and irises connect shots. Arcs, subtle squash and overshoot can suggest weight; small breathing motions, parallax or a slow push keep a hold alive. Mark important changes against the music's BPM and downbeats, then review the timing.",
            "source": "https://hackmd.io/@zz41354899/H14KjaJ9Ml",
            "sourceLabel": "Effect vocabulary from the materials",
            "id": "note-3",
            "time": "00:13:01–00:16:36",
            "context": "The product example leads into attention, feedback and continuity. Vocabulary from the shared notes adds concrete techniques to those design goals.",
            "practice": "Move the cursor to a button before revealing the result card. This sequence makes cause and effect visible and gives the effect a purpose."
      },
      {
            "title": "Turn a style into concrete motion",
            "text": "Choose a brand personality, then specify color, shape, entrance order, travel distance and reading time. Rounded forms and gentle responses can suggest playfulness; clear alignment and brief transitions can feel crisp; small movements and generous reading time can feel composed. These are editorial starting points to adapt. The pink character example illustrated a coherent color-and-motion direction.",
            "source": "https://hackmd.io/@zz41354899/H14KjaJ9Ml",
            "sourceLabel": "Shared notes",
            "id": "note-2",
            "time": "00:22:29–00:23:25",
            "context": "After discussing attention, the presenter turns to the feeling a piece should convey. That direction gives the script and tool choices a shared goal.",
            "practice": "Replace “make it playful” with rounded shapes, soft colors and a light entrance that settles into a readable title. Carry those choices into the storyboard."
      },
      {
            "title": "Review the storyboard before animation",
            "text": "Specify the purpose, audience, landscape or portrait ratio, duration, assets and references. Ask for each shot's content, timing, movement, transition and hold. HTML previews and PNG storyboards support a review before animation. For revisions, name a shot, its problem and the desired outcome—for example, show the button response before revealing the result card.",
            "source": "https://hackmd.io/@zz41354899/H14KjaJ9Ml",
            "sourceLabel": "Shared notes",
            "id": "note-6",
            "time": "00:23:25–00:24:06",
            "context": "Before selecting tools, the session asks what each shot should communicate. The later 00:35:49–00:37:16 Q&A turns this into a storyboard deliverable.",
            "practice": "Make four columns: image, text, action and hold time. Ask AI for that table and still previews, then review them before animation."
      },
      {
            "title": "Choose tools by the job",
            "text": "p5.js supports creative drawing and interaction; GSAP coordinates tweens and timelines; Motion for React, formerly Framer Motion, handles React UI, gesture and scroll animation; Three.js supports 3D scenes. Video workflows can use After Effects for motion graphics and compositing and DaVinci Resolve for editing, color and audio. Choose a combination around the output and existing project.",
            "source": "https://motion.dev/docs/react",
            "sourceLabel": "Motion for React documentation; other tools below",
            "id": "note-9",
            "time": "00:24:06–00:24:38",
            "context": "The presenter selects tools after purpose, feeling and script. Beginners can separate drawing, animation timing and the final deliverable.",
            "practice": "For a pointer-following dot, start by exploring p5.js; for sequencing website cards, explore GSAP. Choose around the existing project and the next concrete task."
      },
      {
            "title": "Turn visual constraints into review criteria",
            "text": "Palette, typeface, writing direction, tracking and asset proportions establish a style. Grain, glow, outlines, shadows and line drawing add depth; keep background motion consistent and give primary text contrast and reading time. The materials' outCubic/outExpo, inOutCubic and outBack labels suggest decelerating entrances, smooth transitions and overshoot. Check the chosen tool's easing names and preview.",
            "source": "https://gsap.com/docs/v3/Eases/",
            "sourceLabel": "GSAP easing; material terminology in shared notes",
            "id": "note-4",
            "time": "00:25:49–00:27:11",
            "context": "The pink-character example turns a brand feeling into a visual direction. The material’s style constraints become a practical review checklist here.",
            "practice": "Choose one palette and heading font, then make still storyboards. Check the title’s clarity before adding one transition and reviewing consistency."
      },
      {
            "title": "Canvas: compute each frame from time",
            "text": "Canvas provides a drawing surface. An animation updates position, scale or opacity and redraws, while layers establish foreground, background and text order. Browser animation commonly uses requestAnimationFrame. Mografy's public scene model derives frames from absolute time for preview, seeking and export, with an optional Three.js layer for 3D scenes.",
            "source": "https://github.com/zz41354899/mografy#scene-model",
            "sourceLabel": "Mografy: scene model",
            "id": "note-8",
            "time": "00:28:15–00:35:28",
            "context": "After introducing production tools, the session explores layers and time. Public documentation supplies the Canvas model used in this explanation.",
            "practice": "Imagine a dot moving right: determine the current time, calculate its position and draw that frame. Draw foreground text later to establish a clear layer order."
      },
      {
            "title": "Review preview, export and the website",
            "text": "Review text, rhythm, layers and transitions in the preview. Check resolution, frame rate, audio and size after export. On the website, verify mobile cropping, downloads, interaction and readability. Time generation, rendering and encoding separately for your own project. As an implementation supplement, preserve keyboard access and a reduced-motion reading experience.",
            "source": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion",
            "sourceLabel": "MDN: reduced motion",
            "id": "note-15",
            "time": "00:35:49–00:38:15",
            "context": "Storyboard previews and export waiting times introduce the delivery process. These three review stages make the work easier to inspect.",
            "practice": "Check the story in the storyboard, text and rhythm in the export, then mobile presentation in the website. Record one specific revision at a time."
      },
      {
            "title": "Separate design decisions from implementation",
            "text": "The session discussed storyboarding before animation and a participant's Claude-led, Codex-assisted workflow. Compare tools using the same brief: do they follow the requested sequence, produce readable storyboards and support focused revisions? Model preferences and waiting times were session-specific experiences; use your own assets and preview quality to make a choice.",
            "source": "https://github.com/zz41354899/mografy",
            "sourceLabel": "Mografy public project",
            "id": "note-7",
            "time": "00:38:18–00:48:57",
            "context": "Questions about storyboards and previews lead into collaboration between AI tools. Carry approved design decisions into each production step.",
            "practice": "Keep one approved brief and storyboard. Ask a tool to change only the second shot’s text and hold, then check that the other decisions remain intact."
      },
      {
            "title": "Load what the reader needs first",
            "text": "Use loading=\"lazy\" for non-critical images below the fold. Load the hero or LCP image promptly and reserve space with dimensions. Plan fetching and visual reveal separately: prepare the resource, then reveal it with the intended scroll or interaction. For video, choose preload, a poster and a deferred-loading strategy for the target browsers.",
            "source": "https://web.dev/articles/browser-level-image-lazy-loading",
            "sourceLabel": "web.dev: browser-level image lazy loading",
            "id": "note-12",
            "time": "00:54:22–00:57:07",
            "context": "The performance Q&A begins with image loading. Official guidance supplies the implementation details for resource fetching and visual presentation.",
            "practice": "Load the important opening image promptly and defer offscreen project images. Reserve their dimensions, then inspect what a phone downloads."
      },
      {
            "title": "Responsive images: size and pixel density",
            "text": "Provide width variants with srcset and describe the expected layout width with sizes so the browser can choose. Fixed display sizes can use density candidates such as 1x and 2x. Use picture for alternative crops or formats. Inspect the image actually downloaded on a phone to balance clarity and transfer size.",
            "source": "https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images",
            "sourceLabel": "MDN: responsive images",
            "id": "note-13",
            "time": "00:57:09–00:58:21",
            "context": "After deferred loading, the presenter discusses image sizes for phones, tablets and desktops. Responsive images give the browser suitable candidates.",
            "practice": "Prepare smaller and larger versions of one project image and describe its layout width. Inspect the phone’s selected file for legibility and transfer size."
      },
      {
            "title": "Media formats, quality and compatibility",
            "text": "WebP supports lossy and lossless compression. PNG compression is lossless; resizing or reducing colors can change the result. WebM is a video container, and file size depends on duration, resolution, frame rate, content and encoding settings. Safari supports WebP; video compatibility depends on browser version, container and codec. Compare your actual media for quality, size and playback, then choose formats and fallbacks.",
            "source": "https://developers.google.com/speed/webp/faq",
            "sourceLabel": "Google WebP FAQ; PNG and video references below",
            "id": "note-14",
            "time": "00:58:27–01:00:46",
            "context": "The discussion moves from dimensions to WebP, WebM and compression. Format documentation provides the properties used for these choices.",
            "practice": "Compare the same image as PNG and WebP for detail and size. Record both container and codec for video, then check playback on the target phone and browser."
      },
      {
            "title": "Mografy delivery and other tool entry points",
            "text": "Mografy's public workflow covers preview and export, listing MP4, WebM, Lottie and SVGA. Its Lottie/SVGA output packages frame images, so check delivery requirements early. HyperFrames builds video projects with web technology; Jitter is a web motion-design tool with an official MCP connection for AI tools. Hera and Motion UX provide generation and design-learning entry points respectively.",
            "source": "https://mografy-website.vercel.app/zh-TW",
            "sourceLabel": "Mografy; other official resources below",
            "id": "note-16",
            "time": "01:01:02–01:05:24",
            "context": "After performance, the session shares tools and learning resources. These entry points are grouped around delivery and learning goals.",
            "practice": "For a first piece, follow Mografy’s preview and export documentation; for motion-design practice, choose a relevant Motion UX topic. Set delivery requirements before choosing a format."
      },
      {
            "title": "Coordinate animation with scrolling",
            "text": "Define the trigger—page entry, a section entering view, a click or a state change—then specify order, playback scope and end state. The closing Q&A emphasized appearance timing and continuity. Describe the intro, section reveals and button feedback separately, then explain their handoffs so each moment has a clear focal point.",
            "source": "https://gsap.com/docs/v3/Plugins/ScrollTrigger/",
            "sourceLabel": "GSAP ScrollTrigger; session timing synthesis",
            "id": "note-11",
            "time": "01:05:39–01:08:22",
            "context": "The closing Q&A returns to websites: when several animations share a page, their entrance order matters. The 01:12:17–01:13:30 follow-up revisits that order.",
            "practice": "Write: intro title settles → scrolling reveals a project card → clicking expands details. Preview each handoff with an explicit trigger."
      }
],
    sessionQa: [
      {
            "q": "Can several images become an animation?",
            "a": "Describe the role and order of the images, then ask for frames or a storyboard. The session used product-operation assets as an example; review continuity between the resulting shots.",
            "time": "00:35:49–00:36:29"
      },
      {
            "q": "Why review a storyboard first?",
            "a": "A storyboard makes sequence, emphasis and reading time reviewable. The session described tools skipping this stage. Explicitly request storyboard delivery and review before animation, including the expected files.",
            "time": "00:36:31–00:39:55"
      },
      {
            "q": "What should I prepare before prompting?",
            "a": "Prepare purpose, aspect ratio, duration, assets and the intended feeling, then request a storyboard. A short prompt can work alongside detailed project instructions and asset descriptions.",
            "time": "00:36:31–00:37:16"
      },
      {
            "q": "What should guide model selection?",
            "a": "The presenter discussed Sonnet/Opus trade-offs in speed, detail and cost. Compare the same small brief for storyboard-first delivery, style consistency, focused revisions and turnaround.",
            "time": "00:39:55–00:42:38"
      },
      {
            "q": "Is a separate Canvas API service needed?",
            "a": "Canvas is a browser drawing API. Mografy's documented workflow lets a coding agent read the local project and instructions, then produce scenes, previews and exports. AI service access follows the chosen tool's requirements.",
            "time": "00:42:38–00:43:37"
      },
      {
            "q": "Can the workflow be automated?",
            "a": "The demonstrated direction was to let an agent read project instructions and create storyboards and scenes from content, duration and assets. Keep review points for the brief, storyboard, preview and export so revisions have a clear target.",
            "time": "00:44:03–00:49:08"
      },
      {
            "q": "How might Claude and Codex share the work?",
            "a": "A session participant described Claude leading planning, Codex assisting implementation and Mografy providing previews. Keep approved decisions in a shared brief so the next tool knows the agreed content and next deliverable.",
            "time": "00:44:42–00:45:02"
      },
      {
            "q": "Is another agent-orchestration layer needed?",
            "a": "The session favored letting an existing agent read the project and complete the brief, storyboard, preview and export workflow first. Add coordination when repeated work and handoffs justify it.",
            "time": "00:48:24–00:48:57"
      },
      {
            "q": "Can audio, slides or text be a starting point?",
            "a": "First extract the narrative, key messages and available assets, then ask for shots and visual requirements. The session discussed these inputs; check that the selected tool can read the files and identify the images or graphics each shot needs.",
            "time": "00:50:32–00:52:01"
      },
      {
            "q": "Where should performance work start?",
            "a": "Start with asset sizes, initial loading, deferred offscreen images and responsive image selection, then inspect animation work and export settings. Use the format and loading sections above as a checklist for your own page.",
            "time": "00:54:22–01:00:46"
      },
      {
            "q": "Where can I continue learning?",
            "a": "Revisit the method in the slides and shared notes, use Mografy documentation for workflow details and Motion UX for motion-design teaching. Hera is a shared AI motion-graphics resource; GSAP documents web-animation APIs. Choose a direction around the output you want to make.",
            "time": "01:01:02–01:05:24"
      },
      {
            "q": "How should animation and website effects work together?",
            "a": "Specify each layer's trigger, entrance, hold and end state, then coordinate the handoff. The closing follow-up emphasized order and continuity; tune speed and scale around the visual focus.",
            "time": "01:02:42–01:08:22；01:12:17–01:13:30"
      },
      {
            "q": "How can I start with recordings and screenshots?",
            "a": "Organize the assets and main action. Ask AI to simplify the workflow around what the audience should understand, then produce a storyboard with HTML/PNG previews. Review it before animation and check the exported result in the website.",
            "time": "01:08:55–01:12:10"
      }
],
    qa: [
      {q: "What is p5.js?", a: "A JavaScript library for creative coding, drawing and interaction. It creates a browser canvas and supports both 2D and WEBGL rendering, including 3D work.", source: "https://p5js.org/reference/p5/createCanvas/", sourceLabel: "p5.js: createCanvas"},
      {q: "How do setup() and draw() work?", a: "setup() runs once when the sketch starts. draw() then runs repeatedly to update the scene. noLoop() stops that loop and loop() resumes it; the actual frame rate depends on runtime conditions.", source: "https://p5js.org/reference/p5/draw/", sourceLabel: "p5.js: draw (with setup, noLoop and loop references)"},
      {q: "Do p5.js, GSAP and Three.js replace each other?", a: "Their responsibilities can overlap. p5.js provides drawing and interaction; GSAP tweens object properties and sequences animations; Three.js provides a 3D library. A project can combine them according to its rendering and timing needs.", source: "https://gsap.com/docs/v3/GSAP/", sourceLabel: "GSAP documentation"}
    ],
    quizTitle: "Optional self-check · no answer recorded",
    quiz: "For moving particles that react to the pointer, should position updates happen only in setup(), or repeatedly in draw()?",
    answer: "Use repeated updates in draw() for this sketch. setup() initializes the scene once; ongoing motion needs new positions and redraws.",
    reflection: "Personal reflection has not been added."
  },
  zh: {
    title: "AI 輔助品牌動態：工作坊筆記",
    event: "10/24 免費線上講座｜用 AI 做出會動、能互動的網站",
    announcedTopic: "AI 讓網頁動起來｜互動網頁設計實戰",
    slidesTitle: "AI 讓品牌動起來｜動態設計實戰",
    titleNote: "報名公告與當天簡報的標題依各自來源並列。",
    organizer: "Claude x Codex 線上讀書會", platform: "Zoom・免費線上講座",
    registrationStatus: "報名已截止（10/24 唯讀查核公開表單）；保留連結供回查活動來源。",
    speakerBio: "依主辦介紹，Nocts 具 UI/UX 與網頁設計背景，結合前端、網頁動態與 AI Coding，把設計做成能操作的網站。",
    announcedContent: "主辦公告包含動畫與操作回應、如何向 AI 說清楚內容／風格／互動需求、一頁網站示範，以及公開指令指南。對象包括想做個人網站、作品集或品牌頁的初學者，以及工程師與設計師；不需要 AI 經驗、事先想好題目或做課前功課。",
    type: "講座", format: "線上",
    summary: "從品牌個性與分鏡開始，整理 AI 協作、網站技術、動態效果、媒體效能與現場問答。",
    attribution: "Nocts（奇昌）・依活動介紹標示",
    status: "活動已結束；已依完整課堂文字更新筆記。",
    scope: "本頁整合課堂主題、教材與官方技術文件，採自寫教學與問答。視覺素材的完整播放驗證、本人實作與後續操作影片持續補記。",
    sections: [
      {
            "title": "先選載體，再決定觀眾要看到什麼",
            "text": "網頁開場適合建立第一印象；捲動揭露可以分段說故事；App 的載入、切頁與通知用來交代狀態；產品解說影片則把操作流程濃縮成容易看懂的情節。每一段先選一個重點，安排視線、節奏與回應，讓前後內容接得起來。",
            "source": "https://web-animation-course.vercel.app/",
            "sourceLabel": "工作坊簡報",
            "id": "note-1",
            "time": "00:00:12–00:03:12",
            "context": "開場先談動態放在哪裡。先知道觀眾是在逛網頁、操作 App，還是看解說影片，才好決定要帶出哪個重點。",
            "practice": "先挑作品集的一張卡片，寫下「讀者先看到作品名稱，按下展開後看到成果」。接著再決定這個變化要多快。"
      },
      {
            "title": "緩動曲線與彈簧",
            "text": "緩動控制變化速度；物理模型則另外處理彈力、阻尼等參數。舊版 Material 常用進場減速、離場加速；Standard 為 cubic-bezier(0.4, 0, 0.2, 1)，Sharp 為 cubic-bezier(0.4, 0, 0.6, 1)，用途和曲線各有差異。Damping 是阻尼，用來抑制震盪；阻尼足夠時，物件可以平穩抵達目標。選擇時先想使用者需要什麼回應。",
            "source": "https://m1.material.io/motion/duration-easing.html",
            "sourceLabel": "Material：時長與緩動；彈簧見補充來源",
            "id": "note-10",
            "time": "00:03:12–00:07:51",
            "context": "從 App 的載入、按鈕與通知，課堂帶到動作快慢。下面搭配 Material 與彈簧文件，說清楚速度曲線和回位反應。",
            "practice": "讓通知卡片進場後慢慢停穩，方便閱讀；若做拖曳後回位，再評估彈簧反應。先選互動目的，才調速度或阻尼。"
      },
      {
            "title": "把操作錄影整理成產品故事",
            "text": "課堂以報價工具的解說動畫談操作簡化：先保留觀眾需要理解的輸入、動作與結果，再整理成分鏡。原始錄影、截圖與文字都能提供內容線索；畫面可以突出主要操作、淡化次要介面，最後留時間讀結果。示範另提到約 35 秒的 UI 流程需求，以及銀行動畫案例的短提示詞；可帶走的方法是先說清楚內容與目的，再決定鏡頭。",
            "source": "https://hackmd.io/@zz41354899/H14KjaJ9Ml",
            "sourceLabel": "課堂案例與共筆",
            "id": "note-5",
            "time": "00:08:15–00:12:53",
            "context": "講者接著用產品解說示範：操作錄影提供素材，分鏡幫觀眾抓住輸入、操作與結果。",
            "practice": "把一次操作拆成「輸入需求 → 按下產生 → 看見結果」三張卡。拿掉與這次重點無關的介面細節，再檢查讀者能否看懂流程。"
      },
      {
            "title": "效果速查：視線、轉場與節拍",
            "text": "推近（push-in）把注意力帶向細節；打字與游標讓操作過程看得見；逐項出場（stagger）讓資訊有閱讀順序。掃動（sweep）、形變（morph）、形狀銜接（match cut）與圓形開合（iris）用來連接畫面。弧線移動、輕微擠壓（squash）與過沖可帶出重量感；停留時以小幅呼吸、視差或慢推維持生命感。配樂可用 BPM 與重拍標記重要變化，再預覽確認節奏。",
            "source": "https://hackmd.io/@zz41354899/H14KjaJ9Ml",
            "sourceLabel": "教材效果詞彙整理",
            "id": "note-3",
            "time": "00:13:01–00:16:36",
            "context": "產品案例之後，課堂從視線、操作回應與連續感檢查動作。這裡搭配共筆的效果詞彙，幫這些設計目的找到具體做法。",
            "practice": "先讓游標移到按鈕，再讓結果卡片出現。先後順序讓讀者看懂因果；選效果時就以這個目的為準。"
      },
      {
            "title": "把可愛、俐落、沉穩寫成具體動作",
            "text": "先選品牌個性，再描述顏色、形狀、出場順序、移動距離與停留時間。可愛可以從圓潤造型、柔和配色與輕巧回應開始；俐落可以用清楚的對齊和短轉場；沉穩可以用較小位移與充足閱讀時間。這些是整理後的設計起點，依內容與品牌調整。課堂的粉紅色案例示範了配色與角色動態如何形成一致感。",
            "source": "https://hackmd.io/@zz41354899/H14KjaJ9Ml",
            "sourceLabel": "工作坊共筆",
            "id": "note-2",
            "time": "00:22:29–00:23:25",
            "context": "談完資訊的引導，講者轉向「想讓人感受到什麼」。感受先有方向，後面的腳本與工具才有共同目標。",
            "practice": "把「可愛一點」改寫成「圓角圖形、柔和配色、輕巧進場，標題最後停穩」。下面就能把這些條件放進分鏡。"
      },
      {
            "title": "分鏡先過一輪，再生成動畫",
            "text": "需求先交代用途、觀眾、橫式或直式比例、長度、素材與風格參考，再請 AI 列出每個鏡頭的內容、時間、動作、轉場和停留點。可要求 HTML 預覽與 PNG 分鏡，檢查資訊順序後再製作動畫。修改時一次指出一個鏡頭、問題與期待結果，例如「第二段先顯示按鈕回應，再揭露結果卡片」。",
            "source": "https://hackmd.io/@zz41354899/H14KjaJ9Ml",
            "sourceLabel": "工作坊共筆",
            "id": "note-6",
            "time": "00:23:25–00:24:06",
            "context": "課堂在選工具前先談腳本：每一幕要說什麼、留下什麼感受。後面的 00:35:49–00:37:16 問答再把它落實成分鏡交付。",
            "practice": "用四欄小表寫「畫面、文字、動作、停留時間」。請 AI 先交這張表和靜態預覽，確認後再動起來。"
      },
      {
            "title": "依作品選工具",
            "text": "p5.js 適合創意繪圖與互動；GSAP 適合補間、時間軸與協調動作；Motion for React（前稱 Framer Motion）提供 React 的介面、手勢與捲動動畫；Three.js 提供 3D 場景能力。影片工作流程可搭配 After Effects 的動態圖像與合成，以及 DaVinci Resolve 的剪輯、調色與音訊。以輸出與既有專案需求決定組合。",
            "source": "https://motion.dev/docs/react",
            "sourceLabel": "Motion for React 官方文件；其他工具見來源",
            "id": "note-9",
            "time": "00:24:06–00:24:38",
            "context": "用途、感受與腳本確定後，講者才開始選工具。初學者可以先把「畫什麼」「怎麼動」「最後交什麼」分開看。",
            "practice": "要做跟著滑鼠移動的圓點，可先看 p5.js；要安排幾張網頁卡片依序出場，可看 GSAP。沿用現有專案，挑能完成這一步的工具。"
      },
      {
            "title": "把風格限制寫進驗收",
            "text": "色票、字體、直排或橫排、字距與素材比例一起形成風格。材質顆粒、柔光、描邊、陰影和線條描繪可用來加強層次；背景動作保持一致，主要文字要有足夠對比與閱讀時間。教材中的 outCubic／outExpo、inOutCubic、outBack 分別提示進場減速、平順銜接與過沖感；實作時對照所選工具的 easing 名稱與預覽。",
            "source": "https://gsap.com/docs/v3/Eases/",
            "sourceLabel": "GSAP：緩動曲線；教材用語見共筆",
            "id": "note-4",
            "time": "00:25:49–00:27:11",
            "context": "粉紅色角色案例把前面的品牌感受變成畫面。這裡用教材的風格條件，整理成初學者可以逐項檢查的規格。",
            "practice": "選定一組色票與一種標題字體，先做靜態分鏡。檢查主標題是否清楚，再加入一種轉場，看風格能否維持一致。"
      },
      {
            "title": "Canvas：用時間算出每一個畫面",
            "text": "Canvas 是網頁的繪圖表面。動畫會更新位置、大小或透明度，再重畫畫面；分層能安排前景、背景和文字的先後。瀏覽器中的即時動畫常配合 requestAnimationFrame 更新。Mografy 的公開場景模型以絕對時間驅動畫面，方便預覽、定位與輸出指定影格；選用的 Three.js 圖層可處理 3D 場景。",
            "source": "https://github.com/zz41354899/mografy#scene-model",
            "sourceLabel": "Mografy：場景模型",
            "id": "note-8",
            "time": "00:28:15–00:35:28",
            "context": "介紹製作工具後，課堂進一步談圖層與時間。下面用公開文件補齊 Canvas 的基本模型，方便理解畫面如何產生。",
            "practice": "想像圓點從左往右移：先決定現在的時間，再算出圓點位置，最後畫出這一格。前景文字放在後面繪製，形成清楚層次。"
      },
      {
            "title": "把預覽、輸出與網站驗收分成三步",
            "text": "預覽先看文字、節奏、層次與轉場；輸出再檢查解析度、幀率、音訊與檔案大小；放進網站後，確認手機裁切、下載量、互動與可讀性。講者提到的製作和匯出分鐘數是個案經驗，可把自己的生成、算圖與編碼分別計時。補充實作時，也要保留鍵盤操作與減少動態效果的閱讀方式。",
            "source": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion",
            "sourceLabel": "MDN：減少動態效果",
            "id": "note-15",
            "time": "00:35:49–00:38:15",
            "context": "現場談到分鏡預覽與輸出等待時間。這裡把交付拆成三次檢查，讓初學者知道每一步該看什麼。",
            "practice": "先看分鏡是否說清楚故事，再看輸出的文字和節奏，最後放回網頁看手機呈現。每次只記一個具體問題，方便回頭修改。"
      },
      {
            "title": "AI 協作：把設計決策和實作交付分開",
            "text": "課堂分享先討論分鏡、再生成動畫的流程，也有人分享由 Claude 主導需求、Codex 協助實作的經驗。可以用相同需求比較工具是否照指定順序交付、分鏡是否清楚、修改是否方便。講者偏好的模型與等待時間屬於當次使用經驗；選擇時以自己的素材、預覽與交付品質做判斷。",
            "source": "https://github.com/zz41354899/mografy",
            "sourceLabel": "Mografy 公開專案",
            "id": "note-7",
            "time": "00:38:18–00:48:57",
            "context": "分鏡與預覽的提問接著帶出 AI 工具怎麼合作。重點是把已確認的設計決策留給下一個製作步驟。",
            "practice": "先固定一份需求與分鏡，請工具只改第二幕的文字和停留時間。檢查其他畫面是否保留，再比較修改品質。"
      },
      {
            "title": "先載入眼前需要的內容",
            "text": "畫面下方的非關鍵圖片可用 loading=\"lazy\" 延後載入；首屏主視覺與 LCP 圖片優先載入，並設定寬高來預留版面。載入時機和出場動畫可以分開規劃：資源準備好，再依捲動或互動揭露。影片可依目標瀏覽器選擇 preload、poster 與延後載入策略。",
            "source": "https://web.dev/articles/browser-level-image-lazy-loading",
            "sourceLabel": "web.dev：瀏覽器圖片延遲載入",
            "id": "note-12",
            "time": "00:54:22–00:57:07",
            "context": "現場開始問網頁效能，先談圖片載入。以下依官方文件整理下載資源與顯示動作的做法。",
            "practice": "作品集最上方的重要圖片先載入；下方作品圖再安排延後載入。替每張圖保留尺寸，接著檢查手機下載了哪些檔案。"
      },
      {
            "title": "響應式圖片：版面大小與像素密度一起看",
            "text": "手機、平板和桌面的顯示需求不同。srcset 可提供不同寬度的檔案，sizes 描述圖片在版面中預計佔多寬，交由瀏覽器挑選；固定顯示尺寸也可用 1x、2x 密度候選。需要不同裁切或格式時，再用 picture。檢查手機實際下載哪張圖，讓清晰度與傳輸量配合。",
            "source": "https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images",
            "sourceLabel": "MDN：響應式圖片",
            "id": "note-13",
            "time": "00:57:09–00:58:21",
            "context": "延後載入之後，講者接著談手機、平板、桌面的圖片大小。回應式圖片就是讓瀏覽器有合適尺寸可選。",
            "practice": "為同一張作品圖準備較小與較大的版本，再描述它在版面上的寬度。用手機檢查實際選到的檔案，兼顧文字清楚與下載量。"
      },
      {
            "title": "圖片與影片：格式、品質、相容性",
            "text": "WebP 提供有損與無損壓縮；PNG 本身採無損壓縮，另行縮圖或減色會影響結果。WebM 是影片容器，可搭配不同編碼器；檔案大小受長度、解析度、幀率、內容和編碼設定影響。Safari 已有 WebP 支援，影片則要一起檢查瀏覽器版本、容器與編碼器。用實際素材比較畫質、大小與播放結果，再決定格式和備援。",
            "source": "https://developers.google.com/speed/webp/faq",
            "sourceLabel": "Google WebP FAQ；PNG／影片規格見來源",
            "id": "note-14",
            "time": "00:58:27–01:00:46",
            "context": "尺寸確定後，課堂再談 WebP、WebM 與壓縮。下面用格式文件整理各自特性，讓選擇有可檢查的依據。",
            "practice": "用同一張圖比較 PNG 與 WebP 的細節和檔案大小；影片則一起記錄容器與編碼。最後在目標手機和瀏覽器確認播放結果。"
      },
      {
            "title": "Mografy 的交付與其他工具入口",
            "text": "Mografy 公開文件提供預覽與輸出流程，首頁列出 MP4、WebM、Lottie、SVGA；其 Lottie／SVGA 輸出採影格圖片封裝，適合先核對交付需求。延伸工具包括 HyperFrames 和 Jitter：前者以網頁技術建立影片專案；後者是網頁動態設計工具，官方另提供 MCP 連接 AI 工具。Hera 與 Motion UX 分別可作生成工具和設計學習入口。",
            "source": "https://mografy-website.vercel.app/zh-TW",
            "sourceLabel": "Mografy；其他官方入口見來源",
            "id": "note-16",
            "time": "01:01:02–01:05:24",
            "context": "效能討論之後，現場分享延伸工具與學習資源。這裡按交付與學習用途整理入口，方便選一條路繼續。",
            "practice": "想做第一支作品，先照 Mografy 文件走預覽與輸出；想練動態設計，先從 Motion UX 挑一個相關主題。先確認自己的交付需求，再選格式。"
      },
      {
            "title": "讓動畫與捲動接得起來",
            "text": "先定義觸發事件：進入頁面、捲動到區塊、點擊或狀態改變。再排先後順序、播放範圍與結束狀態。課堂最後的問答特別強調「何時出現」和連貫性。可以把開場動畫、段落揭露、按鈕回饋分開描述，再寫出交接關係，讓同一時間的視覺重點清楚。",
            "source": "https://gsap.com/docs/v3/Plugins/ScrollTrigger/",
            "sourceLabel": "GSAP ScrollTrigger；課堂時序整理",
            "id": "note-11",
            "time": "01:05:39–01:08:22",
            "context": "收尾問答回到網頁：多種動態放在同一頁時，要交代它們何時出現。01:12:17–01:13:30 的追問再次聚焦先後順序。",
            "practice": "寫成「開場標題停穩 → 捲到作品時揭露卡片 → 按下按鈕才展開細節」。逐步預覽，確認每個動作都有清楚的觸發條件。"
      }
],
    sessionQa: [
      {
            "q": "多張圖片能串成動畫嗎？",
            "a": "可以先交代圖片的用途與順序，再請 AI 規劃逐格或分鏡內容。課堂以產品操作素材說明這個方向，製作時仍要檢查畫面之間的連續性。",
            "time": "00:35:49–00:36:29"
      },
      {
            "q": "先做分鏡，有什麼幫助？",
            "a": "分鏡讓內容順序、畫面重點和停留時間先變得可討論。課堂提到直接生成動畫時容易略過這一步；可在提示詞列明「先交分鏡，確認後再做動畫」，並寫出希望收到的檔案。",
            "time": "00:36:31–00:39:55"
      },
      {
            "q": "提示詞之前要準備什麼？",
            "a": "先整理用途、畫幅、秒數、素材與想傳達的感受，再要求分鏡。短提示詞也能搭配完整的專案規則和素材說明，讓 AI 取得足夠上下文。",
            "time": "00:36:31–00:37:16"
      },
      {
            "q": "模型選擇可以看哪些條件？",
            "a": "講者討論 Sonnet／Opus 在討論速度、細節與成本上的取捨。可以拿相同的小案例比較：是否先交分鏡、是否保留風格、修改是否集中、等待時間是否合適。",
            "time": "00:39:55–00:42:38"
      },
      {
            "q": "需要另外接 Canvas API 服務嗎？",
            "a": "Canvas 是瀏覽器提供的繪圖 API。依 Mografy 公開流程，可讓程式代理讀取本機專案和相關操作說明，再產生場景、預覽與輸出。AI 服務的存取需求另依所選工具處理。",
            "time": "00:42:38–00:43:37"
      },
      {
            "q": "可以把流程自動化嗎？",
            "a": "課堂示範的方向是讓 AI 讀取專案規則，以內容、秒數和素材產生分鏡與場景。仍可保留需求、分鏡、預覽與輸出的檢查點，讓每次修改有明確位置。",
            "time": "00:44:03–00:49:08"
      },
      {
            "q": "Claude 與 Codex 可以如何分工？",
            "a": "現場有人分享由 Claude 討論需求、Codex 配合實作，再透過 Mografy 預覽的流程。可把規劃結果整理成共同規格，讓接手的工具知道已確認內容與下一個交付。",
            "time": "00:44:42–00:45:02"
      },
      {
            "q": "需要額外串接多個代理嗎？",
            "a": "課堂建議先讓既有代理讀取專案，走通需求、分鏡、預覽與輸出。之後再依重複工作和交接需求安排分工。",
            "time": "00:48:24–00:48:57"
      },
      {
            "q": "只有聲音、簡報或文字，也能規劃嗎？",
            "a": "可以先整理敘事順序、關鍵訊息和可用素材，再請 AI 提出鏡頭與畫面需求。課堂討論了這些輸入方式；實作時還要確認工具能讀取提供的檔案，以及每個鏡頭需要的圖片或圖形。",
            "time": "00:50:32–00:52:01"
      },
      {
            "q": "動態網站的效能從哪裡開始看？",
            "a": "先檢查素材大小、首屏載入、下方圖片的延遲載入與響應式圖片，再看動畫執行與輸出設定。上方格式與載入章節已整理官方做法，可逐項對照自己的頁面。",
            "time": "00:54:22–01:00:46"
      },
      {
            "q": "後續可以從哪些資源學？",
            "a": "從工作坊簡報與共筆回看方法，再用 Mografy 文件查操作、Motion UX 看動態設計教學。Hera 是課堂分享的 AI 動態圖像入口，GSAP 可查網頁動畫 API。依想完成的作品挑一個方向延伸。",
            "time": "01:01:02–01:05:24"
      },
      {
            "q": "動畫和網頁特效怎麼安排？",
            "a": "分別寫出兩者的觸發、出場、停留和結束狀態，再安排交接。最後的追問把重點收在先後順序與連貫性；速度和比例則配合畫面焦點調整。",
            "time": "01:02:42–01:08:22；01:12:17–01:13:30"
      },
      {
            "q": "只有錄影和截圖，怎麼開始？",
            "a": "先整理素材和主要操作，告訴 AI 觀眾要看懂什麼，請它簡化流程、列分鏡並提供 HTML／PNG 預覽。確認後再製作動畫，輸出完成再檢查網站中的呈現。",
            "time": "01:08:55–01:12:10"
      }
],
    qa: [
      {q: "p5.js 是什麼？", a: "p5.js 是用於創意編碼、繪圖與互動的 JavaScript 程式庫。它在瀏覽器建立畫布，支援 2D 與 WEBGL 繪圖模式，也能製作 3D 內容。", source: "https://p5js.org/reference/p5/createCanvas/", sourceLabel: "p5.js：createCanvas"},
      {q: "setup() 和 draw() 怎麼運作？", a: "setup() 在 sketch 開始時執行一次；之後 draw() 重複執行，更新畫面。noLoop() 可以停止迴圈，loop() 可以恢復；實際幀率仍受執行環境影響。", source: "https://p5js.org/reference/p5/draw/", sourceLabel: "p5.js：draw（含 setup、noLoop 與 loop 參照）"},
      {q: "p5.js、GSAP 與 Three.js 互相取代嗎？", a: "它們的職責可以重疊。p5.js 提供繪圖與互動；GSAP 對物件屬性做補間並安排動畫時序；Three.js 提供 3D 程式庫。可以依作品的繪製與時間控制需求組合使用。", source: "https://gsap.com/docs/v3/GSAP/", sourceLabel: "GSAP 官方文件"}
    ],
    quizTitle: "選讀理解測驗・尚未作答",
    quiz: "粒子需要持續移動並回應滑鼠時，位置應只在 setup() 更新一次，還是在 draw() 重複更新？",
    answer: "這個情境需要在 draw() 重複更新。setup() 負責一次性的初始化；持續移動需要計算新位置並重新繪製。",
    reflection: "個人心得尚待補充。"
  }
}] as const;
