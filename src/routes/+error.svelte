<script lang="ts">
  import { page } from "$app/state";
</script>

<svelte:head>
  <title>{page.status} · CS Kairos</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<section class="content-shell error-page">
  <p class="kicker">{page.status} · CS Kairos</p>
  <h1>{page.status === 404 ? "This page could not be found." : "This page could not be loaded."}</h1>
  <p lang="zh-Hant">請確認網址，或從文章與課程目錄繼續閱讀。</p>
  <nav aria-label="Recovery navigation">
    <a href="/">Home / 首頁</a>
    <a href="/professional/">Professional writing / 專業文章</a>
    <a href="/blog/">Blog / 個人雜記</a>
    <a href="https://learn.cs-kairos.com/">Courses / 課程 ↗</a>
  </nav>
</section>

<style>
  .error-page {
    padding-block: var(--page-pad-block);
    min-height: 50vh;
  }

  h1 {
    margin: 0.7rem 0 0.85rem;
    color: var(--ink-strong);
    font-size: var(--page-title-size);
    font-weight: var(--heading-weight);
    letter-spacing: -0.025em;
    line-height: 1.15;
  }

  p {
    color: var(--muted);
  }

  nav {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem 1.35rem;
    margin-top: 1.75rem;
  }

  nav a {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    font-weight: var(--heading-weight);
  }
</style>
