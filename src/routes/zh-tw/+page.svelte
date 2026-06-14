<script lang="ts">
  import PageMeta from "$lib/components/PageMeta.svelte";
  import { audienceRoutes, currentSnapshot, recentHighlights, researchPillars, site, zhTw } from "$lib/content/site";
</script>

<PageMeta
  title={`Jason Chia-Sheng Lin | 研究與寫作`}
  description={zhTw.homeLead}
  path="/zh-tw/"
  lang="zh-tw"
/>

<section class="zh-page">
  <div class="content-shell">
    <header class="zh-head">
      <p class="kicker">研究與寫作</p>
      <h1>{zhTw.homeTitle}</h1>
      <p class="lead">{zhTw.homeLead}</p>
      <p>{currentSnapshot.boundary}</p>
      <div class="intro-links">
        <a href="/now/">近期進展</a>
        <a href="/research/">研究</a>
        <a href="/projects/">系統</a>
        <a href="/blog/">文章</a>
        <a href={`mailto:${site.email}`}>聯絡</a>
      </div>
    </header>

    <section class="plain-section">
      <h2>可以從這裡開始</h2>
      <div class="plain-list">
        {#each audienceRoutes as route}
          <article>
            <h3><a href={route.href}>{route.title}</a></h3>
            <p>{route.helps}</p>
          </article>
        {/each}
      </div>
    </section>

    <section class="plain-section">
      <h2>近期重點</h2>
      <div class="plain-list">
        {#each recentHighlights.slice(0, 5) as item}
          <article>
            <p class="meta">{item.period} · {item.category}</p>
            <h3><a href={item.href}>{item.title}</a></h3>
            <p>{item.summary}</p>
          </article>
        {/each}
      </div>
    </section>

    <section class="plain-section">
      <h2>研究方向</h2>
      <div class="plain-list">
        {#each researchPillars as pillar}
          <article>
            <h3><a href={`/research/${pillar.slug}/`}>{pillar.title}</a></h3>
            <p>{pillar.summary}</p>
          </article>
        {/each}
      </div>
    </section>
  </div>
</section>

<style>
  .zh-page {
    padding-block: clamp(3.5rem, 9vw, 6rem);
  }

  .zh-head {
    margin-bottom: clamp(2.2rem, 6vw, 3.5rem);
  }

  h1 {
    margin: 1rem 0 1rem;
    color: var(--ink-strong);
    font-family: var(--font-serif);
    font-size: clamp(2.6rem, 8vw, 4.8rem);
    font-weight: 500;
    line-height: 1.08;
    text-wrap: balance;
  }

  .lead {
    margin: 0;
    color: var(--ink-strong);
    font-size: clamp(1.12rem, 2.1vw, 1.34rem);
    line-height: 1.72;
  }

  .zh-head p:not(.kicker):not(.lead),
  p {
    color: var(--muted);
    line-height: 1.74;
  }

  .zh-head p:not(.kicker):not(.lead) {
    margin: 1rem 0 0;
  }

  .intro-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem 1rem;
    margin-top: 1.5rem;
  }

  .plain-section {
    border-top: 1px solid var(--line);
    padding-block: clamp(2rem, 6vw, 3.2rem);
  }

  h2 {
    margin: 0 0 1.35rem;
    color: var(--ink-strong);
    font-family: var(--font-serif);
    font-size: clamp(1.6rem, 4vw, 2.2rem);
    font-weight: 500;
    line-height: 1.18;
  }

  .plain-list {
    display: grid;
    gap: 1.3rem;
  }

  .plain-list article {
    border-top: 1px solid var(--line);
    padding-top: 1.1rem;
  }

  .plain-list article:first-child {
    border-top: 0;
    padding-top: 0;
  }

  h3 {
    margin: 0;
    color: var(--ink-strong);
    font-size: 1.08rem;
    line-height: 1.35;
  }

  p {
    margin: 0.45rem 0 0;
  }

  .meta {
    margin: 0 0 0.35rem;
    font-family: var(--font-mono);
    font-size: 0.78rem;
  }
</style>
