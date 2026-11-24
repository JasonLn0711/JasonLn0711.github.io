<script lang="ts">
  import ArticleConnections from "#lib/components/ArticleConnections.svelte";
  import ArticleToc from "#lib/components/ArticleToc.svelte";
  import PageMeta from "#lib/components/PageMeta.svelte";
  import { getBlogArticle, type BlogPost } from "#lib/content/blog.ts";
  import { site } from "#lib/content/site.ts";

  let {
    data
  } = $props<{
    data: {
      post: BlogPost;
      canonicalPath: string;
      indexPath: string;
    };
  }>();

  let post = $derived(data.post);
  let article = $derived(getBlogArticle(post));
  let Content = $derived(article?.default);
</script>

<PageMeta
  title={`${post.title} | ${site.name}`}
  description={post.description}
  path={data.canonicalPath}
  image={post.ogImage}
  lang={post.languages.includes("zh-Hant") ? "zh-tw" : "en"}
  type="article"
  publishedTime={post.date}
  modifiedTime={post.updatedDate}
/>

<article class="article-shell page-shell" lang={post.languages[0]}>
  <header class="article-header">
    <p class="kicker">{post.kind === "daily-learning" ? "Daily learning · 每日學習" : post.categoryLabel}</p>
    <h1>{post.title}</h1>
    <p>{post.description}</p>
    <div class="meta-line">
      <time datetime={post.date}>{post.dateLabel}</time>
      {#if post.tags.length}
        <span>{post.tags.join(" / ")}</span>
      {/if}
    </div>
    {#if post.learningDate}<p class="learning-date">學習日期 / Learning date: {post.learningDate}</p>{/if}
  </header>

  {#key post.slug}
    <ArticleToc items={article?.metadata.articleHeadings} label={post.languages[0] === "zh-Hant" ? "本文目錄" : "Contents"} />
  {/key}

  <div id="article-content" class="article-content longform">
    {#if Content}
      <Content />
    {/if}
  </div>

  <footer class="article-footer">
    <ArticleConnections {post} />
    <a href={data.indexPath}>← {post.section === "professional" ? "Professional writing／專業文章" : "Blog／個人雜記"}</a>
  </footer>
</article>

<style>
  .learning-date { font-size: 0.8rem !important; }
  .article-shell {
    display: grid;
    grid-template-columns: var(--toc-width) minmax(0, var(--article-width)) minmax(0, 1fr);
    grid-template-areas:
      "toc header ."
      "toc body ."
      "toc footer .";
    column-gap: clamp(2rem, 5vw, 3.5rem);
    align-items: start;
    padding-block: clamp(2.6rem, 6.5vw, 5rem);
  }

  .article-content {
    grid-area: body;
    min-inline-size: 0;
  }

  .article-header {
    grid-area: header;
    border-bottom: 1px solid var(--line);
    margin-bottom: clamp(2rem, 6vw, 3rem);
    padding-bottom: clamp(1.5rem, 5vw, 2.4rem);
  }

  h1 {
    margin: 0.9rem 0 1rem;
    color: var(--ink-strong);
    font-size: clamp(2.25rem, 1.3rem + 3.9vw, 4.5rem);
    font-weight: var(--heading-weight);
    line-height: 1.25;
    letter-spacing: -0.025em;
    text-wrap: balance;
    overflow-wrap: anywhere;
  }

  h1:lang(zh-Hant) { letter-spacing: -0.015em; }

  .article-header p:not(.kicker) {
    margin: 0 0 1.1rem;
    color: var(--muted);
    font-size: clamp(1.08rem, 2.4vw, 1.25rem);
    line-height: 1.7;
  }

  .article-footer {
    grid-area: footer;
    border-top: 1px solid var(--line);
    margin-top: 3rem;
    padding-top: 1.2rem;
  }

  @media (max-width: 1040px) {
    .article-shell {
      width: min(100% - 1.35rem, var(--article-width));
      grid-template-columns: minmax(0, 1fr);
      grid-template-areas: "header" "toc" "body" "footer";
    }

    .article-header {
      margin-bottom: 1.25rem;
    }
  }
</style>
