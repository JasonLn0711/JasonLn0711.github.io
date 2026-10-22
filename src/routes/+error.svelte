<script lang="ts">
  import { page } from '$app/state';
</script>

<svelte:head>
  <title>{page.status} · CS Kairos</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<section class="content-shell error-page">
  <p>{page.status} · CS Kairos</p>
  <h1>{page.status === 404 ? 'This page could not be found.' : 'This page could not be loaded.'}</h1>
  <p lang="zh-Hant">請確認網址，或從文章與課程目錄繼續閱讀。</p>
  <nav aria-label="Recovery navigation"><a href="/">Home / 首頁</a> · <a href="/blog/">Articles / 文章</a> · <a href="https://learn.cs-kairos.com/">Courses / 課程</a></nav>
</section>

<style>.error-page { padding-block: 5rem; min-height: 50vh; } h1 { font-size: clamp(2rem, 5vw, 3rem); } nav { margin-top: 2rem; line-height: 2.5; }</style>
