export const profile = {
  name: "Jason Chia-Sheng Lin",
  shortName: "Jason Lin",
  handle: "JasonLn0711",
  title: "Doctoral Researcher, Artificial Intelligence in Medical Imaging / Signal Analysis Lab",
  institution: "National Yang Ming Chiao Tung University",
  institutionShort: "NYCU",
  tagline: "Building AI agents and trustworthy systems for real-world, security-critical, and regulated environments.",
  bio: "Jason Chia-Sheng Lin is a doctoral researcher in the Artificial Intelligence in Medical Imaging / Signal Analysis Lab at National Yang Ming Chiao Tung University. His work focuses on AI agents, trustworthy AI, AI Software as a Medical Device (SaMD), cybersecurity, and deployable systems in high-stakes environments.",
  shortBio:
    "I bring together medical AI lab research, system building, and investigation-informed thinking to design AI agents and IDE-like agent systems that stay useful when evidence, regulation, and deployment constraints matter.",
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
    "AI Agents",
    "IDE-like Agent Systems",
    "Trustworthy AI",
    "Speech Intelligence",
    "ASR",
    "LLM Systems",
    "RAG Systems",
    "Cybersecurity",
    "High-Stakes AI Deployment"
  ],
  credibility: ["AI Agents", "Trustworthy AI", "Speech Intelligence", "Cybersecurity", "High-Stakes Deployment"],
  quickFacts: [
    {
      label: "Role",
      value: "Doctoral researcher at NYCU"
    },
    {
      label: "Focus",
      value: "AI agents, speech intelligence, and cybersecurity"
    },
    {
      label: "Approach",
      value: "Evidence-aware agents and systems for real-world use"
    }
  ],
  trustSignals: [
    "Doctoral research in the Artificial Intelligence in Medical Imaging / Signal Analysis Lab at NYCU.",
    "Official CYBERSEC 2026 breakout session on cybersecurity design for AI software medical devices.",
    "Two English CISC 2025 conference papers connecting security analysis with practical deployment and defense."
  ],
  about: [
    "I am a doctoral researcher in the Artificial Intelligence in Medical Imaging / Signal Analysis Lab at National Yang Ming Chiao Tung University (NYCU), where my work sits at the intersection of AI agents, trustworthy AI, speech and language pipelines, and security-aware evaluation.",
    "Before doctoral research, I worked in cybercrime investigation. That experience still shapes how I think about evidence, adversarial behavior, failure analysis, and the difference between a model that performs well in isolation and a system that can be trusted in practice.",
    "Today, I focus on AI agents, IDE-like agent systems, ASR + LLM + RAG workflows, speech intelligence, deployable AI systems, and governance-minded thinking for regulated or security-sensitive environments. Recent speaking and paper activity includes an official CYBERSEC 2026 breakout session on cybersecurity design for AI software medical devices, as well as two English CISC 2025 conference papers on AI-era ransomware evolution and threat pulse modeling for ZTAID-aligned zero-trust maturity assessment."
  ],
  interests: [
    "Trustworthy AI agents and systems for operational deployment",
    "IDE-like AI agent systems for research, coding, and analyst workflows",
    "ASR + LLM + RAG pipelines for speech intelligence and evidence-aware analysis",
    "Security, privacy, and evaluation for agentic systems used in high-stakes settings",
    "Human review, traceability, and decision support in analyst-facing workflows"
  ],
  experience: [
    {
      period: "Current",
      title: "Doctoral Researcher, NYCU Artificial Intelligence in Medical Imaging / Signal Analysis Lab",
      detail:
        "Researching trustworthy AI systems, AI agents, medical cybersecurity, speech intelligence, grounded LLM workflows, and security-aware evaluation for real-world deployment."
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
        "Bringing evidence awareness, adversarial thinking, and operational discipline into the way AI agents and systems are designed and evaluated."
    },
    {
      period: "Ongoing",
      title: "Research and Technical Communication",
      detail:
        "Developing research case studies, technical writing, and speaking material around trustworthy AI, agent systems, speech systems, and deployment risk."
    }
  ],
  achievements: [
    "Interdisciplinary profile spanning research, agent and system building, and security-minded reasoning.",
    "Current work connects AI agents, ASR, LLM/RAG pipelines, evaluation design, and deployment constraints.",
    "Open to collaboration with research groups, technical teams, and high-stakes AI stakeholders."
  ],
  toolkit: [
    {
      title: "AI / Agent Systems",
      items: ["PyTorch", "Transformers", "AI Agents", "LLM Pipelines", "RAG Systems"]
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
  contactTopics: [
    "Research collaboration and interdisciplinary lab conversations",
    "Speaking invitations for AI agents, speech systems, or cybersecurity",
    "Hiring, technical peer exchange, and IDE-like agent system design"
  ],
  contactChecklist: [
    "What you are working on and why it connects to Jason's research.",
    "What kind of conversation would be useful: collaboration, talk, review, or role discussion.",
    "Any timing, audience, or constraints that would help shape a reply."
  ],
  contactPrompt:
    "I welcome thoughtful conversations around AI agents, IDE-like agent systems, trustworthy AI, speech and language systems, and deployment in security-sensitive or regulated environments."
} as const;

export type Profile = typeof profile;
