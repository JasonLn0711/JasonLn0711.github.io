# 2026-11-24｜CS Kairos 個人主站閱讀與研究導覽

首頁提供精選文章和研究實作兩個入口。文章在窄螢幕提供可折疊目錄，雙語導覽保留對應頁與章節。研究摘要可直達公開證據。公開文案保留讀者判讀和採取行動所需的資訊，合成臨床案例仍說明人工複核和專業決策責任。 [設計與驗證](../site-reading-refinement.zh-tw.md) · [發布手冊](../deployment-runbook.md)

## 發布來源

- [發布來源 0dd47eb](https://github.com/JasonLn0711/JasonLn0711.github.io/commit/0dd47eb4f80f1a49393e0226e9275d436a07e88f) 與 [GitHub Pages 工作](https://github.com/JasonLn0711/JasonLn0711.github.io/actions/runs/45418067390)。
- 功能分為[雙語與手機閱讀](https://github.com/JasonLn0711/JasonLn0711.github.io/commit/89eb1f3)、[首頁入口](https://github.com/JasonLn0711/JasonLn0711.github.io/commit/22d1a5f)、[響應式人像](https://github.com/JasonLn0711/JasonLn0711.github.io/commit/0458159)與[讀者文案](https://github.com/JasonLn0711/JasonLn0711.github.io/commit/f34d943)。[SvelteKit 安全更新](https://github.com/JasonLn0711/JasonLn0711.github.io/commit/b16c986)獨立提交。

## 建置與瀏覽器驗證

- 22 項測試全數通過。Svelte 檢查 0 錯誤、0 警告。靜態發布檢查涵蓋 62 個 HTML 路徑相容性與內部連結。npm 稽核回報 0 項漏洞。
- SvelteKit 更新前後的 HTML 路徑相同。61 個預先產生頁面比對文字、導覽、語言及中繼資料。RSS、sitemap、robots、重新導向與標頭檔內容一致。
- 本機 Chromium 驗證雙語錨點、320 × 320 選單捲動與 Esc 焦點、手機目錄、研究證據與停用 JavaScript 時的閱讀。繁中首頁與展開的文章目錄在所測 axe 規則均為 0 項違規。

## 正式站回讀

- Cloudflare Workers Builds 的來源為 `0dd47eb`，建置 `75d796d6-b00a-4971-b850-42eadabcc9af` 於台北時間 22:48 完成。部署 `6c49e18c-525f-4b54-ac52-b209cc52ef93` 將 100% 流量指向 Worker 版本 `9d271a6c-5590-4c21-a107-146fd79ca8b8`。前版為來源 `90de6ba`、Worker 版本 `07a013ed-8f1d-42aa-8300-9dadbafbc28f`。 [Cloudflare 建置](https://github.com/JasonLn0711/JasonLn0711.github.io/runs/138530470588)
- 主網域與 GitHub Pages 各核對中英文首頁、深層文章、研究證據、合成案例與設計檔案入口。三張 WebP 與 RSS／sitemap 的回應內容和建置檔一致，未知路徑回應 404。主網域的 www 轉址保留路徑與查詢參數，舊文章網址導至現行路徑。 [主網域](https://cs-kairos.com/) · [GitHub Pages](https://jasonln0711.github.io/)
- 主網域的 Chromium 測試重跑通過，包含手機目錄、極窄視窗選單、雙語章節切換、公開文案與停用 JavaScript 的閱讀。部署後首次請求曾混入前版資產，原網址重測已通過。
- 讀者能否自行完成任務與實地效能，依後續實際使用證據判定。
