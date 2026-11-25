<script lang="ts">
  import { allPosts, allSeries, type BlogPost } from "#lib/content/blog.ts";
  import { articleConnections, seriesPosts, type RelationType } from "#lib/content/blog-model.ts";

  let { post }: { post: BlogPost } = $props();
  let links = $derived(articleConnections(allPosts, post));
  let series = $derived(allSeries.find((item) => item.slug === post.series));
  let ordered = $derived(post.series ? seriesPosts(allPosts, post.series) : []);
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
    <p><a href={`/${post.section}/series/${series.slug}/`}>{series.title}</a> · Part {post.order}</p>
    <nav class="sequence" aria-label="Series reading order">
      {#if previous}<a rel="prev" href={previous.path}>← 上一篇 / Previous: {previous.title}</a>{/if}
      {#if next}<a rel="next" href={next.path}>下一篇 / Next: {next.title} →</a>{/if}
    </nav>
  {/if}
  {#each links.outgoing as link}
    <div class="connection">
      <span>{labels[link.type]}</span>
      <h3><a href={link.post.path}>{link.post.title}</a></h3>
      <p lang="en">{link.reason}</p>
      {#if link.reasonZh}<p lang="zh-Hant">{link.reasonZh}</p>{/if}
    </div>
  {/each}
  {#if links.incoming.length}
    <h3 class="incoming-title">Linked from · 哪些文章連到本文</h3>
    {#each links.incoming as link}
      <div class="connection">
        <h3><a href={link.post.path}>{link.post.title}</a></h3>
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
  .connections { margin-bottom: 2.25rem; }
  h2 { margin: 0 0 1.1rem; color: var(--ink-strong); font-size: 1.4rem; font-weight: var(--heading-weight); }
  h3 { margin: 0.4rem 0; font-size: 1.04rem; line-height: 1.45; }
  h3 a { color: var(--ink-strong); text-decoration: none; }
  h3 a:hover { color: var(--accent); text-decoration: underline; text-underline-offset: 0.22em; }
  p { color: var(--muted); margin: 0.45rem 0; line-height: 1.8; }
  span { color: var(--muted); font-size: 0.8rem; }
  .sequence { display: grid; gap: 0.5rem; margin: 1.25rem 0; }
  .sequence a { display: inline-flex; align-items: center; min-height: 44px; text-decoration: none; }
  .sequence a:hover { text-decoration: underline; text-underline-offset: 0.22em; }
  .connection { padding: 1.15rem 0; border-bottom: 1px solid var(--line); }
  .incoming-title { margin-top: 1.75rem; color: var(--ink-strong); }
</style>
