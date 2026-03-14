export const signatureThemes = [
  {
    title: "Trustworthy AI",
    description:
      "Designing AI systems that can be audited, stress-tested, and responsibly used when stakes are real."
  },
  {
    title: "AI Systems for Real-World Deployment",
    description:
      "Focusing on architectures that survive contact with operational constraints, not just benchmark settings."
  },
  {
    title: "Speech, Language, and RAG Pipelines",
    description:
      "Building ASR + LLM workflows that transform audio and language into grounded, usable intelligence."
  },
  {
    title: "Cybersecurity and High-Stakes Intelligence Workflows",
    description:
      "Bringing adversarial thinking, evidence sensitivity, and governance awareness into AI system design."
  }
] as const;

export const currentResearchThemes = [
  {
    title: "Trustworthy AI Systems",
    body:
      "I am interested in what makes an AI system trustworthy beyond accuracy alone: evidence traceability, failure visibility, institutional fit, and operational reliability."
  },
  {
    title: "ASR + LLM + RAG for Operational Intelligence",
    body:
      "I work on speech and language systems that can support review, extraction, and grounded interpretation from conversational or evidence-rich data."
  },
  {
    title: "Security and Governance for Deployed AI",
    body:
      "I care about leakage, privacy, adversarial pressure, and the governance questions that emerge once AI systems are used in real settings."
  },
  {
    title: "AI in Regulated and Safety-Critical Contexts",
    body:
      "My research pays attention to the environments around the model: workflow design, human oversight, accountability, and deployment constraints."
  }
] as const;

export const selectedQuestions = [
  "How can AI systems support human decision-making in high-stakes environments without weakening accountability?",
  "What makes an AI system trustworthy beyond benchmark metrics and surface-level fluency?",
  "How should speech and language systems be designed for real-world operational workflows rather than idealized tasks?",
  "How can deployment planning account for security, governance, and institutional constraints from the beginning?"
] as const;

export const ongoingResearchDirections = [
  {
    title: "Evidence-aware speech pipelines",
    description:
      "Studying ASR + LLM + retrieval architectures that preserve traceability between conversational audio and downstream reasoning."
  },
  {
    title: "Fraud and high-stakes conversation analysis",
    description:
      "Exploring how language systems can assist structured review in fraud-related or trust-sensitive settings."
  },
  {
    title: "Model leakage and federated learning security",
    description:
      "Investigating how privacy and exposure risks should be assessed when models or updates are shared across environments."
  },
  {
    title: "Deployment-minded evaluation",
    description:
      "Focusing on evaluation frameworks that reflect operational reality instead of only clean benchmark performance."
  }
] as const;

export const researchApproach = [
  "I prefer systems research that stays close to real usage conditions: imperfect data, constrained workflows, and meaningful human oversight.",
  "I value clarity over hype. Good technical work should make assumptions visible and keep evidence close to the output.",
  "I treat trust as a systems property, not a marketing term. It emerges from architecture, evaluation, security posture, and fit with the surrounding workflow."
] as const;
