# CS Kairos Phase 0–3 實作與驗收

日期：2026-10-23。狀態：implemented、validated、published；獨立讀者接受與真實使用指標另行驗收。

## 所有權與採用決策

保護教材可信度、讀者注意力、審稿時間與現有服務可用性。主站 repo 擁有主網域與研究入口；`kairos-learning` 擁有公開課程、題庫、搜尋與本機錯題；CEH repo 保留個人閱讀與正式練習；Planning 只鏡像狀態、容量、證據與下一關。

[來源與明確實作要求](sources/2026-10-23-phase-0-3-blueprint.md)採納 Phase 0–3；[PR #1](https://github.com/JasonLn0711/JasonLn0711.github.io/pull/1)三份規範以 merge `f281d16` 保留歷史。兩項細化：

- 主站維持 Svelte 5＋SvelteKit 2＋adapter-static；新 learn 產生器使用相容版本並保留 `site/` 的 MATLAB 靜態樹。
- CEH 新課程採 `/courses/ceh/v13/` 與 `/en/courses/ceh/v13/`，更新先前未上線的無版號草案；M01 兩篇、M02–M20 各一個完整核心單元，另有 AI／ML 與網路基礎各一個完整雙語單元。這是首版核心概念系列，不宣稱涵蓋官方全部細項或保證考試通過。
- 每個公開問題有穩定 ID、所有選項解析、對應概念與來源；技術更新以題目 revision 防止舊錯題誤記。答案與信心值只留瀏覽器，支援刪除與儲存失敗的明確提示。
- 本人已授權本輪原創教材與網站發布；代理執行來源、雙語、技術與操作審閱，不把此程序標成 Jason 逐篇閱讀或獨立使用者研究。真人完成度與實際 CWV 仍需使用證據。

## Phase 0 盤點快照

| 表面 | 本輪起點 | 回復位置 |
| --- | --- | --- |
| 主站 | `4d0477a` 已驗證 GitHub Pages；PR #1 合併後 `f281d16` | Git 歷史及 Pages 成功版本 |
| learn | `69c24f8`，`site/` 六頁，MATLAB 三案與六份校驗下載 | 原 commit 的完整靜態樹；SHA256SUMS |
| Worker | 既有 `jasonln0711-github-io`；build `npm run build`，deploy `npx wrangler deploy`，root `/`；main Git 來源 | 變更前設定與最近成功 deployment（尚待核對） |
| DNS | 根網域／www 尚無網站記錄；learn 維持 proxied GitHub Pages CNAME | 本次只新增主站域名；五筆既有服務記錄保持原用途 |
| API／console／上回 | 各自既有服務與保護 | 本輪不更動其服務或權限 |

帳戶 ID、token、登入資料與私人完整畫面不進公開文件。設定盤點是配置證據，不等同所有服務的功能驗收。

## 驗收順序

1. 規範、PR 範本、CI、內容及秘密檢查；檢查既有路徑與下載基準。
2. 主站 Worker 明確上傳 `build/`，本機與預覽核對真正 404、HTTPS、網址與靜態資產；接域名後切 canonical，www 保留路徑及 query 轉址。
3. M01 兩篇完整雙語、五題以上原創 Q&A、一項可驗證安全練習；MATLAB 路徑與下載回歸。
4. 先 M02–M05，再完成 M06–M20、兩個新入門課程；Glossary、搜尋、錯題、鍵盤／手機／無 JS 閱讀與資料損壞復原測試。
5. 每站 PR → 技術檢查及預覽 → merge → 部署及公開 URL；回復演練保留實際結果。公開教材不改個人 M04 續讀位置或既有 240／25 分鐘容量。

## 驗證紀錄

以下依實際 Git、CI、瀏覽器與 HTTPS 檢查記錄各層結果。

[架構](cs-kairos-platform-architecture-v1.zh-tw.md) · [內容標準](ceh-course-content-standard-v1.zh-tw.md) · [發布標準](cs-kairos-publishing-security-standard-v1.zh-tw.md) · [先前網域計畫](cs-kairos-domain-plan.zh-tw.md)

### 主站靜態預覽驗證

2026-10-23（Asia/Taipei），保留 Svelte 5／SvelteKit 2；非破壞性相依更新將 Vite 更新至 8.3.5、source-map-js 至 1.2.2。`npm audit --audit-level=high` 通過，仍有三項由 Kit 2 的 cookie 相依衍生的 low advisories；本次不以升級 Kit 3 作為修補方式。公開輸出不含伺服器 cookie 處理程式。

14 tests、Svelte check（0 errors / 0 warnings）、static build 與 50 HTML release check 通過。Wrangler 4.152.0 的本機靜態預覽已確認 `/`、`/zh-tw/`、`/teaching/`、既有文章 HTTP 200；不存在路徑 HTTP 404，回應含 nosniff 與 frame-ancestors／form-action 限制。瀏覽器已讀取首頁。相容日期固定為已隨本機 runtime 提供的 `2026-10-19`，避免台北日期超過 UTC／runtime 支援日期；這不改變發布紀錄日期。

本節只建立本機與 PR 前驗證證據，Cloudflare 正式部署、網域及回復演練另記結果。


### 正式主網域與回復演練

[PR #2](https://github.com/JasonLn0711/JasonLn0711.github.io/pull/2)以 merge `18a4e56` 修復既有 Worker 的靜態發布；[PR #3](https://github.com/JasonLn0711/JasonLn0711.github.io/pull/3)以 merge `75f0ac3` 切換 canonical 並把兩個 Custom Domain 寫回 Wrangler。兩輪 PR 檢查與 Cloudflare branch preview 成功；瀏覽器預覽確認主標題與 `https://cs-kairos.com/` canonical。

- 正式主站：[cs-kairos.com](https://cs-kairos.com/)；[繁中首頁](https://cs-kairos.com/zh-tw/)。Cloudflare production version `14eceaf8` 對應 `75f0ac3`；[GitHub Pages run 39829282804](https://github.com/JasonLn0711/JasonLn0711.github.io/actions/runs/39829282804)亦成功，保留舊來源可讀。
- DNS 由五筆增至七筆，只新增 root／www 的 Worker Custom Domain；learn、api、console、shanghui、shanghui-staging 原記錄保留，Access 與 Tunnel 未修改。
- `CS Kairos www to canonical` Single Redirect 已啟用：條件 `(http.host eq "www.cs-kairos.com")`，目標 `concat("https://cs-kairos.com", http.request.uri.path)`，301、preserve query。HTTP 與 HTTPS 的 www 深層測試皆回應正確 Location；瀏覽器實際到達繁中頁並保留 query。
- curl 驗證 49 個 HTML 路徑、404、RSS、sitemap、robots 共 53 項通過。六個舊 `/writing/` 相容頁保留 HTTP 200，canonical 正確指到 `/blog/`。XML 可解析且採新網域；主站回應包含 nosniff、frame-ancestors、form-action、referrer 與 permissions 限制。
- Python urllib 的部分探測曾回應 403；一般 curl 與 Brave 的同一公開內容驗證成功，沒有更動安全政策來通過檢查。
- 實際回復：`14eceaf8` → `1311a23d`（上一個已驗證靜態版本）。控制台確認 100% 流量，公開首頁呈現上一版 github.io canonical。隨後 Promote `14eceaf8` 回到 100%，再次讀回首頁與 cs-kairos canonical。演練未改 Git 歷史或其他服務。

### Phase 2–3 課程發布

[kairos-learning PR #1](https://github.com/JasonLn0711/kairos-learning/pull/1)以 merge `3cb0cfc` 發布；[Pages run 39829804755](https://github.com/JasonLn0711/kairos-learning/actions/runs/39829804755)成功。來源、教材、測試與完整回執由[教學站實作紀錄](https://github.com/JasonLn0711/kairos-learning/blob/main/docs/releases/2026-10-23-phase-0-3.md)持有。

| 交付 | 公開入口與證據 |
| --- | --- |
| M01 試點 | [概念地圖](https://learn.cs-kairos.com/courses/ceh/v13/m01/)、授權／CIA 兩篇完整雙語、六題原創問答與安全練習 |
| M02–M20 | [CEH v13](https://learn.cs-kairos.com/courses/ceh/v13/) 每章一個完整核心單元、原創 Q&A、具預期結果的安全練習 |
| 其他課程 | [AI／ML](https://learn.cs-kairos.com/courses/ai-ml/)、[網路基礎](https://learn.cs-kairos.com/courses/networking/)各一個完整雙語單元 |
| 可回查與複習 | [30 個詞彙](https://learn.cs-kairos.com/glossary/)、[搜尋](https://learn.cs-kairos.com/search/)、[本機錯題](https://learn.cs-kairos.com/review/) |
| MATLAB | [三案原址](https://learn.cs-kairos.com/courses/matlab-practice/)，所有原有檔案及六份 ZIP 保留 |

首版共 23 個雙語主題、54 題，產出 190 個 HTML。公開 189 個頁面與 404／sitemap／搜尋索引／robots 共 193 項檢查通過；M14 曾出現一次 503，針對該頁重測後回應 200。六份公開 ZIP 實際下載後與原檔 SHA-256 相同。

十個測試、內容驗證、Svelte check、實際草稿／未來日期排除、靜態連結／錨點／CSP 檢查通過。320px 長程式碼溢位經修正並實際重測；390px 鍵盤問答與錯題訂正、1280px 章節地圖、雙語切換及中英搜尋均已操作。最終本機 Lighthouse 行動版：首頁與 M01 文章的 Performance 98、Accessibility 100、Best Practices 100、SEO 100；這些是實驗室單次量測，不是現場 p75 或完整 WCAG 認證。

### 下一驗證層與範圍控制

工程實作與正式發布已完成；下一關由獨立讀者完成 M01 的閱讀、小檢核與安全練習，記下難懂段落與實際結果，再決定下一批內容深度。真人接受與 field Core Web Vitals 尚未評估，不以自動測試代填。JSON 結構與題庫單一來源的實作決議見[教學站架構](https://github.com/JasonLn0711/kairos-learning/blob/main/docs/platform-architecture.md)。

M01–M20 是核心概念首版，未宣稱官方所有細項已完整覆蓋；官方 v13 課程模組與 Exam Blueprint v5 分開查核。個人 M04 續讀、CEH／CEHP 240 分鐘／週與課日 25 分鐘維持原規則。會員、LMS 成績後端、AI 助教、群島與影片上傳未啟動。本機測試紀錄不算 Jason 學習成果。
