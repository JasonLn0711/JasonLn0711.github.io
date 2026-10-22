# Phase 0–3 授權與提供的藍圖

來源：2026-10-23 本次對話。下列保留本人提供的文字；「我已檢查／建立」是原文的敘事，實際狀態另由部署證據核對。

## 原始要求與藍圖

Please do from phase 0 to phase 3 entire implement.
# CS Kairos｜個人研究、技術教育與知識平台總體規劃

Architecture & Governance Blueprint v1.0｜2026-10-23

## 一、核心決策：建立一個可以持續十年以上的研究與教育平台

我建議將 CS Kairos 定位為：

個人研究與技術教育的統一入口（Research & Learning Platform），而不是只有個人履歷的 Portfolio，也不是單純發布文章的 Blog。

整體平台應同時服務三種目的：

1. 研究可信度：展示研究問題、方法、實驗證據、論文與開源成果。
2. 知識傳播：把資訊工程、AI、資安與 CEH 等內容，轉換成能循序學習、操作、測驗的教材。
3. 專業成果累積：把專案、技術文章、課程和實驗，逐漸累積成可驗證、可重複使用的作品。

最重要的架構決策：統一品牌、分離網站責任、共用設計與內容規範。 不必把每一種功能都塞進同一套應用程式，也不應為了整合而重寫已經運作的系統。

## 二、我檢查到的現有環境

我已透過目前連線瀏覽器的唯讀資訊，確認 Cloudflare DNS，以及 GitHub 既有網站專案。

目前 Cloudflare DNS 配置

待完善

| 網域                               | 目前狀態                                | 建議             |
| -------------------------------- | ----------------------------------- | -------------- |
| `cs-kairos.com`                  | 尚無網站 DNS 紀錄                         | 建立主要網站         |
| `www.cs-kairos.com`              | 尚無紀錄                                | 301 轉址至主網域     |
| `learn.cs-kairos.com`            | CNAME → `jasonln0711.github.io`，已代理 | 保留現有教材，規劃整合    |
| `api.cs-kairos.com`              | Cloudflare Tunnel                   | 保持獨立，禁止公開未授權服務 |
| `console.cs-kairos.com`          | Cloudflare Tunnel                   | 保留存取控制         |
| `shanghui.cs-kairos.com`         | Cloudflare Worker                   | 不納入本次變更        |
| `shanghui-staging.cs-kairos.com` | Cloudflare Worker                   | 不納入本次變更        |

另外，已確認：

