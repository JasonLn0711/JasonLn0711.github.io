export const home = {
  hero: {
    eyebrow: "Jason Chia-Sheng Lin · Doctoral Researcher at NYCU",
    headline: "I build trustworthy AI systems for speech, security, and regulated real-world use.",
    description:
      "This site is a research portfolio for work on trustworthy AI, speech intelligence, cybersecurity, and deployment-ready systems where evidence, reliability, and reviewability matter.",
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
        label: "Working across",
        value: "Trustworthy AI, speech intelligence, and cybersecurity"
      },
      {
        label: "Best first stop",
        value: "Research for fit, projects for evidence, talks for speaking"
      }
    ],
    routes: [
      {
        title: "Research collaborators",
        description: "Start with the agenda, active directions, and where collaboration fits.",
        href: "/research/"
      },
      {
        title: "Hiring teams",
        description: "Go from selected projects to writing, then use the about page for context.",
        href: "/projects/"
      },
      {
        title: "Conference organizers",
        description: "Review speaking topics, the featured keynote, and the contact path.",
        href: "/talks/"
      }
    ],
    siteMap: [
      "Research agenda and current work",
      "Selected projects and case studies",
      "Writing that explains the reasoning",
      "Talks, keynote material, and contact"
    ]
  },
  research: {
    eyebrow: "Research Direction",
    title: "A research agenda shaped by deployment, evidence, and security.",
    description:
      "The work is organized around a small set of questions about how AI systems behave when reliability, traceability, and operational constraints are treated as first-class design requirements.",
    browseLabel: "See the full research overview"
  },
  projects: {
    eyebrow: "Selected Projects",
    title: "Case studies in trustworthy AI, speech intelligence, and security-aware systems.",
    description: "Each project is framed as a case study so visitors can understand the problem, the system choices, and why the work matters in practice.",
    browseLabel: "Browse all projects"
  },
  writing: {
    eyebrow: "Selected Writing",
    title: "Writing on trustworthy AI, grounded systems, and operational reasoning.",
    description: "Short essays and research notes make the reasoning behind the technical work easier to inspect.",
    browseLabel: "View all writing"
  },
  speaking: {
    eyebrow: "Talks / Speaking",
    title: "Available for research talks, technical sessions, and interdisciplinary discussion.",
    description:
      "Speaking activity spans official sessions and English conference papers across trustworthy AI, cybersecurity, threat intelligence, speech systems, and the realities of deploying AI where reliability and traceability matter.",
    browseLabel: "Browse talks and topics"
  },
  about: {
    eyebrow: "About Snapshot",
    title: "An interdisciplinary path from investigation to AI systems research.",
    description: "The work is shaped by doctoral research, systems building, and an investigation-informed view of evidence and failure."
  },
  contact: {
    eyebrow: "Contact",
    title: "Open to research collaboration, technical discussion, and speaking invitations.",
    description: "The fastest route is email. The contact page also explains what context is most useful to include."
  }
} as const;

export type HomeContent = typeof home;
