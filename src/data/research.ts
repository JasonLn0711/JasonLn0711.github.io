export const research = {
  page: {
    eyebrow: "Research",
    title: "Research at the intersection of AI systems, security, and trustworthy deployment.",
    description:
      "My work asks how AI systems can remain useful, inspectable, and dependable when they are deployed in environments shaped by uncertainty, evidence requirements, and real operational cost."
  },
  pillars: [
    {
      title: "Trustworthy AI Systems",
      description:
        "Designing AI systems where reliability, evaluation, human review, and traceability are part of the architecture rather than afterthoughts.",
      tags: ["Reliability", "Evaluation", "Human Review"]
    },
    {
      title: "Speech, Language, and Evidence Pipelines",
      description:
        "Building ASR + LLM + RAG workflows for conversational analysis, structured extraction, and evidence-aware reasoning over long-form audio and transcripts.",
      tags: ["ASR", "LLM", "RAG"]
    },
    {
      title: "Security and High-Stakes Deployment",
      description:
        "Studying privacy, leakage, adversarial risk, and governance constraints that shape AI systems used in regulated or security-sensitive environments.",
      tags: ["Security", "Privacy", "Deployment"]
    }
  ],
  questions: [
    "How can AI systems support human decision-making in high-stakes environments without weakening the chain of evidence?",
    "What makes an AI system trustworthy beyond benchmark performance or fluent output?",
    "How should speech and language pipelines be designed for real operational workflows rather than idealized demos?",
    "How can deployment constraints, governance, and security be built into AI system design from the start?"
  ],
  ongoingWork: [
    {
      title: "Evidence-Aware Speech Intelligence Pipelines",
      status: "Active Research",
      summary:
        "Developing systems that move from raw conversational audio to structured, reviewable outputs while preserving traceability between generated conclusions and source evidence.",
      nextStep: "Refining evaluation slices for transcript quality, retrieval behavior, and reviewer trust.",
      tags: ["Speech Intelligence", "ASR", "Traceability"]
    },
    {
      title: "Grounded Fraud Conversation Analysis",
      status: "Active Research",
      summary:
        "Studying how RAG-based workflows can support fraud-related conversation analysis without relying on unsupported language-model reasoning.",
      nextStep: "Extending retrieval and answer-grounding evaluation for analyst-facing use.",
      tags: ["Fraud Analysis", "RAG", "LLM Systems"]
    },
    {
      title: "Leakage and Privacy Risk in Federated Learning",
      status: "Ongoing Study",
      summary:
        "Exploring how collaborative training setups behave under realistic leakage and privacy assumptions in sensitive AI settings.",
      nextStep: "Comparing attack and defense trade-offs across threat models and deployment assumptions.",
      tags: ["Federated Learning", "Privacy", "Security"]
    }
  ],
  futureDirections: [
    "Trustworthy speech systems for analyst-facing and evidence-sensitive workflows.",
    "Evaluation frameworks for AI deployment in regulated, security-critical, or operationally complex environments.",
    "Secure, evidence-grounded multimodal systems for real-world decision support."
  ],
  currentActivity: {
    label: "Current professional activity",
    title: "CYBERSEC 2026",
    description:
      "Speaking in an official breakout session on cybersecurity design for AI software medical devices, connecting FDA 524B, threat modeling, SBOM, and auditable governance in a regulated setting.",
    tags: ["Medical Cybersecurity", "Threat Modeling", "Risk Governance"]
  },
  collaboration: {
    title: "Collaboration and research fit",
    description:
      "I am especially interested in collaborations that value technical depth, careful evaluation, and the realities of deploying AI in environments where reliability, reviewability, and governance matter."
  }
} as const;

export type ResearchContent = typeof research;
