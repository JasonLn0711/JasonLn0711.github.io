# 2026-11-25｜CS Kairos 主站雙語索引與字型

讓第一次到站和回訪的讀者都能從首頁找到文章、研究與主題。Jason 指定維基百科的資訊分區、Anthropic 的編排質感、較細的繁中字重，以及 Kairos Learn 的英文排版參考。首頁和文章版型沿用 SvelteKit，精選封面是本版的編輯插圖。技術與取捨由主站持有。 [設計與驗證](../site-v3-editorial-index.zh-tw.md) · [部署手冊](../deployment-runbook.md)

## 分開提交與發布來源

- [b53a2c0](https://github.com/JasonLn0711/JasonLn0711.github.io/commit/b53a2c0) 匯入自託管字型、首頁繁中子集與授權。
- [ab4583d](https://github.com/JasonLn0711/JasonLn0711.github.io/commit/ab4583d) 實作雙語首頁索引、文章和全站字型。
- [af00179](https://github.com/JasonLn0711/JasonLn0711.github.io/commit/af00179) 保存設計、驗證和 Planning 入口。這一提交為兩個發布管道的來源。 [GitHub Pages](https://github.com/JasonLn0711/JasonLn0711.github.io/actions/runs/45442766928) · [Cloudflare Workers Builds](https://github.com/JasonLn0711/JasonLn0711.github.io/runs/138618740119)

## 建置與本機驗證

22 項測試、Svelte 檢查、62 個靜態路徑與內部連結均通過。npm 稽核回報 0 項漏洞。48 個可閱讀內容頁共用字型設定，本機 Chromium 驗證實際混排字形、鍵盤焦點、雙語錨點與停用 JavaScript 時的導覽。WebKit 核對 320–1440 CSS px 的雙語版面與局部 200% 字級。

## 正式站回讀

GitHub Pages 與 Cloudflare Workers Builds 均回報成功。初次探測曾取得前版資產，後續以原網址完整重測通過。兩站都核對了中英首頁索引、canonical、字重、文章目錄錨點和研究證據入口。字型、封面、RSS、sitemap 和 robots 的公開位元組與本機產物相符，未知網址回應 404。主網域 www 轉址回應 301 並保留路徑與查詢參數。 [正式主站](https://cs-kairos.com/zh-tw/) · [GitHub Pages](https://jasonln0711.github.io/zh-tw/)

主網域的 Chromium 測試也通過四個索引錨點的鍵盤定位、雙語與手機目錄、極窄選單、研究證據入口和停用 JavaScript 時的閱讀。繁中首頁和展開的手機文章目錄在所測 axe 規則均為 0 項違規。

## 後續證據

網站維護者收集真實讀者是否能找到文章與研究證據，以及實地載入資料。Planning 記錄狀態與容量，Kairos Learn 維護互動教材。 [11/25 日誌](https://github.com/JasonLn0711/planning-everything-track/blob/main/weeks/2026-W48/days/2026-11-25.md#kairos-editorial-index-2026-11-25) · [Kairos Learn 互動課](https://learn.cs-kairos.com/en/courses/networking/dns-tcp-tls-http/)
