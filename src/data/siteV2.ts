export const siteV2 = {
  en: {
    page: {
      title: "Audience paths and website v2.0 planning",
      description:
        "A public-facing map of the website v2.0 structure: audience paths, operating tracks, evidence protocol, and the public/private boundary behind Jason Chia-Sheng Lin's research portfolio."
    },
    labels: {
      fullMap: "View full audience map",
      surface: "Surface",
      audience: "Audience",
      maturity: "Maturity",
      nextUsefulRoute: "Next useful route",
      nextRouteText:
        "The homepage routes visitors by intent. The research, project, talks, resume, and writing pages then provide the deeper evidence surface."
    },
    audience: {
      title: "Choose the path by the decision you need to make.",
      description:
        "The site is designed around visitor intent. Each path reduces scanning cost by pairing the audience's question with the strongest public evidence surface.",
      note:
        "Planning and sibling repos inform this map, but the website only exposes public-safe summaries, routes, and evidence posture.",
      cards: [
        {
          label: "Research reviewers",
          question: "Is the core claim bounded, evidenced, and worth deeper review?",
          humanFactor: "Put the problem, contribution, evidence layer, and next validation path in one scan.",
          route: "/research/",
          routeLabel: "Open research agenda",
          evidence: ["research pillars", "current activities", "evaluation agenda"]
        },
        {
          label: "Collaborators",
          question: "Where could a lab, product team, or field partner connect?",
          humanFactor: "Show active directions without making every lane look equally urgent.",
          route: "/contact/",
          routeLabel: "Discuss fit",
          evidence: ["active work", "case studies", "contact topics"]
        },
        {
          label: "Engineering evaluators",
          question: "Can the work become a system with boundaries, tests, and handoff?",
          humanFactor: "Surface runnable thinking, data contracts, and maturity without overclaiming production status.",
          route: "/projects/",
          routeLabel: "Inspect systems",
          evidence: ["case studies", "readiness labels", "implementation posture"]
        },
        {
          label: "Regulated stakeholders",
          question: "Does the work respect clinical, security, and governance constraints?",
          humanFactor: "Make scope control, human review, and no-real-patient-data boundaries legible before technical detail.",
          route: "/talks/regulated-ai-cybersecurity/",
          routeLabel: "Review regulated AI talk",
          evidence: ["CYBERSEC narrative", "medical cybersecurity framing", "governance language"]
        },
        {
          label: "Organizers",
          question: "What topic fits this audience, and what public signal supports the invitation?",
          humanFactor: "Put topic, audience, format, and public session evidence together.",
          route: "/talks/",
          routeLabel: "Browse talks",
          evidence: ["CYBERSEC 2026", "CISC 2025", "topic matrix"]
        },
        {
          label: "Hiring teams",
          question: "What does Jason bring to a technical or research team?",
          humanFactor: "Shorten the route from professional summary to system evidence and working style.",
          route: "/resume/",
          routeLabel: "Open resume",
          evidence: ["selected systems", "toolkit", "professional path"]
        },
        {
          label: "Readers",
          question: "What worldview ties the research, systems, talks, and notes together?",
          humanFactor: "Let readers enter through essays instead of forcing a full portfolio scan.",
          route: "/blog/",
          routeLabel: "Read notes",
          evidence: ["essays", "field notes", "reasoning archive"]
        }
      ]
    },
    operatingTracks: {
      title: "The public site compresses many workstreams into a few inspectable tracks.",
      description:
        "Planning and execution repos stay separate. The website presents the public signal: what kind of work it is, who should care, what evidence exists, and what remains a validation layer.",
      tracks: [
        {
          title: "Agent governance and review scarcity",
          source: "TFSC manuscript strategy, agent-system research notes, and reviewer-facing writing rules",
          publicSurface: "Research agenda, writing, and future governance case studies",
          audience: "Research reviewers, AI governance teams",
          maturity: "Active manuscript / bounded validation",
          route: "/research/trustworthy-ai-agent-systems/"
        },
        {
          title: "Speech, transcript, and evidence workflows",
          source: "Speech evidence pipeline, fraud conversation RAG, ASR + LLM + retrieval work",
          publicSurface: "Projects, research direction pages, and essays",
          audience: "NLP teams, analyst workflow builders",
          maturity: "Prototype and active research",
          route: "/projects/speech-evidence-intelligence-pipeline/"
        },
        {
          title: "Regulated medical AI and cybersecurity",
          source: "CYBERSEC 2026 material, CDE medical-cybersecurity prep, TFDA/FDA memory scaffold",
          publicSurface: "Talks, regulated AI keynote narrative, and security research framing",
          audience: "Medical cybersecurity, regulated AI, compliance-adjacent teams",
          maturity: "Public talk plus internal evidence workflows",
          route: "/talks/"
        },
        {
          title: "Clinical workflow demos with clear scope control",
          source: "Urology previsit navigator and AI triage kiosk demo patterns",
          publicSurface: "Case-study-style project expansion and public-safe system posture",
          audience: "Clinical collaborators, product reviewers, demo evaluators",
          maturity: "Synthetic-data demos / human review first",
          route: "/projects/"
        },
        {
          title: "Idea operating system and research maturation",
          source: "Brainstorming Lab, maturity scoring, clusters, and project-graduation packets",
          publicSurface: "About, writing, and future operating-notes page",
          audience: "Advisors, collaborators, readers",
          maturity: "Internal method / selectively public",
          route: "/about/"
        },
        {
          title: "Security and course-derived technical discipline",
          source: "Network security projects, reverse-engineering studies, CISC papers, and TA/grading discipline",
          publicSurface: "Talks, projects, resume, and selected technical notes",
          audience: "Security teams, technical hiring, graduate seminars",
          maturity: "Coursework-to-research bridge",
          route: "/resume/"
        }
      ]
    },
    protocol: {
      title: "V2.0 evidence protocol",
      description:
        "Every public section should help a visitor move from claim to evidence to route, without exposing private planning material.",
      steps: [
        {
          label: "Claim",
          text: "State the contribution or working question in plain language."
        },
        {
          label: "Evidence",
          text: "Show the public artifact: project, talk, paper, essay, demo, or readiness label."
        },
        {
          label: "Boundary",
          text: "Frame limitations as scope control, validation layer, or human-review requirement."
        },
        {
          label: "Route",
          text: "Give the next useful path for that audience, not a generic CTA."
        }
      ],
      boundary: [
        "Planning repo details stay as private control-plane context.",
        "Sensitive raw evidence, credentials, contact threads, patient-like data, and patent-sensitive mechanics stay out of the website.",
        "Public pages can describe methods, posture, artifacts, and readiness without copying private execution traces."
      ]
    }
  },
  "zh-tw": {
    page: {
      title: "受眾路徑與個人網站 v2.0 規劃",
      description:
        "這個頁面整理個人網站 v2.0 的公開介面：受眾路徑、工作主軸、證據呈現規則，以及研究作品集背後的公開 / 私有邊界。"
    },
    labels: {
      fullMap: "查看完整受眾地圖",
      surface: "呈現介面",
      audience: "適合受眾",
      maturity: "成熟度",
      nextUsefulRoute: "下一個有用路徑",
      nextRouteText:
        "首頁依照來訪目的分流；研究、專案、演講、履歷與文章頁則承接更深的證據介面。"
    },
    audience: {
      title: "先依照你需要做的判斷選路徑。",
      description:
        "v2.0 不是讓所有訪客走同一條履歷路，而是依照來訪目的，把問題、證據與下一步放在同一個可掃描介面中。",
      note:
        "Planning 與 sibling repos 會提供內容雷達，但網站只呈現公開安全的摘要、路徑與證據姿態。",
      cards: [
        {
          label: "研究審閱者",
          question: "核心主張是否有邊界、有證據，而且值得進一步審閱？",
          humanFactor: "把問題、貢獻、證據層與下一個 validation path 放在同一次掃描中。",
          route: "/research/",
          routeLabel: "查看研究主軸",
          evidence: ["研究方向", "近期活動", "評估議程"]
        },
        {
          label: "合作夥伴",
          question: "實驗室、產品團隊或場域夥伴可以從哪裡接上？",
          humanFactor: "呈現 active directions，但不讓每條線都看起來同樣緊急。",
          route: "/contact/",
          routeLabel: "討論合作契合",
          evidence: ["進行中工作", "案例研究", "聯絡主題"]
        },
        {
          label: "工程評估者",
          question: "這些工作能否成為有邊界、測試與交接的系統？",
          humanFactor: "呈現可執行的系統思維、data contract 與 maturity，而不是誇大 production 狀態。",
          route: "/projects/",
          routeLabel: "檢視系統案例",
          evidence: ["案例研究", "readiness labels", "實作姿態"]
        },
        {
          label: "受規範場域利害關係人",
          question: "這些工作是否尊重臨床、安全與治理限制？",
          humanFactor: "先讓 scope control、human review 與 no-real-patient-data 邊界可見，再進入技術細節。",
          route: "/talks/regulated-ai-cybersecurity/",
          routeLabel: "閱讀受規範 AI 演講",
          evidence: ["CYBERSEC 敘事", "醫療資安框架", "治理語言"]
        },
        {
          label: "活動主辦方",
          question: "哪個主題適合這個受眾，公開訊號在哪裡？",
          humanFactor: "把主題、受眾、形式與公開場次證據放在一起。",
          route: "/talks/",
          routeLabel: "瀏覽演講",
          evidence: ["CYBERSEC 2026", "CISC 2025", "主題矩陣"]
        },
        {
          label: "招募團隊",
          question: "Jason 能為技術或研究團隊帶來什麼？",
          humanFactor: "縮短從專業摘要到系統證據與工作方式的路徑。",
          route: "/resume/",
          routeLabel: "查看履歷",
          evidence: ["精選系統", "技術工具箱", "專業路徑"]
        },
        {
          label: "讀者",
          question: "什麼 worldview 把研究、系統、演講與筆記連在一起？",
          humanFactor: "讓讀者可以從文章進入，而不是被迫掃完整個作品集。",
          route: "/blog/",
          routeLabel: "閱讀文章",
          evidence: ["essay", "field notes", "推理紀錄"]
        }
      ]
    },
    operatingTracks: {
      title: "公開網站把多條工作線壓成幾個可檢視的主軸。",
      description:
        "Planning 與 execution repos 仍然分工；網站只呈現公開訊號：這是哪一類工作、誰應該在意、有哪些證據、哪些仍是 validation layer。",
      tracks: [
        {
          title: "Agent governance 與 review scarcity",
          source: "TFSC manuscript 策略、agent-system 研究筆記、reviewer-facing writing rules",
          publicSurface: "研究主軸、文章與未來 governance case study",
          audience: "研究審閱者、AI governance 團隊",
          maturity: "進行中 manuscript / bounded validation",
          route: "/research/trustworthy-ai-agent-systems/"
        },
        {
          title: "語音、逐字稿與證據工作流",
          source: "Speech evidence pipeline、fraud conversation RAG、ASR + LLM + retrieval work",
          publicSurface: "專案、研究方向頁與文章",
          audience: "NLP 團隊、分析工作流建置者",
          maturity: "Prototype / active research",
          route: "/projects/speech-evidence-intelligence-pipeline/"
        },
        {
          title: "受規範醫療 AI 與資安",
          source: "CYBERSEC 2026、CDE 醫療資安準備、TFDA/FDA memory scaffold",
          publicSurface: "演講、regulated AI keynote narrative、資安研究框架",
          audience: "醫療資安、受規範 AI、合規相鄰團隊",
          maturity: "公開演講 + 內部證據工作流",
          route: "/talks/"
        },
        {
          title: "具備清楚邊界的臨床 workflow demo",
          source: "Urology previsit navigator 與 AI triage kiosk demo patterns",
          publicSurface: "未來 case-study expansion 與 public-safe system posture",
          audience: "臨床合作方、產品審閱者、demo 評估者",
          maturity: "Synthetic-data demo / human review first",
          route: "/projects/"
        },
        {
          title: "Idea operating system 與研究成熟化",
          source: "Brainstorming Lab、maturity scoring、clusters、project-graduation packets",
          publicSurface: "About、writing 與未來 operating notes",
          audience: "指導者、合作夥伴、讀者",
          maturity: "內部方法 / 選擇性公開",
          route: "/about/"
        },
        {
          title: "資安與課程實作累積出的技術紀律",
          source: "Network security projects、reverse-engineering studies、CISC papers、TA/grading discipline",
          publicSurface: "演講、專案、履歷與技術筆記",
          audience: "資安團隊、技術招募、研究所 seminar",
          maturity: "Coursework-to-research bridge",
          route: "/resume/"
        }
      ]
    },
    protocol: {
      title: "v2.0 證據呈現規則",
      description:
        "每個公開區塊都應協助訪客從主張走到證據再走到路徑，同時不暴露私有 planning material。",
      steps: [
        {
          label: "主張",
          text: "用清楚語言說明貢獻或工作問題。"
        },
        {
          label: "證據",
          text: "呈現公開 artifact：專案、演講、論文、文章、demo 或 readiness label。"
        },
        {
          label: "邊界",
          text: "把限制寫成 scope control、validation layer 或 human-review requirement。"
        },
        {
          label: "路徑",
          text: "給該受眾下一個有用入口，而不是泛用 CTA。"
        }
      ],
      boundary: [
        "Planning repo 細節只作為私有 control-plane context。",
        "敏感 raw evidence、credentials、contact threads、patient-like data、patent-sensitive mechanics 不進網站。",
        "公開頁面可以呈現方法、姿態、artifact 與 readiness，但不複製私有 execution traces。"
      ]
    }
  },
  ja: {
    page: {
      title: "Audience paths and website v2.0 planning",
      description:
        "A public-facing map for website v2.0: audience paths, operating tracks, evidence protocol, and the public/private boundary behind the research portfolio."
    },
    labels: {
      fullMap: "View full audience map",
      surface: "Surface",
      audience: "Audience",
      maturity: "Maturity",
      nextUsefulRoute: "Next useful route",
      nextRouteText:
        "The homepage routes visitors by intent. The research, project, talks, resume, and writing pages then provide the deeper evidence surface."
    },
    audience: {
      title: "Choose the route by the decision you need to make.",
      description:
        "The v2.0 site is organized by visitor intent, pairing each audience question with the strongest public evidence surface.",
      note:
        "Planning and sibling repositories inform this map, while the website exposes only public-safe summaries, routes, and evidence posture.",
      cards: [
        {
          label: "Research reviewers",
          question: "Is the claim bounded, evidenced, and worth deeper review?",
          humanFactor: "Put problem, contribution, evidence, and next validation path in one scan.",
          route: "/research/",
          routeLabel: "Open research agenda",
          evidence: ["research directions", "current activities", "evaluation agenda"]
        },
        {
          label: "Collaborators",
          question: "Where can a lab, product team, or field partner connect?",
          humanFactor: "Show active directions without making every lane look equally urgent.",
          route: "/contact/",
          routeLabel: "Discuss fit",
          evidence: ["active work", "case studies", "contact topics"]
        },
        {
          label: "Engineering evaluators",
          question: "Can this become a system with boundaries, tests, and handoff?",
          humanFactor: "Surface runnable thinking, data contracts, and maturity without overclaiming production status.",
          route: "/projects/",
          routeLabel: "Inspect systems",
          evidence: ["case studies", "readiness labels", "implementation posture"]
        },
        {
          label: "Regulated stakeholders",
          question: "Does the work respect clinical, security, and governance constraints?",
          humanFactor: "Make scope control, human review, and no-real-patient-data boundaries visible before technical detail.",
          route: "/talks/regulated-ai-cybersecurity/",
          routeLabel: "Review regulated AI talk",
          evidence: ["CYBERSEC narrative", "medical cybersecurity framing", "governance language"]
        },
        {
          label: "Organizers",
          question: "Which topic fits this audience, and what public signal supports the invitation?",
          humanFactor: "Put topic, audience, format, and public session evidence together.",
          route: "/talks/",
          routeLabel: "Browse talks",
          evidence: ["CYBERSEC 2026", "CISC 2025", "topic matrix"]
        },
        {
          label: "Hiring teams",
          question: "What does Jason bring to a technical or research team?",
          humanFactor: "Shorten the route from professional summary to system evidence and working style.",
          route: "/resume/",
          routeLabel: "Open resume",
          evidence: ["selected systems", "toolkit", "professional path"]
        },
        {
          label: "Readers",
          question: "What worldview connects the research, systems, talks, and notes?",
          humanFactor: "Let readers enter through essays instead of forcing a full portfolio scan.",
          route: "/blog/",
          routeLabel: "Read notes",
          evidence: ["essays", "field notes", "reasoning archive"]
        }
      ]
    },
    operatingTracks: {
      title: "The public site compresses many workstreams into inspectable tracks.",
      description:
        "Planning and execution repos stay separate. The website presents the public signal: work type, audience fit, evidence, and validation layer.",
      tracks: [
        {
          title: "Agent governance and review scarcity",
          source: "TFSC manuscript strategy, agent-system research notes, and reviewer-facing writing rules",
          publicSurface: "Research agenda, writing, and future governance case studies",
          audience: "Research reviewers, AI governance teams",
          maturity: "Active manuscript / bounded validation",
          route: "/research/trustworthy-ai-agent-systems/"
        },
        {
          title: "Speech, transcript, and evidence workflows",
          source: "Speech evidence pipeline, fraud conversation RAG, ASR + LLM + retrieval work",
          publicSurface: "Projects, research direction pages, and essays",
          audience: "NLP teams, analyst workflow builders",
          maturity: "Prototype and active research",
          route: "/projects/speech-evidence-intelligence-pipeline/"
        },
        {
          title: "Regulated medical AI and cybersecurity",
          source: "CYBERSEC 2026 material, CDE medical-cybersecurity prep, TFDA/FDA memory scaffold",
          publicSurface: "Talks, regulated AI keynote narrative, and security research framing",
          audience: "Medical cybersecurity, regulated AI, compliance-adjacent teams",
          maturity: "Public talk plus internal evidence workflows",
          route: "/talks/"
        },
        {
          title: "Clinical workflow demos with clear scope control",
          source: "Urology previsit navigator and AI triage kiosk demo patterns",
          publicSurface: "Case-study-style project expansion and public-safe system posture",
          audience: "Clinical collaborators, product reviewers, demo evaluators",
          maturity: "Synthetic-data demos / human review first",
          route: "/projects/"
        },
        {
          title: "Idea operating system and research maturation",
          source: "Brainstorming Lab, maturity scoring, clusters, and project-graduation packets",
          publicSurface: "About, writing, and future operating-notes page",
          audience: "Advisors, collaborators, readers",
          maturity: "Internal method / selectively public",
          route: "/about/"
        },
        {
          title: "Security and course-derived technical discipline",
          source: "Network security projects, reverse-engineering studies, CISC papers, and TA/grading discipline",
          publicSurface: "Talks, projects, resume, and selected technical notes",
          audience: "Security teams, technical hiring, graduate seminars",
          maturity: "Coursework-to-research bridge",
          route: "/resume/"
        }
      ]
    },
    protocol: {
      title: "V2.0 evidence protocol",
      description:
        "Every public section should move visitors from claim to evidence to route without exposing private planning material.",
      steps: [
        {
          label: "Claim",
          text: "State the contribution or working question in plain language."
        },
        {
          label: "Evidence",
          text: "Show the public artifact: project, talk, paper, essay, demo, or readiness label."
        },
        {
          label: "Boundary",
          text: "Frame limitations as scope control, validation layer, or human-review requirement."
        },
        {
          label: "Route",
          text: "Give the next useful path for that audience, not a generic CTA."
        }
      ],
      boundary: [
        "Planning repo details stay as private control-plane context.",
        "Sensitive raw evidence, credentials, contact threads, patient-like data, and patent-sensitive mechanics stay out of the website.",
        "Public pages can describe methods, posture, artifacts, and readiness without copying private execution traces."
      ]
    }
  }
} as const;

