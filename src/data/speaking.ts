export const speaking = {
  page: {
    eyebrow: "Talks / Speaking",
    title: "Talks on trustworthy AI, speech systems, and serious deployment.",
    description:
      "I am interested in speaking with research groups, conferences, technical teams, and interdisciplinary audiences working on AI systems where reliability, evidence, and operational context matter."
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
