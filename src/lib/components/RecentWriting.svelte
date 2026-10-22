<script lang="ts">
  import { blogPosts } from "$lib/content/blog";
  import { latestWriting } from "$lib/content/home";
  import { homeCopy } from "$lib/content/site";
  import HomeArticle from "./HomeArticle.svelte";
  let { locale = "en" }: { locale?: "en" | "zh-Hant" } = $props();
  const posts = latestWriting(blogPosts);
  let copy = $derived(homeCopy[locale]);
</script>

<div data-testid="recent-writing">
  {#each posts as post (post.slug)}<HomeArticle {post} {locale} />{:else}
    <p>{copy.empty} <a href="/teaching/">{copy.emptyLink} →</a></p>
  {/each}
  <div class="archive-links"><a href="/blog/">{copy.all} →</a><a href="/rss.xml">RSS ↗</a></div>
</div>

<style>
  .archive-links { display: flex; gap: 1.5rem; margin-top: 1.5rem; }
  .archive-links a { display: inline-flex; align-items: center; min-height: 44px; }
</style>
