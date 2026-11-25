<script lang="ts">
  import PageMeta from "./PageMeta.svelte";
  import RecentWriting from "./RecentWriting.svelte";
  import HomeArticle from "./HomeArticle.svelte";
  import { professionalPosts } from "#lib/content/blog.ts";
  import { featuredWriting, latestWriting } from "#lib/content/home.ts";
  import { homeCopy, homeFeaturedSlugs, homeWork, site } from "#lib/content/site.ts";

  let { locale = "en" }: { locale?: "en" | "zh-Hant" } = $props();
  let zh = $derived(locale === "zh-Hant");
  let copy = $derived(homeCopy[locale]);
  const featured = featuredWriting(professionalPosts, homeFeaturedSlugs);
  const latest = latestWriting(professionalPosts, featured);
</script>

<PageMeta
  title={`${site.name} | ${zh ? "AI、資安與學習筆記" : "Notes on AI, cybersecurity & learning"}`}
  description={copy.intro}
  path={zh ? "/zh-tw/" : "/"}
  lang={zh ? "zh-tw" : "en"}
/>
<svelte:head>
  <link rel="alternate" hreflang="en" href={`${site.url}/`} />
  <link rel="alternate" hreflang="zh-Hant" href={`${site.url}/zh-tw/`} />
  <link rel="alternate" hreflang="x-default" href={`${site.url}/`} />
</svelte:head>

