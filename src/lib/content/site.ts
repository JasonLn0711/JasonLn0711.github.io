export const site = {
  name: "Jason Chia-Sheng Lin",
  shortName: "Jason Lin",
  title: "Doctoral Researcher, Artificial Intelligence in Medical Imaging / Signal Analysis Lab",
  institution: "National Yang Ming Chiao Tung University",
  lab: "Artificial Intelligence in Medical Imaging / Signal Analysis Lab",
  url: "https://jasonln0711.github.io",
  email: "cre062400@gmail.com",
  github: "https://github.com/JasonLn0711",
  linkedin: "https://www.linkedin.com/in/jason-lin-1a648813b/",
  avatar: "/images/headshot.jpg",
  defaultTitle: "Jason Chia-Sheng Lin | Evidence-aware AI systems",
  description:
    "Personal research site and blog for evidence-aware AI systems in speech, clinical workflow support, agent governance, cybersecurity, and enterprise AI education.",
  nav: [
    { href: "/now/", label: "Now" },
    { href: "/research/", label: "Research" },
    { href: "/projects/", label: "Systems" },
    { href: "/blog/", label: "Writing" },
    { href: "/about/", label: "About" },
    { href: "/resume/", label: "CV" }
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
    href: "/talks/"
  }
] as const;

export const recentHighlights = [
  {
    date: "2026-06",
    period: "June 2026",
    category: "Teaching",
    title: "AI Systems Engineering Handbook",
    summary:
      "Built a tutorial-first handbook around enterprise AI systems: foundations, Linux/cloud/K8s/GPU, LLM apps, RAG, AI Gateway, agent governance, voice AI, security, delivery, and AI-assisted engineering.",
    status: "13 modules, accelerator packages, teacher packets, and validation checks",
    href: "/talks/"
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
    title: "AI Systems Engineering Handbook",
    date: "June 2026",
    audience: "Engineers, learners, and enterprise AI teams",
    summary:
      "A modular tutorial system for enterprise AI: foundations, infrastructure, LLM applications, RAG, AI Gateway, agent governance, voice AI, security, delivery, and AI-assisted engineering.",
    status: "13 modules, master knowledge base, templates, references, and validation scripts."
  },
  {
    title: "Enterprise AI Architecture Sprint",
    date: "June 2026",
    audience: "Course designers and technical mentors",
    summary:
      "Day packages for AI Gateway, Agent Governance, and model-serving curriculum, including vLLM/SGLang, inference lifecycle, KV cache, prefill/decode, and governance boundaries.",
    status: "Teacher packets and accelerator course materials published in the handbook repo."
  },
  {
    title: "Medical AI cybersecurity teaching package",
    date: "May-June 2026",
    audience: "Medical-device and regulated-AI teams",
    summary:
      "Slide, audio, transcript, and test-question support around AI software medical-device cybersecurity, FDA 524B, threat modeling, SBOM, Zero Trust, and Patch SLA.",
    status: "CYBERSEC talk delivered; CDE teaching handoff prepared."
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
    title: "Enterprise AI systems from foundations to agent governance",
    summary:
      "Tutorial system and teaching packets for AI Gateway, agent governance, model serving, RAG, voice AI, security, enterprise delivery, and AI-assisted engineering discipline.",
    schedule: "June 2026",
    venue: "Public learning repository",
    format: "Teaching system",
    href: "/talks/"
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
    helps: "Use Writing and Talks for long-form notes, teaching surfaces, and public framing.",
    href: "/blog/"
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

export const routePaths = [
  "/",
  "/now/",
  "/design/",
  "/audiences/",
  "/research/",
  ...researchPillars.map((item) => `/research/${item.slug}/`),
  "/projects/",
  ...projects.map((item) => `/projects/${item.slug}/`),
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
