# 個人主站索引與閱讀版

把首頁變成能直接查找的研究入口。第一次到站的讀者可從精選文章開始，回訪讀者可從近期文章、研究與實作、主題索引快速進入內容。長文則沿著既有章節目錄定位。

## 參考與設計

以 Computer Use 在 Safari 走查繁中維基百科首頁與「人工智慧」條目，以及 Anthropic 首頁、研究索引和研究文章。另比對四張指定畫面。Refero Design 的本機排版與色彩指南用於整理閱讀層次、圖片角色和版面節奏。

| 參考 | 可觀察的設計 | 主站實作 |
| --- | --- | --- |
| 附件 1、繁中維基百科首頁 | 左右欄並列精選與動態，首頁有分類和主題入口 | 精選專業文章與近期專業文章並列，下方銜接研究與實作、主題索引。 [繁中維基百科首頁](https://zh.wikipedia.org/zh-tw/) |
| 維基百科「人工智慧」條目 | 目次在正文旁，章節標題是可定位的連結 | 首頁四個入口是原生錨點。長文桌機保留側邊章節目錄，手機用頁內展開。 [人工智慧條目](https://zh.wikipedia.org/zh-tw/人工智慧) |
| 附件 2、Anthropic 研究首頁 | 暖白底、寬留白、簡短的研究主題列與一篇視覺重心 | 用紙白底 `#f9f6ee`、深墨 `#221d19`、陶土連結 `#8b412d`，將人像縮成作者資訊，讓第一篇選文取得版面重心。 [Anthropic 研究](https://www.anthropic.com/research) |
| 附件 3、4、Anthropic 研究索引 | 文章日期、類型和摘要緊貼作品，圖片依文章重要性採用不同尺寸 | 首篇用紙張、索引針和放大鏡的生成示意封面，延伸文章沿用主站自有封面作小圖。暖白與淡紙色 `#f1ebe0` 將一般閱讀欄和近期欄分開。 [Anthropic 研究](https://www.anthropic.com/research) |
| Anthropic 研究文章 | 正文欄寬比頁面窄，作者資料與正文分開 | 主站以大標題、可辨識的文章摘要與日期開場，保留段落、註解、圖表與章節定位。 [Working with AI](https://www.anthropic.com/research/working-with-ai) |

首頁封面為本版生成的編輯插圖。原有文章封面、正文、引用和公開研究證據維持各自頁面的內容。手機依閱讀順序呈現四區。

全站文字以 Inter 排拉丁字元，以 Noto Sans TC 排繁體中文。繁中正文採 350 字重，標題採 500。英文參考 Kairos Learn 網路互動課，採 400 正文、650 標題與 1.8 長文行距。兩套可變字型隨網站自託管。繁中首頁的 253 個字元集中在同一個 Noto Sans TC 檔案，其他字元由完整字型的 Unicode 分片供應。 [Kairos Learn 互動課](https://learn.cs-kairos.com/en/courses/networking/dns-tcp-tls-http/) · [Inter](https://fontsource.org/fonts/inter/about) · [Noto Sans TC](https://fontsource.org/fonts/noto-sans-tc/about)

## 架構選擇

現版使用 SvelteKit 靜態產出。首頁索引直接連到既有文章、研究、作品、講座與教學，長文目錄使用現有 MDX 標題。繁中與英文首頁共用版型，文章網址與錨點依原有路徑使用。 [SvelteKit 靜態產出](https://svelte.dev/docs/kit/adapter-static)

若內容量成長到主題連結難以維護，可先將現有文章標籤與研究分類整理為共用詞彙，在同一個站試作主題頁，保留原文章路徑。驗收以首訪者是否能找到一篇入門文、回訪者是否能核對研究證據為準。

若閱讀頁實測顯示 JavaScript 傳輸或執行成本需要降低，可隔離試作一組雙語首頁和一篇含數學排版的代表文章。Astro islands 允許把需要互動的元件獨立載入。搬移前要比對文章內容、語言、章節錨點、canonical、RSS 和 sitemap，再用同樣的瀏覽器與網路設定比較 JavaScript、LCP、鍵盤操作及維護工時。 [Astro islands](https://docs.astro.build/en/concepts/islands/)

`rust-anything analyze` 將 Svelte 介面列為保留，較早的候選為建置腳本、RSS 與 sitemap。從這些候選選擇實際工作量、錄製輸入並比對輸出之前，維持現有實作。

## 本機驗收

22 項測試及 Svelte 檢查通過，靜態產出與連結檢查涵蓋 62 個 HTML 路徑。兩個首頁及 404 fallback 以外的 59 個頁面通過正文、導覽、語言及中繼資料比對。RSS、sitemap、robots、轉址和標頭檔的位元組一致。

48 個內容頁通過共用字型設定檢查。瀏覽器確認繁中正文與標題實際使用 350 與 500、英文正文與標題使用 400 與 650。繁中首頁的同條件字型傳輸由約 965 KB 降至 207 KB，瀏覽器模擬字型下載失敗時仍可閱讀與導覽。 [11/25 日誌](https://github.com/JasonLn0711/planning-everything-track/blob/main/weeks/2026-W48/days/2026-11-25.md#kairos-editorial-index-2026-11-25) · [網站專案](https://github.com/JasonLn0711/planning-everything-track/blob/main/data/projects/2026-05-public-website-v3-clean-slate-rebuild.md#kairos-editorial-index-2026-11-25)

WebKit 核對中英文首頁在 320、390、768、1024 和 1440px 的閱讀順序，並在 320、390、1440px 測試 200% 字級。修正後，放大時導覽能收合為選單。Chromium 核對四個首頁錨點的鍵盤焦點、切換語言保留錨點、研究證據入口，以及停用 JavaScript 的首頁和長文章節定位。繁中首頁與展開的手機文章目錄均通過所測 axe 規則。

在五種淺底上抽測，次要文字最低為 5.68:1，陶土連結最低為 5.85:1。首篇封面為 768 × 432 WebP，約 35 KB，已在雙語預覽解碼。