<div class="home" lang={locale}>
  <header class="scholar-head">
    <img
      src="/images/headshot-160.webp"
      srcset="/images/headshot-160.webp 160w, /images/headshot-256.webp 256w, /images/headshot-384.webp 384w"
      sizes="(max-width: 42em) 88px, 112px"
      width="112"
      height="144"
      alt={site.name}
    />
    <div class="scholar-copy">
      <h1 lang="en">{site.name}</h1>
      <p class="role">{copy.role}</p>
      <p class="bio">{copy.intro}</p>
      <nav class="scholar-links" aria-label={zh ? "個人連結" : "Profile links"}>
        <a href="/about/">{zh ? "關於我" : "Bio"}</a>
        <a href="/resume/">{copy.cv}</a>
        <a href={zh ? "/zh-tw/contact/" : "/contact/"}>{copy.contact}</a>
        <a href={site.github} rel="noreferrer" target="_blank">GitHub <span aria-hidden="true">↗</span></a>
        <a href={site.linkedin} rel="noreferrer" target="_blank">LinkedIn <span aria-hidden="true">↗</span></a>
      </nav>
    </div>
  </header>

  <section class="home-section" id="selected-writing" aria-labelledby="selected-title" tabindex="-1">
    <h2 id="selected-title">{copy.featured}</h2>
    {#if featured.length > 0}
      <div class="entry-list">
        {#each featured as post (post.slug)}
          <HomeArticle {post} {locale} />
        {/each}
      </div>
    {:else}
      <p>{copy.empty} <a href="/teaching/">{copy.emptyLink} →</a></p>
    {/if}
  </section>

  <section class="home-section" id="latest-writing" aria-labelledby="latest-title" tabindex="-1">
    <h2 id="latest-title">{copy.latest}</h2>
    <RecentWriting posts={latest} {locale} />
  </section>

  <section class="home-section" id="research-and-practice" aria-labelledby="work-title" tabindex="-1">
    <h2 id="work-title">{copy.work}</h2>
    <ul class="work-list">
      {#each homeWork as item (item.href)}
        <li>
          <div class="work-meta">
            <span>{zh ? item.kindZh : item.kind}</span>
            <span>{zh ? item.statusZh : item.status}</span>
          </div>
          <div class="work-body">
            <h3><a href={item.href}>{zh ? item.titleZh : item.title}</a></h3>
            <p>{zh ? item.summaryZh : item.summary}</p>
          </div>
        </li>
      {/each}
    </ul>
    <div class="section-links">
      <a href="/research/">{zh ? "研究" : "Research"} <span aria-hidden="true">→</span></a>
      <a href="/projects/">{zh ? "作品" : "Projects"} <span aria-hidden="true">→</span></a>
      <a href="/teaching/">{zh ? "教學" : "Teaching"} <span aria-hidden="true">→</span></a>
    </div>
  </section>
</div>

<style>
  .home {
    width: min(100% - 2.5rem, 48rem);
    margin-inline: auto;
    padding-block: clamp(2.75rem, 6vw, 4.75rem) clamp(3.5rem, 7vw, 5.5rem);
  }

  .scholar-head {
    display: grid;
    grid-template-columns: 7rem minmax(0, 1fr);
    gap: 1.5rem clamp(1.5rem, 4vw, 2.5rem);
    align-items: start;
    padding-block-end: clamp(2.25rem, 5vw, 3.25rem);
  }

  .scholar-head img {
    inline-size: 7rem;
    height: auto;
    aspect-ratio: 7 / 9;
    object-fit: cover;
    object-position: center top;
    padding: 3px;
    background: var(--surface);
    border: 1px solid var(--line-strong);
    border-radius: 2px;
    margin-block-start: 0.2rem;
  }

  .scholar-copy {
    min-inline-size: 0;
  }

  h1 {
    margin: 0;
    color: var(--ink-strong);
    font-size: clamp(1.75rem, 1.35rem + 1.15vw, 2.35rem);
    font-weight: var(--heading-weight);
    letter-spacing: -0.02em;
    line-height: 1.25;
  }

  .role {
    margin: 0.35rem 0 0;
    color: var(--muted);
    font-size: 0.98rem;
    line-height: 1.65;
  }

  .bio {
    margin: 0.85rem 0 0;
    max-inline-size: 58ch;
    color: var(--ink);
    font-size: 1rem;
    line-height: 1.82;
    text-wrap: pretty;
  }

  .scholar-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0 1.25rem;
    margin-block-start: 0.65rem;
  }

  .scholar-links a {
    display: inline-flex;
    align-items: center;
    gap: 0.25em;
    min-height: 44px;
    font-size: 0.92rem;
    text-decoration: none;
  }

  .scholar-links a:hover {
    text-decoration: underline;
    text-underline-offset: 0.22em;
  }

  .home-section {
    border-block-start: 1px solid var(--line);
    padding-block: clamp(2.25rem, 4.5vw, 3.25rem);
    scroll-margin-block-start: 5rem;
  }

  .home-section:focus-visible {
    outline-offset: 0.35rem;
  }

  h2 {
    margin: 0 0 1.5rem;
    color: var(--ink-strong);
    font-size: 1.08rem;
    font-weight: var(--heading-weight);
    letter-spacing: -0.01em;
    line-height: 1.4;
  }

  h2:lang(zh-Hant) {
    letter-spacing: 0.02em;
  }

  .entry-list,
  .work-list {
    display: grid;
    gap: 1.5rem;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .work-list li {
    display: grid;
    grid-template-columns: 8.5rem minmax(0, 1fr);
    gap: 0.35rem 1.75rem;
    align-items: start;
  }

  .work-meta {
    display: grid;
    gap: 0.2rem;
    padding-block-start: 0.2rem;
    color: var(--muted);
    font-size: 0.82rem;
    line-height: 1.5;
  }

  .work-meta span:first-child {
    color: var(--ink);
    font-weight: var(--heading-weight);
  }

  .work-body {
    min-inline-size: 0;
  }

  .work-body h3 {
    margin: 0;
    color: var(--ink-strong);
    font-size: 1.06rem;
    font-weight: var(--heading-weight);
    line-height: 1.48;
  }

  .work-body h3 a {
    color: var(--ink-strong);
    text-decoration: none;
  }

  .work-body h3 a:hover {
    color: var(--accent);
    text-decoration: underline;
    text-underline-offset: 0.22em;
  }

  .work-body p {
    margin: 0.35rem 0 0;
    color: var(--muted);
    font-size: 0.95rem;
    line-height: 1.82;
    text-wrap: pretty;
  }

  .section-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0 1.75rem;
    margin-block-start: 1.5rem;
  }

  .section-links a {
    display: inline-flex;
    align-items: center;
    gap: 0.3em;
    min-height: 44px;
    font-size: 0.92rem;
    text-decoration: none;
  }

  .section-links a:hover {
    text-decoration: underline;
    text-underline-offset: 0.22em;
  }

  @media (max-width: 42em) {
    .home {
      width: min(100% - 1.5rem, 48rem);
    }

    .scholar-head {
      grid-template-columns: minmax(0, 1fr);
      gap: 1.15rem;
    }

    .scholar-head img {
      inline-size: 5.5rem;
    }

    .work-list li {
      grid-template-columns: minmax(0, 1fr);
      gap: 0.3rem;
    }

    .work-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 0 0.65rem;
      padding-block-start: 0;
    }
  }
</style>
