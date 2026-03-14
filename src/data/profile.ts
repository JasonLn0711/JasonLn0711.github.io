export const profile = {
  name: "Jason Chia-Sheng Lin",
  title: "AI, Cybersecurity, and Digital Forensics Researcher",
  tagline: "Building trustworthy AI systems for fraud analysis, digital investigations, and security operations.",
  bio: "I work at the intersection of AI, cybersecurity, and digital forensics, translating noisy operational data into decision support systems that are measurable, explainable, and deployable.",
  shortBio:
    "I am a CS researcher focused on fraud intelligence, digital trust, and security analytics. My work blends experimentation, model evaluation, and pragmatic engineering to build systems that investigators and analysts can actually use.",
  email: "cre062400@gmail.com",
  github: "https://github.com/JasonLn0711",
  linkedin: "https://www.linkedin.com/in/chia-sheng-lin-1a648813b/",
  location: "Taipei and Hsinchu, Taiwan",
  avatar: "/images/headshot.jpg",
  keywords: ["AI Research", "Cybersecurity", "Digital Forensics", "Fraud Detection"],
  credibility: ["AI Research", "Cybersecurity", "Digital Forensics", "Fraud Detection"],
  researchThemes: [
    {
      title: "Fraud & Trustworthy AI",
      description:
        "Designing interpretable models and evaluation pipelines for scam detection, fraud triage, and analyst-facing decision support.",
      tags: ["LLM Evaluation", "Explainability", "Risk Scoring"]
    },
    {
      title: "Cybersecurity & Identity",
      description:
        "Studying how signals across accounts, devices, and behavior can improve threat monitoring, trust, and identity assurance.",
      tags: ["Threat Analysis", "Zero Trust", "Identity Signals"]
    },
    {
      title: "Digital Forensics",
      description:
        "Turning messy investigative data into structured evidence flows, timeline views, and repeatable analysis workflows.",
      tags: ["OSINT", "Case Workflows", "Evidence Analysis"]
    }
  ],
  about: [
    "I am a computer science researcher interested in how AI systems can support high-stakes analytical work without sacrificing rigor or explainability.",
    "My recent work spans fraud method classification, cyber threat intelligence extraction, and OSINT-oriented tooling that helps analysts move from raw text to usable signals.",
    "I care about systems that hold up outside the demo: measurable pipelines, useful interfaces, and research that is grounded in operational value."
  ],
  interests: [
    "Trustworthy AI for fraud and abuse detection",
    "Cybersecurity analytics and identity risk modeling",
    "Digital forensics workflows for investigative support",
    "LLM-assisted triage with transparent evaluation",
    "OSINT pipelines for structured signal extraction"
  ],
  experience: [
    {
      period: "2024-Present",
      title: "Graduate Researcher",
      detail: "Applied AI and cybersecurity research focused on fraud analysis, digital trust, and security intelligence."
    },
    {
      period: "2024",
      title: "ML Systems Builder",
      detail: "Prototyped edge-AI and computer vision systems with YOLO, OCR, event logging, and alerting pipelines."
    },
    {
      period: "2023-2024",
      title: "Security & OSINT Projects",
      detail: "Built data collection and analysis workflows for crime news extraction, clustering, and investigative summarization."
    },
    {
      period: "2022-2023",
      title: "Computer Science Training",
      detail: "Focused on machine learning, software engineering foundations, and research-oriented experimentation."
    }
  ],
  achievements: [
    "Designed fraud classification research workflows combining transformer models with interpretability analysis.",
    "Built CCTV and OSINT prototypes that connect detection models to operational monitoring flows.",
    "Developed portfolio projects spanning AI evaluation, security analytics, and evidence-oriented tooling."
  ],
  toolkit: [
    {
      title: "ML / NLP / LLM",
      items: ["PyTorch", "Transformers", "Sentence Embeddings", "SHAP", "Prompt Evaluation"]
    },
    {
      title: "Security / Forensics",
      items: ["OSINT", "Threat Intelligence", "Digital Evidence Workflows", "Identity Signals", "Risk Triage"]
    },
    {
      title: "Data / Experimentation",
      items: ["Python", "Pandas", "Jupyter", "A/B Thinking", "Evaluation Pipelines"]
    },
    {
      title: "Product / Deployment",
      items: ["Streamlit", "GitHub Actions", "Dashboards", "Static Sites", "Research Communication"]
    }
  ],
  contactPrompt:
    "I’m always open to research conversations, technical collaboration, and opportunities around AI, fraud analysis, cybersecurity, and digital trust."
} as const;

export type Profile = typeof profile;
