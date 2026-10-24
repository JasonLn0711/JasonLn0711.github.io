<script lang="ts">
  import PageMeta from "$lib/components/PageMeta.svelte";
  import { site, eventNotes } from "$lib/content/site";
  let { zh = false, slug = "" } = $props<{zh?: boolean; slug?: string}>();
  let query = $state("");
  let base = $derived(zh ? "/zh-tw/event-notes/" : "/event-notes/");
  let heading = $derived(zh ? "演講與工作坊筆記" : "Talks & Workshops");
  let entry = $derived(eventNotes.find(note => note.slug === slug));
  let copy = $derived(entry?.[zh ? "zh" : "en"]);
  let filtered = $derived([...eventNotes].sort((a,b) => b.date.localeCompare(a.date)).filter(note => JSON.stringify(note).toLowerCase().includes(query.trim().toLowerCase())));
</script>

<PageMeta title={`${copy?.title ?? heading} | ${site.name}`} description={copy?.summary ?? (zh ? "依日期整理參加過的演講與工作坊：知識、問答與來源。" : "Dated notes from attended talks and workshops: knowledge, questions and sources.")} path={`${base}${entry ? entry.slug + "/" : ""}`} lang={zh ? "zh-tw" : "en"} type={entry ? "article" : "website"} publishedTime={entry?.date} modifiedTime={entry?.updated} />
<svelte:head>
  <link rel="alternate" hreflang="en" href={`${site.url}/event-notes/${entry ? entry.slug + "/" : ""}`} />
  <link rel="alternate" hreflang="zh-Hant" href={`${site.url}/zh-tw/event-notes/${entry ? entry.slug + "/" : ""}`} />
