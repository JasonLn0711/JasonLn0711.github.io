import { profile } from "./profile";
import { speaking } from "./speaking";

export const linksPage = {
  page: {
    eyebrow: "Quick Links",
    title: profile.name,
    description:
      "A compact routing page for Jason Chia-Sheng Lin's research, projects, writing, talks, and contact."
  },
  primaryActions: [
    {
      href: "/research/",
      label: "Research",
      description: "Research agenda, active directions, and recent conference papers."
    },
    {
      href: "/projects/",
      label: "Projects",
      description: "Case studies in speech intelligence, grounded RAG, and security-aware AI."
    },
    {
      href: "/blog/",
      label: "Writing",
      description: "Essays and research notes that make the reasoning behind the work visible."
    },
    {
      href: "/talks/",
      label: "Talks",
      description: "Speaking topics, keynote material, and recent conference activity."
    },
    {
      href: "/about/",
      label: "About",
      description: "Professional context, research path, and technical toolkit."
    },
    {
      href: "/contact/",
      label: "Contact",
      description: "Email, collaboration context, and the best next step for reaching out."
    }
  ],
  audiencePaths: [
    {
      href: "/contact/",
      label: "Collaborate",
      description: "Start here for research collaboration, technical discussion, and interdisciplinary work."
    },
    {
      href: "/about/",
      label: "Recruiters / Hiring Teams",
      description: "A concise view of background, research fit, and the way the work connects research with delivery."
    },
    {
      href: "/research/",
      label: "Students",
      description: "See the active questions, ongoing directions, and the kinds of systems problems I care about."
    },
    {
      href: "/talks/",
      label: "Speaking / Media",
      description: "Browse topics, recent sessions, and invitation-ready material for seminars or events."
    }
  ],
  profileLinks: [
    {
      href: profile.lab.url,
      label: "Lab Website",
      description: "Current doctoral lab at National Yang Ming Chiao Tung University.",
      eventName: "links_lab_website_click"
    },
    {
      href: profile.github,
      label: "GitHub",
      description: "Code, prototypes, and the implementation side of ongoing research.",
      eventName: "links_github_click"
    },
    {
      href: profile.linkedin,
      label: "LinkedIn",
      description: "Professional profile for longer-term connection and external context.",
      eventName: "links_linkedin_click"
    },
    {
      href: profile.externalProfiles.cybersecSpeaker.url,
      label: "CYBERSEC Speaker Profile",
      description: "External conference speaker profile for the featured 2026 session."
    },
    {
      href: speaking.featuredEngagement.url,
      label: "Official Session Page",
      description: "Official event listing for the medical cybersecurity breakout session."
    }
  ],
  contact: {
    title: "Contact",
    description:
      "The best route for collaboration, speaking invitations, research discussions, and technically specific inquiries.",
    ctaLabel: "Email Jason"
  }
} as const;

export type LinksPageContent = typeof linksPage;
