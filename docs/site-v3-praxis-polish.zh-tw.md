# 個人主站｜Praxis Design System 內頁排版、觸控目標與無 JS 互動精修

延續[雙語索引與字型版](site-v3-editorial-index.zh-tw.md)建立的暖白紙色（`#f9f6ee`）、深墨（`#221d19`）、陶土連結（`#8b412d`）與雙語可變字型基礎，透過已安裝於 Antigravity（`agy`）的 [Praxis Design System](https://github.com/JasonLn0711/praxis-design-system-skill) 進行全站 21 個代表路徑 × 4 種視窗寬度（`1440px`、`768px`、`390px`、`320px`）的實機稽核與一致化精修。

## 設計決策與修正項目

| 項目 | 稽核發現 | 本輪實作 |
| --- | --- | --- |
| 內頁標題比例與縮放 | 多數內頁 `h1` 採純 `vw` 算式（`clamp(2.6rem, 8vw, 4.8rem)`，桌機達 `76.8px–89.6px`），縮放時與首頁主視覺競爭且易造成不均換行 | 新增共用尺度 Token（`--page-title-size`、`--page-title-zh-size`、`--section-title-size`、`--page-pad-block`），收斂內頁 `h1` 至 `53.6px`（英）／`48.8px`（繁中），符合 WCAG 1.4.4 200% 縮放重排 |
| 手機觸控目標（`>= 44px`） | 手機版 390px 稽核共檢出 13 處小於 `44px` 的連結與篩選按鈕（返回導覽、文章篩選列、系列閱讀、履歷聯絡與作品清單） | 將 `.back-nav a`、篩選按鈕、系列閱讀連結、`/resume/` 聯絡與作品清單、`/teaching/` 課日列及 `/event-notes/` 搜尋欄統一拉高至 `>= 44px` 可點擊區域 |
| 聯絡頁繁中化與無 JS 展開 | `/zh-tw/contact/` 主標題孤字斷行、右側 `IntentAccordion` 仍為英文且依賴 Svelte 4 `on:click`；兩語頁面在手機有過大頂部留白 | 新增 `contactIntentsZh`，改用原生 `<details>`/`<summary>` 手風琴（支援無 JS、鍵盤與頁內搜尋），修正網格間距與移除 `min-height: 100dvh; padding-top: 8rem` 留白 |
| 教學講義語言作用域與程式碼字體 | 教學日講義外層鎖定 `lang="zh-Hant"` 蓋掉英文標題 `650` 字重；`code`/`pre` 繼承比例字體且行內程式碼採 `--danger` 警示紅；缺少課日間前後導覽 | 為英文標題區補回 `lang="en"` 作用域（保留繁中正文 `350`/目錄 `500`），新增 `--font-mono` 與 `.day-pager` 前後課導覽，行內程式碼改採 `--accent-strong` |
| 瀏覽器細節與單複數狀態 | 缺少 `::selection`、`accent-color`、`caret-color`、列印隱藏導覽；`/event-notes/` 顯示 `1 notes`；研究證據邊界缺少視覺區隔 | 於 `app.css` 統一設定選取色與 `@media print`；修正單複數顯示為 `1 note`；為 `/research/[slug]/` 證據邊界 `.evidence-scope` 加上 `--surface-strong` 與琥珀色左線 |

## 本機驗收

- **靜態與發布檢查**：`npm test`（22 項通過）、`npm run check`（0 錯誤／0 警告）、`npm run build` 與 `node scripts/check-release.mjs`（62 個靜態 HTML 路徑、內部連結與活動筆記規格全數通過）、`git diff --check` 通過。
- **跨尺寸 Chromium 實機稽核（21 路徑 × 4 寬度）**：0 項主控台或頁面錯誤、0 項失敗請求、0 張破圖、0 項標題跳階、0 項整頁水平捲動，手機版 `< 44px` 控制項由 13 處降至 **0 處**。
- **互動與無 JS 驗證（17 項行為斷言通過）**：包含繁中首頁字型子集（`202.6 KB`，保留 `noto-sans-tc-home.woff2` 與 `350`/`500` 字重）、語系切換保留 `#research-and-practice` 錨點、`/professional/` 類型篩選 `aria-pressed`、`/event-notes/` 搜尋與空結果狀態、`/zh-tw/contact/` 無 JS 原生展開手風琴、教學日無 JS 手機目錄與 Day 1 → Day 2 換課、`prefers-reduced-motion: reduce`（`1e-06s`）、手機選單 `Escape` 焦點還原至 `summary`，以及 `390px` 視窗 200% 根字級無水平溢出（`0px`）。

發布回執與跨 repo 定位見 [11/25 Praxis 精修發布紀錄](releases/2026-11-25-praxis-polish.md)。

## 續修｜極簡學者單欄與行距降噪（選項 A）

依 Jason 指定以簡約美學與 [Dawn Song 首頁](https://dawnsong.io/) 為參考，並結合 Google `modern-web-guidance`（`content-first-noise-reduction`、`improve-text-layout-and-legibility`）進行減法重整：

- **首頁單欄化與移除「主題索引」**：收斂首頁為 `48rem` 單欄學者流，移除「主題索引」、「本頁目錄」橫條、首頁大標語與封面圖，上方改為頭像、`Jason Chia-Sheng Lin`、陽明交大研究身分與快速連結，下方接精選專業文章、近期專業文章與研究及實作三組條列。
- **全站視覺降噪與行距放寬**：全站正文行距調為 `1.82`、長文 `.longform` 調為 `1.88`（`66ch` 欄寬），取消列表標題與目錄常駐底線（hover/focus 顯現），`/professional/` 與 `/blog/` 篩選列改為單排無框底線分頁，頂欄加入 `@container scroll-state` 下滑自動收合。
- **首頁 2 寸大頭照比例與 Project AURA 最新架構／設計巧思**：首頁頭像改為 `7:9` 兩寸證件照取景與 `3px` 暖白內框；`/projects/project-aura/` 與首頁代表作品更新至 Project AURA v1.18 最新共享 Session 架構，並新增「最新系統架構設計（Latest architecture）」與「為什麼這樣設計的巧思（Design rationale）」六大第一性原理設計決策與證據邊界。
- **驗收紀錄**：見 [11/25 極簡學者單欄發布紀錄](releases/2026-11-25-minimalist-scholar-home.md)。