</svelte:head>
<section class="notes content-shell" lang={zh ? "zh-Hant" : "en"}>
  {#if entry && copy}
    <a href={base}>← {heading}</a>
    <article>
      <header>
        <p class="kicker">{copy.type} · {copy.format} · <time datetime={entry.date}>{entry.date}</time> (Asia/Taipei)</p>
        <h1>{copy.title}</h1>
        <p class="lead">{copy.summary}</p>
        <h2>{zh ? "重點結論" : "Key takeaway"}</h2>
        <p>{zh ? "先讓動態交代資訊與操作的關係，再安排節奏、選擇工具；緩動曲線、物理模型與繪圖工具各有不同職責。" : "Start with the information and interaction that motion should explain, then choose timing and tools. Easing curves, physical models and drawing libraries serve different responsibilities."}</p>
        <h2>{zh ? "活動資訊" : "Event metadata"}</h2>
        <dl class="metadata">
          <dt>{zh ? "活動名稱" : "Event"}</dt><dd>{copy.event}</dd>
          <dt>{zh ? "日期" : "Date"}</dt><dd>{entry.date}</dd>
          <dt>{zh ? "預定時段" : "Scheduled time"}</dt><dd>14:00–15:00 · Asia/Taipei (UTC+08:00)<br />{zh ? "僅為排定時間，不代表實際結束或完課。" : "Scheduled slot only; actual end and completion are unconfirmed."}</dd>
          <dt>{zh ? "類型／形式" : "Type / format"}</dt><dd>{copy.type} · {copy.format}</dd>
          <dt>{zh ? "主講人" : "Presenter"}</dt><dd>{copy.attribution}</dd>
          <dt>{zh ? "主辦單位" : "Organizer"}</dt><dd>{zh ? "待確認" : "To be confirmed"}</dd>
          <dt>{zh ? "協辦單位" : "Co-organizer"}</dt><dd>{zh ? "未查得公開資料" : "Public information not found"}</dd>
          <dt>{zh ? "公開地點／平台" : "Public venue / platform"}</dt><dd>{zh ? "線上；公開平台資訊待確認" : "Online; public platform details to be confirmed"}</dd>
          <dt>{zh ? "報名／活動來源" : "Registration / event source"}</dt><dd>{zh ? "公開報名頁待確認；活動內容見" : "Public registration page to be confirmed; content available in the"} <a href="https://web-animation-course.vercel.app/">{zh ? "簡報" : "slides"}</a></dd>
          <dt>{zh ? "教材" : "Materials"}</dt><dd><a href="https://web-animation-course.vercel.app/">{zh ? "簡報" : "Slides"}</a> · <a href="https://hackmd.io/@zz41354899/H14KjaJ9Ml">{zh ? "共筆" : "Shared notes"}</a></dd>
        </dl>
        <p class="boundary">{copy.status} {copy.scope}</p>
        <p>{zh ? "更新日期" : "Updated"}：<time datetime={entry.updated}>{entry.updated}</time></p>
      </header>
      <nav class="contents" aria-label={zh ? "本頁目錄" : "On this page"}>
        <a href="#knowledge">{zh ? "知識筆記" : "Knowledge notes"}</a><a href="#qa">Q&A</a><a href="#reflection">{zh ? "個人心得" : "Reflection"}</a><a href="#sources">{zh ? "來源" : "Sources"}</a>
      </nav>
      <section id="knowledge"><h2>{zh ? "知識筆記" : "Knowledge notes"}</h2>
        {#each copy.sections as section}<h3>{section.title}</h3><p>{section.text}</p><a href={section.source}>{section.sourceLabel} ↗</a>{/each}
      </section>
      <figure aria-labelledby="drawing-caption">
        <ol class="flow"><li>JavaScript<br /><small>{zh ? "計算位置與行為" : "Compute positions and behavior"}</small></li><li>p5.js<br /><small>{zh ? "呼叫繪圖與互動函式" : "Call drawing and interaction functions"}</small></li><li>Canvas / WebGL<br /><small>{zh ? "在瀏覽器畫出結果" : "Render in the browser"}</small></li><li>{zh ? "畫面與互動" : "Visuals and interaction"}<br /><small>{zh ? "下一次更新再重畫" : "Redraw on the next update"}</small></li></ol>
        <figcaption id="drawing-caption">{zh ? "p5.js 的簡化流程：程式更新資料，繪圖工具把結果畫出來。這是 HTML/CSS 示意，沒有外部圖片。" : "A simplified p5.js flow: code updates data and drawing tools render it. An HTML/CSS diagram with no external image."}</figcaption>
      </figure>
      <section id="qa"><h2>{zh ? "整理後 Q&A" : "Edited Q&A"}</h2>
        {#each copy.qa as item}<h3>{item.q}</h3><p>{item.a}</p><a href={item.source}>{item.sourceLabel} ↗</a>{/each}
        <aside><h3>{copy.quizTitle}</h3><p>{copy.quiz}</p><details><summary>{zh ? "展開答案與解說" : "Reveal answer and explanation"}</summary><p>{copy.answer}</p></details></aside>
      </section>
      <section id="reflection"><h2>{zh ? "個人心得" : "Personal reflection"}</h2><p>{copy.reflection}</p><h3>{zh ? "實作狀態" : "Practice status"}</h3><p>{zh ? "尚無可公開的實作與執行驗證紀錄。" : "No public implementation or execution evidence has been added."}</p></section>
      <section id="sources"><h2>{zh ? "延伸來源" : "Further sources"}</h2>
        <ul><li><a href="https://web-animation-course.vercel.app/">{zh ? "工作坊簡報" : "Workshop slides"}</a></li><li><a href="https://hackmd.io/@zz41354899/H14KjaJ9Ml">{zh ? "工作坊共筆" : "Shared workshop notes"}</a></li><li><a href="https://mografy-website.vercel.app/zh-TW">Mografy</a></li><li><a href="https://p5js.org/reference/p5/setup/">p5.js: setup()</a></li><li><a href="https://github.com/mrdoob/three.js">Three.js</a></li></ul>
        <p>{zh ? "Mografy 為教材提供的工具入口；本頁不據此判定整站的技術實作。" : "Mografy is a tool linked by the materials; this note makes no claim about its site-wide implementation."}</p>
      </section>
      <a href={base}>← {heading}</a>
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
  p, li { line-height: 1.8; color: var(--muted); overflow-wrap: anywhere; }
  .lead { font-size: 1.15rem; }
  section[id] { border-top: 1px solid var(--line); padding-block: 1.5rem; scroll-margin-top: 6rem; }
  .contents { display: flex; flex-wrap: wrap; gap: 1.25rem; margin-block: 2rem; }
  .boundary, aside { padding: 1rem; border-left: 2px solid var(--accent); background: var(--accent-soft); }
  summary { cursor: pointer; padding-block: .75rem; color: var(--accent); }
  input { display: block; width: 100%; box-sizing: border-box; margin-top: .6rem; padding: .8rem; font: inherit; color: var(--ink); background: var(--bg); border: 1px solid var(--line-strong); border-radius: var(--radius-sm); }
  .note-row { display: grid; grid-template-columns: 7.5rem minmax(0, 1fr); gap: 1.5rem; border-top: 1px solid var(--line); padding-block: 1.5rem; }
  time { color: var(--muted); font-variant-numeric: tabular-nums; }
  .note-row h2 { margin-top: .5rem; }
  @media (max-width: 600px) { .flow { grid-template-columns: 1fr; } .flow li:not(:last-child)::after { content: " ↓"; } .metadata { grid-template-columns: 1fr; } dt { border-bottom: 0; padding-bottom: 0; } .note-row { grid-template-columns: 1fr; gap: .5rem; } }
</style>
