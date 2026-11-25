<script lang="ts">
  import PageMeta from "#lib/components/PageMeta.svelte";
  import { professionalSeries, professionalPosts } from "#lib/content/blog.ts";
</script>
<PageMeta title="Reading series · 系列閱讀" description="Follow a larger question through connected articles, one step at a time." path="/professional/series/" />
<section class="content-shell series-index">
  <p class="kicker">Professional writing / Series</p>
  <h1>Reading series · 系列閱讀</h1>
  <p>從一個大問題出發，依序連接觀念、例子與應用。</p>
  {#each professionalSeries as series}
    <article>
      <h2><a href={`/professional/series/${series.slug}/`}>{series.title}</a></h2>
      <p>{series.description}</p>
      <p>{professionalPosts.filter((post) => post.series === series.slug).length} published articles · 已發布文章</p>
    </article>
  {/each}
  <a class="back-link" href="/professional/">← Professional writing／專業文章</a>
</section>
<style>
  .series-index { padding-block: var(--page-pad-block); }
  h1 { margin: 0.7rem 0 0.8rem; color: var(--ink-strong); font-size: var(--page-title-size); font-weight: var(--heading-weight); letter-spacing: -0.025em; line-height: 1.15; text-wrap: balance; }
  h2 { font-size: clamp(1.2rem, 1.1rem + 0.5vw, 1.45rem); line-height: 1.35; }
  h2 a { color: var(--ink-strong); text-decoration: none; }
  h2 a:hover { color: var(--accent); text-decoration: underline; text-underline-offset: 0.22em; }
  p { line-height: 1.75; color: var(--muted); }
  article { border-top: 1px solid var(--line); margin-block: 1.8rem; padding-top: 1.2rem; }
  .back-link { display: inline-flex; align-items: center; min-height: 44px; font-weight: var(--heading-weight); }
</style>
