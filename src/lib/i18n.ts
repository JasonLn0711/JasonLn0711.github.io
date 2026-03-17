import { home } from "../data/home";
import { linksPage } from "../data/links";
import { profile } from "../data/profile";
import { research } from "../data/research";
import { site, normalizePathname } from "./site";
import { speaking } from "../data/speaking";

export const locales = ["en", "zh-tw", "ja"] as const;
export type SiteLocale = (typeof locales)[number];

export const defaultLocale: SiteLocale = "en";

const localeMeta = {
  en: {
    htmlLang: "en",
    hreflang: "en",
    intl: "en-US",
    ogLocale: "en_US",
    label: "English",
    shortLabel: "EN"
  },
  "zh-tw": {
    htmlLang: "zh-Hant-TW",
    hreflang: "zh-TW",
    intl: "zh-TW",
    ogLocale: "zh_TW",
    label: "繁體中文",
    shortLabel: "繁中"
  },
  ja: {
    htmlLang: "ja",
    hreflang: "ja",
    intl: "ja-JP",
    ogLocale: "ja_JP",
    label: "日本語",
    shortLabel: "日本語"
  }
} as const;

type Primitive = string | number | boolean | null | undefined;
type DeepPartial<T> = T extends Primitive
  ? T
  : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : { [K in keyof T]?: DeepPartial<T[K]> };

const siteOverrides = {
  "zh-tw": {
    defaultTitle: "Jason Chia-Sheng Lin | 值得信賴的 AI、語音智能與資安",
    description: "這個網站整理 Jason Chia-Sheng Lin 在值得信賴的 AI、語音智能、資安，以及高風險與受規範場域中的研究與系統實作。",
    locale: "zh_TW",
    nav: [
      { href: "/research/", label: "研究", description: "研究主軸、目前關注與近期論文。" },
      { href: "/projects/", label: "專案", description: "精選案例研究與系統實作。" },
      { href: "/blog/", label: "文章", description: "整理研究思路與技術判斷的文章與筆記。" },
      { href: "/talks/", label: "演講", description: "演講主題、近期場次與網頁版講稿。" },
      { href: "/resume/", label: "履歷", description: "方便招募、合作或審閱時快速掌握的專業摘要。" },
      { href: "/about/", label: "關於我", description: "我的背景、工作方式與研究脈絡。" },
      { href: "/contact/", label: "聯絡", description: "合作與演講邀請最直接的聯絡方式。" }
    ]
  },
  ja: {
    defaultTitle: "Jason Chia-Sheng Lin | 信頼できるAI、音声インテリジェンス、サイバーセキュリティ",
    description: "このサイトでは、Jason Chia-Sheng Lin による信頼できるAI、音声インテリジェンス、サイバーセキュリティ、そして高リスク環境や規制環境を見据えたシステム研究を紹介しています。",
    locale: "ja_JP",
    nav: [
      { href: "/research/", label: "研究", description: "研究テーマ、現在の関心、最近の論文。" },
      { href: "/projects/", label: "プロジェクト", description: "代表的なケーススタディと実装例。" },
      { href: "/blog/", label: "文章", description: "研究や実装の考え方をまとめた文章とノート。" },
      { href: "/talks/", label: "講演", description: "講演テーマ、最近の登壇、Web版の講演記録。" },
      { href: "/resume/", label: "経歴", description: "採用や共同研究の検討に役立つ職務概要。" },
      { href: "/about/", label: "プロフィール", description: "背景、取り組み方、研究の流れ。" },
      { href: "/contact/", label: "お問い合わせ", description: "共同研究や登壇相談のための連絡先。" }
    ]
  }
} as const;

const homeOverrides = {
  "zh-tw": {
    hero: {
      eyebrow: "Jason Chia-Sheng Lin｜NYCU 博士生",
      headline: "我打造能在語音、安全與受規範場域中真正落地的 AI 系統。",
      description:
        "這是我的研究與作品網站，整理我在值得信賴的 AI、語音智能、資安，以及重視證據、可審查性與部署現實的系統工作。",
      primaryCta: {
        label: "瀏覽研究"
      },
      secondaryCta: {
        label: "查看專案"
      },
      metrics: [
        {
          label: "目前身分",
          value: "NYCU 博士生"
        },
        {
          label: "主要領域",
          value: "值得信賴的 AI、語音智能與資安"
        },
        {
          label: "建議入口",
          value: "想先看研究方向可從研究頁開始，想看實作證據可先看專案，想邀請演講可直接看演講頁"
        }
      ],
      routes: [
        {
          title: "研究合作夥伴",
          description: "先看研究主軸、目前關注，以及可能的合作切入點。"
        },
        {
          title: "招募團隊",
          description: "可先看精選專案，再用文章與關於頁快速掌握背景。"
        },
        {
          title: "會議主辦方",
          description: "先看演講主題、代表場次與聯絡方式。"
        }
      ],
      siteMap: [
        "研究主軸與目前工作",
        "精選專案與案例研究",
        "整理技術判斷的文章與筆記",
        "演講、網頁版講稿與聯絡方式"
      ]
    },
    research: {
      eyebrow: "研究方向",
      title: "以部署現實、證據與安全為核心的研究主軸。",
      description: "這些工作圍繞幾個核心問題展開，關心的是當可靠性、可追溯性與營運限制被當成一級需求時，AI 系統該如何被設計。",
      browseLabel: "查看完整研究總覽"
    },
    projects: {
      eyebrow: "精選專案",
      title: "值得信賴的 AI、語音智能與安全導向系統的案例研究。",
      description: "每個專案都用案例研究的方式呈現，讓訪客看見問題定義、系統選擇，以及它在真實場域中的意義。",
      browseLabel: "瀏覽全部專案"
    },
    writing: {
      eyebrow: "精選文章",
      title: "關於值得信賴的 AI、有據可循的系統，以及實務判斷的文章。",
      description: "透過文章與研究筆記，把技術判斷背後的思路整理清楚。",
      browseLabel: "查看全部文章"
    },
    speaking: {
      eyebrow: "演講 / 分享",
      title: "歡迎研究演講、技術分享與跨領域對談邀請。",
      description:
        "近期公開活動涵蓋官方場次與英文會議論文，主題橫跨值得信賴的 AI、資安、威脅情報、語音系統，以及 AI 在重視可靠性與可追溯性場域中的落地問題。",
      browseLabel: "瀏覽演講與主題"
    },
    about: {
      eyebrow: "背景摘要",
      title: "從調查實務走到 AI 系統研究的跨域路徑。",
      description: "我的研究方向深受博士研究、系統實作，以及調查工作累積的證據意識與失效分析視角影響。"
    },
    contact: {
      eyebrow: "聯絡",
      title: "歡迎研究合作、技術交流與演講邀請。",
      description: "最快的方式是寄電子郵件。聯絡頁也整理了哪些背景資訊最能幫助我快速理解你的需求。"
    }
  },
  ja: {
    hero: {
      eyebrow: "Jason Chia-Sheng Lin | NYCU博士課程",
      headline: "音声・セキュリティ・規制環境でも、現実に運用できるAIシステムを設計しています。",
      description:
        "このサイトは、信頼できるAI、音声インテリジェンス、サイバーセキュリティ、そして証拠性・レビュー可能性・導入現実を重視するシステム研究をまとめた個人サイトです。",
      primaryCta: {
        label: "研究を見る"
      },
      secondaryCta: {
        label: "プロジェクトを見る"
      },
      metrics: [
        {
          label: "現在の所属",
          value: "NYCU 博士課程"
        },
        {
          label: "主な領域",
          value: "信頼できるAI、音声インテリジェンス、サイバーセキュリティ"
        },
        {
          label: "おすすめの見方",
          value: "研究の方向は研究ページ、実装例はプロジェクト、登壇相談は講演ページからどうぞ"
        }
      ],
      routes: [
        {
          title: "共同研究をご検討の方へ",
          description: "研究テーマ、現在の関心、協業の接点からご覧ください。"
        },
        {
          title: "採用ご担当の方へ",
          description: "代表プロジェクトから入り、文章とプロフィールで背景を追えます。"
        },
        {
          title: "イベント主催の方へ",
          description: "講演テーマ、代表セッション、連絡先をご覧ください。"
        }
      ],
      siteMap: [
        "研究テーマと現在の取り組み",
        "代表プロジェクトとケーススタディ",
        "技術判断の背景がわかる文章とノート",
        "講演、Web版講演記録、連絡先"
      ]
    },
    research: {
      eyebrow: "研究方向",
      title: "実装、証拠性、安全性から組み立てている研究テーマです。",
      description: "信頼性、追跡可能性、運用制約を設計の中心に置いたとき、AIシステムはどうあるべきかを、いくつかの軸に分けて追っています。",
      browseLabel: "研究全体を見る"
    },
    projects: {
      eyebrow: "代表プロジェクト",
      title: "信頼できるAI、音声インテリジェンス、セキュリティ志向のシステムに関するケーススタディ。",
      description: "各プロジェクトは、課題設定、設計判断、実務上の意味が伝わるようケーススタディとしてまとめています。",
      browseLabel: "すべてのプロジェクト"
    },
    writing: {
      eyebrow: "注目の文章",
      title: "信頼できるAI、根拠をたどれるシステム、実務判断についての文章です。",
      description: "エッセイや研究ノートを通じて、技術判断の背景が見えるようにしています。",
      browseLabel: "すべての文章"
    },
    speaking: {
      eyebrow: "講演 / 登壇",
      title: "研究講演、技術共有、分野横断の対話に対応しています。",
      description:
        "最近の登壇には公式セッションと英語会議論文の発表があり、主題は信頼できるAI、サイバーセキュリティ、脅威インテリジェンス、音声システム、そして信頼性と追跡可能性が求められる現場でのAI導入です。",
      browseLabel: "講演テーマを見る"
    },
    about: {
      eyebrow: "プロフィール概要",
      title: "調査の現場からAIシステム研究へとつながる学際的な歩みです。",
      description: "博士研究、システム構築、そして調査実務で培った証拠の見方と失敗分析の視点が、現在の研究と実践の土台になっています。"
    },
    contact: {
      eyebrow: "お問い合わせ",
      title: "共同研究、技術的な対話、登壇のご相談を歓迎します。",
      description: "もっとも早いご連絡方法はメールです。お問い合わせページには、最初に共有いただけると助かる情報もまとめています。"
    }
  }
} as const;

