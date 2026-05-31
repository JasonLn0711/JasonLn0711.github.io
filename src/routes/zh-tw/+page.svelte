<script lang="ts">
  import PageMeta from "$lib/components/PageMeta.svelte";
  import { audienceRoutes, researchPillars, site, zhTw } from "$lib/content/site";
</script>

<PageMeta
  title={`Jason Chia-Sheng Lin | Living Research Atlas`}
  description={zhTw.homeLead}
  path="/zh-tw/"
  lang="zh-tw"
/>

<section class="section zh-home">
  <div class="page-shell grid-two">
    <div data-reveal>
      <p class="kicker">Living Research Atlas</p>
      <h1 class="headline">{zhTw.homeTitle}</h1>
      <p class="subhead">{zhTw.homeLead}</p>
      <div class="btn-row">
        <a class="button primary" href="/zh-tw/contact/">開始對話 <span class="button-mark">→</span></a>
        <a class="button" href="/research/">看研究地圖 <span class="button-mark">→</span></a>
      </div>
    </div>
    <div class="panel zh-card" data-reveal>
      <h2>你可以從這裡開始</h2>
      {#each audienceRoutes.slice(0, 4) as route}
        <a href={route.href}>{route.title}</a>
      {/each}
    </div>
  </div>
</section>

<section class="section-tight">
  <div class="page-shell zh-research">
    {#each researchPillars as pillar}
      <a class="panel-soft" href={`/research/${pillar.slug}/`} data-reveal>
        <span class="maturity">{pillar.maturity}</span>
        <strong>{pillar.title}</strong>
        <small>{pillar.summary}</small>
      </a>
    {/each}
  </div>
</section>

<style>
  .zh-home {
    min-height: 100dvh;
    display: grid;
    align-items: center;
    padding-top: 8rem;
  }

  .zh-card {
    display: grid;
    gap: 0.8rem;
    padding: 1.3rem;
  }

  .zh-card h2 {
    margin: 0;
  }

  .zh-card a,
  .zh-research a {
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 0.8rem;
    padding: 0.9rem;
    color: var(--muted);
    background: rgba(255, 255, 255, 0.035);
  }

  .zh-card a:hover,
  .zh-research a:hover {
    color: var(--accent);
    border-color: var(--line-strong);
  }

  .zh-research {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
  }

  .zh-research a {
    display: grid;
    gap: 0.55rem;
  }

  .zh-research small {
    color: var(--muted);
    line-height: 1.55;
  }

  @media (max-width: 900px) {
    .zh-research {
      grid-template-columns: 1fr;
    }
  }
</style>
