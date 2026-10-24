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
  en: {
    title: "AI-assisted brand motion: workshop notes",
    event: "October 24 free online talk | Build animated, interactive websites with AI",
    organizer: "Claude x Codex online study group", platform: "Zoom · free online session",
    speakerBio: "The organizer introduces Nocts as a UI/UX and web designer who combines frontend development, web motion and AI coding to turn designs into working websites.",
    announcedContent: "The announcement covers interaction and animation, explaining content, style and interaction needs to AI, a one-page demonstration and a public prompt guide. It welcomes beginners building personal sites, portfolios or brand pages, as well as engineers and designers; no AI experience, project idea or preparation is required.",
    type: "Talk", format: "Online",
    summary: "From brand personality and storyboards to AI workflows, web effects, media performance and session Q&A.",
    attribution: "Nocts (奇昌) · presenter named in the event announcement",
    status: "Workshop completed.",
    scope: "Teaching notes combine workshop topics with further learning from official documentation. Personal practice and reflection are updated separately.",
    sections: [
      {
            "title": "Choose the medium and the message",
            "text": "Website intros establish a first impression; scroll reveals pace a story; loading states, transitions and notifications explain app state; product explainers condense a workflow into a readable sequence. Give each moment one focal point, then coordinate attention, rhythm, feedback and continuity.",
            "source": "https://web-animation-course.vercel.app/",
            "sourceLabel": "Workshop slides",
            "id": "note-1",
            "practice": "Sketch the collapsed and expanded versions of one card. Write what the reader knows in each state, then circle the change that most needs a visual cue.",
            "paragraphs": [
                  "Motion design communicates through visual change. Position, scale, opacity or shape can help a reader notice what happened. Begin with one thing the reader should understand: a button accepted an action, a project card expanded, or a new topic has started.",
                  "The medium is where the content appears. Readers control scrolling and clicks on a website; a video controls its own sequence. The same story therefore needs different pacing. A useful starting point is a clear static layout and working interaction, followed by one movement that helps explain a change."
            ],
            "workflowTitle": "Define the job of this moment",
            "steps": [
                  "List what the reader sees now, the action available and the result they should recognize.",
                  "Separate the main message from supporting details and choose the element that deserves attention.",
                  "Describe the before and after states, then choose a fade, movement or direct change that explains the difference."
            ],
            "example": "A portfolio card initially shows a project title and summary. “View results” expands the result text and becomes “Collapse.” The content stays visibly connected to the chosen project. Motion can indicate the expansion while the text and control communicate the state."
      },
      {
            "title": "Easing curves and springs",
            "text": "Easing controls the rate of change; physical models also account for spring force and damping. Legacy Material guidance commonly decelerates entrances and accelerates exits. Its Standard curve is cubic-bezier(0.4, 0, 0.2, 1); Sharp is cubic-bezier(0.4, 0, 0.6, 1). Damping suppresses oscillation; sufficient damping allows settling without overshoot. Choose a response around the interaction.",
            "source": "https://m1.material.io/motion/duration-easing.html",
            "sourceLabel": "Material: duration and easing; spring reference below",
            "id": "note-10",
            "practice": "Write two notification specifications: one with a duration and decelerating ease, another describing a spring response. Name the differences you would inspect, such as settling speed and overshoot.",
            "paragraphs": [
                  "Easing is a way to distribute acceleration and braking across a change. Duration sets the total time; easing determines how progress is distributed within it. Keep one fixed while changing the other so the effect is easy to compare.",
                  "A spring model moves an object toward a target. Stiffness describes the restoring force and damping reduces oscillation; some tools also expose mass. This response is useful for a dragged object settling or an interface whose target can change during motion. A fixed-length brand transition often starts with an explicit duration and easing curve."
            ],
            "workflowTitle": "Compare timing on one card",
            "steps": [
                  "Keep the starting point, destination and distance fixed. Preview linear movement as a reference.",
                  "Use the same duration with a decelerating entrance and check whether the settling text is readable.",
                  "For a spring, define the resting position and vary damping or stiffness separately, observing overshoot and settling."
            ],
            "example": "A successful form submission can show a notification that slows as it reaches its resting position. A draggable project card can use a spring to return after release. Choose each response around the interaction and the reading task."
      },
      {
            "title": "Turn a screen recording into a product story",
            "text": "The quotation-tool example focused on simplifying a recorded workflow into inputs, actions and results. Recordings, screenshots and text supply the material for a storyboard. Emphasize the main action, quiet secondary UI and leave time to read the result. A roughly 35-second UI brief and a short bank-animation brief illustrated the same method: establish content and purpose before choosing shots.",
            "source": "https://hackmd.io/@zz41354899/H14KjaJ9Ml",
            "sourceLabel": "Session examples and shared notes",
            "id": "note-5",
            "practice": "Describe a familiar website feature in five sentences, then select three scenes that best explain its purpose. Ask a first-time viewer what they understand from the sketches.",
            "paragraphs": [
                  "A product story connects a problem, an action and a result. A screen recording captures the full workflow; an explainer helps a first-time viewer recognize the important steps. Writing the use case first gives the animation a clear selection rule.",
                  "Keep moments that answer a viewer’s questions: where to enter information, what happens after submission and what the result looks like. Clearly labeled sample data can support a demonstration. Keep the cursor, input and result visually connected so the same object remains recognizable between shots."
            ],
            "workflowTitle": "Condense a workflow into readable scenes",
            "steps": [
                  "List the complete operation, then write one sentence describing the value this demonstration should explain.",
                  "Select the input, main action and result that support it. Prepare screenshots or simplified diagrams for each.",
                  "Write one explanation per shot and allow reading time. Check that the final result answers the opening problem."
            ],
            "example": "A quotation-tool page can begin with the need to organize services, show item entry and quote generation, then hold on the resulting quotation. If the lesson is about creating a draft, account settings and history can have their own tutorial."
      },
      {
            "title": "Effect glossary: attention, transitions and beats",
            "text": "Push-ins focus attention on detail; typing and cursors make actions visible; staggered entrances establish reading order. Sweeps, morphs, match cuts and irises connect shots. Arcs, subtle squash and overshoot can suggest weight; small breathing motions, parallax or a slow push keep a hold alive. Mark important changes against the music's BPM and downbeats, then review the timing.",
            "source": "https://hackmd.io/@zz41354899/H14KjaJ9Ml",
            "sourceLabel": "Effect vocabulary from the materials",
            "id": "note-3",
            "practice": "Write a fade version and a staggered version of the same service-card section. Explain which one better communicates the order and what you would inspect in a preview.",
            "paragraphs": [
                  "Effect names are a vocabulary for describing visible changes. Decide whether a movement should guide attention, explain an action or connect scenes, then choose a technique. Give it a starting state, an ending state and a clear place for reading.",
                  "A stagger offsets the start times of several elements. A morph changes one shape into another. A match cut connects shots through similar framing or shape. Parallax uses different movement rates across layers to suggest depth. Beginners can establish the sequence with fades or small translations before adding more complex effects."
            ],
            "workflowTitle": "Use an effect to explain a relationship",
            "steps": [
                  "Mark the focal point and the next reading position on a sketch, then describe their relationship.",
                  "Choose one effect and specify its trigger, changing properties and final state.",
                  "Let important text settle for reading and check whether background and foreground compete for attention."
            ],
            "example": "Three service cards can enter in order: describe a need, discuss an approach, deliver the result. Once positioned, they stay still so the reader can compare the whole process. The stagger has a specific role: it establishes sequence."
      },
      {
            "title": "Turn a style into concrete motion",
            "text": "Choose a brand personality, then specify color, shape, entrance order, travel distance and reading time. Rounded forms and gentle responses can suggest playfulness; clear alignment and brief transitions can feel crisp; small movements and generous reading time can feel composed. These are editorial starting points to adapt. The pink character example illustrated a coherent color-and-motion direction.",
            "source": "https://hackmd.io/@zz41354899/H14KjaJ9Ml",
            "sourceLabel": "Shared notes",
            "id": "note-2",
            "practice": "Choose two adjectives for your website and write three observable conditions for each. Replace a broad request such as “more polished” with something you could check on screen.",
            "paragraphs": [
                  "Brand personality describes how a piece should feel; a motion specification translates that feeling into choices someone can build and revise. Words such as playful or crisp become useful when paired with shape, color, speed, travel distance and settling behavior.",
                  "Style also depends on the information. A playful character can move prominently while pricing, specifications and contact details remain stable and readable. When sharing a reference, identify the palette, typography or transition you want to study so your own content keeps its identity."
            ],
            "workflowTitle": "Translate adjectives into production choices",
            "steps": [
                  "Choose a main feeling and one supporting quality, such as approachable and organized.",
                  "Describe palette, shapes, typography and motion rules in terms visible in a preview.",
                  "Apply those rules to a heading, a card and a button, then check their consistency."
            ],
            "example": "An approachable professional portfolio could use a soft background, clear type hierarchy and rounded cards. A heading makes a small entrance and settles; button feedback is brief. Project results keep enough reading space."
      },
      {
            "title": "Review the storyboard before animation",
            "text": "Specify the purpose, audience, landscape or portrait ratio, duration, assets and references. Ask for each shot's content, timing, movement, transition and hold. HTML previews and PNG storyboards support a review before animation. For revisions, name a shot, its problem and the desired outcome—for example, show the button response before revealing the result card.",
            "source": "https://hackmd.io/@zz41354899/H14KjaJ9Ml",
            "sourceLabel": "Shared notes",
            "id": "note-6",
            "practice": "Draw four shots for one project, each with a single message. Read the still sequence first, then mark the connections that would benefit from movement.",
            "paragraphs": [
                  "A storyboard is a visual plan made before animation. Each shot identifies its focal object, text and action so the story can be reviewed early. It is especially useful for portfolio introductions, product workflows and services with several steps.",
                  "A brief identifies the audience, purpose, aspect ratio, assets and desired next action. Timing includes reading holds as well as entrances and exits. A dense slide can become two shots. Read the text aloud at a comfortable pace and use the preview to adjust its hold."
            ],
            "workflowTitle": "Review the still story before adding movement",
            "steps": [
                  "Divide the story into an opening, the main information and a next action, with one focus per shot.",
                  "List text, assets, start and end states and holds. Deliver sketches or HTML/PNG previews for review.",
                  "Approve sequence and emphasis before animation. Request revisions by shot, problem and decisions to preserve."
            ],
            "example": "A portfolio introduction can state the project’s problem, use project images to explain the method and result, then point to the full case study. A result awaiting verification can keep a replaceable text area until its wording is approved."
      },
      {
            "title": "Choose tools by the job",
            "text": "p5.js supports creative drawing and interaction; GSAP coordinates tweens and timelines; Motion for React, formerly Framer Motion, handles React UI, gesture and scroll animation; Three.js supports 3D scenes. Video workflows can use After Effects for motion graphics and compositing and DaVinci Resolve for editing, color and audio. Choose a combination around the output and existing project.",
            "source": "https://motion.dev/docs/react",
            "sourceLabel": "Motion for React documentation; other tools below",
            "id": "note-9",
            "practice": "Create columns for elements/drawing, timing and output. Put one requirement in each, circle the smallest useful feature and read the relevant tool documentation.",
            "paragraphs": [
                  "Tool selection starts with three questions: where is the content drawn, what controls its changes, and what must be delivered? The DOM organizes web elements such as text, buttons and cards. Canvas supports programmatic drawing and repeatedly updated scenes. Your existing framework and maintenance approach also matter.",
                  "A tween computes intermediate values between a start and a target, such as opacity moving from 0 to 1. A timeline places several changes in relation to one another. Drawing, timing and 3D tools can cooperate when their responsibilities are explicit."
            ],
            "workflowTitle": "Choose tools around the next feature",
            "steps": [
                  "Identify whether the output is an interactive website, a fixed video or both, and check the existing framework.",
                  "List the objects and interactions, distinguishing ordinary web elements, 2D drawing and 3D scenes.",
                  "Complete one small effect, then inspect editability, mobile behavior and output requirements before extending it."
            ],
            "example": "Existing project cards can use GSAP for entrance sequencing. Generative shapes around the pointer can use p5.js. A model the reader can rotate may call for Three.js. Each choice answers a specific visual task."
      },
      {
            "title": "Turn visual constraints into review criteria",
            "text": "Palette, typeface, writing direction, tracking and asset proportions establish a style. Grain, glow, outlines, shadows and line drawing add depth; keep background motion consistent and give primary text contrast and reading time. The materials' outCubic/outExpo, inOutCubic and outBack labels suggest decelerating entrances, smooth transitions and overshoot. Check the chosen tool's easing names and preview.",
            "source": "https://gsap.com/docs/v3/Eases/",
            "sourceLabel": "GSAP easing; material terminology in shared notes",
            "id": "note-4",
            "practice": "Choose one website section and write five observable style rules. Deliberately change one rule on a single card and compare the overall consistency.",
            "paragraphs": [
                  "Style constraints are reusable design decisions: palette, type hierarchy, corner treatment and spacing. They make separate screens feel related and provide concrete revision criteria. “Keep the heading hierarchy consistent” is easier to inspect than a broad request for polish.",
                  "Grain, glow, shadows and outlines add depth while text still needs contrast against its background. Motion can follow shared rules too: peer cards use the same entrance, and important content remains stable once positioned. Check wrapping, occlusion and control space separately on smaller screens."
            ],
            "workflowTitle": "Build a compact visual review sheet",
            "steps": [
                  "Choose primary and supporting colors, text hierarchy and spacing, then apply them to the static layout.",
                  "Give similar components a shared motion rule and check whether decoration interferes with recognition.",
                  "Preview the same section on phone and desktop, recording a specific location and desired result for each revision."
            ],
            "example": "A project list can share card corners, title placement and spacing. Every card uses the same small entrance movement; hover adjusts a border or shadow while the title remains clear. Future cards inherit the same rules."
      },
      {
            "title": "Canvas: compute each frame from time",
            "text": "Canvas provides a drawing surface. An animation updates position, scale or opacity and redraws, while layers establish foreground, background and text order. Browser animation commonly uses requestAnimationFrame. Mografy's public scene model derives frames from absolute time for preview, seeking and export, with an optional Three.js layer for 3D scenes.",
            "source": "https://github.com/zz41354899/mografy#scene-model",
            "sourceLabel": "Mografy: scene model",
            "id": "note-8",
            "practice": "Sketch the dot at its start, midpoint and destination. Mark the drawing order, then write a brief requesting time-based positioning and a preview that can be paused.",
            "paragraphs": [
                  "A frame is the image at one point in time. Canvas is a drawing surface controlled by code: coordinates, colors and shapes describe the current state. Animation commonly redraws the background and objects as their state changes.",
                  "Separating time from drawing helps make previews reproducible. For a simple constant-speed dot, position can be described as starting position plus speed multiplied by elapsed time. The same time then produces the same position. requestAnimationFrame schedules browser animation callbacks; p5.js sketches can organize their updates in draw(), with the actual update rate depending on runtime conditions."
            ],
            "workflowTitle": "Build a drawing process around one dot",
            "steps": [
                  "Define the canvas size and initial data, including the dot’s radius, starting point and destination.",
                  "Calculate its position from elapsed time, then draw the background, objects and text in the intended layer order.",
                  "Inspect the beginning, middle and end for reproducibility, clipping and readable labels."
            ],
            "example": "A website process diagram can move a dot from input to result. Draw the route first, the dot next and labels last. The result label stays readable when the dot arrives. Update the coordinate plan when the canvas size changes."
      },
      {
            "title": "Review preview, export and the website",
            "text": "Review text, rhythm, layers and transitions in the preview. Check resolution, frame rate, audio and size after export. On the website, verify mobile cropping, downloads, interaction and readability. Time generation, rendering and encoding separately for your own project. As an implementation supplement, preserve keyboard access and a reduced-motion reading experience.",
            "source": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion",
            "sourceLabel": "MDN: reduced motion",
            "id": "note-15",
            "practice": "Make three review rows: preview, exported file and website. Leave untested rows pending; after checking each one, record the observation and next revision.",
            "paragraphs": [
                  "Preview, export and website review answer different questions. A preview helps revise the story and timing; export creates the deliverable; the website introduces display size, loading and interaction. Separating these checks helps locate a problem: rushed text belongs to timing, while cropping belongs to presentation.",
                  "Further learning: keyboard access and reduced motion are part of reading quality. Controls need clear names and visible focus. The prefers-reduced-motion preference can guide a quieter transition or a static presentation that preserves information and interaction. Record what was actually tested."
            ],
            "workflowTitle": "Keep a result for each delivery stage",
            "steps": [
                  "Read every line in the preview, then inspect focus, layers and transitions. Record the shot and reason for each revision.",
                  "Check the exported aspect ratio, resolution, audio, file size and playback against the delivery brief.",
                  "Use the embedded result on phone, desktop and keyboard, then review content and controls with reduced motion enabled."
            ],
            "example": "A portfolio video may look correct in a player yet crop its end-card text inside a phone card. Adjust the container ratio, text-safe area or mobile composition, then repeat the same viewing path."
      },
      {
            "title": "Separate design decisions from implementation",
            "text": "The session discussed storyboarding before animation and a participant's Claude-led, Codex-assisted workflow. Compare tools using the same brief: do they follow the requested sequence, produce readable storyboards and support focused revisions? Model preferences and waiting times were session-specific experiences; use your own assets and preview quality to make a choice.",
            "source": "https://github.com/zz41354899/mografy",
            "sourceLabel": "Mografy public project",
            "id": "note-7",
            "practice": "Write a handoff for one project card: goal, assets, approved decisions, current revision and review method. Check whether an important detail still depends on a verbal explanation.",
            "paragraphs": [
                  "AI collaboration benefits from a brief that another tool can continue. The audience, storyboard, assets, approved style rules and current deliverable provide context. Keeping these decisions together makes revisions more focused and helps preserve earlier work across tools.",
                  "Compare tools on the same small task: storyboard-first delivery, preservation of colors and text, revision accuracy and preview quality. Versions and pricing change, so check current documentation and actual access conditions. Keep the input, output and revision reason as evidence for your choice."
            ],
            "workflowTitle": "Write a handoff another tool can use",
            "steps": [
                  "Collect the audience, asset locations, style rules, approved storyboard and scope of this revision.",
                  "Ask the tool to restate the deliverable, then produce a draft or preview that can be inspected.",
                  "Write approved decisions back into the brief and identify the specific problem and decisions to preserve in the next round."
            ],
            "example": "One tool can help plan four portfolio shots and another can implement the approved sequence. The handoff includes wording, asset names, shot focus and review criteria. A longer reading hold in shot two can be requested while retaining the other approved scenes."
      },
      {
            "title": "Load what the reader needs first",
            "text": "Use loading=\"lazy\" for non-critical images below the fold. Load the hero or LCP image promptly and reserve space with dimensions. Plan fetching and visual reveal separately: prepare the resource, then reveal it with the intended scroll or interaction. For video, choose preload, a poster and a deferred-loading strategy for the target browsers.",
            "source": "https://web.dev/articles/browser-level-image-lazy-loading",
            "sourceLabel": "web.dev: browser-level image lazy loading",
            "id": "note-12",
            "practice": "Label your assets “needed on arrival” or “needed later.” Inspect one lower image for reserved space, fetching time and its effect on neighboring layout.",
            "paragraphs": [
                  "Lazy loading defers resource fetching until it is closer to being needed. The first viewport contains what readers see on arrival; Largest Contentful Paint measures when the largest visible image or text block is rendered. Give an important opening image prompt access to loading rather than delaying the page’s main message.",
                  "Images can use loading=\"lazy\", with width and height helping reserve space. Fetching makes an asset available; an entrance animation controls its presentation. A video can use a poster and a preload choice suited to playback requirements. Inspect actual behavior in the browsers you intend to support."
            ],
            "workflowTitle": "Prioritize the opening view",
            "steps": [
                  "Identify the text, imagery and controls needed on arrival and make the main content visible promptly.",
                  "Defer non-critical images farther down the page and reserve their space to avoid moving nearby text.",
                  "Reload with the browser’s Network panel open, inspect fetching, then scroll down and review the content."
            ],
            "example": "A portfolio hero loads promptly while a lower gallery prepares its case-study thumbnails as needed. Reserved image ratios keep titles and buttons stable. Any card entrance can be scheduled separately from the download."
      },
      {
            "title": "Responsive images: size and pixel density",
            "text": "Provide width variants with srcset and describe the expected layout width with sizes so the browser can choose. Fixed display sizes can use density candidates such as 1x and 2x. Use picture for alternative crops or formats. Inspect the image actually downloaded on a phone to balance clarity and transfer size.",
            "source": "https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images",
            "sourceLabel": "MDN: responsive images",
            "id": "note-13",
            "practice": "Record the phone and desktop display widths, source pixels and downloaded size of one project image. Use its reading requirements to propose candidate sizes or a crop plan.",
            "paragraphs": [
                  "Responsive images let the browser choose a suitable file. CSS controls the image’s layout size, while the file has its own pixel dimensions; a small phone screen may have a high pixel density. Candidate files help balance detail with transfer size.",
                  "srcset lists candidates. With width descriptors, sizes describes the expected layout width, and the browser combines that with device conditions. Fixed display sizes can use 1x and 2x density candidates. picture can switch crops or formats, such as a wide desktop composition and a closer phone crop."
            ],
            "workflowTitle": "Plan the layout before preparing candidates",
            "steps": [
                  "Identify the displayed width and crop on phone and desktop, preserving the subject and essential text.",
                  "Prepare suitable file sizes and describe them with srcset, sizes or picture conditions.",
                  "Reload at different widths and inspect the selected currentSrc together with the visible detail."
            ],
            "example": "A case-study image may occupy half a desktop row and the full mobile content width. Width candidates let the browser choose for layout and density. If interface text remains too small on a phone, a closer crop can focus on the important part."
      },
      {
            "title": "Media formats, quality and compatibility",
            "text": "WebP supports lossy and lossless compression. PNG compression is lossless; resizing or reducing colors can change the result. WebM is a video container, and file size depends on duration, resolution, frame rate, content and encoding settings. Safari supports WebP; video compatibility depends on browser version, container and codec. Compare your actual media for quality, size and playback, then choose formats and fallbacks.",
            "source": "https://developers.google.com/speed/webp/faq",
            "sourceLabel": "Google WebP FAQ; PNG and video references below",
            "id": "note-14",
            "practice": "Produce two versions of one asset and record dimensions, format, file size and visual differences. Keep the original so the settings can be revised.",
            "paragraphs": [
                  "A format describes how a file stores content. Image compression offers choices around size and detail; video adds frame dimensions, frame rate, audio and encoding. Identify whether the asset is a photo, transparent icon, interface screenshot or video before choosing outputs to compare.",
                  "A video container packages image, audio and related data; a codec encodes and decodes the media. Playback support therefore depends on the container, codec and browser together. Inspect small text, gradients and fast-moving regions after compression, using the same content for a meaningful comparison."
            ],
            "workflowTitle": "Compare outputs from the same asset",
            "steps": [
                  "Keep dimensions and content fixed; for video, also fix duration and frame rate.",
                  "Export with suitable formats and quality settings, record size and inspect text, edges, transparency and gradients.",
                  "Play the result in target browsers, check picture and sound, and prepare alternatives required by the delivery environment."
            ],
            "example": "A product screenshot with small text can be compared as PNG and in different WebP modes to find a readable output. For a portfolio video, record the MP4 or WebM container and codec, then inspect playback on the intended phone browser."
      },
      {
            "title": "Mografy delivery and other tool entry points",
            "text": "Mografy's public workflow covers preview and export, listing MP4, WebM, Lottie and SVGA. Its Lottie/SVGA output packages frame images, so check delivery requirements early. HyperFrames builds video projects with web technology; Jitter is a web motion-design tool with an official MCP connection for AI tools. Hera and Motion UX provide generation and design-learning entry points respectively.",
            "source": "https://mografy-website.vercel.app/zh-TW",
            "sourceLabel": "Mografy; other official resources below",
            "id": "note-16",
            "practice": "Write a delivery checklist for your intended piece and check one tool against it. Separate confirmed capabilities from items to try, then complete the smallest useful export.",
            "paragraphs": [
                  "Delivery formats depend on where the work will appear. A video player, interactive web component and design tool have different needs, including transparency, sound, looping, size and later editing. Start with how the receiving environment will use the result.",
                  "Further learning can follow the goal. For storyboarding and visual timing, choose a relevant Motion UX lesson. For production and export, consult current Mografy, Hera, HyperFrames or Jitter documentation. Features and export support change, so try a small complete workflow before committing a larger piece."
            ],
            "workflowTitle": "Confirm delivery with a small complete piece",
            "steps": [
                  "List the destination, dimensions, sound, transparency, loop behavior and need for later editing.",
                  "Use one tool’s documented workflow to preview and export a small example, recording the actual files produced.",
                  "Test those files in the receiving website or player before expanding the content and visual detail."
            ],
            "example": "A silent looping background needs checks for format, size and the loop boundary. A demonstration where readers drag objects needs working web interaction. Those delivery requirements lead to different production choices."
      },
      {
            "title": "Coordinate animation with scrolling",
            "text": "Define the trigger—page entry, a section entering view, a click or a state change—then specify order, playback scope and end state. The closing Q&A emphasized appearance timing and continuity. Describe the intro, section reveals and button feedback separately, then explain their handoffs so each moment has a clear focal point.",
            "source": "https://gsap.com/docs/v3/Plugins/ScrollTrigger/",
            "sourceLabel": "GSAP ScrollTrigger; session timing synthesis",
            "id": "note-11",
            "practice": "Create columns for trigger, changing element, final state and repeated action. Preview one section, validate the order and then tune movement size.",
            "paragraphs": [
                  "Plan web motion as event → state change → stable result. Events include page entry, a section entering view, a click or completed loading. Explicit triggers make sequencing easier and help anticipate fast scrolling, repeated clicks and returning to a page.",
                  "GSAP timelines coordinate changes through positions and labels; ScrollTrigger can connect a trigger or progress to scrolling. Decide whether reaching a position starts a sequence or whether scrolling controls its progress. Give important content a clear final state and a readable reduced-motion presentation."
            ],
            "workflowTitle": "Draw states before scheduling triggers",
            "steps": [
                  "Describe initial, in-progress and completed states for each section, including when controls can be used.",
                  "Specify the trigger, repeat or return behavior and which movements follow or overlap.",
                  "Check fast scrolling, reverse scrolling, repeated actions and keyboard use for clear content and focus."
            ],
            "example": "When a portfolio section enters view, its heading settles before the cards appear. Details expand only after “View more” is activated. Readers who move quickly to the next section should still have readable project text. Review this sequence as a brief and sketch before implementing it."
      }
],
    sessionQa: [
      {
            "q": "Can several images become an animation?",
            "a": "Describe the role and order of the images, then ask for frames or a storyboard. The session used product-operation assets as an example; review continuity between the resulting shots."
      },
      {
            "q": "Why review a storyboard first?",
            "a": "A storyboard makes sequence, emphasis and reading time reviewable. The session described tools skipping this stage. Explicitly request storyboard delivery and review before animation, including the expected files."
      },
      {
            "q": "What should I prepare before prompting?",
            "a": "Prepare purpose, aspect ratio, duration, assets and the intended feeling, then request a storyboard. A short prompt can work alongside detailed project instructions and asset descriptions."
      },
      {
            "q": "What should guide model selection?",
            "a": "The presenter discussed Sonnet/Opus trade-offs in speed, detail and cost. Compare the same small brief for storyboard-first delivery, style consistency, focused revisions and turnaround."
      },
      {
            "q": "Is a separate Canvas API service needed?",
            "a": "Canvas is a browser drawing API. Mografy's documented workflow lets a coding agent read the local project and instructions, then produce scenes, previews and exports. AI service access follows the chosen tool's requirements."
      },
      {
            "q": "Can the workflow be automated?",
            "a": "The demonstrated direction was to let an agent read project instructions and create storyboards and scenes from content, duration and assets. Keep review points for the brief, storyboard, preview and export so revisions have a clear target."
      },
      {
            "q": "How might Claude and Codex share the work?",
            "a": "A session participant described Claude leading planning, Codex assisting implementation and Mografy providing previews. Keep approved decisions in a shared brief so the next tool knows the agreed content and next deliverable."
      },
      {
            "q": "Is another agent-orchestration layer needed?",
            "a": "The session favored letting an existing agent read the project and complete the brief, storyboard, preview and export workflow first. Add coordination when repeated work and handoffs justify it."
      },
      {
            "q": "Can audio, slides or text be a starting point?",
            "a": "First extract the narrative, key messages and available assets, then ask for shots and visual requirements. The session discussed these inputs; check that the selected tool can read the files and identify the images or graphics each shot needs."
      },
      {
            "q": "Where should performance work start?",
            "a": "Start with asset sizes, initial loading, deferred offscreen images and responsive image selection, then inspect animation work and export settings. Use the format and loading sections above as a checklist for your own page."
      },
      {
            "q": "Where can I continue learning?",
            "a": "Revisit the method in the slides and shared notes, use Mografy documentation for workflow details and Motion UX for motion-design teaching. Hera is a shared AI motion-graphics resource; GSAP documents web-animation APIs. Choose a direction around the output you want to make."
      },
      {
            "q": "How should animation and website effects work together?",
            "a": "Specify each layer's trigger, entrance, hold and end state, then coordinate the handoff. The closing follow-up emphasized order and continuity; tune speed and scale around the visual focus."
      },
      {
            "q": "How can I start with recordings and screenshots?",
            "a": "Organize the assets and main action. Ask AI to simplify the workflow around what the audience should understand, then produce a storyboard with HTML/PNG previews. Review it before animation and check the exported result in the website."
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
    organizer: "Claude x Codex 線上讀書會", platform: "Zoom・免費線上講座",
    speakerBio: "依主辦介紹，Nocts 具 UI/UX 與網頁設計背景，結合前端、網頁動態與 AI Coding，把設計做成能操作的網站。",
    announcedContent: "主辦公告包含動畫與操作回應、如何向 AI 說清楚內容／風格／互動需求、一頁網站示範，以及公開指令指南。對象包括想做個人網站、作品集或品牌頁的初學者，以及工程師與設計師；不需要 AI 經驗、事先想好題目或做課前功課。",
    type: "講座", format: "線上",
    summary: "從品牌個性與分鏡開始，整理 AI 協作、網站技術、動態效果、媒體效能與現場問答。",
    attribution: "Nocts（奇昌）・依活動介紹標示",
    status: "活動已結束。",
    scope: "筆記結合工作坊主題與官方文件的延伸學習；個人實作與心得各自更新。",
    sections: [
      {
            "title": "先選載體，再決定觀眾要看到什麼",
            "text": "網頁開場適合建立第一印象；捲動揭露可以分段說故事；App 的載入、切頁與通知用來交代狀態；產品解說影片則把操作流程濃縮成容易看懂的情節。每一段先選一個重點，安排視線、節奏與回應，讓前後內容接得起來。",
            "source": "https://web-animation-course.vercel.app/",
            "sourceLabel": "工作坊簡報",
            "id": "note-1",
            "practice": "選自己網站的一張卡片，畫出展開前後兩個小草圖。各寫一句「讀者現在知道什麼」，再圈出最需要提示的變化。",
            "paragraphs": [
                  "動態設計是用畫面的變化交代訊息。物件的位置、大小、透明度或形狀改變時，讀者會注意到「發生了什麼」。設計前先寫下希望讀者理解的一件事，例如按鈕已收到操作、作品卡片可以展開，或這一段開始介紹新主題。",
                  "載體就是內容出現的地方。網頁讓讀者自行捲動和點擊，影片則由播放順序帶路；同一段故事放進兩種載體，需要不同的閱讀節奏。適合初學者的起點，是先把靜態內容與操作做清楚，再挑一個需要提示的變化加入動態。"
            ],
            "workflowTitle": "先寫出這個畫面要完成的事",
            "steps": [
                  "列出讀者目前看見的內容、準備採取的行動，以及完成後要知道的結果。",
                  "把畫面分成主要訊息與輔助資訊，指定這一刻最值得注意的元素。",
                  "寫出變化前後的狀態，再決定要用淡入、位移或直接切換來交代差異。"
            ],
            "example": "作品集卡片原本顯示專案名稱與摘要。點擊「看成果」後展開成果文字，按鈕改成「收合」。讀者能把新內容連回剛才選的作品；動態只需協助看出展開位置，文字和按鈕本身就能說清楚狀態。"
      },
      {
            "title": "緩動曲線與彈簧",
            "text": "緩動控制變化速度；物理模型則另外處理彈力、阻尼等參數。舊版 Material 常用進場減速、離場加速；Standard 為 cubic-bezier(0.4, 0, 0.2, 1)，Sharp 為 cubic-bezier(0.4, 0, 0.6, 1)，用途和曲線各有差異。Damping 是阻尼，用來抑制震盪；阻尼足夠時，物件可以平穩抵達目標。選擇時先想使用者需要什麼回應。",
            "source": "https://m1.material.io/motion/duration-easing.html",
            "sourceLabel": "Material：時長與緩動；彈簧見補充來源",
            "id": "note-10",
            "practice": "替通知卡片寫兩版規格：一版用固定時長與減速曲線，一版描述彈簧回位的預期感受。記下你準備觀察的差異，像是停穩速度與過沖程度。",
            "paragraphs": [
                  "緩動可以想成替一段移動安排油門與煞車：起點和終點相同，前半段走得快或慢，感受就不同。duration 決定總共花多久，easing 決定這段時間裡速度如何分配。調整時固定其中一項，才容易看出另一項造成的差異。",
                  "彈簧動畫則根據模型往目標回位。stiffness 描述拉回力道，damping 是讓震盪逐漸減弱的阻尼；有些工具也提供 mass。拖曳後回位或可以中途改變目標的介面，適合評估這類反應。固定片長的品牌轉場則常從時間與緩動曲線開始規劃。"
            ],
            "workflowTitle": "用同一張卡片比較節奏",
            "steps": [
                  "固定卡片的起點、終點與移動距離，先用等速預覽，觀察是否容易看清楚。",
                  "保持總時長相同，換成進場減速，確認卡片停穩時文字是否容易閱讀。",
                  "若要試彈簧，先設定目標位置，再一次只改阻尼或剛性，觀察是否過沖、多久穩定。"
            ],
            "example": "表單送出成功後，一張通知卡片進場並停穩。可以讓位移在接近終點時變慢，文字持續可讀；如果是拖動作品卡片後放手，則可用彈簧回位來表達物件與目標的關係。兩者各自依互動需求選擇。"
      },
      {
            "title": "把操作錄影整理成產品故事",
            "text": "課堂以報價工具的解說動畫談操作簡化：先保留觀眾需要理解的輸入、動作與結果，再整理成分鏡。原始錄影、截圖與文字都能提供內容線索；畫面可以突出主要操作、淡化次要介面，最後留時間讀結果。示範另提到約 35 秒的 UI 流程需求，以及銀行動畫案例的短提示詞；可帶走的方法是先說清楚內容與目的，再決定鏡頭。",
            "source": "https://hackmd.io/@zz41354899/H14KjaJ9Ml",
            "sourceLabel": "課堂案例與共筆",
            "id": "note-5",
            "practice": "選一個熟悉的網站功能，把操作寫成五句話，再挑出最能解釋用途的三個畫面。請一位第一次看到的人只看草圖，說說他理解的功能。",
            "paragraphs": [
                  "產品故事把一段操作整理成「遇到什麼問題、做了什麼、得到什麼」。螢幕錄影保存完整過程，解說畫面則要讓第一次接觸產品的人辨認主要動作。先寫出使用情境，會比直接替每個按鈕加效果更容易安排內容。",
                  "適合保留的畫面，是能回答讀者疑問的步驟，例如輸入資料的位置、送出後的回應與結果長什麼樣子。製作示範時可使用清楚標示的範例資料，將游標、輸入欄位與結果對齊，讓前後畫面中的同一物件容易辨認。"
            ],
            "workflowTitle": "把長操作整理成可讀的片段",
            "steps": [
                  "先列出完整操作，再用一句話寫出這次要介紹的功能價值。",
                  "挑出與這句話直接相關的輸入、主要操作和結果，為每一步準備截圖或簡化示意。",
                  "替每幕寫一句解說，保留足夠閱讀時間；檢查結果畫面是否回答了開頭的問題。"
            ],
            "example": "在網站介紹報價工具時，先呈現「需要整理服務項目」，接著展示輸入項目與產生報價，最後停在可檢查的報價結果。若這段只介紹快速建立草稿，帳號設定和歷史清單可放到其他教學頁。"
      },
      {
            "title": "效果速查：視線、轉場與節拍",
            "text": "推近（push-in）把注意力帶向細節；打字與游標讓操作過程看得見；逐項出場（stagger）讓資訊有閱讀順序。掃動（sweep）、形變（morph）、形狀銜接（match cut）與圓形開合（iris）用來連接畫面。弧線移動、輕微擠壓（squash）與過沖可帶出重量感；停留時以小幅呼吸、視差或慢推維持生命感。配樂可用 BPM 與重拍標記重要變化，再預覽確認節奏。",
            "source": "https://hackmd.io/@zz41354899/H14KjaJ9Ml",
            "sourceLabel": "教材效果詞彙整理",
            "id": "note-3",
            "practice": "為同一組服務卡片寫一版淡入、一版逐項出場規格。比較哪一版更容易理解順序，並寫下判斷原因。",
            "paragraphs": [
                  "效果名稱是一套描述畫面變化的詞彙，能幫你把「想要有感覺」說得更具體。選用時先確定要引導注意、交代操作，還是連接兩個畫面，再挑合適的動作。每個效果都應有清楚的起點、結束狀態與閱讀位置。",
                  "例如 stagger 是把元素的開始時間錯開，適合表現一組有順序的資訊；morph 讓形狀逐漸變成另一個形狀；match cut 利用相似構圖或形狀銜接不同畫面。視差是讓不同層移動速度不同，常用來表現深度。初學者可先用淡入或小幅位移確認順序，再加入更複雜的效果。"
            ],
            "workflowTitle": "用動作說清楚一個關係",
            "steps": [
                  "在草圖上標出主角與下一個閱讀位置，寫下兩者之間的關係。",
                  "挑一種效果，描述觸發方式、變化的屬性以及結束後留下什麼。",
                  "讓重要文字停穩供閱讀，再檢查背景與前景是否同時搶走注意力。"
            ],
            "example": "介紹三步驟服務流程時，可以讓三張卡片依序出場，讓讀者先看「提出需求」，再看「討論方案」與「完成交付」。卡片就位後保持穩定，讀者也能一次比較三個步驟。這裡的 stagger 用來交代順序。"
      },
      {
            "title": "把可愛、俐落、沉穩寫成具體動作",
            "text": "先選品牌個性，再描述顏色、形狀、出場順序、移動距離與停留時間。可愛可以從圓潤造型、柔和配色與輕巧回應開始；俐落可以用清楚的對齊和短轉場；沉穩可以用較小位移與充足閱讀時間。這些是整理後的設計起點，依內容與品牌調整。課堂的粉紅色案例示範了配色與角色動態如何形成一致感。",
            "source": "https://hackmd.io/@zz41354899/H14KjaJ9Ml",
            "sourceLabel": "工作坊共筆",
            "id": "note-2",
            "practice": "選兩個描述自己網站的形容詞，每個各寫三項可觀察的畫面條件。把「更有質感」這類寬泛要求改成可以檢查的句子。",
            "paragraphs": [
                  "品牌個性是希望別人感受到的特質；動態規格則把這些特質寫成能製作與修改的選擇。「可愛」「俐落」可以作為起點，再補上造型、色彩、速度、移動幅度與停留方式，AI 或設計夥伴才知道要改哪裡。",
                  "風格也需要配合內容。活潑的品牌可以讓裝飾角色有較明顯的動作，同一頁的價格、規格與聯絡資訊仍要穩定易讀。準備參考時，指出喜歡的是配色、排版還是轉場，會比只丟一張圖更容易保留自己的內容特色。"
            ],
            "workflowTitle": "把抽象形容詞寫成製作規格",
            "steps": [
                  "選一個主要感受，再挑一個輔助特質，例如親切且有條理。",
                  "分別寫下配色、形狀、文字排列與動態規則，讓每項都能在預覽中檢查。",
                  "套用到標題、卡片和按鈕三種元素，確認同頁的風格有共同規則。"
            ],
            "example": "個人品牌網站想呈現「親切而專業」：可用柔和底色、清楚字級與圓角卡片，標題小幅進場後停穩，按鈕回應簡短。作品成果保留足夠閱讀空間，親切感來自一致的視覺選擇。"
      },
      {
            "title": "分鏡先過一輪，再生成動畫",
            "text": "需求先交代用途、觀眾、橫式或直式比例、長度、素材與風格參考，再請 AI 列出每個鏡頭的內容、時間、動作、轉場和停留點。可要求 HTML 預覽與 PNG 分鏡，檢查資訊順序後再製作動畫。修改時一次指出一個鏡頭、問題與期待結果，例如「第二段先顯示按鈕回應，再揭露結果卡片」。",
            "source": "https://hackmd.io/@zz41354899/H14KjaJ9Ml",
            "sourceLabel": "工作坊共筆",
            "id": "note-6",
            "practice": "替一個作品畫四格分鏡，每格只放一個重點。先請自己只看靜態畫面讀一次，再標出需要動態才能交代的連接。",
            "paragraphs": [
                  "分鏡是動畫開始前的畫面計畫。每一格說明這一幕的主角、文字與動作，讓你先確認故事能不能被理解。它特別適合介紹作品、產品操作或多步驟服務，因為修改一張草圖通常比重做整段動畫容易討論。",
                  "需求單先交代觀眾、用途、畫幅、素材和希望對方採取的行動。時間分配除了進出場，也要留下閱讀停留；字多的畫面可拆成兩幕。用自己的語速讀一次文字，搭配預覽調整停留，比只追求轉場密度更容易做出能看的成品。"
            ],
            "workflowTitle": "先檢查靜態故事，再安排動作",
            "steps": [
                  "把故事寫成開頭、主要內容與下一步，替每段指定一個畫面重點。",
                  "逐幕列出文字、素材、開始與結束狀態、停留方式，先交付草圖或HTML／PNG預覽。",
                  "確認內容順序與畫面焦點，再加入動作；修改時指出幕次、問題與希望保留的部分。"
            ],
            "example": "作品集介紹可以先交代專案解決的問題，再用兩張作品圖說明方法與成果，片尾引導前往完整案例頁。若成果數字尚未確認，先留可替換的文字位置，等資料確定後再完成畫面。"
      },
      {
            "title": "依作品選工具",
            "text": "p5.js 適合創意繪圖與互動；GSAP 適合補間、時間軸與協調動作；Motion for React（前稱 Framer Motion）提供 React 的介面、手勢與捲動動畫；Three.js 提供 3D 場景能力。影片工作流程可搭配 After Effects 的動態圖像與合成，以及 DaVinci Resolve 的剪輯、調色與音訊。以輸出與既有專案需求決定組合。",
            "source": "https://motion.dev/docs/react",
            "sourceLabel": "Motion for React 官方文件；其他工具見來源",
            "id": "note-9",
            "practice": "把想做的功能拆成「元素／繪圖」「時間控制」「輸出」三欄，各填一項需求。先圈出最小可完成的部分，再查對應工具文件。",
            "paragraphs": [
                  "選工具時可以分成三個問題：內容畫在哪裡、變化由誰控制、最後要交付什麼。DOM 是網頁元素的結構，適合文字、按鈕與卡片；Canvas 用程式繪製畫面，適合大量圖形或逐格更新的場景。既有網站的框架與維護方式也會影響選擇。",
                  "補間是從起始值算到目標值，例如讓透明度從 0 變成 1。時間軸則安排多段變化的開始位置與先後關係。繪圖、補間與3D可以協作：先知道哪一層負責畫面，再決定哪一層管理時間，程式比較容易拆開修改。"
            ],
            "workflowTitle": "為眼前的功能選一組責任清楚的工具",
            "steps": [
                  "先寫出輸出是互動網頁、固定影片，還是兩者都需要，並確認現有專案使用什麼框架。",
                  "列出需要繪製的物件與互動方式，分辨是一般網頁元素、2D繪圖或3D場景。",
                  "先完成一個最小效果，再檢查可修改性、手機表現與交付格式，逐步增加需求。"
            ],
            "example": "作品卡片依序進場，可由既有網頁元素搭配GSAP安排；滑鼠附近的生成圖形可用p5.js繪製；要讓讀者旋轉立體模型時，可再評估Three.js。每個選擇都對應一個明確的畫面任務。"
      },
      {
            "title": "把風格限制寫進驗收",
            "text": "色票、字體、直排或橫排、字距與素材比例一起形成風格。材質顆粒、柔光、描邊、陰影和線條描繪可用來加強層次；背景動作保持一致，主要文字要有足夠對比與閱讀時間。教材中的 outCubic／outExpo、inOutCubic、outBack 分別提示進場減速、平順銜接與過沖感；實作時對照所選工具的 easing 名稱與預覽。",
            "source": "https://gsap.com/docs/v3/Eases/",
            "sourceLabel": "GSAP：緩動曲線；教材用語見共筆",
            "id": "note-4",
            "practice": "截取自己網站的一個區塊，寫出五項可觀察的風格規則。挑一張卡片故意改掉其中一項，再比較整體一致性。",
            "paragraphs": [
                  "風格限制是一組可重複使用的設計規則，例如固定色票、字體層級、圓角與間距。它讓不同畫面看起來屬於同一個網站，也讓修改有依據。把規則寫成「標題使用同一字級層級」「卡片留白一致」這類可觀察條件，驗收會更具體。",
                  "顆粒、發光、陰影與描邊可以增加層次，使用時要保留文字與背景的對比。動態也能成為規則：相同層級的卡片使用同一種進場方式，重要內容到位後維持穩定。手機上的閱讀空間較小，需另外檢查換行、遮擋與點擊範圍。"
            ],
            "workflowTitle": "建立一張小型風格檢查表",
            "steps": [
                  "選定主要與輔助色、文字層級及基本間距，先套用到靜態畫面。",
                  "指定同類元件共用的動態節奏，再檢查背景裝飾是否影響內容辨識。",
                  "用手機與桌面預覽相同段落，把問題寫成具體位置與期待結果。"
            ],
            "example": "作品列表的每張卡片使用一致圓角、標題位置與間距。第一張進場採小幅位移，其他卡片沿用同樣規則；滑鼠停留只改邊框或陰影，作品名稱始終清楚。新增卡片時就能直接沿用這套規格。"
      },
      {
            "title": "Canvas：用時間算出每一個畫面",
            "text": "Canvas 是網頁的繪圖表面。動畫會更新位置、大小或透明度，再重畫畫面；分層能安排前景、背景和文字的先後。瀏覽器中的即時動畫常配合 requestAnimationFrame 更新。Mografy 的公開場景模型以絕對時間驅動畫面，方便預覽、定位與輸出指定影格；選用的 Three.js 圖層可處理 3D 場景。",
            "source": "https://github.com/zz41354899/mografy#scene-model",
            "sourceLabel": "Mografy：場景模型",
            "id": "note-8",
            "practice": "先在紙上畫出圓點起點、中點與終點，標記每張圖要畫的順序。再寫一段文字規格，請工具依時間計算位置並提供可暫停的預覽。",
            "paragraphs": [
                  "影格是一個時間點的畫面；動畫則持續更新這些畫面。Canvas可以想成程式控制的畫紙：你告訴它座標、顏色與形狀，它就畫出當下狀態。做動畫時通常要清除或重畫背景，再畫出更新後的物件，才能表現移動。",
                  "把時間和畫面分開思考，能讓預覽更容易重現。以簡化的等速圓點為例，位置可寫成「起點＋速度×經過時間」。如此一來，同一時間會得到同一位置。requestAnimationFrame讓瀏覽器安排更新回呼；若用p5.js，則可在draw()裡組織更新與繪製，實際更新頻率依環境而變。"
            ],
            "workflowTitle": "從一個圓點建立繪圖流程",
            "steps": [
                  "先設定畫布尺寸與初始資料，例如圓點半徑、起點和目標位置。",
                  "依經過時間計算目前位置；每次更新先處理背景，再依圖層順序畫物件與文字。",
                  "預覽開頭、中間和結尾，檢查同一時間的狀態是否一致，以及物件是否超出畫布。"
            ],
            "example": "網站的流程示意可以用圓點沿路徑移動，表示資料由輸入到結果。背景先畫路徑，再畫圓點，最後畫標籤；當圓點停在結果端時，標籤仍清楚。若改畫布大小，座標也要配合版面調整。"
      },
      {
            "title": "把預覽、輸出與網站驗收分成三步",
            "text": "預覽先看文字、節奏、層次與轉場；輸出再檢查解析度、幀率、音訊與檔案大小；放進網站後，確認手機裁切、下載量、互動與可讀性。講者提到的製作和匯出分鐘數是個案經驗，可把自己的生成、算圖與編碼分別計時。補充實作時，也要保留鍵盤操作與減少動態效果的閱讀方式。",
            "source": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion",
            "sourceLabel": "MDN：減少動態效果",
            "id": "note-15",
            "practice": "替一個作品建立三列檢查紀錄：「預覽看到了什麼」「輸出檔案如何」「放回網站如何」。尚未執行的列保留待測，完成後填入觀察與下一個修改。",
            "paragraphs": [
                  "預覽、輸出與網站呈現檢查的是不同事情。預覽用來修改內容與節奏；輸出把作品變成可交付檔案；放進網站後，還要看實際尺寸、載入與操作。分開驗收能讓問題比較容易定位，例如文字太快先回時間安排，影片裁切則回版面設定。",
                  "延伸學習：鍵盤操作與減少動態效果也屬於閱讀品質。互動控制應有清楚名稱與焦點；使用者偏好減少動態時，可透過prefers-reduced-motion安排較少位移、簡單切換或靜態呈現，讓資訊和操作保持可用。完成狀態要以實際預覽與測試紀錄確認。"
            ],
            "workflowTitle": "為三個階段各留一份檢查結果",
            "steps": [
                  "預覽時先讀完文字，再看主角、圖層與轉場，記下需要修改的幕次和原因。",
                  "輸出後檢查畫幅、解析度、音訊、檔案大小與播放結果，核對交付需求。",
                  "放進網站後，以手機、桌面與鍵盤操作一次，再檢查減少動態設定下的內容與功能。"
            ],
            "example": "同一支作品介紹在播放器裡看起來正常，放進手機作品卡片後可能因裁切而少了片尾文字。此時可調整容器比例、文字安全範圍或替手機準備不同構圖，再用相同路徑重看一次。"
      },
      {
            "title": "AI 協作：把設計決策和實作交付分開",
            "text": "課堂分享先討論分鏡、再生成動畫的流程，也有人分享由 Claude 主導需求、Codex 協助實作的經驗。可以用相同需求比較工具是否照指定順序交付、分鏡是否清楚、修改是否方便。講者偏好的模型與等待時間屬於當次使用經驗；選擇時以自己的素材、預覽與交付品質做判斷。",
            "source": "https://github.com/zz41354899/mografy",
            "sourceLabel": "Mografy 公開專案",
            "id": "note-7",
            "practice": "替一張作品卡片寫一份交接單，包含目標、素材、已確認內容、本輪修改與驗收方式。用這份交接單檢查自己是否還需要口頭補充重要資訊。",
            "paragraphs": [
                  "AI協作需要一份大家都能接續的規格。需求、分鏡、素材、已確認的設計規則與目前要交付的東西，都是工具理解任務的上下文。把這些內容整理好，能讓下一輪修改更聚焦，也方便換工具時延續前面的決定。",
                  "模型或工具的比較可以用相同的小任務進行：是否先交分鏡、是否保留配色與文字、修改範圍是否準確、預覽是否容易檢查。版本與價格會變動，選擇時查目前文件與實際使用條件；把每次的輸入、結果與修改原因留下，比只記一個偏好更有參考價值。"
            ],
            "workflowTitle": "把交接寫成可以直接接手的規格",
            "steps": [
                  "整理目標讀者、素材位置、風格規則、已確認分鏡與這一輪要改的範圍。",
                  "請工具先回覆它理解的交付內容，再產出可檢查的草稿或預覽。",
                  "審查結果後，把通過的決定寫回規格；下一輪指出具體問題與需要保留的部分。"
            ],
            "example": "你可以先用一個工具討論作品集的四格分鏡，再把確認版交給另一個工具製作。交接內容包含文字、素材檔名、每幕重點與驗收條件；若第二幕要延長閱讀時間，就指定第二幕，並保留其他已確認畫面。"
      },
      {
            "title": "先載入眼前需要的內容",
            "text": "畫面下方的非關鍵圖片可用 loading=\"lazy\" 延後載入；首屏主視覺與 LCP 圖片優先載入，並設定寬高來預留版面。載入時機和出場動畫可以分開規劃：資源準備好，再依捲動或互動揭露。影片可依目標瀏覽器選擇 preload、poster 與延後載入策略。",
            "source": "https://web.dev/articles/browser-level-image-lazy-loading",
            "sourceLabel": "web.dev：瀏覽器圖片延遲載入",
            "id": "note-12",
            "practice": "替自己的頁面素材標記「首屏需要」或「稍後需要」。挑一張下方圖片，檢查尺寸是否預留、何時開始下載，以及出現後是否改變附近版面。",
            "paragraphs": [
                  "延遲載入是把資源下載安排在接近需要時，減少一開始要處理的內容。首屏是讀者打開頁面先看到的區域；LCP衡量視窗內最大圖片或文字區塊呈現的時間。若主視覺圖片就是首屏重點，應優先準備它，讓讀者早點看到頁面主要內容。",
                  "圖片可用loading=\"lazy\"交由瀏覽器延後載入，並用width與height協助預留空間。下載與進場是兩個可分開安排的步驟：下載讓資源可用，進場決定讀者何時看到變化。影片還可透過poster提供封面，並依播放需求選擇preload；實際載入行為要在目標瀏覽器檢查。"
            ],
            "workflowTitle": "先安排首屏，再處理下方素材",
            "steps": [
                  "列出一進頁面就需要的文字、圖片和控制，讓主要內容優先可見。",
                  "將下方非關鍵圖片安排延遲載入，並保留尺寸，避免圖片出現時推擠文字。",
                  "使用瀏覽器開發工具的Network面板重新載入頁面，觀察下載時機，再捲到下方檢查內容。"
            ],
            "example": "作品集首頁的主視覺先載入，下方十張案例縮圖則依需要逐步準備。縮圖區預先保留比例，讀者往下捲時標題與按鈕位置保持穩定；卡片進場效果則另外配合捲動安排。"
      },
      {
            "title": "響應式圖片：版面大小與像素密度一起看",
            "text": "手機、平板和桌面的顯示需求不同。srcset 可提供不同寬度的檔案，sizes 描述圖片在版面中預計佔多寬，交由瀏覽器挑選；固定顯示尺寸也可用 1x、2x 密度候選。需要不同裁切或格式時，再用 picture。檢查手機實際下載哪張圖，讓清晰度與傳輸量配合。",
            "source": "https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images",
            "sourceLabel": "MDN：響應式圖片",
            "id": "note-13",
            "practice": "選一張作品圖，記下手機與桌面的顯示寬度、原圖像素和實際下載大小。根據閱讀需求，寫出你要準備的候選尺寸或裁切方案。",
            "paragraphs": [
                  "回應式圖片讓瀏覽器依顯示需求選擇檔案。CSS決定圖片在版面上佔多大，圖片檔案則有自己的像素尺寸；手機的小畫面也可能有較高像素密度。提供不同尺寸候選，可以同時考慮清晰度與下載量。",
                  "srcset列出可選檔案，使用寬度描述時，sizes交代圖片預計在版面中佔多少寬度；瀏覽器再搭配裝置條件選擇。若顯示尺寸固定，可使用1x、2x密度候選。picture適合依條件換構圖或格式，像是桌面橫圖與手機直式裁切。"
            ],
            "workflowTitle": "先決定版面，再準備候選圖片",
            "steps": [
                  "確認圖片在手機與桌面的顯示寬度及裁切方式，保留主角和必要文字。",
                  "準備符合需求的尺寸候選，配上對應的srcset、sizes或picture條件。",
                  "在不同寬度重新載入，檢查瀏覽器實際選用的currentSrc與畫面細節。"
            ],
            "example": "桌面作品頁讓案例圖佔半欄，手機則佔滿內容寬度。可先提供數個寬度版本，讓瀏覽器依版面和像素密度選圖；若橫向截圖在手機太小，再準備聚焦主要介面的裁切版本。"
      },
      {
            "title": "圖片與影片：格式、品質、相容性",
            "text": "WebP 提供有損與無損壓縮；PNG 本身採無損壓縮，另行縮圖或減色會影響結果。WebM 是影片容器，可搭配不同編碼器；檔案大小受長度、解析度、幀率、內容和編碼設定影響。Safari 已有 WebP 支援，影片則要一起檢查瀏覽器版本、容器與編碼器。用實際素材比較畫質、大小與播放結果，再決定格式和備援。",
            "source": "https://developers.google.com/speed/webp/faq",
            "sourceLabel": "Google WebP FAQ；PNG／影片規格見來源",
            "id": "note-14",
            "practice": "替一份素材做兩個輸出版本，用表格記錄尺寸、格式、檔案大小與目視差異。保留原始素材，方便重新調整。",
            "paragraphs": [
                  "格式是檔案如何保存內容的方式。圖片壓縮可以在檔案大小與細節之間做選擇；影片還包含畫幅、幀率、聲音與編碼設定。先確認作品是照片、透明圖示、介面截圖或影片，再決定要比較哪些輸出。",
                  "影片的容器用來裝影像、音訊與相關資料，codec則負責編碼與解碼。因此判斷播放支援時，要一起看容器、codec和瀏覽器。檔案變小之後，也要看細字、漸層與快速移動的區域；用相同內容比較，才能知道壓縮造成什麼變化。"
            ],
            "workflowTitle": "用同一份素材比較輸出",
            "steps": [
                  "先固定尺寸與內容；影片也先固定片長與幀率，讓比較條件一致。",
                  "選擇合適的格式和品質設定，記錄輸出大小，再放大檢查文字、邊緣、透明與漸層。",
                  "在目標瀏覽器播放，確認畫面和聲音；依交付環境準備必要的替代來源。"
            ],
            "example": "一張含細字的產品截圖可比較PNG與WebP不同模式，選擇仍能清楚閱讀的版本。作品介紹影片則記錄MP4或WebM搭配的codec，實際放到手機瀏覽器播放，再檢查畫質與載入。"
      },
      {
            "title": "Mografy 的交付與其他工具入口",
            "text": "Mografy 公開文件提供預覽與輸出流程，首頁列出 MP4、WebM、Lottie、SVGA；其 Lottie／SVGA 輸出採影格圖片封裝，適合先核對交付需求。延伸工具包括 HyperFrames 和 Jitter：前者以網頁技術建立影片專案；後者是網頁動態設計工具，官方另提供 MCP 連接 AI 工具。Hera 與 Motion UX 分別可作生成工具和設計學習入口。",
            "source": "https://mografy-website.vercel.app/zh-TW",
            "sourceLabel": "Mografy；其他官方入口見來源",
            "id": "note-16",
            "practice": "替想做的作品寫一張交付清單，選一個工具查它是否支援。把已確認條件與仍要試用的項目分開，先完成最小輸出。",
            "paragraphs": [
                  "交付格式要配合作品最後出現的地方。影片播放器、網頁內的互動元件和設計工具各有需求，可能涉及透明背景、聲音、循環、檔案大小或後續編輯。先寫出接收端如何使用作品，會比較容易挑工具與輸出流程。",
                  "延伸學習可以依目標分路線：想練分鏡與視覺節奏，可從Motion UX的設計教學挑一個相關主題；想製作並輸出作品，可查Mografy、Hera、HyperFrames或Jitter的現行文件。產品功能和匯出支援依版本而變，開始前先用小作品走過一次流程。"
            ],
            "workflowTitle": "用最小作品確認交付條件",
            "steps": [
                  "列出放置位置、需要的尺寸、聲音、透明效果、循環方式及是否要繼續編輯。",
                  "選一個工具做最小範例，依官方流程完成預覽與輸出，記錄實際產生的檔案。",
                  "把檔案交給真正使用它的網頁或播放器檢查，再擴充內容與視覺細節。"
            ],
            "example": "作品頁需要一段無聲、可循環的背景動態時，可先檢查輸出格式、檔案大小與循環銜接；若是讓讀者拖曳物件的互動示範，則要保留可執行的網頁互動。交付條件會直接影響工具選擇。"
      },
      {
            "title": "讓動畫與捲動接得起來",
            "text": "先定義觸發事件：進入頁面、捲動到區塊、點擊或狀態改變。再排先後順序、播放範圍與結束狀態。課堂最後的問答特別強調「何時出現」和連貫性。可以把開場動畫、段落揭露、按鈕回饋分開描述，再寫出交接關係，讓同一時間的視覺重點清楚。",
            "source": "https://gsap.com/docs/v3/Plugins/ScrollTrigger/",
            "sourceLabel": "GSAP ScrollTrigger；課堂時序整理",
            "id": "note-11",
            "practice": "為自己的作品區寫四欄：「觸發」「要改變的元素」「完成狀態」「再次操作時怎麼辦」。挑一個區塊完成預覽，先驗證順序，再調整動作幅度。",
            "paragraphs": [
                  "網頁動態可以用「事件 → 狀態變化 → 穩定結果」來規劃。事件可能是頁面出現、區塊進入視窗、按下按鈕或資料完成載入。把觸發條件寫清楚，就能安排先後順序，也能預想快速捲動、重複點擊與返回頁面時的行為。",
                  "GSAP時間軸可協調多段動畫，透過位置與標籤安排銜接；ScrollTrigger可把觸發或進度連到捲動。使用時先決定是到達位置後播放一段，還是讓動畫進度隨捲動變化。重要內容應有清楚的最終狀態，並為減少動態偏好保留容易閱讀的呈現。"
            ],
            "workflowTitle": "先畫狀態，再排觸發與交接",
            "steps": [
                  "為每個區塊寫下初始、進行中與完成狀態，標記何時允許互動。",
                  "指定觸發事件、播放次數或返回行為，再安排哪些動作接續、哪些可以同時發生。",
                  "檢查快速捲動、往回捲、連續操作與鍵盤使用，確認內容和焦點保持清楚。"
            ],
            "example": "作品區進入視窗後，標題先到位，卡片接著出場；讀者按「看更多」才展開細節。若讀者快速跳到下一段，作品文字仍應可讀。這份時序可以先用文字與草圖確認，再交給動畫工具實作。"
      }
],
    sessionQa: [
      {
            "q": "多張圖片能串成動畫嗎？",
            "a": "可以先交代圖片的用途與順序，再請 AI 規劃逐格或分鏡內容。課堂以產品操作素材說明這個方向，製作時仍要檢查畫面之間的連續性。"
      },
      {
            "q": "先做分鏡，有什麼幫助？",
            "a": "分鏡讓內容順序、畫面重點和停留時間先變得可討論。課堂提到直接生成動畫時容易略過這一步；可在提示詞列明「先交分鏡，確認後再做動畫」，並寫出希望收到的檔案。"
      },
      {
            "q": "提示詞之前要準備什麼？",
            "a": "先整理用途、畫幅、秒數、素材與想傳達的感受，再要求分鏡。短提示詞也能搭配完整的專案規則和素材說明，讓 AI 取得足夠上下文。"
      },
      {
            "q": "模型選擇可以看哪些條件？",
            "a": "講者討論 Sonnet／Opus 在討論速度、細節與成本上的取捨。可以拿相同的小案例比較：是否先交分鏡、是否保留風格、修改是否集中、等待時間是否合適。"
      },
      {
            "q": "需要另外接 Canvas API 服務嗎？",
            "a": "Canvas 是瀏覽器提供的繪圖 API。依 Mografy 公開流程，可讓程式代理讀取本機專案和相關操作說明，再產生場景、預覽與輸出。AI 服務的存取需求另依所選工具處理。"
      },
      {
            "q": "可以把流程自動化嗎？",
            "a": "課堂示範的方向是讓 AI 讀取專案規則，以內容、秒數和素材產生分鏡與場景。仍可保留需求、分鏡、預覽與輸出的檢查點，讓每次修改有明確位置。"
      },
      {
            "q": "Claude 與 Codex 可以如何分工？",
            "a": "現場有人分享由 Claude 討論需求、Codex 配合實作，再透過 Mografy 預覽的流程。可把規劃結果整理成共同規格，讓接手的工具知道已確認內容與下一個交付。"
      },
      {
            "q": "需要額外串接多個代理嗎？",
            "a": "課堂建議先讓既有代理讀取專案，走通需求、分鏡、預覽與輸出。之後再依重複工作和交接需求安排分工。"
      },
      {
            "q": "只有聲音、簡報或文字，也能規劃嗎？",
            "a": "可以先整理敘事順序、關鍵訊息和可用素材，再請 AI 提出鏡頭與畫面需求。課堂討論了這些輸入方式；實作時還要確認工具能讀取提供的檔案，以及每個鏡頭需要的圖片或圖形。"
      },
      {
            "q": "動態網站的效能從哪裡開始看？",
            "a": "先檢查素材大小、首屏載入、下方圖片的延遲載入與響應式圖片，再看動畫執行與輸出設定。上方格式與載入章節已整理官方做法，可逐項對照自己的頁面。"
      },
      {
            "q": "後續可以從哪些資源學？",
            "a": "從工作坊簡報與共筆回看方法，再用 Mografy 文件查操作、Motion UX 看動態設計教學。Hera 是課堂分享的 AI 動態圖像入口，GSAP 可查網頁動畫 API。依想完成的作品挑一個方向延伸。"
      },
      {
            "q": "動畫和網頁特效怎麼安排？",
            "a": "分別寫出兩者的觸發、出場、停留和結束狀態，再安排交接。最後的追問把重點收在先後順序與連貫性；速度和比例則配合畫面焦點調整。"
      },
      {
            "q": "只有錄影和截圖，怎麼開始？",
            "a": "先整理素材和主要操作，告訴 AI 觀眾要看懂什麼，請它簡化流程、列分鏡並提供 HTML／PNG 預覽。確認後再製作動畫，輸出完成再檢查網站中的呈現。"
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