const profileOverrides = {
  "zh-tw": {
    tagline: "專注於真實世界、高風險與受規範場域中可落地的 AI 系統。",
    bio: "Jason Chia-Sheng Lin 目前就讀國立陽明交通大學人工智慧於醫學影像與訊號分析實驗室博士班，研究聚焦於值得信賴的 AI、AI 醫療器材軟體（SaMD）、資安，以及高風險場域中的可部署 AI 系統。",
    shortBio: "我結合醫療 AI 研究、系統實作與調查工作中的證據思維，設計在證據、法規與部署限制都重要時，仍然真正有用的 AI 系統。",
    quickFacts: [
      {
        label: "角色",
        value: "NYCU 博士生"
      },
      {
        label: "主題",
        value: "值得信賴的 AI、語音智能與資安"
      },
      {
        label: "方法",
        value: "面向高風險真實場景的證據導向系統設計"
      }
    ],
    trustSignals: [
      "目前於 NYCU 人工智慧於醫學影像與訊號分析實驗室進行博士研究。",
      "受邀於 CYBERSEC 2026 官方分論壇分享 AI 醫療器材軟體的資安設計。",
      "於 CISC 2025 發表兩篇英文論文，連結安全分析與實際部署防禦。"
    ],
    about: [
      "我目前是國立陽明交通大學（NYCU）人工智慧於醫學影像與訊號分析實驗室的博士生，研究聚焦於 AI 系統、值得信賴的 AI、語音與語言流程，以及安全導向的評估設計。",
      "在進入博士研究之前，我曾從事網路犯罪偵查。這段經驗至今仍深刻影響我如何理解證據、對抗性行為、失效分析，以及單一模型表現不錯和整體系統真正可信之間的差距。",
      "目前我關注 ASR + LLM + RAG 工作流程、語音智能、可實際部署的 AI 系統，以及受規範或安全敏感場域需要的治理設計。近期公開活動包含 CYBERSEC 2026 官方分論壇演講，以及兩篇 CISC 2025 英文論文，分別探討 AI 時代勒索軟體的演化與 Threat Pulse Modeling 在 ZTAID 零信任成熟度評估中的應用。"
    ],
    interests: [
      "能在真實部署中派上用場的值得信賴 AI 系統",
      "用於語音智能與證據導向分析的 ASR + LLM + RAG 工作流程",
      "高風險場景 AI 系統中的安全、隱私與評估設計",
      "分析師工作流程中的人工審查、可追溯性與決策支援",
      "面向反詐、醫療與其他受規範領域的 AI 系統設計"
    ],
    experience: [
      {
        period: "目前",
        title: "博士生，NYCU 人工智慧於醫學影像與訊號分析實驗室",
        detail: "研究值得信賴的 AI 系統、醫療資安、語音智能、有據可循的 LLM 工作流程，以及面向真實部署的安全評估。"
      },
      {
        period: "過往",
        title: "網路犯罪偵查",
        detail: "曾處理數位證據、網路詐欺分析、OSINT 與高風險調查情境中的營運推理。"
      },
      {
        period: "跨領域",
        title: "以調查經驗為底的系統思維",
        detail: "把證據意識、對抗性思維與營運紀律帶進 AI 系統設計與評估。"
      },
      {
        period: "持續進行",
        title: "研究與技術溝通",
        detail: "持續整理關於值得信賴的 AI、語音系統與部署風險的研究案例、技術寫作與演講內容。"
      }
    ],
    achievements: [
      "具備研究、系統實作與安全導向思考交會的跨域背景。",
      "目前工作連結 ASR、LLM/RAG 流程、評估設計與部署限制。",
      "歡迎研究團隊、技術團隊，以及面對高風險 AI 使用情境的單位與我交流合作。"
    ],
    contactTopics: [
      "研究合作與跨領域實驗室交流",
      "關於值得信賴的 AI、語音系統或資安的演講邀請",
      "招募、技術交流與證據導向 AI 系統設計"
    ],
    contactChecklist: [
      "你目前在做什麼，以及它為什麼和 Jason 的研究有關。",
      "你希望進行哪一類型的交流：合作、演講、審閱或職務討論。",
      "任何時程、受眾或限制條件，都能幫助我更快回覆。"
    ],
    contactPrompt: "歡迎就研究合作、值得信賴的 AI、語音與語言系統，以及安全敏感或受規範場景中的 AI 部署與我交流。"
  },
  ja: {
    tagline: "実社会の高リスク環境や規制環境で使えるAIシステムを設計しています。",
    bio: "Jason Chia-Sheng Lin は、国立陽明交通大学の Artificial Intelligence in Medical Imaging / Signal Analysis Lab に所属する博士課程研究者です。信頼できるAI、AI医療機器ソフトウェア（SaMD）、サイバーセキュリティ、高リスク環境で導入可能なAIシステムを研究しています。",
    shortBio: "医療AIラボでの研究、システム実装、そして調査実務で培った証拠志向の視点を組み合わせ、証拠性・規制・導入制約が重要な場面でも機能するAIシステムを設計しています。",
    quickFacts: [
      {
        label: "役割",
        value: "NYCU 博士課程"
      },
      {
        label: "主領域",
        value: "信頼できるAI、音声インテリジェンス、サイバーセキュリティ"
      },
      {
        label: "アプローチ",
        value: "高リスクな実環境に向けた証拠志向のシステム設計"
      }
    ],
    trustSignals: [
      "NYCU の Artificial Intelligence in Medical Imaging / Signal Analysis Lab で博士研究を進めています。",
      "CYBERSEC 2026 の公式セッションで、AI医療機器ソフトウェアのセキュリティ設計について講演しました。",
      "CISC 2025 で、実運用の防御とセキュリティ分析をつなぐ英語論文を2本発表しました。"
    ],
    about: [
      "現在、国立陽明交通大学（NYCU）の Artificial Intelligence in Medical Imaging / Signal Analysis Lab で博士研究に取り組み、AIシステム、信頼できるAI、音声・言語パイプライン、セキュリティを意識した評価設計を研究しています。",
      "博士研究に入る前は、サイバー犯罪捜査の実務に携わっていました。この経験は今でも、証拠、敵対的行動、失敗分析、そして単体では高性能に見えるモデルと実運用で信頼できるシステムの違いを考える土台になっています。",
      "現在は ASR + LLM + RAG ワークフロー、音声インテリジェンス、実装可能なAIシステム、そして規制や安全性の要件が厳しい現場に向けたガバナンス設計に注力しています。最近の公開活動として、CYBERSEC 2026 の公式セッションと、AI時代のランサムウェアの進化および ZTAID 向け Threat Pulse Modeling を扱う CISC 2025 の英語論文2本があります。"
    ],
    interests: [
      "実運用の中で意味を持つ信頼できるAIシステム",
      "音声インテリジェンスと証拠志向分析のための ASR + LLM + RAG パイプライン",
      "高リスク環境向けAIシステムの安全性、プライバシー、評価設計",
      "分析者向けワークフローにおける人間レビュー、追跡可能性、意思決定支援",
      "不正対策、医療、その他の規制領域に向けた実社会のAIシステム設計"
    ],
    experience: [
      {
        period: "現在",
        title: "博士課程研究者、NYCU Artificial Intelligence in Medical Imaging / Signal Analysis Lab",
        detail: "信頼できるAIシステム、医療サイバーセキュリティ、音声インテリジェンス、根拠をたどれるLLMワークフロー、実運用を見据えたセキュリティ評価を研究しています。"
      },
      {
        period: "以前",
        title: "サイバー犯罪捜査",
        detail: "デジタル証拠、オンライン詐欺分析、OSINT、高リスクな調査環境での運用判断に携わりました。"
      },
      {
        period: "学際的",
        title: "調査経験を土台にしたシステム思考",
        detail: "証拠意識、敵対的思考、運用規律をAIシステムの設計と評価に持ち込んでいます。"
      },
      {
        period: "継続中",
        title: "研究と技術発信",
        detail: "信頼できるAI、音声システム、導入リスクに関するケーススタディ、技術文書、講演資料を継続的に整えています。"
      }
    ],
    achievements: [
      "研究、システム実装、セキュリティ志向の思考を横断する学際的なプロフィールです。",
      "現在の取り組みは ASR、LLM/RAG、評価設計、導入制約をつないでいます。",
      "研究グループ、技術チーム、高リスクなAI活用に向き合う組織との協業を歓迎しています。"
    ],
    contactTopics: [
      "共同研究や学際的なラボとの対話",
      "信頼できるAI、音声システム、サイバーセキュリティに関する講演依頼",
      "採用、技術交流、証拠志向のAIシステム設計"
    ],
    contactChecklist: [
      "取り組んでいる内容と、それが Jason の研究とどうつながるか。",
      "必要な対話の種類: 共同研究、講演、レビュー、あるいは役割に関する相談。",
      "時期、対象読者、制約など、返信を考える上で役立つ情報。"
    ],
    contactPrompt: "共同研究、信頼できるAI、音声・言語システム、安全性や規制要件が重要な環境でのAI導入についての対話を歓迎します。"
  }
} as const;

const researchOverrides = {
  "zh-tw": {
    page: {
      eyebrow: "研究",
      title: "位在 AI 系統、安全與可信部署交會處的研究。",
      description: "我的研究關注的是：當 AI 系統被放進充滿不確定性、證據要求與真實營運成本的環境時，如何仍然保持有用、可檢視且可靠。"
    },
    pillars: [
      {
        title: "值得信賴的 AI 系統",
        description: "把可靠性、評估、人類審查與可追溯性視為架構的一部分，而不是事後補上的附加條件。",
        tags: ["可靠性", "評估", "人工審查"]
      },
      {
        title: "語音、語言與證據流程",
        description: "打造 ASR + LLM + RAG 工作流程，用於對話分析、結構化抽取，以及針對長音訊與逐字稿進行有據可循的推理。",
        tags: ["ASR", "LLM", "RAG"]
      },
      {
        title: "安全與高風險部署",
        description: "研究隱私、資訊外洩、對抗風險與治理限制，這些因素如何形塑受規範或安全敏感場景中的 AI 系統。",
        tags: ["安全", "隱私", "部署"]
      }
    ],
    questions: [
      "AI 系統如何在不削弱證據鏈的前提下，支援高風險環境中的人類決策？",
      "除了基準測試表現與流暢輸出之外，什麼才真正讓一個 AI 系統值得信賴？",
      "語音與語言流程該如何為真實營運工作流程而設計，而不是只為理想化展示而存在？",
      "部署限制、治理與安全如何從一開始就被內建進 AI 系統設計？"
    ],
    ongoingWork: [
      {
        title: "證據導向的語音智能流程",
        status: "進行中研究",
        summary: "開發可從原始對話音訊一路走到結構化、可審閱輸出的系統，同時保留生成結論與來源證據之間的可追溯性。",
        nextStep: "持續細化逐字稿品質、檢索行為與審閱者信任感等評估面向。",
        tags: ["語音智能", "ASR", "可追溯性"]
      },
      {
        title: "有據可循的詐欺對話分析",
        status: "進行中研究",
        summary: "研究以 RAG 為基礎的工作流程，如何在不依賴缺乏依據的 LLM 推理下支援詐欺對話分析。",
        nextStep: "延伸到分析師使用情境下的檢索品質，以及答案是否有據可循的評估。",
        tags: ["詐欺分析", "RAG", "LLM 系統"]
      },
      {
        title: "聯邦學習中的資訊外洩與隱私風險",
        status: "持續研究",
        summary: "探索協作式訓練在敏感 AI 場景中，面對真實外洩與隱私假設時的行為特性。",
        nextStep: "比較不同威脅模型與部署假設下的攻防取捨。",
        tags: ["聯邦學習", "隱私", "安全"]
      }
    ],
    futureDirections: [
      "面向分析師與重視證據工作流程的值得信賴語音系統。",
      "適用於受規範、安全關鍵或營運複雜場域的 AI 部署評估框架。",
      "支援真實決策的安全、多模態且有據可循的系統。"
    ],
    collaboration: {
      title: "合作與研究契合度",
      description: "我特別期待與重視技術深度、謹慎評估，以及關注 AI 在可靠性、可審查性與治理要求場景中如何真正落地的人合作。"
    }
  },
  ja: {
    page: {
      eyebrow: "研究",
      title: "AIシステム、セキュリティ、信頼できる導入の交点にある研究です。",
      description: "不確実性、証拠要件、現実の運用コストを伴う環境にAIを導入したとき、なお有用で検証可能かつ信頼できる状態をどう保つかを研究しています。"
    },
    pillars: [
      {
        title: "信頼できるAIシステム",
        description: "信頼性、評価、人間レビュー、追跡可能性を、後付けではなくアーキテクチャの一部として設計します。",
        tags: ["信頼性", "評価", "人間レビュー"]
      },
      {
        title: "音声・言語・証拠パイプライン",
        description: "ASR + LLM + RAG を用い、長時間音声や文字起こしに対する会話分析、構造化抽出、証拠志向の推論を行うワークフローを構築しています。",
        tags: ["ASR", "LLM", "RAG"]
      },
      {
        title: "セキュリティと高リスク導入",
        description: "規制環境や安全性が重要な場で使われるAIシステムにおいて、プライバシー、漏えい、敵対的リスク、ガバナンス制約がどう影響するかを研究しています。",
        tags: ["セキュリティ", "プライバシー", "導入"]
      }
    ],
    questions: [
      "証拠のつながりを弱めずに、高リスク環境で人の意思決定を支えるAIシステムはどう設計できるか。",
      "ベンチマーク性能や流暢な出力を超えて、AIシステムを信頼できるものにする要素は何か。",
      "音声・言語パイプラインは理想化されたデモではなく、実際の運用フローにどう合わせるべきか。",
      "導入制約、ガバナンス、セキュリティを最初からAIシステム設計に組み込むにはどうすべきか。"
    ],
    ongoingWork: [
      {
        title: "証拠志向の音声インテリジェンス・パイプライン",
        status: "進行中の研究",
        summary: "生の会話音声から、構造化されレビュー可能な出力へ至るシステムを開発し、生成結果と元の証拠のあいだの追跡可能性を保ちます。",
        nextStep: "文字起こし品質、検索挙動、レビュー担当者の信頼感という観点から評価を磨いています。",
        tags: ["音声インテリジェンス", "ASR", "追跡可能性"]
      },
      {
        title: "根拠が追える不正会話分析",
        status: "進行中の研究",
        summary: "根拠のない LLM 推論に頼らず、不正関連の会話分析を支援する RAG ワークフローを研究しています。",
        nextStep: "分析者の利用場面に合わせて、検索品質と回答の根拠性を評価しています。",
        tags: ["不正分析", "RAG", "LLM システム"]
      },
      {
        title: "連合学習における漏えいとプライバシーリスク",
        status: "継続研究",
        summary: "機微なAI環境で、協調学習が現実的な漏えい・プライバシー前提の下でどう振る舞うかを検証しています。",
        nextStep: "脅威モデルと導入前提ごとに、攻防のトレードオフを比較しています。",
        tags: ["連合学習", "プライバシー", "セキュリティ"]
      }
    ],
    futureDirections: [
      "分析者向けで、証拠重視のワークフローを支える信頼できる音声システム。",
      "規制環境、セキュリティ上重要な環境、運用が複雑な環境に向けたAI導入評価フレームワーク。",
      "実際の意思決定支援に向けた、安全で証拠に基づくマルチモーダルシステム。"
    ],
    collaboration: {
      title: "共同研究と適合性",
      description: "技術的な深さ、丁寧な評価、そして信頼性・レビュー可能性・ガバナンスが重要な環境へのAI導入を重視する協業に、特に関心があります。"
    }
  }
} as const;

