export const home = {
  hero: {
    eyebrow: "Research Library · AI Agents · Cybersecurity",
    headline: "Trustworthy AI systems for evidence-heavy work.",
    description:
      "A technical portfolio for collaborators, hiring teams, and organizers who need to inspect the research agenda, system builds, talks, and writing behind my work in AI agents, speech intelligence, cybersecurity, and regulated deployment.",
    primaryCta: {
      href: "/research/",
      label: "Explore research"
    },
    secondaryCta: {
      href: "/projects/",
      label: "View systems"
    },
    tertiaryCta: {
      href: "/talks/",
      label: "Review talks"
    },
    capabilities: [
      "Agent workflows that preserve evidence and reviewer control",
      "Speech and transcript pipelines built for long-form analysis",
      "Security-aware deployment thinking for regulated environments"
    ],
    trace: [
      {
        label: "Source",
        value: "audio, transcripts, threat records, research notes"
      },
      {
        label: "Pipeline",
        value: "ASR, RAG, agents, evaluation, threat modeling"
      },
      {
        label: "Review",
        value: "human-readable evidence, decisions, and handoff"
      }
    ],
    metrics: [
      {
        label: "Current role",
        value: "Doctoral researcher at NYCU"
      },
      {
        label: "Build focus",
        value: "AI agents, speech intelligence, and security-aware systems"
      },
      {
        label: "Public signals",
        value: "CYBERSEC 2026 session and CISC 2025 papers"
      }
    ],
    routes: [
      {
        title: "Collaborators",
        description: "See the agenda, active work, and where collaboration fits.",
        href: "/research/"
      },
      {
        title: "Hiring teams",
        description: "Start with selected builds, then use resume and about.",
        href: "/projects/"
      },
      {
        title: "Organizers",
        description: "Review topics, the keynote, and the direct contact path.",
        href: "/talks/"
      }
    ],
    siteMap: [
      "Research questions and active work",
      "Selected builds and case studies",
      "Writing that explains the decisions",
      "Talks, keynote material, and contact"
    ]
  },
  architecture: {
    eyebrow: "About the Library",
    title: "A site organized like a technical system, not a loose portfolio.",
    description:
      "The redesign borrows Triton's clarity: a direct technical promise, a compact capability list, getting-started paths, and evidence sections that let visitors inspect what has been built, written, and presented.",
    diagramTitle: "Working model",
    diagramDescription:
      "Evidence enters through speech, text, threat, and research sources, then moves through grounded AI workflows before a human review or deployment decision.",
    layers: [
      {
        label: "Capture",
        value: "audio, transcripts, evidence, threat signals"
      },
      {
        label: "Reason",
        value: "retrieval, agents, extraction, system evaluation"
      },
      {
        label: "Review",
        value: "traceability, uncertainty, human approval"
      },
      {
        label: "Deploy",
        value: "security, governance, regulated workflows"
      }
    ],
    capabilities: [
      {
        title: "Evidence-aware AI agents",
        description:
          "Agent workflows should expose what they used, what changed, what remains uncertain, and where a human should intervene.",
        href: "/research/trustworthy-ai-agent-systems/",
        tags: ["Agents", "Evaluation", "Review"]
      },
      {
        title: "Speech intelligence pipelines",
        description:
          "Long-form audio needs more than transcription: timestamps, speaker turns, retrieval, extraction, and reviewable outputs must stay connected.",
        href: "/projects/speech-evidence-intelligence-pipeline/",
        tags: ["ASR", "RAG", "Transcripts"]
      },
      {
        title: "Security-minded deployment",
        description:
          "High-stakes AI work needs threat models, privacy assumptions, audit trails, rollback paths, and governance from the beginning.",
        href: "/research/security-high-stakes-deployment/",
        tags: ["Cybersecurity", "Privacy", "Governance"]
      }
    ]
  },
  gettingStarted: {
    eyebrow: "Getting Started",
    title: "Choose the entry point that matches your visit.",
    description:
      "Triton makes the next step obvious for developers. This site should do the same for collaborators, reviewers, hiring teams, and event organizers.",
    cards: [
      {
        title: "Collaborators",
        description: "Start with the research agenda, then open the active directions and case studies that match your lab or project.",
        href: "/research/",
        cta: "Open research"
      },
      {
        title: "Hiring teams",
        description: "Review selected systems, then use the resume and about pages to understand fit, scope, and technical range.",
        href: "/projects/",
        cta: "Open systems"
      },
      {
        title: "Organizers",
        description: "Use the talks page for invited topics, public sessions, conference papers, and the web keynote narrative.",
        href: "/talks/",
        cta: "Open talks"
      },
      {
        title: "Readers",
        description: "Use the writing archive for essays and technical notes that explain the reasoning behind the work.",
        href: "/blog/",
        cta: "Open writing"
      }
    ]
  },
  evidence: {
    eyebrow: "Evidence Trail",
    title: "Projects, papers, talks, and essays should reinforce one another.",
    description:
      "The homepage now treats every artifact as part of the same library: case studies show implementation evidence, talks show public technical framing, and writing records the reasoning that connects them.",
    systemsLabel: "Selected systems",
    writingLabel: "Research notes and essays",
    speakingLabel: "Papers and talks",
    columns: ["Claim", "Evidence", "Artifact", "Status"],
    claims: [
      {
        claim: "Doctoral research base in trustworthy AI and deployment-sensitive systems.",
        evidence: "NYCU lab context, professional profile, and current research agenda.",
        artifact: "About / resume pages",
        status: "Current",
        href: "/about/"
      },
      {
        claim: "Public technical framing for regulated AI and AI SaMD cybersecurity.",
        evidence: "CYBERSEC 2026 official session plus a web-native keynote narrative.",
        artifact: "Regulated AI cybersecurity talk",
        status: "Published",
        href: "/talks/regulated-ai-cybersecurity/"
      },
      {
        claim: "Security research communication across ransomware defense and threat-pulse modeling.",
        evidence: "Two CISC 2025 English conference-paper sessions summarized for organizers and readers.",
        artifact: "Talks overview",
        status: "Published",
        href: "/talks/"
      },
      {
        claim: "Implementation thinking around long-form speech and reviewable evidence.",
        evidence: "ASR + retrieval + LLM extraction case study with an explicit evaluation lens.",
        artifact: "Speech evidence pipeline",
        status: "Active",
        href: "/projects/speech-evidence-intelligence-pipeline/"
      },
      {
        claim: "Grounded RAG framing for fraud conversation analysis.",
        evidence: "Transcript-centered retrieval workflow designed around analyst review.",
        artifact: "Fraud RAG case study",
        status: "Active",
        href: "/projects/fraud-conversation-analysis-rag/"
      }
    ]
  },
  projectReadiness: {
    eyebrow: "Project Readiness",
    title: "Every featured build carries a maturity signal.",
    description:
      "The labels separate early research, concrete prototypes, paper-backed work, production-style case studies, and archived artifacts so visitors know how to read each project.",
    levels: [
      {
        level: "Research seed",
        description: "A scoped research direction with a clear question, references, and next evaluation work."
      },
      {
        level: "Prototype",
        description: "A system or pipeline direction concrete enough to discuss as an implementation path."
      },
      {
        level: "Paper-backed",
        description: "A project connected to a publication, formal submission, or conference-facing artifact."
      },
      {
        level: "Production-style case study",
        description: "A polished system narrative with deployment assumptions, user workflow, and risk controls."
      },
      {
        level: "Archived",
        description: "A finished or historical artifact kept for reference rather than active development."
      }
    ]
  },
  research: {
    eyebrow: "Research Direction",
    title: "Core research directions.",
    description:
      "The work asks how AI agents and decision-support systems stay reliable, reviewable, and useful under real operational constraints.",
    browseLabel: "See the full research overview"
  },
  projects: {
    eyebrow: "Selected Systems",
    title: "Case studies that make the architecture inspectable.",
    description: "Each project explains the problem, the system design, and the evidence that matters in practice.",
    browseLabel: "Browse all systems"
  },
  writing: {
    eyebrow: "Research Notes",
    title: "Writing that preserves the reasoning layer.",
    description: "Short essays and research notes make the design choices behind the technical work easier to inspect.",
    browseLabel: "View all writing"
  },
  speaking: {
    eyebrow: "Papers / Talks",
    title: "Public technical framing for serious deployment.",
    description:
      "Speaking spans official sessions and English conference papers across AI agents, cybersecurity, speech systems, and deployment work where reliability and traceability matter.",
    browseLabel: "Browse talks and topics"
  },
  about: {
    eyebrow: "About Snapshot",
    title: "An interdisciplinary path from investigation to AI and agent systems.",
    description: "The work combines doctoral research, agent building, and an investigation-informed view of evidence and failure."
  },
  contact: {
    eyebrow: "Contact",
    title: "Open to collaboration, technical discussion, and speaking invitations.",
    description: "Email is the fastest route. The contact page also shows the context that helps most."
  }
} as const;

export type HomeContent = typeof home;
