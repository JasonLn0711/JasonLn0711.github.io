<script lang="ts">
  import PageMeta from "./PageMeta.svelte";
  import RecentWriting from "./RecentWriting.svelte";
  import HomeArticle from "./HomeArticle.svelte";
  import { professionalPosts } from "#lib/content/blog.ts";
  import { featuredWriting, latestWriting } from "#lib/content/home.ts";
  import { homeCopy, homeFeaturedArtwork, homeFeaturedSlugs, homeTopics, homeWork, site } from "#lib/content/site.ts";

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

<div class="home page-shell" lang={locale}>
  <header class="intro">
    <div class="intro-copy">
      <h1><span>{copy.headline[0]}</span> <span>{copy.headline[1]}</span></h1>
      <p>{copy.intro}</p>
    </div>
    <div class="profile">
      <img
        src="/images/headshot-160.webp"
        srcset="/images/headshot-160.webp 160w, /images/headshot-256.webp 256w, /images/headshot-384.webp 384w"
        sizes="(max-width: 42em) 64px, 80px"
        width="80"
        height="80"
        alt=""
      />
      <div>
        <a href="/about/">{site.name}</a>
        <p>{copy.role}</p>
      </div>
    </div>
  </header>

  <nav class="section-index" aria-label={copy.contents}>
    <p aria-hidden="true">{copy.contents}</p>
    <ul>
      <li><a href="#selected-writing">{copy.featured}</a></li>
      <li><a href="#latest-writing">{copy.latest}</a></li>
      <li><a href="#research-and-practice">{copy.work}</a></li>
      <li><a href="#topic-index">{copy.topics}</a></li>
    </ul>
  </nav>

  <div class="directory">
    <section class="selected" id="selected-writing" aria-labelledby="selected-title" tabindex="-1">
      <h2 id="selected-title">{copy.featured}</h2>
      {#each featured as post, index (post.slug)}
        <HomeArticle {post} {locale} featured={index === 0} cover={homeFeaturedArtwork[post.slug] ?? post.cover} />
      {:else}
        <p>{copy.empty} <a href="/teaching/">{copy.emptyLink} →</a></p>
      {/each}
    </section>

    <section class="latest" id="latest-writing" aria-labelledby="latest-title" tabindex="-1">
      <h2 id="latest-title">{copy.latest}</h2>
      <RecentWriting posts={latest} {locale} />
    </section>

    <section class="research" id="research-and-practice" aria-labelledby="work-title" tabindex="-1">
      <h2 id="work-title">{copy.work}</h2>
      <ul class="work-list">
        {#each homeWork as item (item.href)}
          <li>
            <p class="work-meta">{zh ? item.kindZh : item.kind} · {zh ? item.statusZh : item.status}</p>
            <h3><a href={item.href}>{zh ? item.titleZh : item.title} <span aria-hidden="true">↗</span></a></h3>
            <p>{zh ? item.summaryZh : item.summary}</p>
          </li>
        {/each}
      </ul>
    </section>

    <section class="topics" id="topic-index" aria-labelledby="topics-title" tabindex="-1">
      <h2 id="topics-title">{copy.topics}</h2>
      <ul>
        {#each homeTopics as topic (topic.href)}
          <li>
            <a href={topic.href}>{zh ? topic.zh : topic.en} <span aria-hidden="true">↗</span></a>
            <p>{zh ? topic.typeZh : topic.type}</p>
          </li>
        {/each}
      </ul>
    </section>
  </div>

  <p class="personal-link" id="personal-title">
    <a href="/blog/">{copy.personal} <span aria-hidden="true">→</span></a>
  </p>
</div>

<style>
  .home { line-height: 1.7; }

  .intro {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(12rem, 18rem);
    gap: 1.5rem clamp(1.5rem, 5vw, 4rem);
    align-items: end;
    padding-block: clamp(2.7rem, 6vw, 5.5rem) clamp(1.75rem, 4vw, 3rem);
  }

  h1 {
    margin: 0;
    color: var(--ink-strong);
    font-size: clamp(2.45rem, 1.75rem + 3.1vw, 4.9rem);
    font-weight: var(--heading-weight);
    letter-spacing: -0.025em;
    line-height: 1.25;
    overflow-wrap: anywhere;
    text-wrap: balance;
  }

  h1 span { display: inline-block; }
  h1:lang(zh-Hant) { font-size: clamp(2.15rem, 1.4rem + 3.1vw, 4.15rem); letter-spacing: -0.015em; line-height: 1.18; }

  .intro-copy p {
    max-inline-size: 55ch;
    margin: 0.9rem 0 0;
    color: var(--muted);
    font-size: clamp(1.05rem, 0.95rem + 0.4vw, 1.25rem);
    line-height: 1.6;
    text-wrap: pretty;
  }

  .intro-copy p:lang(zh-Hant) { text-wrap: balance; }

  .profile {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    align-items: center;
    gap: 0.9rem;
    min-inline-size: 0;
    padding-block: 0.5rem;
  }

  .profile img { inline-size: 5rem; height: auto; aspect-ratio: 1; object-fit: cover; border-radius: var(--radius-sm); }
  .profile a { font-weight: 680; color: var(--ink-strong); overflow-wrap: anywhere; }
  .profile p { color: var(--muted); margin: 0.2rem 0 0; font-size: 0.88rem; line-height: 1.5; }

  .section-index {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 0 1.35rem;
    padding-block: 0.45rem;
    border-block: 1px solid var(--line-strong);
    font-size: 0.94rem;
  }

  .section-index p { margin: 0; color: var(--ink-strong); font-weight: var(--strong-weight); }
  ul { padding: 0; margin: 0; list-style: none; }
  .section-index ul { display: flex; align-items: baseline; flex-wrap: wrap; gap: 0 1.35rem; }
  .section-index a { display: inline-flex; align-items: center; min-block-size: 2.75rem; }

  .directory {
    display: grid;
    grid-template-columns: minmax(0, 1.9fr) minmax(0, 1fr);
    align-items: start;
    gap: clamp(2rem, 5vw, 3.5rem) clamp(1.5rem, 4vw, 3rem);
    padding-block: clamp(1.7rem, 4vw, 2.6rem) clamp(2.25rem, 5vw, 3.5rem);
  }

  .directory section { min-inline-size: 0; scroll-margin-block-start: 5.25rem; }
  .directory section:focus-visible { outline-offset: 0.35rem; }

  h2 {
    margin: 0;
    padding-block-end: 0.7rem;
    border-block-end: 1px solid var(--line-strong);
    color: var(--ink-strong);
    font-size: clamp(1.5rem, 1.2rem + 1vw, 2.15rem);
    line-height: 1.2;
    letter-spacing: -0.025em;
    text-wrap: balance;
  }

  .latest {
    padding: clamp(0.9rem, 2vw, 1.5rem);
    border-block-start: 2px solid var(--accent);
    border-radius: 0 0 var(--radius-sm) var(--radius-sm);
    background: var(--surface-strong);
  }

  .latest h2 { margin-block-end: 1rem; }
  .latest h2, .topics h2 { font-size: clamp(1.45rem, 1.2rem + 0.6vw, 1.85rem); }
  .work-list li, .topics li { padding-block: 0.85rem; border-block-end: 1px solid var(--line); }
  .work-list h3 { margin: 0.2rem 0; color: var(--ink-strong); font-size: 1.18rem; line-height: 1.4; }
  .work-list p, .topics p { margin: 0; color: var(--muted); font-size: 0.94rem; }
  .work-list .work-meta { font-size: 0.79rem; }
  .topics a { font-weight: var(--heading-weight); }
  .topics span, .work-list h3 span { font-size: 0.8em; white-space: nowrap; }

  .personal-link { margin: 0; padding-block: 0.75rem 1.4rem; border-block-start: 1px solid var(--line); }
  .personal-link a { display: inline-flex; gap: 0.35em; align-items: center; min-block-size: 2.75rem; }

  @media (max-width: 59em) {
    .directory { grid-template-columns: minmax(0, 1fr); }
  }

  @media (max-width: 42em) {
    .intro { grid-template-columns: minmax(0, 1fr); align-items: start; }
    .profile { border-block-start: 1px solid var(--line); padding-block-start: 0.95rem; }
    .profile img { inline-size: 4rem; }
    .section-index { display: grid; gap: 0.15rem; padding-block-start: 0.7rem; }
    .section-index ul { gap: 0 1rem; }
  }
</style>