const speakingOverrides = {
  "zh-tw": {
    page: {
      eyebrow: "演講 / 分享",
      title: "關於值得信賴的 AI、語音系統與高要求部署場域的演講。",
      description:
        "我樂於與研究團隊、研討會、技術團隊及跨領域聽眾交流，特別是當主題涉及 AI 系統的可靠性、證據與真實營運脈絡時。近期公開活動包含 CYBERSEC 2026 官方分論壇，以及兩篇 CISC 2025 英文論文，主題涵蓋 AI 時代的勒索軟體防禦與 Threat Pulse Modeling。"
    },
    featuredEngagement: {
      label: "官方場次",
      summary: "聚焦 AI 醫療器材軟體資安實務的分論壇，從 FDA 524B 出發，串連威脅建模、SBOM、零信任設計與可稽核的風險治理。",
      description: "這場分享討論 FDA 524B 的審查期待如何影響 AI 醫療器材軟體的資安設計，並進一步連到工程流程、透明治理與可持續的安全策略。",
      language: "中文，現場提供 AI 即時翻譯",
      storyLabel: "網頁版講稿"
    },
    additionalEngagements: [
      {
        label: "會議論文",
        summary: "英文會議論文，分析 AI 時代的 RaaS 如何透過 BYOVD、LOTL、隱蔽式 C2 與自適應戰術演化，並將其對應到以 ZTAID 為基礎的零信任防禦策略。",
        description: "論文以 Medusa 與 CrazyHunter 為案例，連結現代勒索軟體操作與實務防禦設計，包括分階段授權、異常偵測、自動化圍堵，以及高風險場景中的安全編排。",
        language: "英文",
        format: "會議論文"
      },
      {
        label: "會議論文",
        summary: "英文會議論文，提出 Threat Pulse Modeling（TPM）作為把即時威脅情報轉換為 ZTAID 成熟度訊號的方法，以支援持續性的零信任評估。",
        description: "論文定義 pulse event、跨五個 ZTAID 支柱的 impact-vector scoring、嚴重度分級，以及搭配 ARIMA 與 Kalman filtering 的時間序列預測，也提出 Pulse Coverage Rate 與 Detection-Feedback Loop Time 等動態指標，用來縮短情報到評估再到應變的週期。",
        language: "英文",
        format: "會議論文"
      }
    ],
    topics: [
      {
        title: "超越基準測試的值得信賴 AI",
        description: "當 AI 被用在錯誤代價很高的場域時，該如何思考可靠性、證據、人類審查與系統行為。",
        audience: "研究團隊、實驗室、跨領域聽眾"
      },
      {
        title: "AI 時代的勒索軟體與零信任防禦",
        description: "現代 RaaS 攻擊如何結合自動化、BYOVD、LOTL 與隱蔽式 C2，以及 ZTAID 導向的零信任策略如何落實偵測、圍堵與復原。",
        audience: "資安會議、藍隊、研究所課程"
      },
      {
        title: "Threat Pulse Modeling 與持續性評估",
        description: "如何把威脅情報轉換成 pulse event、ZTAID 支柱分數與可量測的成熟度訊號，以支援更快的防禦調整。",
        audience: "資安研究者、零信任計畫、研究所課程"
      },
      {
        title: "面向營運工作流的 ASR + LLM + RAG",
        description: "語音與語言流程如何從原始逐字稿走到有據可循、可檢視的分析輸出。",
        audience: "NLP 團隊、語音研究者、應用 AI 實作者"
      },
      {
        title: "安全導向的 AI 系統設計",
        description: "為什麼隱私、資訊外洩風險、對抗性思維與部署假設，應被視為核心系統問題，而不是事後才補上的合規要求。",
        audience: "安全團隊、工程團隊、政策相關利害關係人"
      }
    ],
    formats: [
      "研究研討會與受邀學術演講",
      "會議場次與跨領域座談",
      "面向實驗室、應用 AI 團隊與研究型公司的技術演講"
    ],
    invitation: {
      title: "適合邀請的演講主題",
      description: "演講內容可依研究、技術或跨職能聽眾調整。如果你的活動與值得信賴的 AI、語音智能、勒索軟體防禦或部署風險相關，歡迎來信討論。"
    }
  },
  ja: {
    page: {
      eyebrow: "講演 / 登壇",
      title: "信頼できるAI、音声システム、高い要求がある導入環境に関する講演です。",
      description:
        "信頼性、証拠、実運用の文脈が重要なAIシステムに関心を持つ研究グループ、会議、技術チーム、分野横断の聴衆との対話を歓迎しています。最近の公開活動として、CYBERSEC 2026 の公式セッションと、AI時代のランサムウェア防御および Threat Pulse Modeling を扱う CISC 2025 の英語論文2本があります。"
    },
    featuredEngagement: {
      label: "公式セッション",
      summary: "AI医療機器ソフトウェアのサイバーセキュリティ実務を扱う分科会で、FDA 524B を起点に脅威モデリング、SBOM、ゼロトラスト設計、監査可能なリスク統治を結びます。",
      description: "このセッションでは、FDA 524B の審査要件が AI医療機器ソフトウェアのセキュリティ設計にどう影響するかを検討し、それをエンジニアリング運用、透明なガバナンス、持続可能なセキュリティ戦略へ接続します。",
      language: "中国語、AI同時翻訳あり",
      storyLabel: "Web版講演記録"
    },
    additionalEngagements: [
      {
        label: "会議論文",
        summary: "AI時代の RaaS が BYOVD、LOTL、秘匿化された C2、適応的な攻撃手口によってどう進化するかを分析し、ZTAID に基づくゼロトラスト防御戦略へ結びつけた英語論文です。",
        description: "Medusa と CrazyHunter をケーススタディに、現代のランサムウェア運用と、段階的認可、異常検知、自動封じ込め、セキュリティオーケストレーションを含む実践的な防御設計をつなげています。",
        language: "英語",
        format: "会議論文"
      },
      {
        label: "会議論文",
        summary: "Threat Pulse Modeling（TPM）を、ライブ脅威インテリジェンスを ZTAID 成熟度シグナルへ変換する方法として提案し、継続的なゼロトラスト評価を支える英語論文です。",
        description: "pulse event、5つの ZTAID の柱にまたがる impact-vector スコアリング、深刻度のトリアージ、ARIMA とカルマンフィルタによる時系列予測に加え、Pulse Coverage Rate や Detection-Feedback Loop Time といった動的指標を定義しています。",
        language: "英語",
        format: "会議論文"
      }
    ],
    topics: [
      {
        title: "ベンチマークを超えて考える信頼できるAI",
        description: "誤りのコストが大きい環境でAIを使うとき、信頼性、証拠、人間レビュー、システムの振る舞いをどう捉えるか。",
        audience: "研究グループ、ラボ、学際的な聴衆"
      },
      {
        title: "AI時代のランサムウェアとゼロトラスト防御",
        description: "現代の RaaS キャンペーンが自動化、BYOVD、LOTL、秘匿化された C2 をどう組み合わせるか、そして ZTAID に沿ったゼロトラスト戦略でどう検知・封じ込め・復旧するか。",
        audience: "サイバーセキュリティ会議、ブルーチーム、大学院セミナー"
      },
      {
        title: "Threat Pulse Modeling と継続的評価",
        description: "脅威インテリジェンスを pulse event、ZTAID の柱ごとのスコア、測定可能な成熟度シグナルへ変換し、防御の適応を速める方法です。",
        audience: "セキュリティ研究者、ゼロトラストプログラム、大学院セミナー"
      },
      {
        title: "実運用ワークフロー向け ASR + LLM + RAG",
        description: "生の文字起こしから、根拠を追える検証可能な分析結果へつなぐ音声・言語パイプラインの設計パターンです。",
        audience: "NLP チーム、音声研究者、応用 AI 実務者"
      },
      {
        title: "セキュリティ志向のAIシステム設計",
        description: "プライバシー、漏えいリスク、敵対的思考、導入前提を、後付けのコンプライアンスではなく中核の設計課題として扱う理由です。",
        audience: "セキュリティチーム、エンジニアリング組織、政策関連ステークホルダー"
      }
    ],
    formats: [
      "研究セミナーと招待講演",
      "会議セッションと学際的パネル",
      "ラボ、応用 AI チーム、研究志向企業向け技術講演"
    ],
    invitation: {
      title: "ご相談いただきやすい講演テーマ",
      description: "講演内容は研究者向け、技術者向け、分野横断の聴衆向けに調整できます。信頼できるAI、音声インテリジェンス、ランサムウェア防御、導入リスクに近いテーマであれば、ぜひご相談ください。"
    }
  }
} as const;

