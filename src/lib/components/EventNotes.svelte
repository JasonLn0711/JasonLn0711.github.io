<script lang="ts">
  import { uniqueResources } from "$lib/content/event-note-links";
  import PageMeta from "$lib/components/PageMeta.svelte";
  import { site, eventNotes } from "$lib/content/site";
  let { zh = false, slug = "" } = $props<{zh?: boolean; slug?: string}>();
  let query = $state("");
  let base = $derived(zh ? "/zh-tw/event-notes/" : "/event-notes/");
  let heading = $derived(zh ? "演講與工作坊筆記" : "Talks & Workshops");
  let entry = $derived(eventNotes.find(note => note.slug === slug));
  let copy = $derived(entry?.[zh ? "zh" : "en"]);
  let filtered = $derived([...eventNotes].sort((a,b) => b.date.localeCompare(a.date)).filter(note => JSON.stringify(note).toLowerCase().includes(query.trim().toLowerCase())));

  let resources = $derived(copy && entry ? uniqueResources([
    { source: "https://web-animation-course.vercel.app/", sourceLabel: zh ? "工作坊簡報" : "Workshop slides" },
    { source: "https://hackmd.io/@zz41354899/H14KjaJ9Ml", sourceLabel: zh ? "工作坊共筆" : "Shared workshop notes" },
    { source: "https://mografy-website.vercel.app/zh-TW", sourceLabel: "Mografy" },
    { source: "https://p5js.org/reference/p5/setup/", sourceLabel: "p5.js: setup()" },
    { source: "https://github.com/mrdoob/three.js", sourceLabel: "Three.js" },
    { source: "https://gsap.com/", sourceLabel: "GSAP" },
    { source: "https://hera.video/", sourceLabel: "Hera" },
    { source: "https://www.youtube.com/channel/UCPOmpoL4tsc9ZLtCotluXYg", sourceLabel: "Motion UX \u00b7 YouTube" },
    { source: "https://hyperframes.heygen.com/introduction", sourceLabel: "HyperFrames" },
    { source: "https://help.jitter.video/en/articles/17600405-connect-jitter-to-your-ai-assistant-with-the-mcp-server", sourceLabel: "Jitter \u00b7 MCP" },
    { source: "https://www.w3.org/TR/png-3/", sourceLabel: "PNG \u00b7 W3C" },
    { source: "https://developers.google.com/speed/webp/faq", sourceLabel: "WebP \u00b7 Google" },
    { source: "https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Video_codecs", sourceLabel: "Video codecs \u00b7 MDN" },
    { source: "https://webkit.org/blog/15063/webkit-features-in-safari-17-4/", sourceLabel: "WebM \u00b7 Safari 17.4" },
    { source: "https://developer.android.com/develop/ui/views/animations/spring-animation", sourceLabel: "Spring animation \u00b7 Android" },
    { source: "https://www.adobe.com/products/aftereffects.html", sourceLabel: "After Effects \u00b7 Adobe" },
    { source: "https://www.blackmagicdesign.com/products/davinciresolve", sourceLabel: "DaVinci Resolve \u00b7 Blackmagic Design" },
    { source: "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations", sourceLabel: "Canvas animation \u00b7 MDN" },
    { source: "https://gsap.com/docs/v3/GSAP/Timeline/", sourceLabel: "GSAP: Timeline" },
    { source: "https://web.dev/articles/lcp", sourceLabel: "web.dev: Largest Contentful Paint" },
    { source: "https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/currentSrc", sourceLabel: "MDN: currentSrc" },
    { source: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/video", sourceLabel: "MDN: video" },
    ...copy.sections,
    ...copy.qa
  ]) : []);
</script>

<PageMeta title={`${copy?.title ?? heading} | ${site.name}`} description={copy?.summary ?? (zh ? "依日期整理參加過的演講與工作坊：知識、問答與來源。" : "Dated notes from attended talks and workshops: knowledge, questions and sources.")} path={`${base}${entry ? entry.slug + "/" : ""}`} lang={zh ? "zh-tw" : "en"} type={entry ? "article" : "website"} publishedTime={entry?.date} modifiedTime={entry?.updated} />
<svelte:head>
  <link rel="alternate" hreflang="en" href={`${site.url}/event-notes/${entry ? entry.slug + "/" : ""}`} />
  <link rel="alternate" hreflang="zh-Hant" href={`${site.url}/zh-tw/event-notes/${entry ? entry.slug + "/" : ""}`} />
</svelte:head>
<section class="notes content-shell" class:detail-page={!!entry} lang={zh ? "zh-Hant" : "en"}>
  {#if entry && copy}
    <article class="entry-grid" data-event-note>
      <header class="entry-header" id="note-top">
        <a href={base}>← {heading}</a>
        <p class="kicker">{copy.type} · {copy.format} · <time datetime={entry.date}>{entry.date}</time> (Asia/Taipei)</p>
        <h1>{copy.title}</h1>
        <p class="lead">{copy.summary}</p>
        <h2>{zh ? "重點結論" : "Key takeaway"}</h2>
        <p>{zh ? "先讓動態交代資訊與操作的關係，再安排節奏、選擇工具；緩動曲線、物理模型與繪圖工具各有不同職責。" : "Start with the information and interaction that motion should explain, then choose timing and tools. Easing curves, physical models and drawing libraries serve different responsibilities."}</p>
      </header>
      <nav class="contents" aria-label={zh ? "本頁目錄" : "On this page"}>
        <details open><summary>{zh ? "本頁目錄" : "On this page"}</summary>
          <div class="toc-links">
            <a href="#note-top">{zh ? "重點結論" : "Key takeaway"}</a>
            <a href="#knowledge">{zh ? "教學筆記" : "Learning notes"}</a>
            {#each copy.sections as section, index}
              <a class="chapter-link" href={`#${section.id}`}><span>{String(index + 1).padStart(2, "0")}</span> {section.title}</a>
            {/each}
            <a href="#prompt">{zh ? "提示詞範例" : "Prompt example"}</a>
            <a href="#session-qa">{zh ? "現場問答" : "Session Q&A"}</a>
            <a href="#qa">{zh ? "p5.js 補充" : "p5.js supplement"}</a>
            <a href="#reflection">{zh ? "個人心得" : "Reflection"}</a>
            <a href="#sources">{zh ? "來源清單" : "Source list"}</a>
            <a href="#event-metadata">{zh ? "活動資訊" : "Event metadata"}</a>
          </div>
        </details>
      </nav>
      <div class="reading-body">
      <section id="knowledge"><h2>{zh ? "從想法到作品：16 個動態設計主題" : "From idea to implementation: 16 motion-design topics"}</h2>
        <p>{zh ? "先理解動態要傳達的訊息，再練習分鏡、工具選擇與網站實作。每個主題都有操作思路、網站例子與小練習，可以依自己的作品挑一段開始。" : "Start with the message motion should communicate, then work through storyboards, tool choices and website implementation. Each topic includes a workflow, a website example and a small exercise you can adapt to your own project."}</p>
        <p class="source-caption">{zh ? "延伸學習：技術說明搭配官方文件，操作流程與練習是可自行嘗試的設計方法；參考連結集中於文末。" : "Further learning: technical explanations draw on official documentation; the workflows and exercises offer design methods to try. References are collected at the end."}</p>
        {#each copy.sections as section, index}
          <section class="lesson" id={section.id} data-lesson>
            <h3>{String(index + 1).padStart(2, "0")} · {section.title}</h3>
            <div data-teaching>
              {#each section.paragraphs as paragraph}<p>{paragraph}</p>{/each}
              <p>{section.text}</p>
            </div>
            <h4>{section.workflowTitle}</h4>
            <ol data-workflow>{#each section.steps as step}<li>{step}</li>{/each}</ol>
            <p data-example><strong>{zh ? "網站例子" : "Website example"}</strong> — {section.example}</p>
            <div class="practice" data-practice><h4>{zh ? "小練習" : "Small exercise"}</h4><p>{section.practice}</p></div>
            <p class="source-caption">{zh ? "參考" : "Reference"}：{section.sourceLabel}</p>
          </section>
        {/each}
      </section>
      <section id="prompt"><h2>{zh ? "把方法用在自己的作品：自寫提示詞" : "Apply the method: an original prompt example"}</h2>
        <p>{zh ? "以下是整理後的練習規格，可換成自己的素材與目的。狀態：待實作。" : "Adapt this editorial exercise to your own assets and purpose. Status: ready for a future experiment."}</p>
        <blockquote>{zh ? "請先規劃一支直式 9:16、約 20 秒的作品集介紹。對象是第一次認識我的合作夥伴，素材有標誌、三張作品截圖與已確認自介。沿用既有配色與字體，以『問題 → 作品如何回應 → 成果 → 作品集入口』安排內容。先交分鏡表與靜態預覽，列出各段文字、主角、動作和閱讀停留時間；分鏡確認後再製作。預覽請檢查手機文字大小、轉場遮擋及片尾閱讀時間。" : "Plan a portrait 9:16 portfolio introduction of about 20 seconds for a potential collaborator meeting me for the first time. Available assets are a logo, three project screenshots and approved introduction text. Keep the existing palette and typography. Sequence: problem → project response → outcome → portfolio link. Deliver a storyboard and still previews first, showing text, focal point, motion and reading time for each shot. Produce the animation after storyboard review. Check mobile text size, transition occlusion and end-card reading time."}</blockquote>
      </section>
      <figure aria-labelledby="drawing-caption">
        <ol class="flow"><li>JavaScript<br /><small>{zh ? "計算位置與行為" : "Compute positions and behavior"}</small></li><li>p5.js<br /><small>{zh ? "呼叫繪圖與互動函式" : "Call drawing and interaction functions"}</small></li><li>Canvas / WebGL<br /><small>{zh ? "在瀏覽器畫出結果" : "Render in the browser"}</small></li><li>{zh ? "畫面與互動" : "Visuals and interaction"}<br /><small>{zh ? "下一次更新再重畫" : "Redraw on the next update"}</small></li></ol>
        <figcaption id="drawing-caption">{zh ? "p5.js 的簡化流程：程式更新資料，繪圖工具把結果畫出來。這是 HTML/CSS 示意，沒有外部圖片。" : "A simplified p5.js flow: code updates data and drawing tools render it. An HTML/CSS diagram with no external image."}</figcaption>
      </figure>
      <section id="session-qa"><h2>{zh ? "現場 Q&A 整理" : "Session Q&A"}</h2><p>{zh ? "依課堂提問重述，技術補充連到上方章節與官方來源。" : "Questions are restated from the session; technical additions connect to the chapters and official sources above."}</p>
        {#each copy.sessionQa as item}<div data-session-qa><h3>{item.q}</h3><p>{item.a}</p></div>{/each}
      </section>
      <section id="qa"><h2>{zh ? "延伸 Q&A：p5.js 與工具分工" : "Supplementary Q&A: p5.js and tool roles"}</h2><p>{zh ? "以下延伸先前的技術提問，與現場問答分開整理。" : "These build on earlier technical questions and are kept separate from the session Q&A."}</p>
        {#each copy.qa as item, index}<h3 id={index === 2 ? "tool-comparison" : undefined}>{item.q}</h3><p>{item.a}</p><p class="source-caption">{zh ? "參考" : "Reference"}：{item.sourceLabel}</p>{/each}
        <aside><h3>{copy.quizTitle}</h3><p>{copy.quiz}</p><details><summary>{zh ? "展開答案與解說" : "Reveal answer and explanation"}</summary><p>{copy.answer}</p></details></aside>
      </section>
      <section id="reflection"><h2>{zh ? "個人心得" : "Personal reflection"}</h2><p>{copy.reflection}</p><h3>{zh ? "實作狀態" : "Practice status"}</h3><p>{zh ? "尚無可公開的實作與執行驗證紀錄。" : "No public implementation or execution evidence has been added."}</p></section>
      <section id="sources"><h2>{zh ? "來源清單" : "Source list"}</h2>
        <p>{zh ? "課堂教材與技術文件集中在這裡，每個資源保留一個連結。Hera 是動態生成工具入口，Motion UX 提供動態設計教學；GSAP 的首頁、API、緩動與捲動文件各有不同用途。" : "Materials and technical references are collected here, with one link per resource. Hera is a motion-generation tool and Motion UX provides design tutorials. GSAP’s homepage, API, easing and scrolling documents serve distinct purposes."}</p>
        <ul>{#each resources as resource}<li><a href={resource.source}>{resource.sourceLabel}</a></li>{/each}</ul>
        <a href="#tool-comparison">{zh ? "回看 p5.js／GSAP／Three.js 分工" : "See the p5.js / GSAP / Three.js comparison"}</a>
      </section>
      <a href={base}>← {heading}</a>
      </div>
      <!-- svelte-ignore a11y_no_noninteractive_tabindex (The scrollable metadata region needs a keyboard entry point for arrow-key scrolling.) -->
      <div class="event-sidebar" id="event-metadata" role="region" aria-labelledby="metadata-heading" tabindex="0">
        <details open><summary id="metadata-heading">{zh ? "活動資訊" : "Event metadata"}</summary>
        <dl class="metadata">
          <dt>{zh ? "活動名稱" : "Event"}</dt><dd>{copy.event}</dd>
          <dt>{zh ? "日期" : "Date"}</dt><dd>{entry.date}</dd>
          <dt>{zh ? "類型／形式" : "Type / format"}</dt><dd>{copy.type} · {copy.format}</dd>
          <dt>{zh ? "主講人" : "Presenter"}</dt><dd>{copy.attribution}</dd>
          <dt>{zh ? "主辦單位" : "Organizer"}</dt><dd>{copy.organizer}</dd>
          <dt>{zh ? "公開地點／平台" : "Public venue / platform"}</dt><dd>{copy.platform}</dd>
          <dt>{zh ? "教材" : "Materials"}</dt><dd><a href="#sources">{zh ? "簡報、共筆與官方文件" : "Slides, shared notes and documentation"}</a></dd>
        </dl>
        <p>{copy.speakerBio}</p>
        <div class="boundary"><h3>{zh ? "筆記狀態" : "Note status"}</h3><p>{copy.status} {copy.scope}</p></div>
        <p>{zh ? "更新日期" : "Updated"}：<time datetime={entry.updated}>{entry.updated}</time></p>
        <a href="#knowledge">{zh ? "回到知識筆記 ↑" : "Back to the notes ↑"}</a></details>
      </div>
    </article>
  {:else}
    <header><p class="kicker">{zh ? "參與紀錄" : "Attendance notes"}</p><h1>{heading}</h1><p class="lead">{zh ? "把演講與工作坊中的知識、疑問和後續思考，依日期整理在這裡。" : "Knowledge, questions and subsequent reflections from talks and workshops, organized by date."}</p></header>
    <label for="notes-search">{zh ? "搜尋筆記（活動、日期或關鍵字）" : "Search notes (event, date or keyword)"}</label>
    <input id="notes-search" type="search" bind:value={query} placeholder={zh ? "例如：p5.js、2026-10-24" : "For example: p5.js, 2026-10-24"} />
    <p role="status">{filtered.length} {zh ? "篇筆記" : "notes"}</p>
    <noscript><p>{zh ? "已列出所有筆記；搜尋需要 JavaScript。" : "All notes are listed; search requires JavaScript."}</p></noscript>
    {#each filtered as note}
      {@const item = note[zh ? "zh" : "en"]}
      <article class="note-row"><time datetime={note.date}>{note.date}</time><div><p class="kicker">{item.type} · {item.format}</p><h2><a href={`${base}${note.slug}/`}>{item.title}</a></h2><p>{item.summary}</p></div></article>
    {:else}<p>{zh ? "找不到符合的筆記，請換個關鍵字。" : "No matching notes. Try another keyword."}</p>{/each}
  {/if}
</section>
<style>
  figure { margin: 2rem 0; }
  .flow { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1rem; padding: 0; list-style: none; }
  .flow li { border-top: 2px solid var(--accent); padding: .8rem .4rem; color: var(--ink-strong); }
  .flow li:not(:last-child)::after { content: " →"; color: var(--accent); }
  .flow small, figcaption { color: var(--muted); line-height: 1.7; }
  .metadata { display: grid; grid-template-columns: 9rem minmax(0, 1fr); border-top: 1px solid var(--line); }
  dt, dd { margin: 0; padding: .8rem .5rem; border-bottom: 1px solid var(--line); line-height: 1.7; overflow-wrap: anywhere; }
  dt { color: var(--muted); }
  .notes { padding-block: clamp(3rem, 8vw, 6rem); max-width: 56rem; }
  header { margin-block: 1.5rem 2rem; }
  h1 { color: var(--ink-strong); font-family: var(--font-serif); font-weight: 500; font-size: clamp(2.3rem, 6vw, 4rem); line-height: 1.15; text-wrap: balance; }
  h2 { color: var(--ink-strong); font-family: var(--font-serif); font-weight: 500; font-size: 1.8rem; }
  h3 { margin-top: 1.8rem; color: var(--ink-strong); }
  h3[id] { scroll-margin-top: 6rem; }
  blockquote { margin: 1rem 0; padding: 1rem 1.5rem; border-left: 2px solid var(--accent); line-height: 1.9; color: var(--ink); background: var(--accent-soft); }
  p, li { line-height: 1.8; color: var(--muted); overflow-wrap: anywhere; }
  .lead { font-size: 1.15rem; }
  section[id] { border-top: 1px solid var(--line); padding-block: 1.5rem; scroll-margin-top: 6rem; }
  .detail-page { width: min(100% - 3rem, 90rem); max-width: none; }
  .entry-grid { display: grid; grid-template-columns: minmax(11rem, 14rem) minmax(0, 46rem) minmax(15rem, 18rem); grid-template-areas: "toc header metadata" "toc body metadata"; gap: 0 clamp(1.25rem, 2.4vw, 2.5rem); align-items: start; }
  .entry-header { grid-area: header; min-width: 0; margin-top: 0; }
  .reading-body { grid-area: body; min-width: 0; }
  .contents { grid-area: toc; font-size: .86rem; }
  .contents, .event-sidebar { position: sticky; top: 5.5rem; max-height: calc(100dvh - 7rem); overflow-y: auto; overscroll-behavior-y: contain; scrollbar-gutter: stable; padding: .35rem .5rem .8rem; }
  .contents summary { color: var(--ink); font-weight: 700; }
  .toc-links { display: grid; gap: .18rem; border-left: 1px solid var(--line); }
  .toc-links a { display: block; border-left: 2px solid transparent; margin-left: -1px; padding: .34rem .35rem .34rem .85rem; color: var(--muted); line-height: 1.4; overflow-wrap: anywhere; }
  .toc-links a:hover, .toc-links a:focus-visible { color: var(--accent); border-left-color: var(--accent); }
  .toc-links .chapter-link { padding-left: 1.3rem; font-size: .82rem; }
  .chapter-link span { color: var(--accent); font-variant-numeric: tabular-nums; }
  .event-sidebar { grid-area: metadata; font-size: .88rem; border-left: 1px solid var(--line); background: transparent; scroll-margin-top: 6rem; }
  .event-sidebar summary { font-weight: 600; }
  .event-sidebar .metadata { grid-template-columns: minmax(0, 1fr); }
  .event-sidebar dt { border-bottom: 0; padding-bottom: 0; font-size: .8rem; }
  .event-sidebar dd { padding-top: .2rem; }
  .event-sidebar h3 { font-size: 1rem; }
  .event-sidebar .boundary { padding: .65rem; }
  .lesson { padding-block: 1.5rem; }
  .lesson:target { border-top-color: var(--accent); }
  .lesson h3 { margin-top: .5rem; font-size: 1.4rem; }
  .lesson ol { padding-left: 1.5rem; }
  .lesson li + li { margin-top: .65rem; }
  .lesson h4 { color: var(--ink); margin-bottom: .5rem; font-weight: 600; }
  .practice { border-left: 2px solid var(--accent); background: var(--accent-soft); padding: .2rem 1rem; margin-block: 1.3rem; }
  .source-caption { font-size: .8rem; }
  #note-top { scroll-margin-top: 6rem; }
  @media (max-width: 1100px) {
    .detail-page { width: min(100% - 1.35rem, 46rem); }
    .entry-grid { grid-template-columns: minmax(0, 1fr); grid-template-areas: "header" "toc" "body" "metadata"; }
    .contents, .event-sidebar { position: static; max-height: none; overflow: visible; scrollbar-gutter: auto; }
    .contents { border-block: 1px solid var(--line); margin-bottom: 1.5rem; }
    .contents .toc-links { max-height: 20rem; overflow-y: auto; margin-bottom: 1rem; }
    .event-sidebar { margin-top: 3rem; }
  }
  @media print {
    .contents { display: none; }
    .entry-grid { display: block; }
    .event-sidebar { position: static; max-height: none; overflow: visible; }
  }
  .boundary, aside { padding: 1rem; border-left: 2px solid var(--accent); background: var(--accent-soft); }
  summary { cursor: pointer; padding-block: .75rem; color: var(--accent); }
  input { display: block; width: 100%; box-sizing: border-box; margin-top: .6rem; padding: .8rem; font: inherit; color: var(--ink); background: var(--bg); border: 1px solid var(--line-strong); border-radius: var(--radius-sm); }
  .note-row { display: grid; grid-template-columns: 7.5rem minmax(0, 1fr); gap: 1.5rem; border-top: 1px solid var(--line); padding-block: 1.5rem; }
  time { color: var(--muted); font-variant-numeric: tabular-nums; }
  .note-row h2 { margin-top: .5rem; }
  @media (max-width: 600px) { .flow { grid-template-columns: 1fr; } .flow li:not(:last-child)::after { content: " ↓"; } .metadata { grid-template-columns: 1fr; } dt { border-bottom: 0; padding-bottom: 0; } .note-row { grid-template-columns: 1fr; gap: .5rem; } }
</style>
