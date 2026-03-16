export const home = {
  hero: {
    eyebrow: "Jason Chia-Sheng Lin · Doctoral Researcher at NYCU",
    headline: "I build AI agents and trustworthy systems for real-world work.",
    description:
      "This portfolio focuses on AI agents, IDE-like agent systems, speech intelligence, cybersecurity, and regulated deployment, with an emphasis on evidence, reliability, and human review.",
    primaryCta: {
      href: "/research/",
      label: "Explore Research"
    },
    secondaryCta: {
      href: "/projects/",
      label: "View Projects"
    },
    metrics: [
      {
        label: "Current role",
        value: "Doctoral researcher at NYCU"
      },
      {
        label: "Build focus",
        value: "AI agents, speech pipelines, and security-aware systems"
      },
      {
        label: "Best first stop",
        value: "Research for fit, projects for builds, contact for collaboration"
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
  research: {
    eyebrow: "Research Direction",
    title: "Research shaped by agents, evidence, and security.",
    description:
      "The work asks how AI agents and decision-support systems stay reliable, reviewable, and useful under real operational constraints.",
    browseLabel: "See the full research overview"
  },
  projects: {
    eyebrow: "Selected Projects",
    title: "Case studies in AI agents, speech systems, and security-aware design.",
    description: "Each project explains the problem, the system design, and the decisions that matter in practice.",
    browseLabel: "Browse all projects"
  },
  writing: {
    eyebrow: "Selected Writing",
    title: "Writing on trustworthy AI, agent systems, and operational reasoning.",
    description: "Short essays and research notes make the reasoning behind the technical work easier to inspect.",
    browseLabel: "View all writing"
  },
  speaking: {
    eyebrow: "Talks / Speaking",
    title: "Available for talks on AI agents, trustworthy AI, and serious deployment.",
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
