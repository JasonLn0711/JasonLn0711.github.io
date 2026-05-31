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
  defaultTitle: "Jason Chia-Sheng Lin | Living Research Atlas",
  description:
    "A warm, evidence-led personal research atlas for trustworthy AI, speech intelligence, cybersecurity, AI agents, and regulated deployment.",
  nav: [
    { href: "/research/", label: "Research" },
    { href: "/projects/", label: "Projects" },
    { href: "/writing/", label: "Writing" },
    { href: "/talks/", label: "Talks" },
    { href: "/resume/", label: "Resume" },
    { href: "/about/", label: "About" },
    { href: "/contact/", label: "Contact" }
  ]
} as const;

export const designConcepts = [
  {
    slug: "hero-living-research-atlas",
    title: "Hero / Living Research Atlas",
    image: "/design/v3-concepts/01-hero-living-research-atlas.png",
    purpose: "Open with a human, warm, evidence-led research identity.",
    translation: "Full-bleed portrait atmosphere, floating navigation, two primary routes, cyan action and amber evidence markers."
  },
  {
    slug: "audience-route-atlas",
    title: "Audience Route Atlas",
    image: "/design/v3-concepts/02-audience-route-atlas.png",
    purpose: "Let different visitors enter by intent instead of guessing the right page.",
    translation: "Route cards orbit a central decision question on desktop, then become a guided stack on mobile."
  },
  {
    slug: "research-atlas",
    title: "Research Atlas",
    image: "/design/v3-concepts/03-research-atlas.png",
    purpose: "Show three research territories as inspectable evidence directions.",
    translation: "Tall territory panels with thesis, evidence ledger, validation path, and outputs."
  },
  {
    slug: "project-evidence-lab",
    title: "Project Evidence Lab",
    image: "/design/v3-concepts/04-project-evidence-lab.png",
    purpose: "Turn projects into benches that show problem, system, evidence, and maturity.",
    translation: "One large featured bench plus smaller instruments and a maturity rail."
  },
  {
    slug: "talks-public-framing",
    title: "Talks / Public Framing",
    image: "/design/v3-concepts/05-talks-public-framing.png",
    purpose: "Make talks readable by audience fit and decision value.",
    translation: "Featured public session, audience-fit matrix, and talk timeline."
  },
  {
    slug: "writing-reasoning-archive",
    title: "Writing / Reasoning Archive",
    image: "/design/v3-concepts/06-writing-reasoning-archive.png",
    purpose: "Present writing as inspectable reasoning rather than generic posts.",
    translation: "Featured essay, recent notes, and semantic map."
  },
  {
    slug: "about-working-model",
    title: "About / Working Model",
    image: "/design/v3-concepts/07-about-working-model.png",
    purpose: "Translate Jason's calm, caring, rigorous style into collaboration principles.",
    translation: "Portrait, working model statement, four principles, and a journey strip."
  },
  {
    slug: "contact-intents",
    title: "Contact Intents",
    image: "/design/v3-concepts/08-contact-intents.png",
    purpose: "Make outreach specific, low-pressure, and easy to start.",
    translation: "Direct email action plus accessible intent accordions."
  }
] as const;

export const audienceRoutes = [
  {
    slug: "reviewing",
    title: "I'm reviewing or evaluating.",
    audience: "Reviewers, program committees, hiring readers, and evaluation teams.",
    pain: "You need evidence, scope, and reasoning without a long discovery path.",
    helps: "Start from research territories, public artifacts, and validation paths.",
    href: "/research/"
  },
  {
    slug: "collaborating",
    title: "I want to collaborate or build on this.",
    audience: "Collaborators, co-investigators, and technical partners.",
    pain: "You need to know where joint work can start and what evidence already exists.",
    helps: "Open projects, then use contact intents to share the rough version.",
    href: "/projects/"
  },
  {
    slug: "regulated-context",
    title: "I work in a regulated or security context.",
    audience: "Policy teams, auditors, security leads, and clinical or compliance stakeholders.",
    pain: "You need safety, risk, deployment, and governance boundaries to be explicit.",
    helps: "Read the security research territory and the regulated AI talk surface.",
    href: "/talks/regulated-ai-cybersecurity/"
  },
  {
    slug: "student",
    title: "I'm a student or early researcher.",
    audience: "Students, new researchers, and independent learners.",
    pain: "You need approachable explanations and a way to inspect how the work is structured.",
    helps: "Use the writing archive, then follow the research atlas into deeper pages.",
    href: "/writing/"
  },
  {
    slug: "builder",
    title: "I want to build or implement.",
    audience: "Engineers, builders, and technical implementers.",
    pain: "You need system choices, components, and integration boundaries.",
    helps: "Open the project evidence lab and inspect readiness labels.",
    href: "/projects/"
  },
  {
    slug: "organizing",
    title: "I'm organizing an event, talk, or publication.",
    audience: "Organizers, editors, seminar hosts, and community leaders.",
    pain: "You need topic fit, public signals, and a practical invitation path.",
    helps: "Start from talks and use contact with audience context.",
    href: "/talks/"
  },
  {
    slug: "early-idea",
    title: "I have an early idea or unclear scope.",
    audience: "People with nascent ideas, messy drafts, or open-ended problems.",
    pain: "You need a safe way to share the rough version without pretending the scope is ready.",
    helps: "Use the early-idea contact route and send the context you already have.",
    href: "/contact/"
  }
] as const;

