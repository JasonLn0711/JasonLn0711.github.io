<script lang="ts">
  import PageMeta from "$lib/components/PageMeta.svelte";
  import type { BlogPost, Series } from "$lib/content/blog-model";
  let { data }: { data: { series: Series; posts: BlogPost[] } } = $props();
</script>
<PageMeta title={data.series.title} description={data.series.description} path={`/blog/series/${data.series.slug}/`} />
<section class="content-shell series-page">
  <p class="kicker">Blog / Reading series</p>
  <h1>{data.series.title}</h1>
  <p>{data.series.description}</p>
  <h2>The larger question · 拆解路徑</h2>
  <ol>{#each data.series.roadmap as step}<li>{step}</li>{/each}</ol>
  <h2>Read in order · 依序閱讀</h2>
  {#if data.posts.length === 0}<p>Articles will appear here after publication. 文章發布後會出現在這裡。</p>{/if}
  <ol class="articles">
    {#each data.posts as post}
      <li value={post.order}>
        <h3><a href={`/blog/${post.slug}/`}>{post.title}</a></h3>
        <p>{post.description}</p><time datetime={post.date}>{post.dateLabel}</time>
      </li>
    {/each}
  </ol>
  <a href="/blog/series/">← All series／系列總覽</a>
</section>
<style>
  .series-page { padding-block: 4rem; }
  h1 { font-family: var(--font-serif); font-size: clamp(2rem, 6vw, 3.5rem); font-weight: 500; line-height: 1.2; }
  h2 { font-family: var(--font-serif); font-weight: 500; font-size: 1.65rem; margin-top: 2.5rem; }
  h3 { font-size: 1.2rem; line-height: 1.4; margin: 0; }
  p, li { color: var(--muted); line-height: 1.75; }
  time { font-size: 0.8rem; }
  .articles li { margin-block: 1.5rem; padding-left: 0.5rem; }
</style>
