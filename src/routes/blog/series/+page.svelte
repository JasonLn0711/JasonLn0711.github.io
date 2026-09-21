<script lang="ts">
  import PageMeta from "$lib/components/PageMeta.svelte";
  import { blogSeries, blogPosts } from "$lib/content/blog";
</script>
<PageMeta title="Reading series · 系列閱讀" description="Follow a larger question through connected articles, one step at a time." path="/blog/series/" />
<section class="content-shell series-index">
  <p class="kicker">Blog / Series</p>
  <h1>Reading series · 系列閱讀</h1>
  <p>從一個大問題出發，依序連接觀念、例子與應用。</p>
  {#each blogSeries as series}
    <article>
      <h2><a href={`/blog/series/${series.slug}/`}>{series.title}</a></h2>
      <p>{series.description}</p>
      <p>{blogPosts.filter((post) => post.series === series.slug).length} published articles · 已發布文章</p>
    </article>
  {/each}
  <a href="/blog/">← Blog／所有文章</a>
</section>
<style>
  .series-index { padding-block: 4rem; }
  h1 { font-family: var(--font-serif); font-size: clamp(2rem, 6vw, 3.5rem); font-weight: 500; }
  h2 { font-size: 1.3rem; }
  p { line-height: 1.75; color: var(--muted); }
  article { border-top: 1px solid var(--line); margin-block: 2rem; padding-top: 1rem; }
</style>
