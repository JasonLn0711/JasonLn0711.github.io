import { profile } from "./profile";

export const contactLinks = [
  {
    label: "GitHub",
    href: profile.github,
    note: "Code, systems experiments, and public technical work"
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    note: "Professional profile and academic / industry contact point"
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    note: "Best for research collaboration and thoughtful outreach"
  },
  {
    label: "CV",
    href: profile.cvHref,
    note: profile.cvLabel
  }
] as const;

export const collaborationAreas = [
  "Research collaboration in trustworthy AI, speech intelligence, and AI systems",
  "Speaking invitations for technical, research, or interdisciplinary audiences",
  "Technical conversations around deployment, evaluation, security, and operational AI"
] as const;
