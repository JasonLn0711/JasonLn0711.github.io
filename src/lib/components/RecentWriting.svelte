<script lang="ts">
  import type { BlogPost } from "$lib/content/blog";
  import { homeCopy } from "$lib/content/site";
  import HomeArticle from "./HomeArticle.svelte";
  let { posts, locale = "en" }: { posts: BlogPost[]; locale?: "en" | "zh-Hant" } = $props();
  let copy = $derived(homeCopy[locale]);
</script>

<div data-testid="recent-writing">
  {#each posts as post (post.slug)}<HomeArticle {post} {locale} />{/each}
  <div class="archive-links" class:after-list={posts.length > 0}>
    <a href="/professional/">{copy.all} →</a><a href="/rss.xml">RSS ↗</a>
  </div>
</div>

<style>
  .archive-links { display: flex; flex-wrap: wrap; gap: 0 1.5rem; }
  .archive-links.after-list { margin-top: 1.5rem; }
  .archive-links a { display: inline-flex; align-items: center; min-height: 44px; }
</style>
