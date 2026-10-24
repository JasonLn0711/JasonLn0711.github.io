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
          <dt>{zh ? "報名正式主題" : "Announced topic"}</dt><dd>{copy.announcedTopic}</dd>
          <dt>{zh ? "當日簡報標題" : "Slide-deck title"}</dt><dd>{copy.slidesTitle}<br />{copy.titleNote}</dd>
          <dt>{zh ? "日期" : "Date"}</dt><dd>{entry.date}</dd>
          <dt>{zh ? "預定時段" : "Scheduled time"}</dt><dd>{entry.scheduledTime} · {entry.timezone}<br />{zh ? "活動已結束；實際起訖時刻待補。" : "The session has ended; actual start and end times are to be added."}</dd>
          <dt>{zh ? "類型／形式" : "Type / format"}</dt><dd>{copy.type} · {copy.format}</dd>
          <dt>{zh ? "主講人" : "Presenter"}</dt><dd>{copy.attribution}</dd>
          <dt>{zh ? "主辦單位" : "Organizer"}</dt><dd>{copy.organizer}</dd>
          <dt>{zh ? "協辦單位" : "Co-organizer"}</dt><dd>{zh ? "未查得公開資料" : "Public information not found"}</dd>
          <dt>{zh ? "公開地點／平台" : "Public venue / platform"}</dt><dd>{copy.platform}</dd>
          <dt>{zh ? "報名／活動來源" : "Registration / event source"}</dt><dd><a href={entry.registrationUrl}>{zh ? "公開報名表（活動來源）" : "Public registration form (event source)"}</a><br />{copy.registrationStatus}</dd>
          <dt>{zh ? "教材" : "Materials"}</dt><dd><a href="https://web-animation-course.vercel.app/">{zh ? "簡報" : "Slides"}</a> · <a href="https://hackmd.io/@zz41354899/H14KjaJ9Ml">{zh ? "共筆" : "Shared notes"}</a></dd>
        </dl>
        <p>{copy.speakerBio}</p>
        <details><summary>{zh ? "主辦公告的內容與適合對象" : "Announced topics and audience"}</summary><p>{copy.announcedContent}</p></details>
        <div class="boundary"><h3>{zh ? "資料與更新狀態" : "Sources and update status"}</h3><p>{copy.status} {copy.scope}</p><p>{zh ? "涵蓋完整課堂文字、12 頁簡報、共筆與工具文件。現場問答的時間為提供稿件的相對時間。技術補充依官方文件核對；Mografy 的實作說明採公開 Canvas／Three.js 文件。" : "Coverage includes the supplied session text, 12 slides, shared notes and tool documentation. Session Q&A uses relative transcript timestamps. Technical additions follow official documentation; Mografy's implementation description follows its public Canvas/Three.js documents."}</p></div>
        <p>{zh ? "更新日期" : "Updated"}：<time datetime={entry.updated}>{entry.updated}</time></p>
      </header>
      <nav class="contents" aria-label={zh ? "本頁目錄" : "On this page"}>
        <a href="#knowledge">{zh ? "知識筆記" : "Knowledge notes"}</a><a href="#prompt">{zh ? "提示詞範例" : "Prompt example"}</a><a href="#session-qa">{zh ? "現場問答" : "Session Q&A"}</a><a href="#qa">{zh ? "p5.js 補充" : "p5.js supplement"}</a><a href="#reflection">{zh ? "個人心得" : "Reflection"}</a><a href="#sources">{zh ? "來源" : "Sources"}</a>
      </nav>
      <section id="knowledge"><h2>{zh ? "知識筆記" : "Knowledge notes"}</h2>
        <details><summary>{zh ? "展開章節索引" : "Browse the chapters"}</summary><ol>{#each copy.sections as section, index}<li><a href={`#note-${index + 1}`}>{section.title}</a></li>{/each}</ol></details>
        {#each copy.sections as section, index}<h3 id={`note-${index + 1}`}>{section.title}</h3><p>{section.text}</p><a href={section.source}>{section.sourceLabel} ↗</a>{/each}
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
        {#each copy.sessionQa as item}<h3>{item.q}</h3><p>{item.a}</p><p class="timestamp">{zh ? "來源相對時間" : "Relative source time"} {item.time}</p>{/each}
      </section>
      <section id="qa"><h2>{zh ? "延伸 Q&A：p5.js 與工具分工" : "Supplementary Q&A: p5.js and tool roles"}</h2><p>{zh ? "以下延伸先前的技術提問，與現場問答分開整理。" : "These build on earlier technical questions and are kept separate from the session Q&A."}</p>
        {#each copy.qa as item, index}<h3 id={index === 2 ? "tool-comparison" : undefined}>{item.q}</h3><p>{item.a}</p><a href={item.source}>{item.sourceLabel} ↗</a>{/each}
        <aside><h3>{copy.quizTitle}</h3><p>{copy.quiz}</p><details><summary>{zh ? "展開答案與解說" : "Reveal answer and explanation"}</summary><p>{copy.answer}</p></details></aside>
      </section>
      <section id="reflection"><h2>{zh ? "個人心得" : "Personal reflection"}</h2><p>{copy.reflection}</p><h3>{zh ? "實作狀態" : "Practice status"}</h3><p>{zh ? "尚無可公開的實作與執行驗證紀錄。" : "No public implementation or execution evidence has been added."}</p></section>
      <section id="sources"><h2>{zh ? "延伸來源" : "Further sources"}</h2>
        <ul><li><a href="https://web-animation-course.vercel.app/">{zh ? "工作坊簡報" : "Workshop slides"}</a></li><li><a href="https://hackmd.io/@zz41354899/H14KjaJ9Ml">{zh ? "工作坊共筆" : "Shared workshop notes"}</a></li><li><a href="https://mografy-website.vercel.app/zh-TW">Mografy</a></li><li><a href="https://p5js.org/reference/p5/setup/">p5.js: setup()</a></li><li><a href="https://github.com/mrdoob/three.js">Three.js</a></li></ul>
        <h3>{zh ? "工作坊分享的延伸資源" : "Resources shared during the workshop"}</h3>
        <p>{zh ? "課堂分享與補充查核的公開入口，依用途整理。工具實作和影片觀看狀態見上方資料欄。" : "Public entry points from the session and follow-up verification, organized by purpose. Review status appears in the source note above."}</p>
        <ul>
          <li><a href="https://gsap.com/">GSAP</a> — {zh ? "工作坊補充分享的動畫工具入口；官網介紹 JavaScript 動畫、時間控制與捲動互動。" : "An animation resource shared during the session; its website introduces JavaScript animation, timing and scroll interactions."} <a href="#tool-comparison">{zh ? "回看 p5.js／GSAP／Three.js 分工" : "See the p5.js / GSAP / Three.js comparison"}</a></li>
          <li><a href="https://hera.video/">Hera</a> — {zh ? "官網介紹為可用提示詞製作、編輯動態圖像的工具。" : "A tool for creating and editing motion graphics from prompts, according to its website."}</li>
          <li><a href="https://www.youtube.com/channel/UCPOmpoL4tsc9ZLtCotluXYg">Motion UX · YouTube</a> — {zh ? "設計師的 Motion UX 工作流程教學入口。" : "Tutorials on Motion UX workflows for designers."}</li>
          <li><a href="https://hyperframes.heygen.com/introduction">HyperFrames</a> — {zh ? "代理協作的 HTML 影片專案。" : "Agent-assisted HTML video projects."}</li>
          <li><a href="https://help.jitter.video/en/articles/17600405-connect-jitter-to-your-ai-assistant-with-the-mcp-server">Jitter · MCP</a> — {zh ? "連接 AI 工具與動態設計專案的官方說明。" : "Official guidance on connecting AI tools to motion-design projects."}</li>
        </ul>
        <h3>{zh ? "技術補充來源" : "Technical references"}</h3><ul>
          <li><a href="https://www.w3.org/TR/png-3/">PNG · W3C</a> · <a href="https://developers.google.com/speed/webp/faq">WebP · Google</a></li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Video_codecs">Video codecs · MDN</a> · <a href="https://webkit.org/blog/15063/webkit-features-in-safari-17-4/">WebM · Safari 17.4</a></li>
          <li><a href="https://developer.android.com/develop/ui/views/animations/spring-animation">Spring animation · Android</a></li>
          <li><a href="https://www.adobe.com/products/aftereffects.html">After Effects · Adobe</a> · <a href="https://www.blackmagicdesign.com/products/davinciresolve">DaVinci Resolve · Blackmagic Design</a></li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations">Canvas animation · MDN</a></li>
        </ul>
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
  h3[id] { scroll-margin-top: 6rem; }
  blockquote { margin: 1rem 0; padding: 1rem 1.5rem; border-left: 2px solid var(--accent); line-height: 1.9; color: var(--ink); background: var(--accent-soft); }
  .timestamp { font-size: .85rem; font-variant-numeric: tabular-nums; }
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