- GitHub 儲存庫：[JasonLn0711/JasonLn0711.github.io](https://github.com/JasonLn0711/JasonLn0711.github.io?utm_source=chatgpt.com)。
- 現有網站採用 SvelteKit 5 + TypeScript + mdsvex + Static Adapter，適合繼續發展，不必重建技術堆疊。
- 現有網站設計規範為 `Living Research Atlas v3.0`，已經有設計 Token、元件和內容管理結構。
- `learn.cs-kairos.com` 已經有 MATLAB 練習教材，包括案例教學、程式說明、學習檢查、下載資源。因此 CEH 應是新增課程，不應覆蓋既有內容。
- Cloudflare 帳戶中亦可看見 `jasonln0711-github-io` Worker。它的實際部署設定仍需與既有 Codex 工作結果核對。

目前最直接的缺口是：主網域尚未承載個人首頁，而學習子網域已經有實際使用者與教材。

因此，本規劃採用「保留、擴充、驗證、切換」的遷移原則，而不是一次性替換。

## 三、目標資訊架構

CS Kairos｜整體平台

cs-kairos.com

個人網站 · 對外入口 · Research Portfolio

Research 研究

Projects 專案

Teaching 教學

Blog 文章

Now 最新動態

About / CV

learn.cs-kairos.com

Learning Platform · 課程 · Q&A · 實驗

CEH M01–M20

MATLAB 實作

AI / ML / RL

資工基礎

實作 Lab

題庫與錯題複習

獨立的部署權限與資安邊界

api / console.cs-kairos.com

GX10 AI 推論與管理服務，不與公開教材共用認證

這樣可以保有清楚的產品界線：主站回答「我在研究與建造什麼」，學習站回答「使用者可以在這裡學會什麼」。

## 四、CEH 課程設計：從文章升級為可驗證的學習系統

建議每個模組由「概念文章、知識問答、動手實驗、章末整合評量」構成，而不只是把課本內容整理為長篇文章。

單一概念的學習流程

01｜理解問題

這個概念能解決什麼問題？為何需要學？

02｜定義與運作機制

概念圖、技術原理、系統角色與資料流。

03｜真實情境與安全實驗

在授權環境重現現象，觀察輸出與證據。

04｜Q&A 與錯題解析

理解題、情境題、決策題，以及各選項的理由。

05｜成果驗證

能否自行解釋、辨別反例、完成小型任務？

### 實際示範：M04 Enumeration 的 Q&A 互動

這是未來課程頁面可以採用的題目型態。

CEH · M04

概念理解測驗

一台主機的 TCP 445 Port 顯示 open。這個結果能否直接證明已列舉出 SMB 共用資料夾？

A. 可以，445 開啟就代表已取得共用清單

B. 不可以，尚須確認服務與實際回應

C. 可以，代表目前使用者已有管理員權限

D. 不可以，因為 SMB 一律無法進行列舉

提交答案重新作答

正式課程應把這些題目儲存成結構化資料，而不是將題目、答案、解析全部寫死在 UI 元件裡。這樣才能建立錯題集、跨章複習、版本管理及自動檢查。

## 五、工程與安全規範

| 領域     | 強制規則                                   | 驗收方法                       |
| ------ | -------------------------------------- | -------------------------- |
| 程式碼    | TypeScript、元件重用，不平行建立相同資料來源            | Typecheck、Test、Build       |
| 發布     | Git PR → Review → Preview → Production | 留下 commit、部署與 URL          |
| 內容     | 原創、標示來源、審核日期與適用版本                      | Content schema、人工審核        |
| CEH 題庫 | 每題須有解析，不得使用外洩正式考題                      | 題庫 Review、答案測試             |
| 安全     | 實驗限自有或授權環境；秘密不進 repo                   | Secret scan、Lab Review     |
| UI/UX  | 行動優先、鍵盤支援、文字與程式碼可閱讀                    | WCAG 2.2 AA 檢查             |
| 效能     | 靜態優先，降低不必要的 JS                         | Lighthouse、Core Web Vitals |
| 維運     | 必須能回復上一個成功版本                           | Rollback 演練                |

CEH 教材需要另外區分「官方考試範圍」與「我們自行設計的教學範圍」。二十個 M01–M20 模組先作為 v13 課程結構參照；正式發布前仍必須按 [EC-Council 官方 CEH 資訊](https://www.eccouncil.org/train-certify/certified-ethical-hacker-ceh/?utm_source=chatgpt.com)及目前適用的考試藍圖驗證版本、名稱和考試要求。

## 六、分階段實施

Phase 0｜完成盤點與規範

確認 GitHub、Workers、DNS、目前學習站部署來源；建立規範與 PR Review 流程。

產出：Architecture、Content Standard、Security Standard。

Phase 1｜正式啟用主網域

使用既有 SvelteKit 網站，將 `cs-kairos.com` 設定為主網址，確認 HTTPS、`www` 轉址、SEO 與所有既有路徑。

成功條件：對外網址可用、內容不遺失、可回滾。

Phase 2｜CEH M01 教學試點

建立課程首頁、M01 概念地圖、兩篇完整教材、互動 Q&A 以及一項安全練習。

成功條件：讀者可獨立完成內容與理解測驗，MATLAB 教材不受影響。

Phase 3｜擴充 M02–M20 與其他課程

優先製作 M02–M05，再按驗收結果逐步擴充；同時建立 Glossary、搜尋與錯題複習。

成功條件：跨章內容一致、易於搜尋、持續更新且不用重複造輪子。

## 七、已建立 GitHub 規劃文件

我已在你現有的 GitHub 儲存庫建立獨立分支，完成三份規範文件，並開啟 Draft Pull Request。

CS Kairos Governance v1.0

Draft PR

3 files · 3 commits · 365 lines added

[查看 GitHub Pull Request #1](https://github.com/JasonLn0711/JasonLn0711.github.io/pull/1?utm_source=chatgpt.com)

[平台架構與遷移藍圖](https://github.com/JasonLn0711/JasonLn0711.github.io/blob/docs/cs-kairos-governance-v1/docs/cs-kairos-platform-architecture-v1.zh-tw.md?utm_source=chatgpt.com)

網域、Cloudflare、架構決策、遷移、回滾、驗收。

[CEH 課程內容與 Q&A 規範](https://github.com/JasonLn0711/JasonLn0711.github.io/blob/docs/cs-kairos-governance-v1/docs/ceh-course-content-standard-v1.zh-tw.md?utm_source=chatgpt.com)

20 模組草案、課程路徑、教材格式、題庫、Lab 安全準則。

[發布、資安與維運規範](https://github.com/JasonLn0711/JasonLn0711.github.io/blob/docs/cs-kairos-governance-v1/docs/cs-kairos-publishing-security-standard-v1.zh-tw.md?utm_source=chatgpt.com)

內容審核、CI、資安權限、品質門檻、事故處理。

目前完成的是規劃與規範草案，不是網站正式部署。 我沒有修改 Cloudflare DNS、現有 Workers、Access 政策或 `main` 分支，也沒有改動正在執行中的 Codex 任務。

## 本次範圍確認

問題：Phase 3 的「其他課程」首波，我預計保留完整 MATLAB 教材，並新增「AI／ML 基礎」與「資工網路基礎」各一個完整雙語入門單元；CEH 則涵蓋 M01–M20。這個範圍是否符合你的期待？

> 依此範圍實作（建議）

## 採用與驗證

本次要求啟動 Phase 0–3 的實作及正式網站發布；接續已授權的分開提交、保留雙方歷史與 main 發布。PR #1 的規範已讀取並以 merge 保留原三筆提交。技術更正：實際為 Svelte 5＋SvelteKit 2。公開教學屬原創教育材料，不是 Jason 的學習作答／理解證據。部署、技術審閱與真人學習效果各自驗收，執行結果見[實作紀錄](../phase-0-3-implementation.zh-tw.md)。
