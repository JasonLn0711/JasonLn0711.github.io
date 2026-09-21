<script lang="ts">
  import { onMount } from "svelte";
  import { blogPosts } from "$lib/content/blog";
  import { recentPosts, taipeiDate } from "$lib/content/blog-model";

  let { locale = "en" }: { locale?: "en" | "zh-Hant" } = $props();
  let now = $state<Date | null>(null);
  let zh = $derived(locale === "zh-Hant");
  let posts = $derived(now ? recentPosts(blogPosts, now) : blogPosts.slice(0, 3));
  let dates = $derived([...new Set(posts.map((post) => post.date))]);

  onMount(() => {
    let timer: ReturnType<typeof setTimeout>;
    function refresh() {
      now = new Date();
      clearTimeout(timer);
      const midnight = Date.parse(`${taipeiDate(now)}T00:00:00+08:00`) + 86_400_000;
      timer = setTimeout(refresh, Math.max(100, midnight - now.getTime() + 100));
    }
    function visible() { if (document.visibilityState === "visible") refresh(); }
    refresh();
    document.addEventListener("visibilitychange", visible);
    window.addEventListener("pageshow", refresh);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", visible);
      window.removeEventListener("pageshow", refresh);
    };
  });
</script>

<section class="recent-writing" aria-labelledby="recent-writing-title" data-testid="recent-writing">
  <div class="title-row">
    <h2 id="recent-writing-title">{now ? (zh ? "最近三日更新" : "New in the last three days") : (zh ? "最新文章" : "Latest writing")}</h2>
    <a href="/blog/">{zh ? "所有文章" : "All posts"} →</a>
  </div>
  {#if now}<p class="window-note">{zh ? "今天與前兩日・臺北時間" : "Today and the previous two days · Taipei time"}</p>{/if}
  {#if posts.length === 0}
    <p>{zh ? "近三日尚無新文章。從文章總覽繼續閱讀已發布的內容。" : "No new articles in the last three days. Explore the archive for earlier writing."}</p>
  {:else}
    {#each dates as date}
      <div class="date-group">
        <time datetime={date}>{date}</time>
        <div class="entries">
          {#each posts.filter((post) => post.date === date) as post}
            <article>
              <h3><a href={`/blog/${post.slug}/`}>{post.title}</a></h3>
              <p>{post.description}</p>
              <span>{post.kind === "daily-learning" ? "Daily learning · 每日學習" : post.categoryLabel}</span>
            </article>
          {/each}
        </div>
      </div>
    {/each}
  {/if}
  <noscript><p>{zh ? "依發布日期列出最新文章；啟用 JavaScript 可依臺北日期篩選最近三日。" : "Articles are listed by publication date. Enable JavaScript for the current three-day window."}</p></noscript>
</section>

<style>
  .title-row { display: flex; align-items: baseline; justify-content: space-between; gap: 1rem; }
  h2 { margin: 0; font-family: var(--font-serif); font-size: clamp(1.65rem, 4vw, 2.35rem); font-weight: 500; line-height: 1.25; }
  h3 { margin: 0; font-size: 1.1rem; line-height: 1.45; }
  p { color: var(--muted); line-height: 1.75; margin: 0.5rem 0; }
  .window-note, time, span { color: var(--muted); font-size: 0.8rem; }
  .date-group { display: grid; grid-template-columns: 7rem minmax(0, 1fr); gap: 1.25rem; border-top: 1px solid var(--line); padding-top: 1.2rem; margin-top: 1.2rem; }
  .entries { display: grid; gap: 1.25rem; }
  @media (max-width: 700px) { .title-row { display: grid; } .date-group { grid-template-columns: 1fr; gap: 0.5rem; } }
</style>
