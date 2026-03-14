export const home = {
  hero: {
    eyebrow: "Doctoral Researcher at NYCU",
    headline: "Building trustworthy AI systems for the real world.",
    description:
      "I work across AI systems, cybersecurity, ASR, LLM, and RAG to build evidence-aware systems for security-critical, regulated, and operationally demanding environments.",
    primaryCta: {
      href: "/research/",
      label: "View Research"
    },
    secondaryCta: {
      href: "/projects/",
      label: "Selected Projects"
    },
    metrics: [
      {
        label: "Focus",
        value: "Trustworthy AI systems"
      },
      {
        label: "Systems",
        value: "LLMs, RAG, ASR"
      },
      {
        label: "PhD Since",
        value: "2025"
      }
    ]
  },
  research: {
    eyebrow: "Research Direction",
    title: "A research agenda shaped by deployment, evidence, and security.",
    description:
      "The work is organized around a small set of questions about how AI systems behave when reliability, traceability, and operational constraints are treated as first-class design requirements."
  },
  projects: {
    eyebrow: "Selected Projects",
    title: "Case studies in trustworthy AI, speech intelligence, and security-aware systems.",
    browseLabel: "Browse all projects →"
  },
  writing: {
    eyebrow: "Selected Writing",
    title: "Writing on trustworthy AI, grounded systems, and operational reasoning.",
    browseLabel: "View all writing →"
  },
  speaking: {
    eyebrow: "Talks / Speaking",
    title: "Available for research talks, technical sessions, and interdisciplinary discussion.",
    description:
      "Speaking topics connect trustworthy AI, speech and language systems, evaluation, and the realities of deploying AI where reliability and traceability matter.",
    browseLabel: "Speaking topics →"
  },
  about: {
    eyebrow: "About Snapshot",
    title: "An interdisciplinary path from investigation to AI systems research."
  },
  contact: {
    eyebrow: "Contact",
    title: "Open to research collaboration, technical discussion, and speaking invitations."
  }
} as const;

export type HomeContent = typeof home;
