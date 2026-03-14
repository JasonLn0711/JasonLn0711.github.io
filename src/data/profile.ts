export const profile = {
  name: "Jason Chia-Sheng Lin",
  handle: "JasonLn0711",
  role: "Doctoral Researcher (PhD Student)",
  institution: "National Yang Ming Chiao Tung University (NYCU)",
  institute: "Institute of Biophotonics",
  location: "Taiwan",
  email: "cre062400@gmail.com",
  github: "https://github.com/JasonLn0711",
  linkedin: "https://www.linkedin.com/in/jason-lin-1a648813b/",
  cvHref: "mailto:cre062400@gmail.com?subject=CV%20request",
  cvLabel: "CV available upon request",
  avatar: "/images/headshot.jpg",
  keywords: [
    "Trustworthy AI",
    "AI Systems",
    "Speech Intelligence",
    "Cybersecurity",
    "ASR",
    "LLM Systems",
    "RAG",
    "Operational AI"
  ],
  hero: {
    eyebrow: "Doctoral Researcher | AI Systems | NYCU",
    headline: "Building trustworthy AI systems for the real world.",
    subheadline:
      "I work at the intersection of AI systems, cybersecurity, speech and language pipelines, and deployable intelligence workflows for high-stakes environments."
  },
  quickFacts: [
    { label: "Role", value: "PhD student since 2026" },
    { label: "Focus", value: "Trustworthy AI systems" },
    { label: "Working with", value: "ASR, LLM, RAG, security" }
  ],
  shortBio:
    "I build AI systems for environments where trust, evidence, and operational reliability matter. My work spans speech intelligence, trustworthy AI, cybersecurity, and deployable language systems for high-stakes workflows.",
  narrative: [
    "My research sits in the gap between benchmark capability and deployment reality. I am interested in what happens when speech and language systems move out of demos and into environments shaped by risk, governance, institutional constraints, and operational accountability.",
    "Before entering doctoral research, I worked in cybercrime investigation. That background shaped the way I think about evidence, adversarial behavior, and the difference between a technically impressive system and one that can actually be trusted under pressure.",
    "Today, I bring that perspective into AI systems research by focusing on architectures that are not only capable, but also grounded, inspectable, and usable in real-world settings such as fraud analysis, healthcare-adjacent workflows, and security-critical intelligence systems."
  ],
  about: [
    "I am a doctoral researcher at the Institute of Biophotonics, National Yang Ming Chiao Tung University. My work focuses on trustworthy AI systems, speech and language pipelines, and deployable intelligence workflows for environments where operational trust matters as much as model capability.",
    "I am particularly interested in ASR + LLM + RAG systems, real-world evaluation, and the security and governance questions that emerge when AI is used in regulated or high-stakes contexts. I care about systems that can support serious human decision-making without hiding uncertainty or breaking the chain of evidence.",
    "What differentiates my perspective is the combination of AI systems work with investigation-driven thinking. I tend to approach machine intelligence as something that must survive contact with operational reality: incomplete information, adversarial conditions, institutional constraints, and the need for defensible outcomes."
  ],
  positioning:
    "I build trustworthy AI systems for security-critical, regulated, and operationally complex environments.",
  collaboration:
    "I am open to research collaborations, speaking invitations, and technical conversations around trustworthy AI, speech intelligence, LLM systems, AI security, and real-world deployment."
} as const;

export type Profile = typeof profile;
