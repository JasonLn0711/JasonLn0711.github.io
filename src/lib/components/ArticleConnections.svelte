<script lang="ts">
  import { blogPosts, blogSeries, type BlogPost } from "$lib/content/blog";
  import { articleConnections, seriesPosts, type RelationType } from "$lib/content/blog-model";

  let { post }: { post: BlogPost } = $props();
  let links = $derived(articleConnections(blogPosts, post));
  let series = $derived(blogSeries.find((item) => item.slug === post.series));
  let ordered = $derived(post.series ? seriesPosts(blogPosts, post.series) : []);
  let position = $derived(ordered.findIndex((item) => item.slug === post.slug));
  let previous = $derived(ordered[position - 1]);
  let next = $derived(ordered[position + 1]);
  const labels: Record<RelationType, string> = {
    prerequisite: "Prerequisite · 先備閱讀", extends: "Builds on · 延伸自", related: "Related concept · 相關觀念"
  };
</script>

<section class="connections" aria-labelledby="connections-title">
  <h2 id="connections-title">Connections · 文章之間的關係</h2>
  {#if series}
    <p><a href={`/blog/series/${series.slug}/`}>{series.title}</a> · Part {post.order}</p>
    <nav class="sequence" aria-label="Series reading order">
      {#if previous}<a rel="prev" href={`/blog/${previous.slug}/`}>← 上一篇 / Previous: {previous.title}</a>{/if}
      {#if next}<a rel="next" href={`/blog/${next.slug}/`}>下一篇 / Next: {next.title} →</a>{/if}
    </nav>
  {/if}
  {#each links.outgoing as link}
    <div class="connection">
      <span>{labels[link.type]}</span>
      <h3><a href={`/blog/${link.post.slug}/`}>{link.post.title}</a></h3>
      <p lang="en">{link.reason}</p>
      {#if link.reasonZh}<p lang="zh-Hant">{link.reasonZh}</p>{/if}
    </div>
  {/each}
  {#if links.incoming.length}
    <h3 class="incoming-title">Linked from · 哪些文章連到本文</h3>
    {#each links.incoming as link}
      <div class="connection">
        <h3><a href={`/blog/${link.post.slug}/`}>{link.post.title}</a></h3>
        <p lang="en">{link.reason}</p>
        {#if link.reasonZh}<p lang="zh-Hant">{link.reasonZh}</p>{/if}
      </div>
    {/each}
  {/if}
  {#if !links.outgoing.length && !links.incoming.length}
    <p>No article connections added yet. 本文尚未建立延伸閱讀關係。</p>
  {/if}
</section>

<style>
  .connections { margin-bottom: 2rem; }
  h2 { margin: 0 0 1rem; font-family: var(--font-serif); font-size: 1.65rem; font-weight: 500; }
  h3 { margin: 0.35rem 0; font-size: 1rem; line-height: 1.5; }
  p { color: var(--muted); margin: 0.4rem 0; line-height: 1.7; }
  span { color: var(--muted); font-size: 0.78rem; }
  .sequence { display: grid; gap: 0.8rem; margin: 1.2rem 0; }
  .connection { padding: 1rem 0; border-bottom: 1px solid var(--line); }
  .incoming-title { margin-top: 1.5rem; }
</style>