export type SiteV2Locale = keyof typeof siteV2;

export function getSiteV2(locale: string) {
  const key = locale in siteV2 ? (locale as SiteV2Locale) : "en";
  return siteV2[key];
}

export const warmStudio = {
  en: {
    boundaryLabel: "Safe boundary",
    workingWithMe: {
      eyebrow: "Working with Jason",
      title: "Calm, concrete, and easy to start with.",
      description:
        "The public site should make Jason feel like someone who can hold complexity without making the conversation heavy: warm enough for early ideas, rigorous enough for high-stakes work.",
      items: [
        {
          title: "Bring the unclear version first",
          text: "Early, messy questions are welcome. The first job is to reduce ambiguity and find the useful next frame."
        },
        {
          title: "Evidence stays visible",
          text: "Claims are paired with artifacts, maturity labels, and validation paths so the discussion can stay grounded."
        },
        {
          title: "Boundaries are care, not distance",
          text: "Clinical, security, privacy, and governance limits are framed as stewardship and claim-evidence alignment."
        },
        {
          title: "The next step should feel light",
          text: "A good interaction ends with a small concrete next action, not a vague pressure to commit."
        }
      ]
    },
    contactIntents: {
      eyebrow: "Intent-based contact",
      title: "Start from what you are trying to clarify.",
      description:
        "The contact surface is designed to lower the cost of reaching out, especially when the idea is early or the problem is still hard to name.",
      helpfulContextLabel: "Helpful context",
      cards: [
        {
          title: "Research collaboration",
          situation: "You want to compare research questions, evaluation posture, or publication direction.",
          helpfulContext: "Share the problem, the evidence you already have, and what kind of collaboration would help."
        },
        {
          title: "Medical, AI safety, or cybersecurity problem",
          situation: "You need a calm technical partner for a high-stakes workflow or governance question.",
          helpfulContext: "Share the user group, risk boundary, current system state, and what decision is blocked."
        },
        {
          title: "Talk, seminar, or workshop",
          situation: "You are planning a session around AI agents, trustworthy AI, speech intelligence, or regulated deployment.",
          helpfulContext: "Share the audience, time format, event date, and the practical question the session should answer."
        },
        {
          title: "Early messy idea",
          situation: "You do not have a polished brief yet, but you think there is a useful problem nearby.",
          helpfulContext: "Send the rough version. A good first reply can simply clarify the shape and next test."
        }
      ]
    },
    pages: {
      research: {
        eyebrow: "Warm evidence route",
        title: "Read the research as claim, evidence, and next validation path.",
        description:
          "The research page should help reviewers and collaborators see the target problem, the supported contribution, the current evidence layer, and what remains to validate.",
        path: [
          {
            label: "Visitor pain",
            title: "Is this worth deeper review?",
            text: "A reviewer needs to know what problem is being solved, why the contribution matters, and where the claim stops."
          },
          {
            label: "Jason clarifies",
            title: "Start from the target problem class",
            text: "Research directions are framed around evidence-aware AI, high-stakes workflows, and reviewable systems rather than isolated model novelty."
          },
          {
            label: "Evidence surface",
            title: "Pillars, papers, projects, and essays",
            text: "Each direction connects to public artifacts that make the reasoning inspectable."
          },
          {
            label: "Claim boundary",
            title: "Maturity is visible",
            text: "Active manuscripts, prototypes, talks, and planned extensions are separated so the page stays ambitious and precise."
          },
          {
            label: "Next gentle action",
            title: "Open a direction or discuss fit",
            text: "The page should support a light next step: read, compare, or start a scoped collaboration conversation."
          }
        ],
        action: { label: "Discuss research fit", href: "/contact/" }
      },
      projects: {
        eyebrow: "Pain-to-system map",
        title: "Projects show how abstract concerns become inspectable systems.",
        description:
          "The projects page should not feel like a gallery of demos. It should show what human pain each system addresses, what evidence it preserves, and what readiness boundary applies.",
        path: [
          {
            label: "Visitor pain",
            title: "Can this idea become a usable system?",
            text: "Engineering evaluators need to see whether the work has boundaries, data assumptions, handoff points, and review paths."
          },
          {
            label: "Jason clarifies",
            title: "Translate pain into workflow structure",
            text: "Each case study connects a practical problem to pipeline design, evidence handling, and human review."
          },
          {
            label: "Evidence surface",
            title: "Case studies and readiness cards",
            text: "Cards expose role, stack, maturity, summary, and public artifacts without overstating production readiness."
          },
          {
            label: "Claim boundary",
            title: "Prototype is different from deployment",
            text: "Readiness labels make it clear when work is a research prototype, synthetic-data demo, or public narrative surface."
          },
          {
            label: "Next gentle action",
            title: "Inspect one system, then compare the agenda",
            text: "Visitors can open a case study, browse the research agenda, or ask about a specific system fit."
          }
        ],
        action: { label: "Ask about a system", href: "/contact/" }
      },
      talks: {
        eyebrow: "Public explanation route",
        title: "Talks translate rigorous systems thinking into shared decision language.",
        description:
          "The talks page should help organizers and stakeholders see which topic fits their audience, what public signal supports it, and what practical question the session can answer.",
        path: [
          {
            label: "Visitor pain",
            title: "Will this topic fit my audience?",
            text: "Organizers need a quick read on topic, format, audience fit, and evidence of public delivery."
          },
          {
            label: "Jason clarifies",
            title: "Turn complex AI risk into practical questions",
            text: "Talks are framed around what teams can inspect, govern, patch, validate, and communicate."
          },
          {
            label: "Evidence surface",
            title: "Featured talk, sessions, and topic matrix",
            text: "The page links public conference records with a clear topic-to-audience map."
          },
          {
            label: "Claim boundary",
            title: "Practical scope before spectacle",
            text: "The public framing keeps attention on systems, governance, and evidence rather than broad AI hype."
          },
          {
            label: "Next gentle action",
            title: "Match topic to audience",
            text: "A visitor can review the story page, inspect past sessions, or send a light invitation note."
          }
        ],
        action: { label: "Invite Jason", href: "/contact/" }
      },
      about: {
        eyebrow: "Human working model",
        title: "The about page should make rigor feel approachable.",
        description:
          "This page connects identity, values, professional path, and working style so visitors understand not only what Jason does, but how it feels to think with him.",
        path: [
          {
            label: "Visitor pain",
            title: "Can I talk to this person comfortably?",
            text: "People often want to know whether the person behind the work is thoughtful, grounded, and easy to approach."
          },
          {
            label: "Jason clarifies",
            title: "Warmth plus structure",
            text: "The narrative should show care for people, practical follow-through, and comfort with early uncertainty."
          },
          {
            label: "Evidence surface",
            title: "Background, selected signals, and toolkit",
            text: "The page keeps professional credibility visible while adding human context and working style."
          },
          {
            label: "Claim boundary",
            title: "Personal without exposing private planning",
            text: "The public layer shares values and collaboration posture, not raw day notes or private execution details."
          },
          {
            label: "Next gentle action",
            title: "Choose a comfortable route",
            text: "Visitors can continue to research, projects, writing, talks, or a low-pressure contact path."
          }
        ],
        action: { label: "Start a conversation", href: "/contact/" }
      },
      contact: {
        eyebrow: "Gentle next action",
        title: "Contact should lower pressure, not create a formal gate.",
        description:
          "The contact page should make it safe to reach out with a clear collaboration ask, a high-stakes technical question, a talk invitation, or an early idea that is still taking shape.",
        path: [
          {
            label: "Visitor pain",
            title: "I am not sure how polished my message needs to be",
            text: "A visitor may have a useful question but hesitate because the problem is complex or not fully defined."
          },
          {
            label: "Jason clarifies",
            title: "Start with intent",
            text: "The page routes by what the visitor is trying to clarify, not by institutional formality."
          },
          {
            label: "Evidence surface",
            title: "Topics, current work, and public signals",
            text: "Contact prompts connect back to research, projects, talks, and profile evidence."
          },
          {
            label: "Claim boundary",
            title: "Sensitive details can wait",
            text: "The first message should share context and decision need, while private or sensitive details can stay out of email."
          },
          {
            label: "Next gentle action",
            title: "Send the rough version",
            text: "A good first exchange can simply name the problem and decide whether a deeper conversation is useful."
          }
        ],
        action: { label: "Email Jason", href: "mailto" }
      },
      resume: {
        eyebrow: "Professional evidence route",
        title: "The resume should answer fit without flattening the person.",
        description:
          "The resume page should support hiring and collaboration review while keeping Jason's systems lens, warmth, and boundary-aware research style intact.",
        path: [
          {
            label: "Visitor pain",
            title: "What does Jason bring to a team?",
            text: "Hiring teams need a fast read on role, strengths, technical surface, and working style."
          },
          {
            label: "Jason clarifies",
            title: "Systems thinker for evidence-heavy work",
            text: "The page links background, projects, writing, talks, and toolkit into a coherent professional signal."
          },
          {
            label: "Evidence surface",
            title: "Metrics, selected work, talks, and writing",
            text: "Representative artifacts support the summary instead of leaving it as a list of skills."
          },
          {
            label: "Claim boundary",
            title: "Fit is contextual",
            text: "The page makes strong signals visible while routing detailed fit conversations to contact."
          },
          {
            label: "Next gentle action",
            title: "Open a project or reach out",
            text: "Reviewers can move from resume summary to evidence, then into a direct but low-friction conversation."
          }
        ],
        action: { label: "Discuss fit", href: "/contact/" }
      },
      blog: {
        eyebrow: "Thinking archive",
        title: "Writing makes the reasoning behind the work visible.",
        description:
          "The writing page should let readers enter through worldview, design judgment, and field notes instead of requiring a full portfolio scan.",
        path: [
          {
            label: "Visitor pain",
            title: "How does Jason think?",
            text: "Readers want a low-pressure way to understand the reasoning style behind the research and systems."
          },
          {
            label: "Jason clarifies",
            title: "Essays as reasoning surfaces",
            text: "Writing connects evidence, workflows, deployment risk, and human judgment in a more reflective format."
          },
          {
            label: "Evidence surface",
            title: "Featured article and recent notes",
            text: "The page highlights essays that explain the judgment behind projects, talks, and research directions."
          },
          {
            label: "Claim boundary",
            title: "Notes are context, not formal results",
            text: "Articles can explore viewpoints and implications while formal claims remain anchored in research and project surfaces."
          },
          {
            label: "Next gentle action",
            title: "Read, compare, or ask",
            text: "A reader can open one article, move to related projects, or use contact to continue the conversation."
          }
        ],
        action: { label: "Browse projects", href: "/projects/" }
      }
    }
  },
  "zh-tw": {
    boundaryLabel: "安全邊界",
    workingWithMe: {
      eyebrow: "和 Jason 一起工作",
      title: "放鬆、具體，而且可以從不完整的想法開始。",
      description:
        "v2.0 的網站應該讓人感覺 Jason 能承接複雜問題，但不會讓對話變沉重：對早期想法足夠溫暖，對高風險工作也足夠嚴謹。",
      items: [
        {
          title: "可以先帶著不清楚的版本來",
          text: "早期、還有點混亂的問題是可以被討論的；第一步是一起降低模糊度，找到下一個有用框架。"
        },
        {
          title: "證據會一直留在視野裡",
          text: "主張會搭配 artifact、成熟度與 validation path，讓討論不只是感覺好，而是能被檢視。"
        },
        {
          title: "邊界是照顧，不是距離",
          text: "臨床、安全、隱私與治理限制會被寫成 stewardship 與 claim-evidence alignment。"
        },
        {
          title: "下一步要輕，但要具體",
          text: "好的互動應該結束在一個小而清楚的下一步，而不是模糊地要求對方立刻承諾。"
        }
      ]
    },
    contactIntents: {
      eyebrow: "依照意圖聯絡",
      title: "先從你想釐清什麼開始。",
      description:
        "聯絡頁的任務是降低開口成本，尤其是當想法還很早、問題還很難命名的時候。",
      helpfulContextLabel: "可以先提供",
      cards: [
        {
          title: "研究合作",
          situation: "你想比較研究問題、評估設計、publication direction 或合作切入點。",
          helpfulContext: "可以先提供問題、目前已有證據，以及你希望合作補上的能力。"
        },
        {
          title: "醫療、AI safety 或資安問題",
          situation: "你需要一個能穩定思考高風險 workflow 或治理問題的技術夥伴。",
          helpfulContext: "可以說明使用者、風險邊界、目前系統狀態，以及卡住的判斷。"
        },
        {
          title: "演講、seminar 或 workshop",
          situation: "你正在規劃 AI agents、trustworthy AI、語音智能或受規範部署相關活動。",
          helpfulContext: "可以提供受眾、時間形式、活動日期，以及這場 session 希望回答的實務問題。"
        },
        {
          title: "還很早、還有點亂的想法",
          situation: "你還沒有完整 brief，但感覺附近有一個值得整理的問題。",
          helpfulContext: "可以直接寄粗糙版本。好的第一步可以只是一起釐清形狀與下一個小測試。"
        }
      ]
    },
    pages: {
      research: {
        eyebrow: "溫暖的證據路徑",
        title: "把研究讀成主張、證據與下一個 validation path。",
        description:
          "研究頁要幫助審閱者與合作夥伴快速看見 target problem、supported contribution、目前證據層，以及接下來需要驗證什麼。",
        path: [
          {
            label: "來訪痛點",
            title: "這個研究值得深入看嗎？",
            text: "審閱者需要知道問題是什麼、貢獻為什麼重要，以及主張停在哪裡。"
          },
          {
            label: "Jason 協助釐清",
            title: "先從 target problem class 開始",
            text: "研究方向會圍繞 evidence-aware AI、高風險 workflow 與可審閱系統，而不是只強調模型新奇度。"
          },
          {
            label: "證據介面",
            title: "研究主軸、論文、專案與文章",
            text: "每個方向都連到公開 artifact，讓推理路徑可以被檢視。"
          },
          {
            label: "主張邊界",
            title: "成熟度要可見",
            text: "進行中 manuscript、prototype、演講與 planned extension 要被區分，讓頁面既有企圖心也精準。"
          },
          {
            label: "溫和下一步",
            title: "打開方向，或討論契合",
            text: "訪客可以先閱讀、比較，或用一個小而明確的合作問題開始。"
          }
        ],
        action: { label: "討論研究契合", href: "/contact/" }
      },
      projects: {
        eyebrow: "痛點到系統地圖",
        title: "專案要呈現抽象疑慮如何變成可檢視系統。",
        description:
          "專案頁不只是 demo gallery，而是說清楚每個系統回應哪個人的痛點、保存哪些證據，以及目前 readiness 邊界在哪裡。",
        path: [
          {
            label: "來訪痛點",
            title: "這個想法能變成可用系統嗎？",
            text: "工程評估者需要看見邊界、資料假設、交接點與人工審查路徑。"
          },
          {
            label: "Jason 協助釐清",
            title: "把痛點翻成 workflow 結構",
            text: "每個案例都把實務問題連到 pipeline design、evidence handling 與 human review。"
          },
          {
            label: "證據介面",
            title: "案例研究與 readiness cards",
            text: "卡片呈現角色、stack、成熟度、摘要與公開 artifact，但不誇大 production 狀態。"
          },
          {
            label: "主張邊界",
            title: "Prototype 不等於 deployment",
            text: "Readiness label 會清楚區分研究原型、synthetic-data demo 與公開敘事介面。"
          },
          {
            label: "溫和下一步",
            title: "先檢視一個系統，再比較研究主軸",
            text: "訪客可以打開案例、瀏覽研究 agenda，或詢問某個系統是否契合。"
          }
        ],
        action: { label: "詢問系統契合", href: "/contact/" }
      },
      talks: {
        eyebrow: "公開說明路徑",
        title: "演講把嚴謹系統思維翻成可以共同判斷的語言。",
        description:
          "演講頁要幫主辦方與利害關係人看見主題適合誰、有哪些公開訊號，以及這場分享能回答哪個實務問題。",
        path: [
          {
            label: "來訪痛點",
            title: "這個主題適合我的受眾嗎？",
            text: "主辦方需要快速判斷 topic、format、audience fit 與公開發表證據。"
          },
          {
            label: "Jason 協助釐清",
            title: "把複雜 AI 風險變成實務問題",
            text: "演講會聚焦團隊可以檢視、治理、修補、驗證與溝通的問題。"
          },
          {
            label: "證據介面",
            title: "Featured talk、sessions 與 topic matrix",
            text: "頁面把公開會議紀錄與 topic-to-audience map 接在一起。"
          },
          {
            label: "主張邊界",
            title: "先有實務範圍，再有舞台效果",
            text: "公開 framing 保持在 systems、governance 與 evidence，而不是廣泛 AI hype。"
          },
          {
            label: "溫和下一步",
            title: "把主題對齊受眾",
            text: "訪客可以看 story page、檢視過往場次，或寄一封輕量邀請。"
          }
        ],
        action: { label: "邀請 Jason", href: "/contact/" }
      },
      about: {
        eyebrow: "人的工作模型",
        title: "關於頁要讓嚴謹感變得容易靠近。",
        description:
          "這頁要把身份、價值觀、專業路徑與工作方式接起來，讓訪客不只知道 Jason 做什麼，也知道和他一起思考會是什麼感覺。",
        path: [
          {
            label: "來訪痛點",
            title: "我可以自在地跟這個人討論嗎？",
            text: "很多人想先知道作品背後的人是否溫暖、踏實，而且容易靠近。"
          },
          {
            label: "Jason 協助釐清",
            title: "溫暖加上結構",
            text: "敘事要呈現對人的關心、具體落地能力，以及面對早期不確定性的舒適感。"
          },
          {
            label: "證據介面",
            title: "背景、精選訊號與 toolkit",
            text: "頁面保留專業可信度，同時補上人的脈絡與合作方式。"
          },
          {
            label: "主張邊界",
            title: "個人但不暴露 private planning",
            text: "公開層分享價值觀與合作姿態，不公開 raw day notes 或私有執行細節。"
          },
          {
            label: "溫和下一步",
            title: "選一條舒服的路徑",
            text: "訪客可以繼續看研究、專案、文章、演講，或用低壓方式聯絡。"
          }
        ],
        action: { label: "開始對話", href: "/contact/" }
      },
      contact: {
        eyebrow: "溫和下一步",
        title: "聯絡頁要降低壓力，而不是設一道正式門檻。",
        description:
          "聯絡頁要讓人可以安全地帶著研究合作、高風險技術問題、演講邀請，或還在成形的早期想法來開口。",
        path: [
          {
            label: "來訪痛點",
            title: "我不知道訊息要多完整才可以寄",
            text: "訪客可能有重要問題，但因為問題複雜或還沒定義好而猶豫。"
          },
          {
            label: "Jason 協助釐清",
            title: "先從 intent 開始",
            text: "頁面依照訪客想釐清什麼分流，而不是要求對方先用正式格式包裝。"
          },
          {
            label: "證據介面",
            title: "主題、目前工作與公開訊號",
            text: "聯絡提示會接回研究、專案、演講與 profile evidence。"
          },
          {
            label: "安全邊界",
            title: "敏感細節可以晚一點",
            text: "第一封訊息只需要提供脈絡與卡住的判斷，私密或敏感細節可以先不要放進 email。"
          },
          {
            label: "溫和下一步",
            title: "可以先寄粗糙版本",
            text: "好的第一次互動可以只是把問題命名，判斷是否值得進一步聊。"
          }
        ],
        action: { label: "寄信給 Jason", href: "mailto" }
      },
      resume: {
        eyebrow: "專業證據路徑",
        title: "履歷要回答 fit，同時不要把人壓平成技能列表。",
        description:
          "履歷頁要支援招募與合作審閱，同時保留 Jason 的系統思維、溫暖感與邊界清楚的研究風格。",
        path: [
          {
            label: "來訪痛點",
            title: "Jason 能為團隊帶來什麼？",
            text: "招募團隊需要快速理解角色、強項、技術範圍與工作方式。"
          },
          {
            label: "Jason 協助釐清",
            title: "適合證據密集工作的系統型研究者",
            text: "頁面把背景、專案、文章、演講與 toolkit 接成一致的專業訊號。"
          },
          {
            label: "證據介面",
            title: "Metrics、selected work、talks 與 writing",
            text: "代表性 artifacts 支撐摘要，而不是只留下技能列表。"
          },
          {
            label: "主張邊界",
            title: "fit 需要脈絡",
            text: "頁面呈現強訊號，並把細節契合討論導向 contact。"
          },
          {
            label: "溫和下一步",
            title: "打開專案或直接聯絡",
            text: "審閱者可以從履歷摘要走到 evidence，再進入低摩擦對話。"
          }
        ],
        action: { label: "討論契合", href: "/contact/" }
      },
      blog: {
        eyebrow: "思考紀錄",
        title: "文章讓作品背後的推理方式可見。",
        description:
          "文章頁讓讀者可以從 worldview、設計判斷與 field notes 進入，而不需要一開始就掃完整個作品集。",
        path: [
          {
            label: "來訪痛點",
            title: "Jason 是怎麼思考的？",
            text: "讀者需要一個低壓方式理解研究與系統背後的判斷風格。"
          },
          {
            label: "Jason 協助釐清",
            title: "把 essay 當成 reasoning surface",
            text: "文章把證據、workflow、部署風險與人的判斷放在比較能慢慢理解的格式裡。"
          },
          {
            label: "證據介面",
            title: "Featured article 與 recent notes",
            text: "頁面突顯能說明專案、演講與研究方向背後判斷的文章。"
          },
          {
            label: "主張邊界",
            title: "Notes 是脈絡，不是正式結果",
            text: "文章可以探索觀點與 implication；正式主張仍然回到研究與專案介面。"
          },
          {
            label: "溫和下一步",
            title: "閱讀、比較或提問",
            text: "讀者可以打開一篇文章、移動到相關專案，或透過 contact 延續對話。"
          }
        ],
        action: { label: "瀏覽專案", href: "/projects/" }
      }
    }
  }
} as const;

export type WarmStudioLocale = keyof typeof warmStudio;
export type WarmStudioPage = keyof typeof warmStudio.en.pages;

export function getWarmStudio(locale: string) {
  const key = locale in warmStudio ? (locale as WarmStudioLocale) : "en";
  return warmStudio[key];
}
