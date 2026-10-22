<script lang="ts">
  import PageMeta from "./PageMeta.svelte";
  import RecentWriting from "./RecentWriting.svelte";
  import HomeArticle from "./HomeArticle.svelte";
  import { blogPosts } from "$lib/content/blog";
  import { featuredWriting } from "$lib/content/home";
  import { homeCopy, homeFeaturedSlugs, homeTopics, homeWork, site } from "$lib/content/site";
  let { locale = "en" }: { locale?: "en" | "zh-Hant" } = $props();
  let zh = $derived(locale === "zh-Hant");
  let copy = $derived(homeCopy[locale]);
  const featured = featuredWriting(blogPosts, homeFeaturedSlugs);
</script>

<PageMeta title={`${site.name} | ${zh ? "AI、資安與學習筆記" : "Notes on AI, cybersecurity & learning"}`} description={copy.intro} path={zh ? "/zh-tw/" : "/"} lang={zh ? "zh-tw" : "en"} />
<svelte:head>
  <link rel="alternate" hreflang="en" href={`${site.url}/`} />
  <link rel="alternate" hreflang="zh-Hant" href={`${site.url}/zh-tw/`} />
  <link rel="alternate" hreflang="x-default" href={`${site.url}/`} />
</svelte:head>

<div class="home" lang={locale}>
  <header class="intro">
    <div class="intro-top">
      <div><p class="eyebrow">{copy.eyebrow}</p><h1>{site.shortName}</h1></div>
      <img src={site.avatar} alt="Jason Chia-Sheng Lin" width="128" height="128" fetchpriority="high" />
    </div>
    <p class="role">{site.name} · {copy.role}</p>
    <p class="intro-lead">{copy.intro}</p>
    <p class="intro-detail">{copy.detail}</p>
    <div class="intro-links"><a class="start" href="#selected-writing">{copy.start} ↓</a><a href="/about/">{copy.about} →</a></div>
  </header>

  <section class="reading-section" id="selected-writing" aria-labelledby="selected-title">
    <div class="section-heading"><h2 id="selected-title">{copy.featured}</h2><p>{copy.featuredNote}</p></div>
    <div>
      {#each featured as post (post.slug)}<HomeArticle {post} {locale} featured />{:else}
        <p>{copy.empty} <a href="/teaching/">{copy.emptyLink} →</a></p>
      {/each}
    </div>
  </section>

  <section class="reading-section" aria-labelledby="latest-title">
    <div class="section-heading"><h2 id="latest-title">{copy.latest}</h2><p>{copy.latestNote}</p></div>
    <RecentWriting {locale} />
  </section>

  <section class="reading-section" aria-labelledby="topics-title">
    <div class="section-heading"><h2 id="topics-title">{copy.topics}</h2><p>{copy.topicsNote}</p></div>
    <ul class="topics">
      {#each homeTopics as topic}
        <li><a href={topic.href}><span>{zh ? topic.zh : topic.en}<span aria-hidden="true"> ↗</span></span><small>{zh ? topic.typeZh : topic.type}</small></a></li>
      {/each}
    </ul>
  </section>

  <section class="reading-section" aria-labelledby="work-title">
    <div class="section-heading"><h2 id="work-title">{copy.work}</h2><p>{copy.workNote}</p></div>
    <div class="work-list">
      {#each homeWork as item}
        <article>
          <p class="work-meta">{zh ? item.kindZh : item.kind} · {zh ? item.statusZh : item.status}</p>
          <h3><a href={item.href}>{zh ? item.titleZh : item.title} <span aria-hidden="true">↗</span></a></h3>
          <p>{zh ? item.summaryZh : item.summary}</p>
        </article>
      {/each}
    </div>
  </section>
</div>

<style>
  .home { width: min(100% - 2.5rem, 64rem); margin-inline: auto; font-size: 17px; line-height: 1.8; }
  .intro { padding-block: clamp(2.5rem, 6vw, 4.5rem) 3.5rem; max-width: 48rem; }
  .intro-top { display: flex; justify-content: space-between; align-items: center; gap: 1.5rem; }
  .eyebrow { margin: 0; color: var(--accent); font-size: 0.875rem; font-weight: 600; letter-spacing: 0.035em; }
  h1 { margin: 0.3rem 0 0; font-family: var(--font-serif); font-size: clamp(2.9rem, 6vw, 4.4rem); font-weight: 500; line-height: 1.15; letter-spacing: -0.035em; }
  .intro img { flex: 0 0 auto; width: 128px; height: 128px; border-radius: 50%; object-fit: cover; object-position: center 30%; }
  .role { color: var(--muted); font-size: 0.875rem; margin: 1.25rem 0; }
  .intro-lead { font-size: clamp(1.15rem, 2vw, 1.4rem); line-height: 1.75; max-width: 58ch; margin: 0; }
  .intro-detail { color: var(--muted); max-width: 65ch; margin: 0.75rem 0 0; }
  .intro-links { display: flex; flex-wrap: wrap; gap: 1.5rem; margin-top: 1.25rem; }
  .intro-links a { display: inline-flex; align-items: center; min-height: 44px; }
  .start { font-weight: 600; }
  .reading-section { display: grid; grid-template-columns: 12rem minmax(0, 1fr); gap: clamp(2rem, 5vw, 4rem); padding-block: 3rem; border-top: 1px solid var(--line-strong); scroll-margin-top: 6rem; }
  .reading-section > * { min-width: 0; }
  h2 { font-family: var(--font-serif); font-size: 1.65rem; font-weight: 500; line-height: 1.3; margin: 0; text-wrap: balance; }
  .section-heading p { font-size: 0.925rem; color: var(--muted); margin: 0.75rem 0 0; line-height: 1.8; }
  .topics { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0 2rem; }
  .topics a { display: flex; flex-direction: column; padding: 1rem 0; text-decoration: none; border-bottom: 1px solid var(--line); }
  .topics li:nth-child(-n+2) a { padding-top: 0; }
  .topics a > span { font-size: 1.1rem; font-weight: 600; }
  .topics a:hover > span { text-decoration: underline; text-underline-offset: 0.2em; }
  small { color: var(--muted); font-size: 0.875rem; margin-top: 0.25rem; }
  .work-list article + article { border-top: 1px solid var(--line); margin-top: 1.5rem; padding-top: 1.5rem; }
  .work-list h3 { font-size: 1.15rem; line-height: 1.5; margin: 0.4rem 0; }
  .work-list h3 a { color: var(--ink-strong); text-decoration: none; }
  .work-list h3 a:hover { color: var(--accent); text-decoration: underline; }
  .work-list p { color: var(--muted); margin: 0; max-width: 65ch; }
  .work-list .work-meta { font-size: 0.875rem; }
  .home[lang="zh-Hant"] h1 { font-family: var(--font-serif); }
  .home[lang="zh-Hant"] h2 { font-family: var(--font-sans); font-weight: 600; }
  @media (max-width: 760px) {
    .reading-section { grid-template-columns: 1fr; gap: 1.75rem; padding-block: 2.5rem; }
    .section-heading p { margin-top: 0.4rem; }
    .intro { padding-bottom: 2.5rem; }
  }
  @media (max-width: 480px) {
    .intro img { width: 80px; height: 80px; }
    .intro-top { gap: 1rem; }
    .eyebrow { font-size: 0.8rem; letter-spacing: 0; }
    .topics { grid-template-columns: 1fr; }
    .topics li:nth-child(2) a { padding-top: 1rem; }
  }
</style>