export const researchPillars = [
  {
    slug: "trustworthy-ai-agent-systems",
    title: "Trustworthy AI and Agent Systems",
    shortTitle: "Trustworthy AI Agent Systems",
    maturity: "Emerging",
    summary:
      "Designing AI agents and systems where reliability, evaluation, human review, and traceability are part of the architecture.",
    thesis:
      "The core problem is no longer making agents look autonomous in a demo. It is making them dependable enough that a human can understand their state, trust the right parts, and interrupt or correct them without paying a coordination tax.",
    why:
      "Agent progress is now gated less by raw fluency and more by control surfaces: permissions, observability, interoperability, and human escalation.",
    evidence: [
      "Agent workflow patterns that preserve evidence and reviewer control.",
      "Human-in-the-loop evaluation for decisions and handoff quality.",
      "Uncertainty-aware planning and tool-calling in regulated contexts."
    ],
    validation: ["Problem framing", "System design", "Evaluation and red teaming", "Field feedback"],
    outputs: "Blueprints, evaluations, playbooks, and reusable components.",
    questions: [
      "What is the right granularity for agent permissions in research, coding, and analyst workflows?",
      "Which traces improve reviewer judgment, and which ones only create noise?",
      "What counts as acceptable failure behavior for an agent allowed to act on external systems?"
    ]
  },
  {
    slug: "speech-language-agent-workflows",
    title: "Speech, Language, and Agent Workflows",
    shortTitle: "Speech-Language Evidence Workflows",
    maturity: "Growing",
    summary:
      "Building ASR + LLM + RAG pipelines and agent workflows for long-form audio, transcripts, and evidence-aware reasoning.",
    thesis:
      "Speech workflows become genuinely useful when they preserve grounding across audio, transcript, retrieval, and analyst judgment.",
    why:
      "The research question is shifting from recognition alone to end-to-end workflow design that preserves what transcripts flatten.",
    evidence: [
      "Speech and transcript pipelines built for long-form analysis.",
      "Disfluency, prosody, and semantics as evidence features.",
      "Multilingual and domain transfer in real-world corpora."
    ],
    validation: ["Data collection", "Processing and annotation", "Modeling and analysis", "Downstream use"],
    outputs: "Pipelines, datasets, models, and evidence reports.",
    questions: [
      "When is transcript-only RAG enough, and when do we need audio-aware retrieval?",
      "What is the right abstraction layer for analyst-facing outputs: transcript spans, structured events, or both?",
      "How can ASR context discovery, retrieval, and downstream reasoning be evaluated as one pipeline?"
    ]
  },
  {
    slug: "security-high-stakes-deployment",
    title: "Security and High-Stakes Deployment",
    shortTitle: "Security and High-Stakes Deployment",
    maturity: "Critical",
    summary:
      "Studying privacy, leakage, adversarial risk, and governance constraints that shape AI systems used in regulated environments.",
    thesis:
      "High-stakes AI deployment is mainly an engineering and governance problem: threat models, access boundaries, logging, rollback, data stewardship, and human failure detection.",
    why:
      "The serious question is whether an AI system can fail safely, be audited under pressure, and remain governable across vendors, updates, and adversarial use.",
    evidence: [
      "Threat modeling and misuse case coverage for AI systems.",
      "Security-aware evaluation and red-teaming results.",
      "Operational hardening and observability in the field."
    ],
    validation: ["Threat modeling", "Controls and evaluation", "Adversarial validation", "Monitor and adapt"],
    outputs: "Risk models, evaluations, controls, and deployment playbooks.",
    questions: [
      "How should AI risk be mapped across model, data, retrieval, tool, and vendor layers?",
      "Which controls reduce real exposure instead of only improving documentation?",
      "How can teams keep audit trails useful to engineers, investigators, risk owners, and reviewers?"
    ]
  }
] as const;