const linksPageOverrides = {
  "zh-tw": {
    page: {
      eyebrow: "快速連結",
      description: "Jason Chia-Sheng Lin 的研究、專案、文章、演講與聯絡方式的快速入口頁。"
    },
    primaryActions: [
      {
        label: "研究",
        description: "研究主軸、目前關注與近期論文。"
      },
      {
        label: "專案",
        description: "精選案例研究與系統實作。"
      },
      {
        label: "文章",
        description: "文章與研究筆記。"
      },
      {
        label: "演講",
        description: "主題、網頁版講稿與近期活動。"
      },
      {
        label: "關於我",
        description: "背景、研究脈絡與工作方式。"
      },
      {
        label: "聯絡",
        description: "電子郵件、背景資訊與下一步。"
      }
    ],
    audiencePaths: [
      {
        label: "合作",
        description: "研究合作、技術交流與跨領域工作可以從這裡開始。"
      },
      {
        label: "招募團隊",
        description: "快速了解背景、研究契合度，以及這些工作如何串起研究與實作。"
      },
      {
        label: "學生",
        description: "查看我目前關注的問題、進行中的方向，以及在意的系統設計議題。"
      },
      {
        label: "演講 / 媒體",
        description: "瀏覽主題、近期場次，以及適合邀請的活動內容。"
      }
    ],
    profileLinks: [
      {
        label: "實驗室網站",
        description: "目前於國立陽明交通大學就讀博士的實驗室。"
      },
      {
        label: "GitHub",
        description: "程式碼、原型與研究實作面。"
      },
      {
        label: "LinkedIn",
        description: "提供較完整的職涯背景與外部脈絡。"
      },
      {
        label: "CYBERSEC 講者頁",
        description: "2026 重點場次的外部講者介紹頁。"
      },
      {
        label: "官方場次頁面",
        description: "醫療資安分論壇的官方活動頁。"
      }
    ],
    contact: {
      title: "聯絡",
      description: "最適合用於合作、演講邀請、研究討論與技術交流的聯絡方式。",
      ctaLabel: "寄信給 Jason"
    }
  },
  ja: {
    page: {
      eyebrow: "クイックリンク",
      description: "Jason Chia-Sheng Lin の研究、プロジェクト、文章、講演、連絡先へすばやく進むためのページです。"
    },
    primaryActions: [
      {
        label: "研究",
        description: "研究テーマ、現在の関心、最近の論文。"
      },
      {
        label: "プロジェクト",
        description: "代表的なケーススタディと実装。"
      },
      {
        label: "文章",
        description: "文章と研究ノート。"
      },
      {
        label: "講演",
        description: "テーマ、Web版講演記録、最近の登壇。"
      },
      {
        label: "プロフィール",
        description: "背景、研究の流れ、取り組み方。"
      },
      {
        label: "お問い合わせ",
        description: "メール、背景情報、次の一歩。"
      }
    ],
    audiencePaths: [
      {
        label: "共同研究",
        description: "共同研究、技術対話、分野横断の取り組みについてはここから。"
      },
      {
        label: "採用・人材紹介の方へ",
        description: "背景、研究との接点、研究と実装をどうつないでいるかを手短に確認できます。"
      },
      {
        label: "学生",
        description: "現在の問い、進行中の方向性、関心のあるシステム課題を確認できます。"
      },
      {
        label: "講演 / メディア",
        description: "講演テーマ、最近の登壇、セミナーやイベント向けの情報を確認できます。"
      }
    ],
    profileLinks: [
      {
        label: "研究室サイト",
        description: "現在博士課程で所属する国立陽明交通大学の研究室。"
      },
      {
        label: "GitHub",
        description: "コード、プロトタイプ、研究実装の側面。"
      },
      {
        label: "LinkedIn",
        description: "職務背景や外部での活動を補うプロフィールです。"
      },
      {
        label: "CYBERSEC スピーカープロフィール",
        description: "2026年の注目セッションに関する外部登壇プロフィール。"
      },
      {
        label: "公式セッションページ",
        description: "医療サイバーセキュリティ分科会の公式イベントページです。"
      }
    ],
    contact: {
      title: "お問い合わせ",
      description: "共同研究、講演依頼、研究相談、技術的な問い合わせに最適な連絡先です。",
      ctaLabel: "Jason にメール"
    }
  }
} as const;

