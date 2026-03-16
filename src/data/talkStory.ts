export const talkStory = {
  slug: "regulated-ai-cybersecurity",
  pathname: "/talks/regulated-ai-cybersecurity/",
  eyebrow: "CYBERSEC 2026 Official Session",
  title: "Designing Cybersecurity for AI in Regulated Environments",
  subtitle: "Lessons from FDA Section 524B",
  supportingLine: "Why AI Security is a System Problem, Not a Model Problem",
  speakerLine: "Chia-Sheng (Jason) Lin · National Yang Ming Chiao Tung University",
  description:
    "A one-page keynote narrative on medical AI cybersecurity, connecting FDA Section 524B, system trust, federated learning leakage, threat modeling, and patch governance in regulated clinical environments.",
  heroMetrics: [
    {
      label: "Narrative",
      value: "20 anchored chapters"
    },
    {
      label: "Regulatory anchor",
      value: "FDA Section 524B"
    },
    {
      label: "Core shift",
      value: "From model security to full-stack trust"
    }
  ],
  sections: [
    { chapter: "01", id: "title-hero", navLabel: "Title Hero", shortTitle: "Hero" },
    { chapter: "02", id: "opening-contrast", navLabel: "Opening Contrast", shortTitle: "Contrast" },
    { chapter: "03", id: "real-world-incident", navLabel: "Real-World Incident", shortTitle: "MacKay Incident" },
    { chapter: "04", id: "untouched-model-paradox", navLabel: "Untouched Model Paradox", shortTitle: "Paradox" },
    { chapter: "05", id: "fda-section-524b", navLabel: "FDA Section 524B", shortTitle: "FDA 524B" },
    { chapter: "06", id: "full-stack-paradigm", navLabel: "Full Stack Paradigm", shortTitle: "Full Stack" },
    { chapter: "07", id: "hardware-kernel-fragility", navLabel: "Hardware and Kernel Fragility", shortTitle: "Foundation Risk" },
    { chapter: "08", id: "protocol-frontier", navLabel: "Protocol Frontier", shortTitle: "Protocols" },
    { chapter: "09", id: "local-privilege-escalation", navLabel: "Local Privilege Escalation", shortTitle: "Escalation" },
    { chapter: "10", id: "on-premise-myth", navLabel: "On-Premise Myth", shortTitle: "On-Premise Myth" },
    { chapter: "11", id: "federated-learning", navLabel: "Federated Learning", shortTitle: "Federated Learning" },
    { chapter: "12", id: "leakage-paradox", navLabel: "Leakage Paradox", shortTitle: "Leakage" },
    { chapter: "13", id: "trust-chain", navLabel: "Trust, Not Just Accuracy", shortTitle: "Trust Chain" },
    { chapter: "14", id: "leakpro", navLabel: "LeakPro", shortTitle: "LeakPro" },
    { chapter: "15", id: "future-question", navLabel: "Future Question", shortTitle: "Lifecycle" },
    { chapter: "16", id: "samd-threat-modeling", navLabel: "SaMD DNA and Threat Modeling", shortTitle: "Threat Modeling" },
    { chapter: "17", id: "default-deny-clinical-environment", navLabel: "Default-Deny Clinical Environment", shortTitle: "Default-Deny" },
    { chapter: "18", id: "patch-governance-tradeoff", navLabel: "Patch Governance Tradeoff", shortTitle: "Patch Governance" },
    { chapter: "19", id: "patient-safety", navLabel: "Patient Safety", shortTitle: "Patient Safety" },
    { chapter: "20", id: "closing-thesis", navLabel: "Closing Thesis", shortTitle: "Closing Thesis" }
  ],
  incident: {
    eyebrow: "A Real-World Incident in Taiwan",
    title: "MacKay Memorial Hospital\nRansomware attack",
    lines: [
      "Taipei",
      "Medical IT infrastructure disrupted",
      "This was not an attack on the model.",
      "It was an attack on the system."
    ],
    statLabel: "Reported impact",
    statValue: "500+ computers affected"
  },
  fdaRequirements: ["SBOM", "Postmarket vulnerability monitoring", "Patching / update capability"],
  stackLayers: ["Hardware", "Kernel", "Runtime", "Model", "Governance"],
  fragilityLabels: ["Hardware", "Kernel", "Bit-flip attacks", "Privilege escalation", "Container escape"],
  protocolLayers: ["Model", "Agent", "Tools", "Connectors", "Clinical systems"],
  escalationSteps: [
    "Low-privilege foothold",
    "Shared memory / queue access",
    "Inference path tampering",
    "Clinician-facing output impact"
  ],
  onPremRisks: ["Identity", "Lateral movement", "Insider risk", "Misconfiguration"],
  federatedParticipants: ["Hospital A", "Hospital B", "Hospital C"],
  federatedFlows: ["Local training", "Shared updates", "Coordinator"],
  leakageLabels: ["Gradients", "Updates", "Reconstruction risk", "Membership inference"],
  trustChain: ["Data", "Runtime", "Output", "Clinician"],
  leakProLabels: ["Privacy risk", "Model sharing", "Pre-release testing", "Evidence"],
  lifecycleLabels: ["Build", "Validate", "Deploy", "Monitor", "Update", "Revalidate"],
  threatModelLabels: ["STRIDE", "Trust boundary", "Assets", "Data flow", "Control points"],
  clinicalZones: [
    "Clinician workstation",
    "AI inference enclave",
    "Hospital core systems",
    "Vendor access"
  ],
  clinicalPolicy: "Allowed paths only",
  patchInputs: ["Exploitability", "Clinical impact", "Validation burden", "Rollback readiness"],
  closingLine: "From model security to full-stack trust"
} as const;

export type TalkStory = typeof talkStory;
