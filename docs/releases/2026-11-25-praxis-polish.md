# 2026-11-25｜CS Kairos 主站 Praxis Design System 內頁精修與無障礙強化

以 [11/25 雙語索引與字型版](2026-11-25-editorial-index.md)（`e48d910`）為基準，使用 [Praxis Design System](https://github.com/JasonLn0711/praxis-design-system-skill) 完成全站 21 個代表路徑的排版尺度、觸控目標、繁中聯絡頁與無 JS 互動一致性精修。 [設計決策與細項](../site-v3-praxis-polish.zh-tw.md)

## 分開提交與涵蓋範圍

- 共用 Token 與瀏覽器表面細節：`src/lib/styles/tokens.css`、`src/app.css`、`src/lib/components/Nav.svelte`、`HomeArticle.svelte`、`HomePage.svelte`。
- 聯絡頁繁中化與原生 `<details>` 手風琴：`src/lib/content/site.ts`、`src/lib/components/IntentAccordion.svelte`、`src/routes/contact/+page.svelte`、`src/routes/zh-tw/contact/+page.svelte`。
- 內頁標題尺度、44px 觸控目標、等寬程式碼字體與教學日前後課導覽：文章、系列、研究、專案、教學、講座、活動筆記、履歷、近況、關於與錯誤頁共 20 個元件／路由檔案。
- 設計與發布文件：`README.md`、`docs/site-v3-praxis-polish.zh-tw.md`、`docs/releases/2026-11-25-praxis-polish.md`。

## 本機驗證

- `npm test`（22 項）、`npm run check`（0 錯誤／0 警告）、`npm run build`、`node scripts/check-release.mjs`（62 個 HTML 頁面與內部路徑）與 `git diff --check` 全部通過。
- Chromium 實機走查 21 路徑 × 4 寬度（`1440`、`768`、`390`、`320px`）與 17 項互動／無 JS／`reduced-motion`／200% 縮放重排斷言全部通過；手機 `< 44px` 控制項由 13 處降至 0 處。
- 公開網址部署回讀待推送至 `origin/main` 後由 GitHub Pages / Cloudflare Workers 建置確認。

## 跨專案連結

- Planning 總控與日誌：[11/25 日誌](https://github.com/JasonLn0711/planning-everything-track/blob/main/weeks/2026-W48/days/2026-11-25.md#kairos-praxis-polish-2026-11-25) · [網站專案定位](https://github.com/JasonLn0711/planning-everything-track/blob/main/data/projects/2026-05-public-website-v3-clean-slate-rebuild.md#kairos-praxis-polish-2026-11-25)
- 設計技能正本：[Praxis Design System Skill](https://github.com/JasonLn0711/praxis-design-system-skill) · [Praxis 專案定位](https://github.com/JasonLn0711/planning-everything-track/blob/main/data/projects/2026-11-praxis-design-system.md)
