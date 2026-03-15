export const speaking = {
  page: {
    eyebrow: "Talks / Speaking",
    title: "Talks on trustworthy AI, speech systems, and serious deployment.",
    description:
      "I am interested in speaking with research groups, conferences, technical teams, and interdisciplinary audiences working on AI systems where reliability, evidence, and operational context matter. Current speaking activity includes an official CYBERSEC 2026 breakout session on cybersecurity design for AI software medical devices, with FDA 524B, threat modeling, SBOM, and auditable governance as practical anchors."
  },
  featuredEngagement: {
    label: "Official session",
    event: "CYBERSEC 2026",
    title: "AI 軟體醫材的資安實戰：從美國 FDA 524B 規範到 Threat Modeling 與 Patch SLA 的完整落地",
    summary:
      "Breakout session on cybersecurity practice for AI software medical devices, using FDA 524B to connect threat modeling, SBOM, Zero Trust design, and auditable risk governance in heavily regulated environments.",
    description:
      "The session examines how FDA 524B review expectations shape cybersecurity design choices for AI software medical devices, and how those expectations map onto engineering workflows, transparent governance, and sustainable security strategy.",
    speaker:
      "Jason Chia-Sheng Lin (林家聖) · Artificial Intelligence in Medical Imaging / Signal Analysis Lab, National Yang Ming Chiao Tung University",
    coauthor:
      "With co-author 陳靖中 · 智德萬生醫科技股份有限公司",
    schedule: "May 6, 2026 · 16:15-16:45",
    venue: "Taipei Nangang Exhibition Center Hall 2 · 4F Conference Room 4A",
    track: "Medical Cybersecurity Forum",
    format: "Breakout Session",
    language: "Mandarin with AI live translation",
    url: "https://cybersec.ithome.com.tw/2026/session/4284",
    tags: ["Medical Cybersecurity", "Governance & Risk Management", "Threat Modeling", "Vulnerability Management"]
  },
  topics: [
    {
      title: "Trustworthy AI Beyond Benchmark Performance",
      description:
        "How to think about reliability, evidence, human review, and system behavior when AI is used in environments where mistakes carry real cost.",
      audience: "Research groups, labs, interdisciplinary audiences"
    },
    {
      title: "ASR + LLM + RAG for Operational Workflows",
      description:
        "Design patterns for speech and language pipelines that move from raw transcripts to grounded, inspectable outputs in analyst-facing settings.",
      audience: "NLP teams, speech researchers, applied AI practitioners"
    },
    {
      title: "Security-Minded AI System Design",
      description:
        "Why privacy, leakage risk, adversarial thinking, and deployment assumptions should be treated as core system questions rather than compliance afterthoughts.",
      audience: "Security teams, engineering groups, policy-adjacent stakeholders"
    }
  ],
  formats: [
    "Research seminars and invited academic talks",
    "Conference sessions and interdisciplinary panels",
    "Technical talks for labs, applied AI teams, and research-driven companies"
  ],
  invitation: {
    title: "Invitation-ready topics",
    description:
      "Talks can be tailored for research, technical, or cross-functional audiences. If your event sits near trustworthy AI, speech intelligence, RAG systems, or deployment risk, I would be glad to discuss a fit."
  }
} as const;

export type SpeakingContent = typeof speaking;
