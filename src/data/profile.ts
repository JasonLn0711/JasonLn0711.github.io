export const profile = {
  name: "Jason Chia-Sheng Lin",
  title: "Doctoral Researcher in AI Systems",
  tagline: "Building speech intelligence and trustworthy AI systems for fraud analysis, evidence extraction, and secure LLM workflows.",
  bio: "I am a PhD student at the Institute of Biophotonics, National Yang Ming Chiao Tung University, where I study AI systems for speech intelligence, fraud detection conversation analysis, trustworthy LLM pipelines, and AI security. My background in cybercrime investigation shapes how I think about evidence, adversaries, and operational usefulness.",
  shortBio:
    "I bridge investigation intelligence and AI intelligence systems. My work combines ASR, LLM pipelines, RAG, and security-aware evaluation for speech analysis, fraud detection, and trustworthy AI.",
  email: "cre062400@gmail.com",
  github: "https://github.com/JasonLn0711",
  linkedin: "https://www.linkedin.com/in/jason-lin-1a648813b/",
  location: "Taiwan",
  avatar: "/images/headshot.jpg",
  keywords: ["Speech Intelligence", "Trustworthy AI", "Fraud Detection AI", "AI Security"],
  credibility: ["Speech Intelligence", "Trustworthy AI", "Fraud Detection AI", "AI Security"],
  researchThemes: [
    {
      title: "Speech Intelligence & LLM Systems",
      description:
        "Building ASR + LLM pipelines for conversational audio, transcript understanding, and evidence-aware language processing.",
      tags: ["ASR", "Whisper", "RAG"]
    },
    {
      title: "Fraud Detection & Evidence Extraction",
      description:
        "Designing AI systems that analyze fraud-related conversations, extract evidence, and support investigator-style review.",
      tags: ["Conversation Analysis", "Evidence Extraction", "LLM Systems"]
    },
    {
      title: "Trustworthy AI & AI Security",
      description:
        "Studying evaluation, model leakage, and federated learning security for AI systems used in high-stakes settings.",
      tags: ["Model Leakage", "Federated Learning", "Evaluation"]
    }
  ],
  about: [
    "I have been a PhD student since 2026 at the Institute of Biophotonics, National Yang Ming Chiao Tung University, where I work on AI systems for speech intelligence, fraud detection, trustworthy AI, and AI security.",
    "Before entering doctoral research, I worked in law enforcement as a cybercrime investigator. That experience shaped how I think about evidence, adversarial behavior, digital forensics, and the operational demands of real-world analytical systems.",
    "Today, I focus on AI systems that are not only capable, but also traceable, reliable, and useful in high-stakes environments where evidence quality and system trust matter."
  ],
  interests: [
    "Speech intelligence systems for conversational analysis and transcript understanding",
    "ASR + LLM pipelines for evidence extraction and investigator support",
    "Fraud detection AI for conversation analysis and risk-oriented reasoning",
    "Trustworthy LLM systems with auditable, retrieval-grounded outputs",
    "AI security, model leakage, and federated learning privacy"
  ],
  experience: [
    {
      period: "2026-Present",
      title: "Doctoral Researcher, NYCU",
      detail: "Researching speech intelligence, ASR + LLM pipelines, RAG systems, fraud conversation analysis, and AI security at the Institute of Biophotonics."
    },
    {
      period: "Before 2026",
      title: "Cybercrime Investigator",
      detail: "Worked in law enforcement on digital forensics, online fraud investigation, OSINT analysis, and financial cybercrime cases."
    },
    {
      period: "Before 2026",
      title: "International Cybercrime Training",
      detail: "Participated in international investigative training focused on cybercrime methods, evidence handling, and cross-border crime intelligence."
    },
    {
      period: "Ongoing",
      title: "Investigation Intelligence -> AI Intelligence Systems",
      detail: "Translating investigative reasoning, evidence awareness, and adversarial thinking into modern AI system design."
    }
  ],
  achievements: [
    "Direct-entry PhD student at NYCU since 2026.",
    "Brings cybercrime investigation experience into speech intelligence, fraud AI, and trustworthy AI research.",
    "Current work spans ASR, LLM pipelines, RAG systems, and federated learning security."
  ],
  toolkit: [
    {
      title: "ML / NLP / LLM",
      items: ["PyTorch", "Transformers", "Whisper", "LLM Pipelines", "RAG Systems"]
    },
    {
      title: "Speech / Audio",
      items: ["ASR", "Transcript Processing", "Speech Intelligence", "Evidence Extraction", "Conversation Analysis"]
    },
    {
      title: "Security / Investigation",
      items: ["Digital Forensics", "OSINT", "Fraud Investigation", "Cybercrime Intelligence", "Federated Learning Security"]
    },
    {
      title: "Research / Engineering",
      items: ["Python", "Evaluation Design", "Experiment Tracking", "GitHub Actions", "Reproducible Workflows"]
    }
  ],
  contactPrompt:
    "I’m open to research conversations, collaboration, and technical opportunities related to speech intelligence, trustworthy AI, fraud detection, and AI security."
} as const;

export type Profile = typeof profile;
