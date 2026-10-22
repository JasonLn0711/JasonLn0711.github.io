# CEH 教材與互動學習內容規格 v1.0

> 採用更新：2026-10-23，依本人完整 Phase 0–3 實作與發布要求採用。以下提案時點的盤點保留沿革；現行狀態、細化決議與驗收以 [實作回執](phase-0-3-implementation.zh-tw.md)及 [learn 內容規範](https://github.com/JasonLn0711/kairos-learning/blob/main/docs/content-authoring.md)為準。本人授權、代理技術審閱與獨立讀者接受分別記錄。

> 已採用，2026-10-23。適用於 `learn.cs-kairos.com/courses/ceh/`。需與當期 EC-Council 官方課程/考試版本逐項核對。獨立原創教材，**非 EC-Council 官方、認可或授權課程**。

## 1. 產品承諾
一句話：**讓初學者看懂資安機制、在授權環境中操作、能解釋結果，而非背誦工具名稱。**

每篇文章應交付：一項清楚的學習成果、前置知識、概念機制、真實世界情境、可重現的安全小練習、經推理的 Q&A、延伸資料及限制。以技術正確與學習證據為主，不以文章字數、長度或發布數量為 KPI。

## 2. 課程地圖、版本與優先序
內容已採 `/courses/ceh/v13/` 上線；每次版本更新仍須核對官方**當前版次、官方 module 名稱及 blueprint**，不得把 v13 的學習模組等同所有版本考試比重。若當期版次不同，新增 `vXX`，不默默修改已發布的舊版 URL。

以下為 **CEH v13 常見的二十模組主題地圖（編排草案，逐字名稱以官方為準）**：
| 編號 | 主題 | 預備核心概念 |
| --- | --- | --- |
| M01 | Introduction to Ethical Hacking | CIA、風險、法律授權與範圍 |
| M02 | Footprinting and Reconnaissance | OSINT、主動/被動、資料來源可信度 |
| M03 | Scanning Networks | TCP/IP、連接埠、掃描狀態及驗證 |
| M04 | Enumeration | 身分/資源發現、SMB、DNS、SNMP、LDAP |
| M05 | Vulnerability Analysis | 資產、弱點、CVE/CVSS、驗證、風險優先序 |
| M06 | System Hacking | 身分與權限、憑證、持續性與證據 |
| M07 | Malware Threats | 病毒、蠕蟲、木馬、行為與偵測 |
| M08 | Sniffing | L2/L3、封包擷取、加密限制 |
| M09 | Social Engineering | 誘導機制、辨識、組織應對 |
| M10 | Denial-of-Service | 可用性、流量與容量、緩解 |
| M11 | Session Hijacking | Cookie、Session、TLS、防禦 |
| M12 | Evading IDS, Firewalls, and Honeypots | 偵測/阻擋/誘捕系統原理 |
| M13 | Hacking Web Servers | HTTP、伺服器部署與權限 |
| M14 | Hacking Web Applications | Web 漏洞分類、存取控制 |
| M15 | SQL Injection | 參數化查詢、輸入與資料庫邊界 |
| M16 | Hacking Wireless Networks | 802.11、WPA、訊號與威脅 |
| M17 | Hacking Mobile Platforms | Android/iOS 權限、封裝、API |
| M18 | IoT and OT Hacking | 裝置生命週期、OT 安全與安全隔離 |
| M19 | Cloud Computing | IAM、責任共擔、雲端日誌 |
| M20 | Cryptography | 對稱/非對稱、雜湊、PKI、TLS |

**學習順序**：先完成 M01 安全/網路/權限先備，再依官方 M01–M20 導航。提供學習圖譜作為替代導覽：基礎 → 偵查 → 驗證/身分 → 應用/雲端 → 防禦/鑑識。不要把建議先後順序宣稱為官方考試權重。

**開發優先序**：先 M01 試點（課程頁＋2 篇概念＋5 題 Q&A＋一個安全 lab），與讀者驗證效果；再 M02–M05；通過品質門檻後進入 M06–M20。

## 3. 課程導覽結構
```text
/courses/ceh/                       入口及版本說明
/courses/ceh/v13/                   版次與模組地圖
/courses/ceh/v13/m01/               模組導讀、必學地圖、前置測驗
/courses/ceh/v13/m01/cia-triad/     一篇可獨立引用的概念
/courses/ceh/v13/m01/quiz/          章末情境式 Q&A
/courses/ceh/v13/m01/labs/          受控練習及驗證
/courses/ceh/v13/glossary/          術語與跨模組參照
```
Slug 永不因改標題而改動。每頁都有麵包屑、上/下節、預估時間、先備知識、最後審核日、適用版本、作者與參考文獻。禁止未發布的頁面出現在 sitemap、搜尋和「下一節」連結。

## 4. 單篇教學契約

依序呈現：
1. **讀完能做什麼**：可觀察、可測量的學習結果，非「了解」。
2. **為何重要**：實務上的資安決策或常見誤解。
3. **一張概念圖**：系統邊界、資料流及角色；圖片要有替代文字。
4. **定義 → 機制 → 例子**：教完第一層再深入重要節點。
5. **合法小練習**：所有輸入、預期輸出、環境、停止與清理方式；不得把真實第三方當標的。
6. **Q&A**：題幹、選項、正確答案、各選項解析、概念來源、錯誤診斷。
7. **失敗模式與防禦**：常見誤判及偵測/修補。
8. **延伸與版本史**：官方 primary source、可信獨立資料、實驗紀錄；補丁更新日。

## 5. 文章 frontmatter（提案 schema）

```yaml
---
id: ceh-v13-m01-cia-triad
course: ceh
courseVersion: v13
module: m01
slug: cia-triad
title: CIA 三元組：機密性、完整性、可用性
description: 使用三種情境區分 CIA 並選擇保護策略
language: zh-Hant
status: draft
difficulty: beginner
minutes: 20
prerequisites: []
learningObjectives:
  - 分類 3 個真實情境的 CIA 風險並解釋理由
outcomeEvidence:
  - quiz
  - guided-lab
reviewedOn: null
sources:
  - title: NIST CSRC Glossary
    url: https://csrc.nist.gov/glossary
    accessedOn: 2026-10-23
licensing: CC-BY-4.0
safety: benign
---
```
此 schema 為新 CEH 課程提案，**不得自行套用在主站既有 Blog schema**。上線前寫 validator 檢查 `id` 唯一、slug 不變、來源 URL、日期合法性、章節版次、相依連結、測驗答案合理性、下載檔 checksum 與 draft 隔離。不可隨意宣稱整站適用 CC 授權；圖片/影片/外來程式各自標示實際授權。

## 6. 題庫資料契約與體驗
- 每篇至少 3–5 題、章末至少 8–12 題，數量是教學**建議**而不是硬性發布阻擋；題目必須對應 learning objective。
- 每個主題至少包含：辨識/理解（記憶）；應用（情境）；評估（合理決策）。避免只測工具旗標。
- 題目有穩定 ID、概念標籤、難度、作者、來源、自創狀態、最近審核日。
- **先答後揭曉**：使用者選項與信心值，提交後回饋正解與每個干擾選項的理由；支援重試、錯題集。不可因刷新直接顯示正解。
- v1 成績/進度只存於瀏覽器的 localStorage（明示可清除和僅儲存在本機），不收集姓名、電郵、學習事件到後台。
- 章末整合題需含偵測/界定/修補的情境，避免仿製正式考題；**禁止收集或上傳考試題庫、braindump 和機密考題**。
- 無 JavaScript 時仍應能閱讀全文、開啟練習與參考資料；交互題顯示友善降級。

示例題（原創）：
> 一家公司有正確設置帳號存取權，但員工仍無法在服務中斷時讀取工作資料。最直接受損的是哪個 CIA 目標？
> A. 機密性；B. 完整性；C. 可用性；D. 不可否認性。

正解 C；課程中需說明為何 A/B/D 不合題幹，並討論單一事件可能同時造成多種損害的例外。

## 7. Lab 安全準則
- 應用**僅自有/明確授權的本機環境**，以靶機、合成資料、Docker 練習網路（無外網或限制 egress）為優先。
- 任何掃描、列舉、流量生成、PoC 都需要 scope、隔離、速率和停止條件；公開示例使用 loopback / 文檔保留 IP，例如 `192.0.2.0/24`（只作說明，不當作實際練習標的）。
- 不發布可用於未經授權入侵的惡意軟體打包、憑證竊取、隱匿或持續控制指示；偵測與防禦案例用去武器化日誌/PCAP。
- 不下載或散播真實受害者資料、未授權滲透成果、第三方憑證或敏感實驗資料。
- Lab 必須有環境檢查、操作、預期結果、常見故障、復原清理和可驗證證據。

## 8. 官方性、授權與引述
- 「CEH」是 EC-Council 的認證/商標。網站每個課程入口須明顯註記：**Independent study materials; not affiliated with, endorsed by, or an official EC-Council exam provider.**
- 公開內容由作者自行撰寫，不搬運官方完整教材、題庫、教學影片或圖片。引用遵循合理範圍與著作權限制，圖片要有授權。
- 官方網址：<https://www.eccouncil.org/train-certify/certified-ethical-hacker-ceh/>；正式考試範圍需從實際官方 blueprint 下載、保存審核時間並建成追蹤表。
- CEH 理論課程模組、考試 blueprint、CEH Practical 是不同概念：網頁需要分別說明，不能宣稱「通過本課程等於考試通過」。

## 9. 發布驗收
- 技術審查：定義準確、機制可解釋、版本與引用可追、未誇大漏洞影響。
- 學習審查：初學者可從最小例子開始，提供正反例，每個目標至少有一種可評估的證據。
- 安全審查：lab 無外部未授權標的、不含機密與惡意下載、示例輸入經過校對。
- 體驗審查：手機 320px 可用、鍵盤可操作、程式碼可複製、有語意結構及影片字幕/逐字稿（若有）。
- 工程審查：content schema、dead links、quiz IDs、unit/test、build、preview、真正公開網址與回滾版本。

## 10. 教材與影片互相引用
影片、文章、Q&A、實驗資料共享穩定概念 ID `ceh-v13-m03-tcp-port-states`。影片是補充而非取代可檢索文章；文章需包含獨立完整的文字解說、圖表和參考資料。影音速度/靜音等製片約定由獨立影音流程管理，不將片源自動視為已核實教材。
