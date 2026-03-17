export const research = {
  page: {
    eyebrow: "Research",
    title: "Research at the intersection of AI agents, security, and trustworthy deployment.",
    description:
      "My work asks how AI agents and decision-support systems can remain useful, inspectable, and dependable when they are deployed in environments shaped by uncertainty, evidence requirements, and real operational cost."
  },
  pillars: [
    {
      slug: "trustworthy-ai-agent-systems",
      title: "Trustworthy AI and Agent Systems",
      description:
        "Designing AI agents and systems where reliability, evaluation, human review, and traceability are part of the architecture rather than afterthoughts.",
      tags: ["Reliability", "Evaluation", "Human Review"],
      seoDescription:
        "Research direction on trustworthy AI and agent systems, with a 2026 focus on bounded autonomy, evaluation, human oversight, and inspectable deployment.",
      thesis:
        "The core problem is no longer making agents look autonomous in a demo. It is making them dependable enough that a human can understand their state, trust the right parts, and interrupt or correct them without paying a coordination tax.",
      yearPerspective:
        "In 2026, the practical frontier is workflow reliability. Agents are becoming useful often enough that standards, identity, evaluation, and escalation design matter more than impressive one-shot completions.",
      whyNow:
        "The 2025 Stanford AI Index reported that responsible-AI evaluation remains uneven even as documented incidents continue to accumulate. At the same time, NIST's February 2026 AI Agent Standards Initiative, draft benchmark guidance for language-model evaluation, and ongoing ARIA field-testing work all point in the same direction: the next serious step is comparable, operationally meaningful evaluation. My view is that agent progress is now gated less by raw fluency and more by control surfaces such as permissions, observability, interoperability, and human escalation.",
      humanFactorsSummary:
        "Oversight fails if review costs more than redoing the work. Good interfaces reduce cognitive load by foregrounding evidence, changes, uncertainty, and consequence before they foreground prose.",
      currentPriorities: [
        "Move evaluation from one-shot benchmark wins to repeated-run performance, variance, recovery behavior, and policy adherence.",
        "Treat traceability as a product feature: tool calls, retrieved evidence, approval checkpoints, and rollback points should be reviewable without exposing unnecessary chain-of-thought.",
        "Design bounded autonomy with explicit scopes for read, write, execute, and external communication actions.",
        "Measure trust calibration, not just model confidence, so humans can decide when to rely on the system and when to slow it down."
      ],
      systemPrinciples: [
        {
          title: "Bounded autonomy",
          description:
            "Give agents explicit task scopes, tool budgets, and approval gates instead of vague permission to 'go solve it'."
        },
        {
          title: "Inspectable state",
          description:
            "Persist the plan, retrieved context, tool outputs, and meaningful diffs so reviewers can reconstruct what happened quickly."
        },
        {
          title: "Graceful handoff",
          description:
            "Escalation should preserve context and evidence rather than forcing a human to restart the task from scratch."
        },
        {
          title: "Comparative evaluation",
          description:
            "Compare agents against strong non-agent baselines, mixed-initiative workflows, and failure-handling variants instead of weaker prompts alone."
        }
      ],
      humanFactors: [
        "Review surfaces should foreground consequences: what changed, what external action is pending, and what evidence supports it.",
        "Uncertainty needs to be legible at the workflow level, not hidden inside a single confidence score.",
        "Operator trust should be calibrated with stable conventions, reproducible traces, and reversible actions rather than persuasive language.",
        "When the system hands work to a person, it should preserve context, partial progress, and rationale so the human can continue without reconstructing the task."
      ],
      evaluationAgenda: [
        {
          title: "Reliability under repetition",
          description:
            "Measure variance across repeated runs, near-miss behavior, and whether recovery steps converge or compound error."
        },
        {
          title: "Evidence quality",
          description:
            "Score whether retrieved or cited material actually supports the action or conclusion the agent produced."
        },
        {
          title: "Oversight efficiency",
          description:
            "Track time-to-review, override quality, and whether humans catch the failures that matter."
        },
        {
          title: "Policy and safety compliance",
          description:
            "Test permission boundaries, escalation behavior, and refusal quality when requests conflict with policy or evidence."
        }
      ],
      questions: [
        "What is the right granularity for agent permissions in research, coding, and analyst workflows?",
        "How should we compare autonomous, mixed-initiative, and step-wise systems when human labor is part of the objective?",
        "Which traces improve reviewer judgment, and which ones only create noise?",
        "What counts as acceptable failure behavior for an agent allowed to act on external systems?"
      ],
      signals: [
        {
          label: "NIST AI Agent Standards Initiative",
          note: "Announced on February 17, 2026, with an explicit focus on identity, interaction protocols, safety, and trustworthy multi-agent interoperability.",
          url: "https://www.nist.gov/news-events/news/2026/02/nist-launches-ai-agent-standards-initiative-advancing-safe-and-trustworthy"
        },
        {
          label: "NIST benchmark guidance for language-model evaluations",
          note: "A February 10, 2026 public draft that pushes benchmark design toward automation, comparability, and sound measurement practice.",
          url: "https://www.nist.gov/publications/practices-automated-benchmark-evaluations-language-models"
        },
        {
          label: "NIST ARIA evaluation program",
          note: "Field-testing and evaluation work that treats trustworthy AI as a measurable systems problem rather than a purely abstract principle.",
          url: "https://www.nist.gov/itl/ai-risk-management-framework/measure-trustworthy-and-responsible-ai-aria"
        },
        {
          label: "Stanford AI Index 2025",
          note: "Useful for tracking the gap between rapid adoption and slower uptake of serious responsible-AI evaluation practice.",
          url: "https://hai.stanford.edu/ai-index/2025-ai-index-report"
        }
      ]
    },
    {
      slug: "speech-language-agent-workflows",
      title: "Speech, Language, and Agent Workflows",
      description:
        "Building ASR + LLM + RAG pipelines and agent workflows for conversational analysis, structured extraction, and evidence-aware reasoning over long-form audio and transcripts.",
      tags: ["ASR", "Agents", "RAG"],
      seoDescription:
        "Research direction on speech, language, and agent workflows, with a 2026 focus on long-form audio, evidence-aware retrieval, and analyst-facing speech intelligence.",
      thesis:
        "Speech workflows become genuinely useful when they preserve grounding across audio, transcript, retrieval, and analyst judgment. The interesting work is not another chat wrapper around transcripts; it is a pipeline that keeps evidence aligned while moving toward decisions.",
      yearPerspective:
        "The 2026 shift is away from short-clip demos and toward long-form, multi-speaker, evidence-carrying audio workflows. Speech systems now need to preserve what transcripts flatten.",
      whyNow:
        "LongSpeech, released on January 20, 2026, makes the gap explicit by showing how quickly model quality drops once tasks involve long audio, multi-task reasoning, and sustained context. In 2025, WavRAG argued that transcript-only RAG throws away useful audio information, CORAL showed that real conversational retrieval is multi-turn and citation-sensitive, and recent EMNLP work on context discovery for ASR demonstrated that retrieval can improve rare-term recognition with lower latency than heavier LLM-only alternatives. Taken together, these signals shift the research question from recognition alone to end-to-end workflow design.",
      humanFactorsSummary:
        "Real users do not want to babysit a black box over a 40-minute call. They need segment-level grounding, fast correction loops, and outputs that match the time pressure of analyst work.",
      currentPriorities: [
        "Preserve timestamps, speakers, and segment provenance through every transformation from raw audio to final claim.",
        "Combine pre-ASR context discovery with post-ASR retrieval and evidence-aware reasoning instead of treating them as unrelated modules.",
        "Design for long-form, multi-turn, and domain-shifted speech rather than clean clip-level tasks.",
        "Turn outputs into structured artifacts that analysts can inspect, correct, and hand off quickly."
      ],
      systemPrinciples: [
        {
          title: "Layered evidence flow",
          description:
            "Keep links from raw audio to transcript spans to retrieved passages to final claims."
        },
        {
          title: "Modality-aware retrieval",
          description:
            "Use transcript retrieval where it is sufficient, but keep audio-aware retrieval for cases where prosody, speaker state, or transcription error matters."
        },
        {
          title: "Incremental review",
          description:
            "Let humans verify segments, entities, and extracted fields locally instead of reviewing a large final answer only at the end."
        },
        {
          title: "Workflow-shaped outputs",
          description:
            "Generate summaries, entities, timelines, and alerts in formats that downstream teams can act on or audit."
        }
      ],
      humanFactors: [
        "Timestamped evidence is more valuable than fluent paraphrase when a reviewer has to verify a claim quickly.",
        "Speaker attribution and turn boundaries should survive retrieval and summarization, because many operational errors begin as attribution errors.",
        "Correction loops should support local repair: fix a name, speaker, or time span once, then propagate that correction downstream.",
        "Good speech interfaces respect attention. Reviewers need compact uncertainty cues and jump-to-audio links rather than long textual justifications."
      ],
      evaluationAgenda: [
        {
          title: "Recognition quality in context",
          description:
            "Measure rare-term accuracy, speaker attribution, and robustness across noisy, accented, or domain-shifted speech."
        },
        {
          title: "Grounded retrieval",
          description:
            "Evaluate whether retrieved passages or audio segments actually support the generated claim, citation, or extraction."
        },
        {
          title: "Long-form continuity",
          description:
            "Test performance across topic shifts, long meetings, and multi-turn conversations where memory and retrieval interact."
        },
        {
          title: "Reviewer effort",
          description:
            "Track correction time, number of manual fixes, and how often humans must return to raw audio."
        }
      ],
      questions: [
        "When is transcript-only RAG enough, and when do we need audio-aware retrieval?",
        "How should long-form speech benchmarks capture speaker identity, discourse structure, and evidence quality together?",
        "What is the right abstraction layer for analyst-facing outputs: transcript spans, structured events, or both?",
        "How can ASR context discovery, retrieval, and downstream agent reasoning be evaluated as one pipeline instead of isolated stages?"
      ],
      signals: [
        {
          label: "LongSpeech benchmark",
          note: "An arXiv benchmark released on January 20, 2026 that highlights the practical difficulty of transcription, translation, and reasoning over long speech.",
          url: "https://arxiv.org/abs/2601.04571"
        },
        {
          label: "WavRAG",
          note: "ACL Anthology work from 2025 arguing that transcript-only RAG can discard useful acoustic evidence in spoken-dialogue systems.",
          url: "https://aclanthology.org/2025.findings-acl.778/"
        },
        {
          label: "CORAL",
          note: "A 2025 conversational RAG benchmark that makes multi-turn retrieval and attribution more realistic than single-turn QA setups.",
          url: "https://aclanthology.org/2025.naacl-long.228/"
        },
        {
          label: "Context discovery for end-to-end ASR",
          note: "EMNLP 2025 work showing retrieval-augmented context discovery can improve rare-word recognition while keeping latency practical.",
          url: "https://aclanthology.org/2025.emnlp-main.849/"
        }
      ]
    },
    {
      slug: "security-high-stakes-deployment",
      title: "Security and High-Stakes Deployment",
      description:
        "Studying privacy, leakage, adversarial risk, and governance constraints that shape AI systems used in regulated or security-sensitive environments.",
      tags: ["Security", "Privacy", "Deployment"],
      seoDescription:
        "Research direction on security and high-stakes AI deployment, with a 2026 focus on threat models, secure-by-design controls, privacy, auditability, and safe failure.",
      thesis:
        "High-stakes AI deployment is mainly an engineering and governance problem. Model quality matters, but the decisive questions are about threat models, access boundaries, logging, rollback, data stewardship, and the human ability to notice and contain failure.",
      yearPerspective:
        "In 2026, the serious question is not whether an AI feature can ship. It is whether it can fail safely, be audited under pressure, and remain governable across vendors, updates, and adversarial use.",
      whyNow:
        "Guidance from CISA, NSA, and partner agencies on deploying AI securely, first released on April 15, 2024, is still being operationalized in real systems, while the international Guidelines for Secure AI System Development keep pressure on teams to treat the full lifecycle as part of the attack surface. NIST's 2025 adversarial machine learning taxonomy further sharpens the threat vocabulary around model evasion, extraction, and poisoning. The practical lesson is straightforward: security cannot be bolted onto a model endpoint after procurement. It has to be designed through architecture, operations, and user-facing defaults from the start.",
      humanFactorsSummary:
        "Security controls only work when operators can tell what state the system is in, what the safe next action is, and who owns the next decision. Human-factors engineering is part of the defense surface.",
      currentPriorities: [
        "Make threat models explicit across model, data, retrieval, tool, and vendor layers instead of treating security as a generic risk checkbox.",
        "Use least privilege, segmentation, and isolated execution for sensitive actions or external integrations.",
        "Instrument logs and detection for misuse, drift, prompt-based attacks, and evidence loss.",
        "Couple governance artifacts with runtime controls, not policy documents alone."
      ],
      systemPrinciples: [
        {
          title: "Secure-by-default architectures",
          description:
            "Default settings, permissions, and data paths should assume non-expert operators and common attacker behavior."
        },
        {
          title: "Lifecycle threat modeling",
          description:
            "Reassess risks at design, procurement, deployment, maintenance, and retirement rather than only during launch."
        },
        {
          title: "Auditable operations",
          description:
            "Keep logs, versioning, and evidence retention in forms incident responders and compliance teams can actually use."
        },
        {
          title: "Containment over optimism",
          description:
            "Design for partial compromise, rollback, isolation, and fail-safe degradation instead of assuming the model will stay well behaved."
        }
      ],
      humanFactors: [
        "Alerts should reflect operational consequence, not just anomaly score, so teams can triage under pressure.",
        "Approval paths need clear ownership when AI outputs influence regulated, clinical, or security-sensitive actions.",
        "Audit trails must be searchable and comprehensible to mixed audiences: engineers, risk owners, investigators, and reviewers.",
        "Secure defaults matter because busy users rarely improve risky configurations after deployment."
      ],
      evaluationAgenda: [
        {
          title: "Adversarial resilience",
          description:
            "Probe prompt injection, data poisoning, extraction, model evasion, and tool misuse under realistic attack paths."
        },
        {
          title: "Privacy and leakage",
          description:
            "Test whether models, logs, and retrieval layers expose sensitive data directly or through inference."
        },
        {
          title: "Operational response",
          description:
            "Measure detection latency, containment speed, rollback quality, and evidence availability during incidents."
        },
        {
          title: "Governance fit",
          description:
            "Check whether controls, documentation, and review points satisfy the actual regulatory or institutional workflow."
        }
      ],
      questions: [
        "How do we evaluate safe failure behavior when the system has tool use, retrieval, and external integrations?",
        "What should a minimum viable audit trail contain for regulated or security-sensitive AI workflows?",
        "How can teams compare vendor systems when critical security properties are distributed across model, platform, and operations?",
        "Which deployment controls genuinely reduce risk, and which ones only create paper compliance?"
      ],
      signals: [
        {
          label: "Deploying AI Systems Securely",
          note: "Joint CISA, NSA, FBI, and partner guidance published on April 15, 2024 and still highly relevant for deployment threat modeling and controls.",
          url: "https://www.cisa.gov/news-events/alerts/2024/04/15/joint-guidance-deploying-ai-systems-securely"
        },
        {
          label: "Guidelines for Secure AI System Development",
          note: "International lifecycle guidance that keeps supply chain, maintenance, and decommissioning inside the security conversation.",
          url: "https://www.cyber.gov.au/resources-business-and-government/essential-cyber-security/ai/guidelines-secure-ai-system-development"
        },
        {
          label: "NIST AI 100-2 E2025 adversarial ML taxonomy",
          note: "A 2025 taxonomy that helps teams reason more precisely about attack classes and failure surfaces in AI systems.",
          url: "https://www.nist.gov/publications/adversarial-machine-learning-taxonomy-and-terminology-artificial-intelligence"
        },
        {
          label: "CISA AI security and resilience hub",
          note: "A current navigation point for U.S. guidance on securing and using AI systems in operational environments.",
          url: "https://www.cisa.gov/ai"
        }
      ]
    }
  ],
  questions: [
    "How can AI agents support human decision-making in high-stakes environments without weakening the chain of evidence?",
    "What makes an AI agent or system trustworthy beyond fluent output, benchmark scores, or tool use?",
    "How should speech pipelines and IDE-like assistants be designed for real workflows rather than idealized demos?",
    "How can deployment constraints, governance, and security be built into AI system design from the start?"
  ],
  ongoingWork: [
    {
      title: "Evidence-Aware Speech Intelligence Pipelines",
      status: "Active Research",
      summary:
        "Developing systems that move from raw conversational audio to structured, reviewable outputs while preserving traceability across retrieval, agent steps, and generated conclusions.",
      nextStep: "Refining evaluation slices for transcript quality, retrieval behavior, agent steps, and reviewer trust.",
      tags: ["Speech Intelligence", "ASR", "Traceability"]
    },
    {
      title: "Grounded Fraud Conversation Analysis",
      status: "Active Research",
      summary:
        "Studying how RAG-based and agentic workflows can support fraud-related conversation analysis without relying on unsupported language-model reasoning.",
      nextStep: "Extending retrieval, tool-use, and answer-grounding evaluation for analyst-facing use.",
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
    "Trustworthy speech and agent systems for analyst-facing, evidence-sensitive workflows.",
    "IDE-like agent systems for research, development, and human-in-the-loop review.",
    "Evaluation frameworks for AI deployment in regulated, security-critical, or operationally complex environments."
  ],
  currentActivities: [
    {
      label: "Recent conference paper",
      title: "Evolution and Defense Challenges of Ransomware-as-a-Service in the AI Era",
      description:
        "Presented in English at CISC 2025, this paper analyzes Medusa and CrazyHunter as case studies for AI-era ransomware evolution and connects their tradecraft to a ZTAID-grounded zero-trust defense framework for real operational environments.",
      details: [
        {
          label: "Conference",
          value: "Cryptology and Information Security Conference 2025 (CISC 2025)"
        },
        {
          label: "Schedule",
          value: "May 28-29, 2025"
        },
        {
          label: "Venue",
          value: "Feng Chia University"
        },
        {
          label: "Format",
          value: "Conference Paper · English"
        }
      ],
      tags: ["RaaS", "Zero Trust", "ZTAID", "Threat Modeling", "SOAR"],
      links: [
        {
          label: "CISC 2025 Conference Website",
          url: "https://cisc2025.fcu.edu.tw/"
        },
        {
          label: "Trend Micro CrazyHunter Research",
          url: "https://www.trendmicro.com/en_us/research/25/d/crazyhunter-campaign.html"
        },
        {
          label: "CISA Medusa Ransomware Advisory",
          url: "https://www.cisa.gov/news-events/cybersecurity-advisories/aa25-071a"
        },
        {
          label: "ZTAID Model Paper",
          url: "https://cccisa.ccisa.org.tw/article/view/3166"
        }
      ]
    },
    {
      label: "Recent conference paper",
      title: "Integration of Threat Pulse Modeling into the ZTAID Zero Trust Maturity Assessment Model",
      description:
        "Presented in English at CISC 2025, this paper proposes Threat Pulse Modeling as a way to convert live cyber threat intelligence into pillar-level ZTAID maturity signals for continuous zero-trust assessment and faster operational response.",
      details: [
        {
          label: "Conference",
          value: "Cryptology and Information Security Conference 2025 (CISC 2025)"
        },
        {
          label: "Schedule",
          value: "May 28-29, 2025"
        },
        {
          label: "Venue",
          value: "Feng Chia University"
        },
        {
          label: "Format",
          value: "Conference Paper · English"
        }
      ],
      tags: ["Threat Intelligence", "Threat Pulse Modeling", "Zero Trust", "ZTAID", "Forecasting"],
      links: [
        {
          label: "CISC 2025 Conference Website",
          url: "https://cisc2025.fcu.edu.tw/"
        },
        {
          label: "ZTAID Model Paper",
          url: "https://cccisa.ccisa.org.tw/article/view/3166"
        },
        {
          label: "MITRE ATT&CK",
          url: "https://attack.mitre.org/"
        },
        {
          label: "CISA Zero Trust Maturity Model",
          url: "https://www.cisa.gov/resources-tools/resources/zero-trust-maturity-model"
        }
      ]
    }
  ],
  collaboration: {
    title: "Collaboration and research fit",
    description:
      "I am especially interested in collaborations that value technical depth, careful evaluation, and the realities of deploying AI agents and systems where reliability, reviewability, and governance matter."
  }
} as const;

export type ResearchContent = typeof research;
export type ResearchDirection = (typeof research.pillars)[number];
