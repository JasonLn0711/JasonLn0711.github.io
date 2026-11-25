# 2026-11-25｜CS Kairos 主站極簡學者單欄與行距降噪

以 [Praxis 內頁精修版](2026-11-25-praxis-polish.md)（`f8215e3`）為基準，安裝並啟用 Google [Modern Web Guidance](https://developer.chrome.com/docs/css-ui) 與 `praxis-design-system`（`ui-styles/minimalism-and-swiss-style`），依 Jason 指定參考 [Dawn Song 首頁](https://dawnsong.io/) 的單欄學術極簡風格，移除首頁「主題索引」與多餘導覽框線，放寬全站正文與列表行距。

## 分開提交與涵蓋範圍

- 全站閱讀節奏與無干擾頁首：`src/lib/styles/tokens.css`、`src/app.css`、`src/lib/components/Nav.svelte`、`src/lib/components/Footer.svelte`（正文行距 `1.82`、長文 `.longform` 行距 `1.88` 搭配 `66ch` 與 `text-wrap: pretty`／`balance`，頂部導覽加入 `@container scroll-state` 下滑自動收合與 `:focus-within` 保護）。
- 首頁純單欄學者版（選項 A）：`src/lib/components/HomePage.svelte`、`src/lib/components/HomeArticle.svelte`、`src/lib/components/RecentWriting.svelte`（移除「主題索引」、「本頁目錄」橫條、首頁封面圖與雙欄卡片，改為 `48rem` 單欄學者自介＋三大乾淨條列區）。
- 全站列表降噪與單排無框篩選：`ArticleConnections.svelte`、`ArticleToc.svelte`、`EventNotes.svelte` 與 `/professional/`、`/blog/`、`/research/`、`/projects/`、`/teaching/`、`/talks/`、`/resume/`、`/now/`、`/professional/series/` 共 13 個檔案（取消常駐標題底線改為 hover/focus 顯現，`/professional/` 與 `/blog/` 篩選列改為單排無框分頁）。
- 設計與發布文件：`README.md`、`docs/site-v3-praxis-polish.zh-tw.md`、`docs/releases/2026-11-25-minimalist-scholar-home.md`。
- 續修｜首頁 2 寸大頭照比例與相框（`2045841`）：重新由 `public/images/headshot.jpg` 裁切 `7:9` 比例之 `public/images/headshot-{160,256,384}.webp`，並於 `src/lib/components/HomePage.svelte` 設定 `3px` 暖白內框與細邊框（桌機 `112×144`、手機 `88×113`）。
- 續修｜Project AURA 最新架構設計與設計巧思：`src/lib/content/site.ts` 與 `src/routes/projects/[slug]/+page.svelte`（更新首頁 `homeWork`、`/projects/` 與 `/projects/project-aura/` 詳頁，補齊 v1.18 單一背景共享 Session 服務、Append-only PCM 原音日誌與 `speech-guard-v1` 即時保護加驗證後 M4A 留存、GPU-Only Fail-Closed 語音辨識與顯式模型生命週期、獨立子行程預設開啟之 Nemotron 3 即時語者分離、10→20 秒自適應斷句與繁中標點／RapidFuzz 雙層非破壞式後處理、以及檔案系統真實來源搭配可重建唯讀 SQLite FTS5 索引等六大最新架構與「為什麼這樣設計的巧思」中英雙語說明；繁中首頁字型維持 `202.6 KB` 子集零額外下載）。

## 本機驗證

- `npm test`（22 項）、`npm run check`（0 錯誤／0 警告）、`npm run build`、`node scripts/check-release.mjs`（62 個 HTML 頁面與內部路徑）與 `git diff --check` 全部通過。
- Playwright 19 項行為／無 JS／`reduced-motion`／200% 縮放重排斷言全部通過；已檢視中英文桌機（`1440px`）與手機（`390px`）渲染截圖，繁中首頁字型維持 `202.6 KB`（`350`/`500` 字重），`/professional/` 五個篩選分頁齊平單行，整頁與手機皆 `0px` 水平溢出。

## 跨專案連結

- Planning 總控與日誌：[11/25 日誌](https://github.com/JasonLn0711/planning-everything-track/blob/main/weeks/2026-W48/days/2026-11-25.md#kairos-minimalist-home-2026-11-25) · [網站專案定位](https://github.com/JasonLn0711/planning-everything-track/blob/main/data/projects/2026-05-public-website-v3-clean-slate-rebuild.md#kairos-minimalist-home-2026-11-25)
- 本機技能整合：[Modern Web Guidance 與 Praxis 整合紀錄](https://github.com/JasonLn0711/planning-everything-track/blob/main/docs/14-local-integrations.md#agy-modern-web-guidance-2026-11-25)
