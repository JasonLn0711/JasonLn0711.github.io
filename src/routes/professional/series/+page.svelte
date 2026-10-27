<script lang="ts">
  import PageMeta from "$lib/components/PageMeta.svelte";
  import { professionalSeries, professionalPosts } from "$lib/content/blog";
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
  <a href="/professional/">← Professional writing／專業文章</a>
</section>
<style>
  .series-index { padding-block: 4rem; }
  h1 { font-family: var(--font-serif); font-size: clamp(2rem, 6vw, 3.5rem); font-weight: 500; }
  h2 { font-size: 1.3rem; }
  p { line-height: 1.75; color: var(--muted); }
  article { border-top: 1px solid var(--line); margin-block: 2rem; padding-top: 1rem; }
</style>
