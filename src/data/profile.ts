export const profile = {
  name: "Jason Chia-Sheng Lin",
  handle: "JasonLn0711",
  title: "Doctoral Researcher, Artificial Intelligence in Medical Imaging / Signal Analysis Lab",
  institution: "National Yang Ming Chiao Tung University",
  institutionShort: "NYCU",
  tagline: "Building trustworthy AI systems for real-world, security-critical, and regulated environments.",
  bio: "Jason Chia-Sheng Lin is a doctoral researcher in the Artificial Intelligence in Medical Imaging / Signal Analysis Lab at National Yang Ming Chiao Tung University. His work focuses on trustworthy AI, AI Software as a Medical Device (SaMD), cybersecurity, and deployable AI systems in high-stakes environments.",
  shortBio:
    "I bring together medical AI lab research, system building, and investigation-informed thinking to design AI systems that remain useful when evidence, regulation, and deployment constraints matter.",
  email: "cre062400@gmail.com",
  github: "https://github.com/JasonLn0711",
  linkedin: "https://www.linkedin.com/in/jason-lin-1a648813b/",
  lab: {
    name: "Artificial Intelligence in Medical Imaging / Signal Analysis Lab",
    lead: "Prof. Yu-Te Wu",
    url: "https://ytwu.lab.nycu.edu.tw/"
  },
  externalProfiles: {
    cybersecSpeaker: {
      label: "CYBERSEC 2026 Speaker Profile",
      url: "https://cybersec.ithome.com.tw/en/2026/speaker/2060"
    }
  },
  location: "Taiwan",
  avatar: "/images/headshot.jpg",
  keywords: [
    "AI Systems",
    "Trustworthy AI",
    "Speech Intelligence",
    "ASR",
    "LLM Systems",
    "RAG Systems",
    "Cybersecurity",
    "High-Stakes AI Deployment"
  ],
  credibility: ["Trustworthy AI", "AI Systems", "Speech Intelligence", "Cybersecurity", "High-Stakes Deployment"],
  about: [
    "I am a doctoral researcher in the Artificial Intelligence in Medical Imaging / Signal Analysis Lab at National Yang Ming Chiao Tung University (NYCU), where my work sits at the intersection of AI systems, trustworthy AI, speech and language pipelines, and security-aware evaluation.",
    "Before doctoral research, I worked in cybercrime investigation. That experience still shapes how I think about evidence, adversarial behavior, failure analysis, and the difference between a model that performs well in isolation and a system that can be trusted in practice.",
    "Today, I focus on ASR + LLM + RAG workflows, speech intelligence, deployable AI systems, and governance-minded thinking for regulated or security-sensitive environments. My current speaking activity includes an official CYBERSEC 2026 breakout session on cybersecurity design for AI software medical devices, with FDA 524B, threat modeling, SBOM, and auditable governance as core themes."
  ],
  interests: [
    "Trustworthy AI systems for operationally meaningful deployment",
    "ASR + LLM + RAG pipelines for speech intelligence and evidence-aware analysis",
    "Security, privacy, and evaluation for AI systems used in high-stakes settings",
    "Human review, traceability, and decision support in analyst-facing workflows",
    "Real-world AI design for anti-fraud, healthcare, and other regulated environments"
  ],
  experience: [
    {
      period: "Current",
      title: "Doctoral Researcher, NYCU Artificial Intelligence in Medical Imaging / Signal Analysis Lab",
      detail:
        "Researching trustworthy AI systems, medical cybersecurity, speech intelligence, grounded LLM workflows, and security-aware evaluation for real-world deployment."
    },
    {
      period: "Previous",
      title: "Cybercrime Investigation",
      detail:
        "Worked on digital evidence, online fraud analysis, OSINT, and operational reasoning in high-stakes investigative settings."
    },
    {
      period: "Cross-Disciplinary",
      title: "Investigation-Informed Systems Thinking",
      detail:
        "Bringing evidence awareness, adversarial thinking, and operational discipline into the way AI systems are designed and evaluated."
    },
    {
      period: "Ongoing",
      title: "Research and Technical Communication",
      detail:
        "Developing research case studies, technical writing, and speaking material around trustworthy AI, speech systems, and deployment risk."
    }
  ],
  achievements: [
    "Interdisciplinary profile spanning research, systems building, and security-minded reasoning.",
    "Current work connects ASR, LLM/RAG pipelines, evaluation design, and deployment constraints.",
    "Open to collaboration with research groups, technical teams, and high-stakes AI stakeholders."
  ],
  toolkit: [
    {
      title: "ML / LLM Systems",
      items: ["PyTorch", "Transformers", "Whisper", "LLM Pipelines", "RAG Systems"]
    },
    {
      title: "Speech / Language",
      items: ["ASR", "Speech Intelligence", "Transcript Processing", "Evidence Extraction", "Conversation Analysis"]
    },
    {
      title: "Security / Operations",
      items: ["Cybersecurity", "Digital Forensics", "OSINT", "Fraud Analysis", "Federated Learning Security"]
    },
    {
      title: "Research / Evaluation",
      items: ["Experiment Design", "Evaluation Frameworks", "Reproducible Workflows", "Python", "GitHub Actions"]
    }
  ],
  contactPrompt:
    "I welcome thoughtful conversations around research collaboration, trustworthy AI, speech and language systems, and AI deployment in security-sensitive or regulated environments."
} as const;

export type Profile = typeof profile;