const pageCopy = {
  en: {
    common: {
      contact: "Contact",
      projects: "Projects",
      research: "Research",
      writing: "Writing",
      talks: "Talks",
      about: "About",
      links: "Links",
      resume: "Resume",
      close: "Close",
      menu: "Menu",
      skipToContent: "Skip to content",
      emailJason: "Email Jason",
      labWebsite: "Lab Website",
      speakerProfile: "CYBERSEC Speaker Profile",
      officialSessionPage: "Official Session Page",
      officialSessionPageShort: "Official session page",
      language: "Language",
      languageSwitcherAria: "Language switcher",
      readArticle: "Read article",
      openCaseStudy: "Open case study",
      backToWriting: "Back to writing",
      backToProjects: "Back to all projects",
      continueFromThisPiece: "Continue from this piece",
      projectSnapshot: "Project Snapshot",
      bestNextSteps: "Best next steps",
      seeResearch: "See research",
      discussThisWork: "Discuss this work",
      previousProject: "Previous project",
      nextProject: "Next project",
      browse: "Browse",
      allProjects: "All projects",
      needContext: "Need context?",
      contactJason: "Contact Jason",
      onThisPage: "On this page",
      previousPiece: "Previous piece",
      nextPiece: "Next piece",
      untranslatedLabel: "Translation status",
      untranslatedTitle: "English source content",
      untranslatedBlog: "This article is currently published in English. Shared navigation and surrounding UI follow your selected language.",
      untranslatedProject: "This case study is currently published in English. Shared navigation and surrounding UI follow your selected language.",
      untranslatedTalk: "This long-form keynote is currently published in English. Shared navigation and surrounding UI follow your selected language.",
      untranslatedResearch: "This research direction page is currently published in English. Shared navigation and surrounding UI follow your selected language.",
      currentRole: "Current Role",
      institution: "Institution",
      researchLab: "Research Lab",
      primaryLens: "Primary Lens",
      currentAreasOfWork: "Current Areas of Work",
      professionalPath: "Professional Path",
      professionalNarrative: "Professional Narrative",
      currentSpeakingAndPaperActivity: "Current speaking and paper activity",
      selectedSignals: "Selected Signals",
      methodsAndToolkit: "Methods / Technical Toolkit",
      workTogether: "Work together",
      email: "Email",
      connect: "Connect",
      explore: "Explore",
      lastUpdated: "Last updated"
    },
    navbar: {
      desktopTagline: "AI agents, speech intelligence, and security."
    },
    footer: {
      description: "A calm, research-oriented portfolio about AI agents, trustworthy AI, speech intelligence, cybersecurity, and real-world deployment in settings where evidence and reliability matter.",
      contactCta: "Contact Jason",
      aboutCta: "About",
      researchLab: "Research lab",
      githubDescription: "Code, prototypes, and implementation work.",
      linkedInDescription: "Professional profile and external context.",
      copyrightLabel: "Copyright",
      rightsReserved: "All rights reserved.",
      versionControl: "Version Control",
      repositoryLabel: "Repository",
      versionLabel: "Version",
      branchLabel: "Branch",
      commitLabel: "Commit"
    },
    home: {
      heroPills: ["Doctoral Researcher", "AI Agents", "Speaker"],
      meetJason: "Meet Jason",
      heroInstitutionSummary: "NYCU · AI agents, speech intelligence, cybersecurity, and regulated deployment",
      heroSummary: "Investigation-informed research and builds focused on AI agents and systems that stay useful when evidence, human review, and operational constraints matter.",
      heroContact: "Contact Jason",
      startHere: "Start here",
      choosePath: "Choose the path that matches your visit.",
      whatYouWillFind: "What you'll find here",
      signalMesh: "Signal Mesh",
      staticFallback: "Static fallback",
      reducedMotion: "Reduced Motion",
      visualPreviewDisabled: "Visual preview disabled",
      visualPreviewCopy: "The interactive network visualization is disabled to respect reduced-motion preferences.",
      aboutJason: "About Jason",
      backgroundEssay: "Background essay",
      helpfulFirstMessage: "Helpful first message",
      helpfulFirstMessageCopy: "Share your context, why the conversation fits, and what kind of next step would be most useful.",
      openContactPage: "Open contact page",
      researchBase: "Research base",
      speakingSignal: "Speaking signal",
      publicationActivity: "Publication activity",
      readWebKeynote: "Read the web keynote",
      writingInProgress: "Writing in progress",
      writingInProgressCopy: "New essays, research notes, and technical perspectives will appear here as the body of work continues to grow."
    },
    aboutPage: {
      description: "This page provides the professional context behind the portfolio: the doctoral research agenda, the investigation-informed perspective, and the way I approach AI agents and systems intended for serious real-world use.",
      title: "Researcher, agent builder, and security-minded thinker.",
      actionResearch: "Research focus",
      actionProjects: "Selected projects",
      actionWriting: "Writing",
      actionTalks: "Talks",
      actionContact: "Contact",
      currentRoleValue: "Doctoral Researcher",
      primaryLensValue: "AI agents, trustworthy AI, and deployment realism",
      currentSpeakingActivityLinks: {
        official: "View official session page",
        profile: "View CYBERSEC speaker profile"
      }
    },
    researchPage: {
      activeNowTitle: "What is active now?",
      activeNowDescription: "Current work and next steps.",
      depthTitle: "What signals depth?",
      depthDescription: "Recent conference papers and themes.",
      implementationTitle: "Want implementation evidence?",
      implementationDescription: "Go from the agenda to case studies.",
      collaborationTitle: "Considering collaboration?",
      collaborationDescription: "Use the direct contact path.",
      activeWorkTitle: "Active work and current directions",
      activeWorkDescription: "Ongoing work is organized around a small number of durable directions in agents, speech pipelines, and deployment rather than a long list of disconnected experiments.",
      currentNextStep: "Current next step:",
      recentPapersTitle: "Recent conference papers",
      recentPapersDescription: "Recent English conference papers connect the research agenda with practical deployment, threat modeling, and measurable defense strategy.",
      questionsTitle: "Questions I care about",
      workingStyleTitle: "Working style",
      workingStyleParagraphOne: "I tend to approach AI as a full-system and agent-workflow problem rather than a single-model problem. That means thinking about data quality, tools, retrieval, evaluation, security assumptions, failure analysis, and human review as connected parts of the same design task.",
      workingStyleParagraphTwo: "The common thread across the portfolio is simple: build agents and systems that are capable, inspectable, evidence-aware, and realistic about deployment conditions.",
      labWebsite: "Research Lab Website",
      futureDirectionsTitle: "Future directions",
      collaborationBox: "Good collaboration fits include research groups, interdisciplinary labs, and technical teams that want to turn strong ideas into inspectable agents, evaluable prototypes, or conference-ready case studies.",
      selectedProjects: "Selected Projects",
      collaborate: "Collaborate"
    },
    researchDirectionPage: {
      backToResearch: "Back to research overview",
      directionEyebrow: "Research direction",
      currentThesisTitle: "Current thesis",
      yearViewTitle: "2026 perspective",
      humanFactorsTitle: "Human factors lens",
      whyNowTitle: "Why this matters now",
      prioritiesTitle: "Current priorities",
      principlesTitle: "System design principles",
      humanFactorsSectionTitle: "Human factors and review design",
      evaluationTitle: "Evaluation agenda",
      questionsTitle: "Open questions",
      signalsTitle: "Signals shaping this direction",
      focusTagsTitle: "Focus tags",
      openDirection: "Explore this direction",
      allDirections: "All research directions",
      discussDirection: "Discuss this direction",
      browseProjects: "Browse projects",
      previousDirection: "Previous direction",
      nextDirection: "Next direction"
    },
    contactPage: {
      title: "Start a serious conversation.",
      directRouteTitle: "The direct route",
      directRouteDescription: "Email is the best path for collaboration, speaking invitations, hiring conversations, and technically specific questions about AI agents or system design.",
      helpfulContext: "Helpful context to include",
      profileEyebrow: "Profile",
      profileSummary: "Doctoral researcher at {institution} in the {lab}, working across AI agents, trustworthy AI, medical cybersecurity, speech intelligence, and real-world deployment, with recent English CISC 2025 papers on ransomware defense and threat pulse modeling for zero-trust maturity assessment.",
      collaborationCardTitle: "Collaboration and technical discussion",
      collaborationCardDescription: "The best route for collaboration, speaking invitations, research discussions, and technically specific inquiries.",
      sendEmail: "Send an email",
      currentWorkCardLabel: "Current work",
      currentWorkCardTitle: "What Jason is building now",
      viewResearch: "View research",
      signalsLabel: "Signals",
      signalsTitle: "Credibility and external references",
      signalsDescription: "Doctoral research at {institutionShort}, an official {event} session, and {count} English CISC 2025 conference papers.",
      reviewTalks: "Review talks"
    },
    resumePage: {
      description: "A professional resume page summarizing Jason Chia-Sheng Lin's current role, strengths, experience, selected work, and public research signals for hiring and collaboration review.",
      title: "Professional profile for AI agents, trustworthy AI, and security-aware technical work.",
      intro: "{name} is a doctoral researcher at {institution} whose work connects AI agents, trustworthy AI, speech intelligence, cybersecurity, and deployment-ready system design. This page is designed for hiring managers, technical leaders, collaborators, and organizers who want a concise, professional overview.",
      selectedProjects: "Selected projects",
      professionalStrengths: [
        {
          title: "Agent and systems thinking",
          description: "Works across models, tools, orchestration, runtime assumptions, and operational constraints rather than treating AI work as an isolated modeling problem."
        },
        {
          title: "Security-aware technical judgment",
          description: "Brings threat modeling, privacy, leakage risk, and deployment realism into system design for environments where failure has real cost."
        },
        {
          title: "Clear communication for mixed audiences",
          description: "Turns technical work into talks, case studies, and structured writing that hiring managers, researchers, and technical collaborators can inspect quickly."
        }
      ],
      teamSignals: [
        "Interdisciplinary profile spanning doctoral research, agent and system building, and investigation-informed reasoning.",
        "Comfortable in research, engineering-adjacent, and technically cross-functional conversations.",
        "Public work includes an official CYBERSEC 2026 session and two English CISC 2025 conference papers."
      ],
      metrics: [
        { label: "Current role", value: "Doctoral researcher at NYCU" },
        { label: "Base", value: "{lab}" },
        { label: "Primary focus", value: "AI agents, speech intelligence, and cybersecurity" },
        { label: "Recent public signals", value: "1 official session + {count} English conference papers" }
      ],
      professionalSummary: "Professional Summary",
      summaryParagraphTwo: "Before doctoral research, Jason worked in cybercrime investigation. That background continues to shape a practical approach to evidence, adversarial behavior, traceability, and the gap between a model that looks good in isolation and a system that remains trustworthy in real-world use.",
      summaryParagraphThree: "Current work spans AI agents, speech and language pipelines, trustworthy AI evaluation, medical AI cybersecurity, and deployment-minded system design in environments where reviewability and operational constraints matter.",
      whatBrings: "What Jason Brings to a Team",
      experience: "Professional Experience",
      currentWork: "Current Areas of Work",
      selectedWorkEyebrow: "Selected Work",
      selectedWorkTitle: "Representative projects that show applied systems thinking.",
      selectedWorkDescription: "These case studies show how Jason frames problems, builds systems, and explains technical choices in ways that are inspectable by both technical and cross-functional readers.",
      browseAllProjects: "Browse all projects",
      speakingSignals: "Speaking and Publication Signals",
      talksPage: "Talks page",
      speakerProfile: "Speaker profile",
      writingCommunication: "Writing and Technical Communication",
      professionalSignals: "Professional signals",
      methodsAndToolkit: "Methods and Technical Toolkit",
      openToConversations: "Open to the Following Conversations",
      openToConversationsDescription: "The strongest fit is with teams, labs, or organizers working near trustworthy AI, speech and language systems, deployment-sensitive workflows, or cybersecurity-minded system design.",
      contactCardDescription: "Email is the best route for hiring conversations, research collaboration, speaking invitations, and technically specific discussion.",
      contactPage: "Contact page"
    },
    blogIndexPage: {
      description: "Essays and research notes that make the reasoning behind the work visible, from evidence-aware speech pipelines to deployment risk, evaluation, and trustworthy AI in practice.",
      title: "Writing on trustworthy AI, speech intelligence, and security-minded system design.",
      featuredTitle: "Start with the featured piece",
      featuredDescription: "A fast way to understand the voice and concerns behind the work.",
      recentTitle: "Browse recent notes",
      recentDescription: "Scan topics quickly by category, date, and tags.",
      implementationTitle: "Want implementation examples?",
      implementationDescription: "Jump from reasoning to project case studies.",
      featuredPiece: "Featured piece",
      recentWriting: "Recent writing",
      emptyState: "More writing is on the way."
    },
    projectsPage: {
      description: "This page focuses on intentional case studies rather than a repository dump. Each project is framed through the problem, the system design, the key technical decisions, and the reason the work matters in practice.",
      title: "Research-led case studies in AI agents, speech intelligence, and security-aware systems.",
      filterTitle: "Filter by theme",
      filterDescription: "Use these filters to jump directly to speech, AI and agent systems, fraud analysis, or security-related case studies.",
      showingSummary: "Showing {count} of {total} projects",
      showingSummaryWithFilter: "Showing {count} of {total} projects for {filter}",
      filters: ["All", "Speech", "AI / Agents", "Fraud Analysis", "Security"],
      broaderContextTitle: "Need the broader context?",
      broaderContextDescription: "If a case study is relevant, the next useful comparison is usually the research agenda, a writing sample, or a direct conversation."
    },
    talksPage: {
      reviewTitle: "Review the featured session",
      reviewDescription: "Best for organizers who need a concrete talk example fast.",
      browseTitle: "Browse topics and audience fit",
      browseDescription: "Useful when checking whether the content matches your event.",
      readyTitle: "Ready to invite Jason?",
      readyDescription: "Use the contact page for the fastest direct route.",
      schedule: "Schedule",
      track: "Track",
      location: "Location",
      format: "Format",
      narrativeVersion: "Narrative version",
      narrativeVersionDescription: "This featured keynote is also available here as a native 20-section web narrative, extending the session into a long-form page that matches the rest of the site.",
      englishSessionsEyebrow: "English Research Sessions",
      englishSessionsTitle: "Conference paper activity",
      englishSessionsDescription: "Two English CISC 2025 paper sessions connecting technical analysis, operational threat models, continuous assessment, and practical defense strategy.",
      venue: "Venue",
      formatsTitle: "Formats and audience fit",
      formatsDescription: "These talks are especially well suited to research groups, technical conferences, interdisciplinary programs, and teams working on AI in environments where reliability and governance matter.",
      invitationBox: "If you are organizing a seminar, conference session, lab talk, or interdisciplinary event related to AI agents, trustworthy AI, speech intelligence, RAG systems, or high-stakes deployment, feel free to reach out with your format and audience in mind.",
      inviteJason: "Invite Jason to Speak"
    },
    linksPage: {
      basedIn: "Based in {location}",
      primaryPaths: "Primary paths",
      quickPathsTitle: "Quick paths by audience",
      quickPathsDescription: "This page is meant to shorten the first routing decision. If you already know why you are here, these are the fastest paths into the right part of the site.",
      selectedWorkTitle: "Selected work",
      selectedWorkDescription: "A small set of representative entry points across projects, writing, and talks.",
      profilesTitle: "Profiles and credentials",
      profilesDescription: "External destinations that add institutional context, code visibility, or speaker credentials.",
      openContactPage: "Open contact page",
      lastUpdatedLabel: "Last updated {date}"
    },
    notFoundPage: {
      title: "Page not found",
      description: "The page you were looking for is not available.",
      body: "The page you were looking for is not available. The quickest recovery is to jump back to one of the main sections below.",
      backHome: "Back home",
      viewProjects: "View projects"
    }
  },
  "zh-tw": {
    common: {
      contact: "聯絡",
      projects: "專案",
      research: "研究",
      writing: "文章",
      talks: "演講",
      about: "關於我",
      links: "連結",
      resume: "履歷",
      close: "關閉",
      menu: "選單",
      skipToContent: "跳到內容",
      emailJason: "寄信給 Jason",
      labWebsite: "實驗室網站",
      speakerProfile: "CYBERSEC 講者頁",
      officialSessionPage: "官方場次頁面",
      officialSessionPageShort: "官方場次頁",
      language: "語言",
      languageSwitcherAria: "語言切換",
      readArticle: "閱讀文章",
      openCaseStudy: "查看案例研究",
      backToWriting: "回到文章列表",
      backToProjects: "回到全部專案",
      continueFromThisPiece: "從這篇延伸閱讀",
      projectSnapshot: "專案摘要",
      bestNextSteps: "建議下一步",
      seeResearch: "查看研究",
      discussThisWork: "討論這項工作",
      previousProject: "上一個專案",
      nextProject: "下一個專案",
      browse: "瀏覽",
      allProjects: "全部專案",
      needContext: "需要更多背景？",
      contactJason: "聯絡 Jason",
      onThisPage: "本頁導覽",
      previousPiece: "上一篇",
      nextPiece: "下一篇",
      untranslatedLabel: "翻譯狀態",
      untranslatedTitle: "目前僅提供英文原文",
      untranslatedBlog: "這篇文章目前僅提供英文版本。導覽與周邊介面會依你選擇的語言顯示。",
      untranslatedProject: "這個案例研究目前僅提供英文版本。導覽與周邊介面會依你選擇的語言顯示。",
      untranslatedTalk: "這篇長篇網頁講稿目前僅提供英文版本。導覽與周邊介面會依你選擇的語言顯示。",
      untranslatedResearch: "這個研究方向頁面目前僅提供英文版本。導覽與周邊介面會依你選擇的語言顯示。",
      currentRole: "目前角色",
      institution: "機構",
      researchLab: "研究室",
      primaryLens: "主要觀點",
      currentAreasOfWork: "目前工作領域",
      professionalPath: "經歷脈絡",
      professionalNarrative: "專業背景",
      currentSpeakingAndPaperActivity: "近期演講與論文",
      selectedSignals: "代表實績",
      methodsAndToolkit: "方法 / 技術工具",
      workTogether: "歡迎交流的主題",
      email: "電子郵件",
      connect: "外部連結",
      explore: "站內導覽",
      lastUpdated: "最後更新"
    },
    navbar: {
      desktopTagline: "值得信賴的 AI、語音智能與安全。"
    },
    footer: {
      description: "這是一個偏研究導向的個人網站，聚焦於值得信賴的 AI、語音智能、資安，以及在重視證據與可靠性的場景中，系統如何真正落地。",
      contactCta: "聯絡 Jason",
      aboutCta: "關於我",
      researchLab: "研究室",
      githubDescription: "程式碼、原型與實作工作。",
      linkedInDescription: "專業背景與外部脈絡。",
      copyrightLabel: "版權",
      rightsReserved: "保留所有權利。",
      versionControl: "版本控管",
      repositoryLabel: "原始碼",
      versionLabel: "版本",
      branchLabel: "分支",
      commitLabel: "提交"
    },
    home: {
      heroPills: ["博士生", "講者", "值得信賴的 AI"],
      meetJason: "認識 Jason",
      heroInstitutionSummary: "NYCU · AI 系統、語音智能、資安與受規範部署",
      heroSummary: "以調查經驗為底的研究與實作，專注於打造在證據、可審查性與營運限制都重要時，仍能可靠運作的 AI 系統。",
      heroContact: "聯絡 Jason",
      startHere: "從這裡開始",
      choosePath: "選擇最符合你來訪目的的入口。",
      whatYouWillFind: "這裡有什麼",
      signalMesh: "訊號圖譜",
      staticFallback: "靜態模式",
      reducedMotion: "降低動態",
      visualPreviewDisabled: "視覺預覽已停用",
      visualPreviewCopy: "為尊重降低動態偏好，互動式網路視覺化已停用。",
      aboutJason: "關於 Jason",
      backgroundEssay: "背景文章",
      helpfulFirstMessage: "第一封訊息建議包含",
      helpfulFirstMessageCopy: "說明你的背景、這次交流為什麼適合，以及你期待的下一步。",
      openContactPage: "前往聯絡頁",
      researchBase: "所屬研究室",
      speakingSignal: "公開演講",
      publicationActivity: "論文發表",
      readWebKeynote: "閱讀網頁版講稿",
      writingInProgress: "文章持續整理中",
      writingInProgressCopy: "新的文章、研究筆記與技術觀點會隨著工作持續累積而陸續加入。"
    },
    aboutPage: {
      description: "這一頁整理作品網站背後的專業脈絡，包括博士研究主軸、調查經驗帶來的視角，以及我如何看待面向真實世界的 AI 系統。",
      title: "研究者、系統實作者，也是帶著安全視角工作的實踐者。",
      actionResearch: "研究焦點",
      actionProjects: "精選專案",
      actionWriting: "文章",
      actionTalks: "演講",
      actionContact: "聯絡",
      currentRoleValue: "博士生",
      primaryLensValue: "值得信賴的 AI、安全與實際部署條件",
      currentSpeakingActivityLinks: {
        official: "查看官方場次頁面",
        profile: "查看 CYBERSEC 講者頁"
      }
    },
    researchPage: {
      activeNowTitle: "目前在做什麼？",
      activeNowDescription: "目前工作與下一步。",
      depthTitle: "哪些內容能看出研究深度？",
      depthDescription: "近期會議論文與研究主題。",
      implementationTitle: "想看實作證據？",
      implementationDescription: "從研究主軸延伸到案例研究。",
      collaborationTitle: "考慮合作？",
      collaborationDescription: "最快方式是直接使用聯絡頁。",
      activeWorkTitle: "目前工作與研究方向",
      activeWorkDescription: "持續中的工作被整理成少數幾條可延續的研究方向，而不是彼此斷裂的一長串實驗。",
      currentNextStep: "目前下一步：",
      recentPapersTitle: "近期會議論文",
      recentPapersDescription: "近期英文會議論文把研究主軸連到實際部署、威脅建模與可衡量的防禦策略。",
      questionsTitle: "我在意的問題",
      workingStyleTitle: "工作方式",
      workingStyleParagraphOne: "我通常把 AI 視為完整的系統問題，而不是單一模型問題。這代表資料品質、檢索、評估、安全假設、失效分析與人工審查都必須一起被思考。",
      workingStyleParagraphTwo: "整個作品網站背後的共同主線其實很簡單：打造不只能力強，而且可檢視、有據可循，並對真實部署條件保持誠實的系統。",
      labWebsite: "研究實驗室網站",
      futureDirectionsTitle: "未來方向",
      collaborationBox: "適合的合作通常來自研究團隊、跨領域實驗室，或想把好點子落成可檢視系統、可評估原型、或會議案例研究的技術團隊。",
      selectedProjects: "精選專案",
      collaborate: "合作交流"
    },
    researchDirectionPage: {
      backToResearch: "返回研究總覽",
      directionEyebrow: "研究方向",
      currentThesisTitle: "目前核心觀點",
      yearViewTitle: "2026 觀察",
      humanFactorsTitle: "人因設計視角",
      whyNowTitle: "為什麼現在值得做",
      prioritiesTitle: "目前優先方向",
      principlesTitle: "系統設計原則",
      humanFactorsSectionTitle: "人因與審查流程",
      evaluationTitle: "評估議程",
      questionsTitle: "持續追問的問題",
      signalsTitle: "正在形塑這個方向的訊號",
      focusTagsTitle: "關注標籤",
      openDirection: "深入這個方向",
      allDirections: "查看全部研究方向",
      discussDirection: "討論這個方向",
      browseProjects: "瀏覽專案",
      previousDirection: "上一個方向",
      nextDirection: "下一個方向"
    },
    contactPage: {
      title: "從一封清楚的信開始對話。",
      directRouteTitle: "最快的聯絡方式",
      directRouteDescription: "如果是合作、演講邀請、招募交流或技術細節問題，寄電子郵件會是最快也最直接的方式。",
      helpfulContext: "建議附上的背景資訊",
      profileEyebrow: "簡介",
      profileSummary: "目前於 {institution} 的 {lab} 就讀博士班，研究橫跨值得信賴的 AI、醫療資安、語音智能與真實部署，近期也在 CISC 2025 以英文發表關於勒索軟體防禦與零信任成熟度 Threat Pulse Modeling 的論文。",
      collaborationCardTitle: "合作與技術交流",
      collaborationCardDescription: "最適合用來討論合作、演講邀請、研究交流與技術細節。",
      sendEmail: "寄電子郵件",
      currentWorkCardLabel: "目前工作",
      currentWorkCardTitle: "Jason 現在正在做的事",
      viewResearch: "查看研究",
      signalsLabel: "代表實績",
      signalsTitle: "公開實績與外部參考",
      signalsDescription: "在 {institutionShort} 進行博士研究、受邀於 {event} 官方場次演講，以及 {count} 篇 CISC 2025 英文會議論文。",
      reviewTalks: "查看演講主題"
    },
    resumePage: {
      description: "這是一頁式履歷摘要，整理 Jason Chia-Sheng Lin 目前角色、核心優勢、經歷、代表作品與公開研究訊號，方便招募與合作時快速審閱。",
      title: "面向研究、AI 系統與安全導向技術工作的專業摘要。",
      intro: "{name} 是 {institution} 的博士生，研究串連值得信賴的 AI、語音智能、資安，以及可部署的系統設計。這一頁是為希望快速掌握整體輪廓的招募經理、技術主管、合作夥伴與主辦方而設計。",
      selectedProjects: "精選專案",
      professionalStrengths: [
        {
          title: "扎根研究的系統思維",
          description: "不把 AI 工作視為孤立的模型問題，而是同時考慮模型、流程、執行環境與營運限制。"
        },
        {
          title: "具安全意識的技術判斷",
          description: "把威脅建模、隱私、外洩風險與部署現實帶進系統設計，特別是失敗代價很高的環境。"
        },
        {
          title: "面向混合受眾的清楚表達",
          description: "把技術工作整理成演講、案例研究與結構化文章，讓招募方、研究者與技術合作夥伴能快速檢視。"
        }
      ],
      teamSignals: [
        "跨越博士研究、系統實作與調查經驗思維的跨領域背景。",
        "能在研究、工程協作與跨職能技術對話中自在切換。",
        "公開工作包含 CYBERSEC 2026 官方場次與兩篇 CISC 2025 英文會議論文。"
      ],
      metrics: [
        { label: "目前角色", value: "NYCU 博士生" },
        { label: "所屬研究室", value: "{lab}" },
        { label: "主要主題", value: "值得信賴的 AI、語音智能與資安" },
        { label: "近期公開訊號", value: "1 個官方場次 + {count} 篇英文會議論文" }
      ],
      professionalSummary: "專業摘要",
      summaryParagraphTwo: "在進入博士研究之前，Jason 曾從事網路犯罪偵查。這段背景持續影響他如何理解證據、對抗性行為、可追溯性，以及單一模型看起來不錯和系統在真實世界中仍然可信之間的差距。",
      summaryParagraphThree: "目前工作橫跨語音與語言流程、值得信賴的 AI 評估、醫療 AI 資安，以及在重視可審查性與營運限制環境中的部署導向 AI 系統設計。",
      whatBrings: "Jason 能為團隊帶來什麼",
      experience: "專業經歷",
      currentWork: "目前工作領域",
      selectedWorkEyebrow: "代表作品",
      selectedWorkTitle: "能呈現系統思維落地能力的代表性專案。",
      selectedWorkDescription: "這些案例研究展示 Jason 如何定義問題、建構系統，以及用可被技術與跨功能讀者檢視的方式說明技術選擇。",
      browseAllProjects: "瀏覽全部專案",
      speakingSignals: "演講與發表訊號",
      talksPage: "演講頁",
      speakerProfile: "講者頁",
      writingCommunication: "寫作與技術溝通",
      professionalSignals: "公開實績",
      methodsAndToolkit: "方法與技術工具",
      openToConversations: "歡迎以下類型的交流",
      openToConversationsDescription: "最適合的合作通常來自關心值得信賴的 AI、語音與語言系統、部署敏感工作流程或具資安視角系統設計的團隊、實驗室與主辦方。",
      contactCardDescription: "對於招募對話、研究合作、演講邀請與技術細節交流，寄電子郵件是最好的方式。",
      contactPage: "聯絡頁"
    },
    blogIndexPage: {
      description: "這些文章與研究筆記把工作背後的思路攤開，包括證據導向的語音流程、部署風險、評估，以及值得信賴的 AI 的實務觀點。",
      title: "關於值得信賴的 AI、語音智能與安全導向系統設計的文章。",
      featuredTitle: "先從精選文章開始",
      featuredDescription: "快速掌握這些工作背後的語氣與關注點。",
      recentTitle: "瀏覽近期筆記",
      recentDescription: "依主題、日期與標籤快速掃描內容。",
      implementationTitle: "想看實作案例？",
      implementationDescription: "從思路直接跳到專案案例研究。",
      featuredPiece: "精選文章",
      recentWriting: "近期文章",
      emptyState: "更多文章整理中。"
    },
    projectsPage: {
      description: "這一頁強調有意識整理過的案例研究，而不是單純的程式碼儲存庫清單。每個專案都圍繞問題、系統設計、關鍵技術選擇，以及它在實務中為何重要來呈現。",
      title: "由研究驅動的值得信賴 AI、語音智能與安全導向系統案例研究。",
      filterTitle: "依主題篩選",
      filterDescription: "用這些篩選器快速跳到語音、AI 系統、詐欺分析或安全相關案例。",
      showingSummary: "顯示 {count} / {total} 個專案",
      showingSummaryWithFilter: "顯示 {count} / {total} 個專案，篩選：{filter}",
      filters: ["全部", "語音", "AI 系統", "詐欺分析", "安全"],
      broaderContextTitle: "需要更完整的背景？",
      broaderContextDescription: "如果某個案例研究對你有幫助，下一步通常是對照研究主軸、讀一篇文章，或直接開始對話。"
    },
    talksPage: {
      reviewTitle: "先看重點場次",
      reviewDescription: "適合需要快速確認具體講題範例的主辦方。",
      browseTitle: "瀏覽主題與適合的受眾",
      browseDescription: "當你在判斷內容是否符合活動需求時會很實用。",
      readyTitle: "想邀請 Jason 演講？",
      readyDescription: "最快的方式是使用聯絡頁。",
      schedule: "時間",
      track: "主題軌",
      location: "地點",
      format: "形式",
      narrativeVersion: "敘事版本",
      narrativeVersionDescription: "這場重點講題也提供 20 個章節的網頁敘事版，延伸成與整體網站一致的長篇網頁講稿。",
      englishSessionsEyebrow: "英文研究場次",
      englishSessionsTitle: "會議論文活動",
      englishSessionsDescription: "兩場 CISC 2025 英文論文場次，把技術分析、營運威脅模型、持續性評估與實務防禦策略串接起來。",
      venue: "場地",
      formatsTitle: "形式與受眾契合度",
      formatsDescription: "這些演講特別適合研究團隊、技術型會議、跨領域課程，以及在 AI 部署中重視可靠性與治理的團隊。",
      invitationBox: "如果你正在籌辦與值得信賴的 AI、語音智能、RAG 系統或高風險部署相關的研討會、會議場次、實驗室演講或跨領域活動，歡迎帶著活動形式與受眾來討論。",
      inviteJason: "邀請 Jason 演講"
    },
    linksPage: {
      basedIn: "目前位於 {location}",
      primaryPaths: "主要入口",
      quickPathsTitle: "依受眾快速前往",
      quickPathsDescription: "這頁的目的是縮短第一次判斷要往哪裡走的時間。如果你已經知道自己為何而來，這些是最快進到對應內容的入口。",
      selectedWorkTitle: "精選內容",
      selectedWorkDescription: "從專案、文章與演講中挑出少量代表性入口。",
      profilesTitle: "外部資料與連結",
      profilesDescription: "提供機構背景、程式碼可見度與講者經歷的外部連結。",
      openContactPage: "前往聯絡頁",
      lastUpdatedLabel: "最後更新 {date}"
    },
    notFoundPage: {
      title: "找不到頁面",
      description: "你要找的頁面目前無法使用。",
      body: "你要找的頁面目前無法使用。最快的方式是回到下方其中一個主要區塊。",
      backHome: "回首頁",
      viewProjects: "查看專案"
    }
  },
  ja: {
    common: {
      contact: "お問い合わせ",
      projects: "プロジェクト",
      research: "研究",
      writing: "文章",
      talks: "講演",
      about: "プロフィール",
      links: "リンク",
      resume: "経歴",
      close: "閉じる",
      menu: "メニュー",
      skipToContent: "本文へ移動",
      emailJason: "Jason にメール",
      labWebsite: "研究室サイト",
      speakerProfile: "CYBERSEC スピーカープロフィール",
      officialSessionPage: "公式セッションページ",
      officialSessionPageShort: "公式ページ",
      language: "言語",
      languageSwitcherAria: "言語切り替え",
      readArticle: "記事を読む",
      openCaseStudy: "ケーススタディを見る",
      backToWriting: "文章一覧に戻る",
      backToProjects: "プロジェクト一覧に戻る",
      continueFromThisPiece: "この記事から続けて読む",
      projectSnapshot: "プロジェクト概要",
      bestNextSteps: "次に見るなら",
      seeResearch: "研究を見る",
      discussThisWork: "この取り組みについて話す",
      previousProject: "前のプロジェクト",
      nextProject: "次のプロジェクト",
      browse: "閲覧",
      allProjects: "すべてのプロジェクト",
      needContext: "背景から見たい方へ",
      contactJason: "Jason に連絡",
      onThisPage: "このページ内",
      previousPiece: "前の記事",
      nextPiece: "次の記事",
      untranslatedLabel: "翻訳状況",
      untranslatedTitle: "本文は英語のみです",
      untranslatedBlog: "この記事は現在英語版のみです。共通ナビゲーションと周辺 UI は、選択した言語のままご覧いただけます。",
      untranslatedProject: "このケーススタディは現在英語版のみです。共通ナビゲーションと周辺 UI は、選択した言語のままご覧いただけます。",
      untranslatedTalk: "この長編の Web 講演ページは現在英語版のみです。共通ナビゲーションと周辺 UI は、選択した言語のままご覧いただけます。",
      untranslatedResearch: "この研究方向ページは現在英語版のみです。共通ナビゲーションと周辺 UI は、選択した言語のままご覧いただけます。",
      currentRole: "現在の役割",
      institution: "所属機関",
      researchLab: "研究室",
      primaryLens: "主な視点",
      currentAreasOfWork: "現在の取り組み",
      professionalPath: "これまでの歩み",
      professionalNarrative: "背景と文脈",
      currentSpeakingAndPaperActivity: "最近の登壇・論文",
      selectedSignals: "主な実績",
      methodsAndToolkit: "方法 / 技術スタック",
      workTogether: "ご相談いただけるテーマ",
      email: "メール",
      connect: "外部リンク",
      explore: "サイト内案内",
      lastUpdated: "最終更新"
    },
    navbar: {
      desktopTagline: "信頼できるAI、音声インテリジェンス、セキュリティ。"
    },
    footer: {
      description: "証拠性と信頼性が重要な現場を前提に、信頼できるAI、音声インテリジェンス、サイバーセキュリティ、実運用導入を扱う研究ポートフォリオです。",
      contactCta: "Jason に連絡する",
      aboutCta: "プロフィール",
      researchLab: "研究室",
      githubDescription: "コード、プロトタイプ、実装の記録。",
      linkedInDescription: "職務プロフィールと外部での文脈。",
      copyrightLabel: "著作権",
      rightsReserved: "All rights reserved.",
      versionControl: "バージョン管理",
      repositoryLabel: "リポジトリ",
      versionLabel: "バージョン",
      branchLabel: "ブランチ",
      commitLabel: "コミット"
    },
    home: {
      heroPills: ["博士課程", "登壇", "信頼できるAI"],
      meetJason: "Jason について",
      heroInstitutionSummary: "NYCU | AIシステム、音声インテリジェンス、サイバーセキュリティ、規制環境での導入",
      heroSummary: "調査経験に根ざし、証拠性、レビュー可能性、運用制約が重要な場面でも機能するAIシステムの研究と実装に取り組んでいます。",
      heroContact: "お問い合わせ",
      startHere: "ここから始める",
      choosePath: "訪問目的に合う導線を選んでください。",
      whatYouWillFind: "このサイトにあるもの",
      signalMesh: "シグナルマップ",
      staticFallback: "静的表示",
      reducedMotion: "モーションを抑える",
      visualPreviewDisabled: "ビジュアルプレビューは無効です",
      visualPreviewCopy: "モーション低減設定を尊重し、インタラクティブなネットワーク表示を停止しています。",
      aboutJason: "Jason について",
      backgroundEssay: "背景エッセイ",
      helpfulFirstMessage: "最初のメッセージにあると助かること",
      helpfulFirstMessageCopy: "あなたの背景、今回の対話がなぜ合うのか、どんな次の一歩が有用かを共有してください。",
      openContactPage: "お問い合わせページを開く",
      researchBase: "所属研究室",
      speakingSignal: "登壇実績",
      publicationActivity: "論文発表",
      readWebKeynote: "Web版講演記録を読む",
      writingInProgress: "文章は順次追加中",
      writingInProgressCopy: "エッセイ、研究ノート、技術的な視点は今後も継続して追加していきます。"
    },
    aboutPage: {
      description: "このページでは、ポートフォリオの背景にある専門的な文脈、博士研究の軸、調査経験から来る視点、そして実世界向けAIシステムへの向き合い方を紹介します。",
      title: "研究者であり、システムをつくる人であり、セキュリティの視点を持つ実践者。",
      actionResearch: "研究を見る",
      actionProjects: "代表プロジェクト",
      actionWriting: "文章",
      actionTalks: "講演",
      actionContact: "お問い合わせ",
      currentRoleValue: "博士課程",
      primaryLensValue: "信頼できるAI、セキュリティ、実運用の前提",
      currentSpeakingActivityLinks: {
        official: "公式セッションページを見る",
        profile: "CYBERSEC スピーカープロフィールを見る"
      }
    },
    researchPage: {
      activeNowTitle: "今何に取り組んでいるか？",
      activeNowDescription: "現在の取り組みと次のステップ。",
      depthTitle: "研究の厚みを示すものは？",
      depthDescription: "最近の会議論文とテーマ。",
      implementationTitle: "実装の証拠を見たいですか？",
      implementationDescription: "研究テーマからケーススタディへ進めます。",
      collaborationTitle: "共同研究を考えていますか？",
      collaborationDescription: "最短ルートはお問い合わせページです。",
      activeWorkTitle: "現在の取り組みと方向性",
      activeWorkDescription: "進行中の取り組みは、ばらばらな実験の羅列ではなく、継続性のある少数の研究方向として整理されています。",
      currentNextStep: "現在の次の一歩:",
      recentPapersTitle: "最近の会議論文",
      recentPapersDescription: "最近の英語会議論文は、研究テーマを実導入、脅威モデリング、測定可能な防御戦略へ接続しています。",
      questionsTitle: "私が重視する問い",
      workingStyleTitle: "取り組み方",
      workingStyleParagraphOne: "私はAIを単一モデルの問題ではなく、システム全体の問題として捉える傾向があります。データ品質、検索、評価、セキュリティ前提、失敗分析、人間レビューを一体の設計課題として扱います。",
      workingStyleParagraphTwo: "このポートフォリオ全体を貫く考え方はシンプルです。能力が高いだけでなく、検証可能で、証拠志向で、実際の導入条件に正直なシステムをつくることです。",
      labWebsite: "研究室サイト",
      futureDirectionsTitle: "今後の方向性",
      collaborationBox: "相性が良い共同研究には、強いアイデアを検証可能なシステム、評価可能なプロトタイプ、あるいは会議向けケーススタディへ発展させたい研究グループ、学際ラボ、技術チームが含まれます。",
      selectedProjects: "代表プロジェクト",
      collaborate: "共同研究を相談する"
    },
    researchDirectionPage: {
      backToResearch: "研究概要へ戻る",
      directionEyebrow: "研究方向",
      currentThesisTitle: "現在の中心仮説",
      yearViewTitle: "2026年の見立て",
      humanFactorsTitle: "人間中心設計の視点",
      whyNowTitle: "なぜ今重要か",
      prioritiesTitle: "現在の優先事項",
      principlesTitle: "システム設計の原則",
      humanFactorsSectionTitle: "人間要因とレビュー設計",
      evaluationTitle: "評価アジェンダ",
      questionsTitle: "継続している問い",
      signalsTitle: "この方向を形づくるシグナル",
      focusTagsTitle: "焦点タグ",
      openDirection: "この方向を見る",
      allDirections: "すべての研究方向",
      discussDirection: "この方向を相談する",
      browseProjects: "プロジェクトを見る",
      previousDirection: "前の方向",
      nextDirection: "次の方向"
    },
    contactPage: {
      title: "まずはメールでご連絡ください。",
      directRouteTitle: "いちばん確実な方法",
      directRouteDescription: "共同研究、講演依頼、採用相談、技術的に具体的な質問は、メールでのご連絡がいちばん確実です。",
      helpfulContext: "含めていただけると助かる情報",
      profileEyebrow: "プロフィール",
      profileSummary: "{institution} の {lab} に所属する博士課程研究者として、信頼できるAI、医療サイバーセキュリティ、音声インテリジェンス、実運用導入に取り組んでいます。最近は CISC 2025 で、ランサムウェア防御とゼロトラスト成熟度の Threat Pulse Modeling に関する英語論文を発表しました。",
      collaborationCardTitle: "共同研究と技術対話",
      collaborationCardDescription: "共同研究、講演依頼、研究相談、技術的な問い合わせに最適な導線です。",
      sendEmail: "メールを送る",
      currentWorkCardLabel: "現在の取り組み",
      currentWorkCardTitle: "今取り組んでいること",
      viewResearch: "研究を見る",
      signalsLabel: "実績",
      signalsTitle: "公開実績と外部リンク",
      signalsDescription: "{institutionShort} での博士研究、{event} の公式セッション、そして CISC 2025 の英語会議論文 {count} 本。",
      reviewTalks: "講演テーマを見る"
    },
    resumePage: {
      description: "採用や共同研究の確認向けに、Jason Chia-Sheng Lin の現在の役割、強み、経験、代表作、公開実績を簡潔にまとめた経歴ページです。",
      title: "研究、AIシステム、セキュリティ志向の技術活動に関する経歴概要。",
      intro: "{name} は {institution} の博士課程研究者で、信頼できるAI、音声インテリジェンス、サイバーセキュリティ、実装可能なシステム設計をつなぐ研究と実装に取り組んでいます。このページは、採用担当者、技術リーダー、共同研究者、主催者が短時間で全体像をつかむための要約です。",
      selectedProjects: "代表プロジェクト",
      professionalStrengths: [
        {
          title: "研究に根ざしたシステム思考",
          description: "AI を孤立したモデリング課題としてではなく、モデル、パイプライン、実行前提、運用制約をまたぐ問題として捉えます。"
        },
        {
          title: "セキュリティを意識した技術判断",
          description: "失敗コストが大きい環境に向けて、脅威モデリング、プライバシー、漏えいリスク、導入の現実を設計へ組み込みます。"
        },
        {
          title: "多様な読者への明快な伝達",
          description: "技術的な取り組みを講演、ケーススタディ、構造化された文章へ変換し、採用担当者、研究者、技術協業相手が素早く確認できるようにします。"
        }
      ],
      teamSignals: [
        "博士研究、システム実装、調査経験に根ざした思考を横断する学際的なプロフィール。",
        "研究、実装寄りの開発、横断的な技術対話に柔軟に対応できます。",
        "公開活動には CYBERSEC 2026 の公式セッションと CISC 2025 の英語会議論文 2 本が含まれます。"
      ],
      metrics: [
        { label: "現在の役割", value: "NYCU 博士課程" },
        { label: "拠点", value: "{lab}" },
        { label: "主なテーマ", value: "信頼できるAI、音声インテリジェンス、サイバーセキュリティ" },
        { label: "最近の公開実績", value: "公式セッション 1 件 + 英語会議論文 {count} 本" }
      ],
      professionalSummary: "職務概要",
      summaryParagraphTwo: "博士研究の前にはサイバー犯罪捜査に従事していました。その経験は、証拠、敵対的行動、追跡可能性、そして単体では良く見えるモデルと現実で信頼できるシステムの差を考える上で、今も影響しています。",
      summaryParagraphThree: "現在の取り組みは、音声・言語パイプライン、信頼できるAIの評価、医療AIサイバーセキュリティ、そしてレビュー可能性と運用制約が重要な環境に向けた導入志向のAIシステム設計にまたがります。",
      whatBrings: "チームに持ち込めるもの",
      experience: "職務経験",
      currentWork: "現在の取り組み",
      selectedWorkEyebrow: "代表作",
      selectedWorkTitle: "応用的なシステム思考を示す代表プロジェクトです。",
      selectedWorkDescription: "これらのケーススタディは、Jason が課題をどう定義し、システムを構築し、技術判断を技術読者にも横断的な読者にも検証可能な形で説明するかを示します。",
      browseAllProjects: "すべてのプロジェクト",
      speakingSignals: "講演と発表の実績",
      talksPage: "講演ページ",
      speakerProfile: "スピーカープロフィール",
      writingCommunication: "文章と技術コミュニケーション",
      professionalSignals: "公開実績",
      methodsAndToolkit: "方法と技術スタック",
      openToConversations: "歓迎しているご相談",
      openToConversationsDescription: "信頼できるAI、音声と言語システム、導入に敏感なワークフロー、あるいはセキュリティ志向のシステム設計に近いチーム、ラボ、主催者との対話に特に適合します。",
      contactCardDescription: "採用相談、共同研究、講演依頼、技術的な議論にはメールが最適です。",
      contactPage: "お問い合わせページ"
    },
    blogIndexPage: {
      description: "証拠志向の音声パイプライン、導入リスク、評価、信頼できるAIの実践まで、取り組みの背後にある考え方を見える形にした文章と研究ノートです。",
      title: "信頼できるAI、音声インテリジェンス、セキュリティ志向のシステム設計についての文章です。",
      featuredTitle: "まずは注目の記事から",
      featuredDescription: "この取り組みの語り口と問題意識を素早くつかめます。",
      recentTitle: "最近のノートを見る",
      recentDescription: "カテゴリ、日付、タグからすばやく把握できます。",
      implementationTitle: "実装例を見たいですか？",
      implementationDescription: "考え方からプロジェクトのケーススタディへ進めます。",
      featuredPiece: "注目の記事",
      recentWriting: "最近の文章",
      emptyState: "今後さらに文章を追加予定です。"
    },
    projectsPage: {
      description: "このページはリポジトリ一覧ではなく、意図的に整理したケーススタディに焦点を当てています。各プロジェクトは課題、設計、重要な技術判断、実務上の意味から説明しています。",
      title: "研究主導の信頼できるAI、音声インテリジェンス、セキュリティ志向システムのケーススタディです。",
      filterTitle: "テーマで絞り込む",
      filterDescription: "音声、AIシステム、不正分析、セキュリティ関連のケーススタディへ直接移動できます。",
      showingSummary: "{total} 件中 {count} 件を表示",
      showingSummaryWithFilter: "{filter} で絞り込み: {total} 件中 {count} 件を表示",
      filters: ["すべて", "音声", "AIシステム", "不正分析", "セキュリティ"],
      broaderContextTitle: "より広い文脈が必要ですか？",
      broaderContextDescription: "ケーススタディが気になったら、次は研究テーマ、関連する文章、あるいは直接のご連絡を見ていただくのが自然です。"
    },
    talksPage: {
      reviewTitle: "注目セッションを見る",
      reviewDescription: "具体的な講演例をすぐ確認したい主催者向けです。",
      browseTitle: "テーマと対象読者を見る",
      browseDescription: "内容がイベントに合うかを確かめるときに便利です。",
      readyTitle: "Jason に登壇を依頼したい方へ",
      readyDescription: "最短ルートはお問い合わせページです。",
      schedule: "日程",
      track: "トラック",
      location: "場所",
      format: "形式",
      narrativeVersion: "ナラティブ版",
      narrativeVersionDescription: "この注目セッションには、サイト全体と同じトーンで読める 20 セクション構成の Web版ロングフォームもあります。",
      englishSessionsEyebrow: "英語研究セッション",
      englishSessionsTitle: "会議論文活動",
      englishSessionsDescription: "CISC 2025 の英語論文 2 件が、技術分析、運用上の脅威モデル、継続評価、実践的な防御戦略をつないでいます。",
      venue: "会場",
      formatsTitle: "形式と対象読者の適合",
      formatsDescription: "これらの講演は、研究グループ、技術会議、学際プログラム、そして信頼性とガバナンスが重要なAI導入環境に向き合うチームに特に適しています。",
      invitationBox: "信頼できるAI、音声インテリジェンス、RAGシステム、高リスク導入に関するセミナー、会議セッション、ラボトーク、学際イベントを企画している場合は、形式と聴衆を添えてぜひご連絡ください。",
      inviteJason: "Jason に講演を依頼する"
    },
    linksPage: {
      basedIn: "{location} を拠点に活動",
      primaryPaths: "主な入口",
      quickPathsTitle: "対象別のクイック導線",
      quickPathsDescription: "このページは最初の導線選びを短くするためのものです。目的が決まっているなら、ここから最短で必要な場所へ進めます。",
      selectedWorkTitle: "注目の内容",
      selectedWorkDescription: "プロジェクト、文章、講演から代表的な入口を少数選んでいます。",
      profilesTitle: "プロフィールと外部リンク",
      profilesDescription: "所属背景、コードの可視性、登壇実績を補う外部リンクです。",
      openContactPage: "お問い合わせページを開く",
      lastUpdatedLabel: "最終更新 {date}"
    },
    notFoundPage: {
      title: "ページが見つかりません",
      description: "お探しのページは現在利用できません。",
      body: "お探しのページは現在利用できません。下の主要セクションへ戻るのがもっとも早い回復手段です。",
      backHome: "ホームへ戻る",
      viewProjects: "プロジェクトを見る"
    }
  }
} as const;