export const projects = [
  {
    slug: "speech-evidence-intelligence-pipeline",
    title: "Speech Evidence Intelligence Pipeline",
    category: "AI Systems",
    readiness: "Prototype",
    summary:
      "An evidence-aware speech intelligence pipeline using ASR, retrieval, and LLM extraction to turn long-form conversational audio into structured, reviewable outputs.",
    humanPain:
      "Long-form conversational audio is hard to review because transcripts are noisy, speaker turns can be ambiguous, and evidence is scattered across time.",
    systemResponse:
      "The pipeline keeps audio, transcript spans, retrieval context, and final claims connected so reviewers can inspect where an output came from.",
    evidence: ["ASR and transcript segmentation", "Retrieval over evidence-bearing spans", "Structured extraction for reviewer handoff"],
    stack: ["Python", "ASR", "Whisper", "RAG", "LLM Pipelines"],
    cover: "/projects/speech-evidence-intelligence-pipeline.svg",
    next: "Expand evaluation notes for transcript quality, retrieval grounding, and analyst review effort."
  },
  {
    slug: "fraud-conversation-analysis-rag",
    title: "Fraud Conversation Analysis with RAG",
    category: "Fraud Analysis",
    readiness: "Research seed",
    summary:
      "A research-led case study on retrieval-augmented fraud conversation analysis designed to keep LLM outputs grounded in transcript evidence.",
    humanPain:
      "Fraud conversations contain intent, persuasion patterns, role shifts, and evidence cues that fluent summaries can flatten or overstate.",
    systemResponse:
      "Grounded retrieval surfaces relevant transcript segments before reasoning, so generated answers remain tied to recoverable dialogue evidence.",
    evidence: ["Transcript indexing", "Evidence-bearing dialogue retrieval", "Grounding and hallucination-control evaluation"],
    stack: ["Python", "RAG", "LLM Pipelines", "Transcript Analysis"],
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
    stack: ["PyTorch", "Federated Learning", "Privacy", "Gradient Leakage"],
    cover: "/projects/federated-learning-leakage-study.svg",
    next: "Compare attack and defense assumptions across collaborative training scenarios."
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
    title: "AI 軟體醫材的資安實戰：從美國 FDA 524B 規範到 Threat Modeling 與 Patch SLA 的完整落地",
    summary:
      "Breakout session on cybersecurity practice for AI software medical devices, connecting FDA 524B, threat modeling, SBOM, Zero Trust design, and auditable risk governance.",
    schedule: "May 6, 2026 · 16:15-16:45",
    venue: "Taipei Nangang Exhibition Center Hall 2 · 4F Conference Room 4A",
    format: "Breakout Session",
    href: "/talks/regulated-ai-cybersecurity/"
  },
  {
    slug: "cisc-2025-ransomware",
    event: "CISC 2025",
    title: "Evolution and Defense Challenges of Ransomware-as-a-Service in the AI Era",
    summary:
      "English conference paper using Medusa and CrazyHunter to connect AI-era RaaS tradecraft with practical zero-trust defense.",
    schedule: "May 28-29, 2025",
    venue: "Feng Chia University",
    format: "Conference Paper",
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
    format: "Conference Paper",
    href: "/talks/"
  }
] as const;

export const workingPrinciples = [
  {
    title: "Bring the rough version.",
    subtitle: "I expect ambiguity early.",
    body:
      "Half-formed ideas are welcome. I help surface the real question, name the unknowns, and map a path forward."
  },
  {
    title: "Evidence stays visible.",
    subtitle: "Claims need a trail.",
    body:
      "Sources, assumptions, data, and decisions should stay inspectable rather than buried behind polished language."
  },
  {
    title: "Boundaries are care.",
    subtitle: "Clarity builds trust.",
    body:
      "Scope, risk, privacy, and review paths should be set early so people, research integrity, and systems are protected."
  },
  {
    title: "Next step is light.",
    subtitle: "Small moves, real progress.",
    body:
      "A useful conversation ends with one concrete next step, small enough to start and specific enough to matter."
  }
] as const;

export const contactIntents = [
  {
    title: "Research collaboration",
    summary: "Explore joint research, datasets, benchmarks, or new problems worth studying.",
    prompt: "Send the research question, current evidence, timeline, and what kind of collaboration would be useful."
  },
  {
    title: "Regulated AI problem",
    summary: "Discuss a security, safety, or compliance challenge in a sensitive or regulated environment.",
    prompt: "Share the setting, decision pressure, stakeholders, and what cannot be exposed publicly."
  },
  {
    title: "Talk or seminar invitation",
    summary: "Invite me to speak with your team, class, workshop, or conference.",
    prompt: "Include audience, format, date range, language, and what decision or learning outcome the talk should support."
  },
  {
    title: "Early idea or messy draft",
    summary: "Share a nascent idea, rough plan, or half-formed thought.",
    prompt: "Send the rough version, what feels unclear, and the smallest next answer that would help."
  }
] as const;

export const zhTw = {
  homeTitle: "把複雜問題整理成可被信任的證據路徑。",
  homeLead:
    "這是 Jason Chia-Sheng Lin 的 Living Research Atlas：整理值得信賴 AI、語音智能、資安與受規範部署的研究、系統、演講與寫作。",
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
  "/design/",
  "/audiences/",
  "/research/",
  ...researchPillars.map((item) => `/research/${item.slug}/`),
  "/projects/",
  ...projects.map((item) => `/projects/${item.slug}/`),
  "/talks/",
  "/talks/regulated-ai-cybersecurity/",
  "/writing/",
  ...writings.map((item) => `/writing/${item.slug}/`),
  "/blog/",
  ...writings.map((item) => `/blog/${item.slug}/`),
  "/about/",
  "/contact/",
  "/resume/",
  "/links/",
  "/zh-tw/",
  "/zh-tw/contact/"
];
