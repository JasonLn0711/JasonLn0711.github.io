<script lang="ts">
  import PageMeta from "#lib/components/PageMeta.svelte";
  import type { BlogPost, Series } from "#lib/content/blog-model.ts";
  let { data }: { data: { series: Series; posts: BlogPost[] } } = $props();
</script>
<PageMeta title={data.series.title} description={data.series.description} path={`/professional/series/${data.series.slug}/`} />
<section class="content-shell series-page">
  <p class="kicker">Professional writing / Reading series</p>
  <h1>{data.series.title}</h1>
  <p>{data.series.description}</p>
  <h2>The larger question · 拆解路徑</h2>
  <ol>{#each data.series.roadmap as step}<li>{step}</li>{/each}</ol>
  <h2>Read in order · 依序閱讀</h2>
  {#if data.posts.length === 0}<p>Articles will appear here after publication. 文章發布後會出現在這裡。</p>{/if}
  <ol class="articles">
    {#each data.posts as post}
      <li value={post.order}>
        <h3><a href={`/professional/${post.slug}/`}>{post.title}</a></h3>
        <p>{post.description}</p><time datetime={post.date}>{post.dateLabel}</time>
      </li>
    {/each}
  </ol>
  <a class="back-link" href="/professional/series/">← All series／系列總覽</a>
</section>
<style>
  .series-page { padding-block: var(--page-pad-block); }
  h1 { margin: 0.7rem 0 0.85rem; color: var(--ink-strong); font-size: var(--page-title-size); font-weight: var(--heading-weight); letter-spacing: -0.025em; line-height: 1.15; text-wrap: balance; }
  h2 { color: var(--ink-strong); font-weight: var(--heading-weight); font-size: var(--section-title-size); margin-top: 2.2rem; padding-top: 1.5rem; border-top: 1px solid var(--line); }
  h3 { font-size: 1.18rem; line-height: 1.4; margin: 0; }
  h3 a { color: var(--ink-strong); text-decoration-color: var(--control-line); text-underline-offset: 0.19em; }
  h3 a:hover { color: var(--accent); text-decoration-color: currentColor; }
  p, li { color: var(--muted); line-height: 1.75; }
  time { font-size: 0.82rem; color: var(--muted); }
  .articles li { margin-block: 1.4rem; padding-left: 0.45rem; }
  .back-link { display: inline-flex; align-items: center; min-height: 44px; margin-top: 1rem; font-weight: var(--heading-weight); }
</style>
