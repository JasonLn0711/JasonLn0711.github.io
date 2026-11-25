<script lang="ts">
  import type { BlogPost } from "#lib/content/blog.ts";
  import { homeCopy } from "#lib/content/site.ts";
  import HomeArticle from "./HomeArticle.svelte";
  let { posts, locale = "en" }: { posts: BlogPost[]; locale?: "en" | "zh-Hant" } = $props();
  let copy = $derived(homeCopy[locale]);
</script>

<div data-testid="recent-writing">
  <div class="recent-list">
    {#each posts as post (post.slug)}<HomeArticle {post} {locale} />{/each}
  </div>
  <div class="archive-links" class:after-list={posts.length > 0}>
    <a href="/professional/">{copy.all} <span aria-hidden="true">→</span></a>
    <a href="/blog/">{copy.personal} <span aria-hidden="true">→</span></a>
    <a href="/rss.xml">RSS <span aria-hidden="true">↗</span></a>
  </div>
</div>

<style>
  .recent-list {
    display: grid;
    gap: 1.5rem;
  }

  .archive-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0 1.75rem;
  }

  .archive-links.after-list {
    margin-top: 1.5rem;
  }

  .archive-links a {
    display: inline-flex;
    align-items: center;
    gap: 0.3em;
    min-height: 44px;
    font-size: 0.92rem;
    text-decoration: none;
  }

  .archive-links a:hover {
    text-decoration: underline;
    text-underline-offset: 0.22em;
  }
</style>
