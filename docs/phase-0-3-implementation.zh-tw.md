# CS Kairos Phase 0–3 實作與驗收

日期：2026-10-23。狀態：implementation in progress。

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

以後續實際命令、PR、部署 ID 與公開 URL 補記；目前不預填完成。

[架構](cs-kairos-platform-architecture-v1.zh-tw.md) · [內容標準](ceh-course-content-standard-v1.zh-tw.md) · [發布標準](cs-kairos-publishing-security-standard-v1.zh-tw.md) · [先前網域計畫](cs-kairos-domain-plan.zh-tw.md)

### 主站靜態預覽驗證

2026-10-23（Asia/Taipei），保留 Svelte 5／SvelteKit 2；非破壞性相依更新將 Vite 更新至 8.3.5、source-map-js 至 1.2.2。`npm audit --audit-level=high` 通過，仍有三項由 Kit 2 的 cookie 相依衍生的 low advisories；本次不以升級 Kit 3 作為修補方式。公開輸出不含伺服器 cookie 處理程式。

14 tests、Svelte check（0 errors / 0 warnings）、static build 與 50 HTML release check 通過。Wrangler 4.152.0 的本機靜態預覽已確認 `/`、`/zh-tw/`、`/teaching/`、既有文章 HTTP 200；不存在路徑 HTTP 404，回應含 nosniff 與 frame-ancestors／form-action 限制。瀏覽器已讀取首頁。相容日期固定為已隨本機 runtime 提供的 `2026-10-19`，避免台北日期超過 UTC／runtime 支援日期；這不改變發布紀錄日期。

本節只建立本機與 PR 前驗證證據，Cloudflare 正式部署、網域及回復演練另記結果。