const categoryLabels = {
  essay: {
    en: "Essay",
    "zh-tw": "文章",
    ja: "エッセイ"
  },
  "research-note": {
    en: "Research Note",
    "zh-tw": "研究筆記",
    ja: "研究ノート"
  },
  "AI Systems": {
    en: "AI Systems",
    "zh-tw": "AI 系統",
    ja: "AIシステム"
  },
  "Fraud Analysis": {
    en: "Fraud Analysis",
    "zh-tw": "詐欺分析",
    ja: "不正分析"
  },
  Cybersecurity: {
    en: "Cybersecurity",
    "zh-tw": "資安",
    ja: "サイバーセキュリティ"
  },
  Speech: {
    en: "Speech",
    "zh-tw": "語音",
    ja: "音声"
  },
  Security: {
    en: "Security",
    "zh-tw": "安全",
    ja: "セキュリティ"
  },
  All: {
    en: "All",
    "zh-tw": "全部",
    ja: "すべて"
  }
} as const;

function mergeContent<T>(base: T, overrides?: DeepPartial<T>): T {
  if (overrides === undefined) {
    return base;
  }

  if (Array.isArray(base) && Array.isArray(overrides)) {
    const firstBase = base[0];
    const firstOverride = overrides[0];
    const shouldMergeByIndex =
      Boolean(firstBase) &&
      Boolean(firstOverride) &&
      isPlainObject(firstBase) &&
      isPlainObject(firstOverride);

    if (shouldMergeByIndex) {
      return overrides.map((overrideItem, index) => {
        const baseItem = base[index];

        if (baseItem === undefined) {
          return overrideItem;
        }

        return mergeContent(baseItem, overrideItem as DeepPartial<typeof baseItem>);
      }) as T;
    }

    return overrides as T;
  }

  if (isPlainObject(base) && isPlainObject(overrides)) {
    const result = { ...(base as Record<string, unknown>) };

    Object.entries(overrides as Record<string, unknown>).forEach(([key, value]) => {
      const baseValue = result[key];
      result[key] =
        ((isPlainObject(value) && isPlainObject(baseValue)) || (Array.isArray(value) && Array.isArray(baseValue)))
          ? mergeContent(baseValue, value as DeepPartial<typeof baseValue>)
          : value;
    });

    return result as T;
  }

  return overrides as T;
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function withParams(template: string, params: Record<string, string | number>) {
  return Object.entries(params).reduce((value, [key, replacement]) => value.replaceAll(`{${key}}`, String(replacement)), template);
}

export function isLocale(value: string): value is SiteLocale {
  return locales.includes(value as SiteLocale);
}

export function getLocaleFromPathname(pathname: string): SiteLocale {
  const normalized = normalizePathname(pathname);
  const [firstSegment] = normalized.split("/").filter(Boolean);
  return firstSegment && isLocale(firstSegment) ? firstSegment : defaultLocale;
}

export function stripLocaleFromPathname(pathname: string) {
  const normalized = normalizePathname(pathname);
  const segments = normalized.split("/").filter(Boolean);

  if (segments.length === 0) {
    return "/";
  }

  if (!isLocale(segments[0])) {
    return normalized;
  }

  const withoutLocale = `/${segments.slice(1).join("/")}`;
  return normalizePathname(withoutLocale);
}

export function localizePath(pathname: string, locale: SiteLocale) {
  const basePath = stripLocaleFromPathname(pathname);

  if (locale === defaultLocale) {
    return basePath;
  }

  if (basePath === "/") {
    return `/${locale}/`;
  }

  return normalizePathname(`/${locale}${basePath}`);
}

export function getAlternateLocaleLinks(pathname: string) {
  const basePath = stripLocaleFromPathname(pathname);

  return locales.map((locale) => ({
    locale,
    href: localizePath(basePath, locale),
    hreflang: localeMeta[locale].hreflang,
    label: localeMeta[locale].label
  }));
}

export function getLocaleMeta(locale: SiteLocale) {
  return localeMeta[locale];
}

export function getLanguageOptions(pathname: string) {
  const basePath = stripLocaleFromPathname(pathname);

  return locales.map((locale) => ({
    locale,
    href: localizePath(basePath, locale),
    label: localeMeta[locale].label,
    shortLabel: localeMeta[locale].shortLabel
  }));
}

export function getLocalizedSite(locale: SiteLocale): typeof site {
  if (locale === defaultLocale) {
    return site;
  }

  return mergeContent(site as any, siteOverrides[locale as Exclude<SiteLocale, "en">] as any) as typeof site;
}

export function getLocalizedHome(locale: SiteLocale): typeof home {
  if (locale === defaultLocale) {
    return home;
  }

  return mergeContent(home as any, homeOverrides[locale as Exclude<SiteLocale, "en">] as any) as typeof home;
}

export function getLocalizedProfile(locale: SiteLocale): typeof profile {
  if (locale === defaultLocale) {
    return profile;
  }

  return mergeContent(profile as any, profileOverrides[locale as Exclude<SiteLocale, "en">] as any) as typeof profile;
}

export function getLocalizedResearch(locale: SiteLocale): typeof research {
  if (locale === defaultLocale) {
    return research;
  }

  return mergeContent(research as any, researchOverrides[locale as Exclude<SiteLocale, "en">] as any) as typeof research;
}

export function getLocalizedSpeaking(locale: SiteLocale): typeof speaking {
  if (locale === defaultLocale) {
    return speaking;
  }

  return mergeContent(speaking as any, speakingOverrides[locale as Exclude<SiteLocale, "en">] as any) as typeof speaking;
}

export function getLocalizedLinksPage(locale: SiteLocale): typeof linksPage {
  if (locale === defaultLocale) {
    return linksPage;
  }

  return mergeContent(linksPage as any, linksPageOverrides[locale as Exclude<SiteLocale, "en">] as any) as typeof linksPage;
}

export function getPageCopy(locale: SiteLocale): typeof pageCopy.en {
  return pageCopy[locale] as typeof pageCopy.en;
}

export function getLocalizedPageTitle(locale: SiteLocale, page?: string, section?: string) {
  const localizedSite = getLocalizedSite(locale);

  if (!page) {
    return localizedSite.defaultTitle;
  }

  return [page, section, localizedSite.name].filter(Boolean).join(" | ");
}

export function formatMessage(template: string, params: Record<string, string | number>) {
  return withParams(template, params);
}

export function translateLabel(value: string, locale: SiteLocale) {
  const translated = categoryLabels[value as keyof typeof categoryLabels];
  return translated ? translated[locale] : value;
}
