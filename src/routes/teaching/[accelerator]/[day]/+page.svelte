<script lang="ts">
  import ArticleToc from "#lib/components/ArticleToc.svelte";
  import PageMeta from "#lib/components/PageMeta.svelte";
  import { getTeachingDay } from "#lib/content/teaching.ts";
  import { site, teachingAccelerators } from "#lib/content/site.ts";

  type Accelerator = (typeof teachingAccelerators)[number];
  type CourseDay = Accelerator["days"][number];

  let { data } = $props<{
    data: {
      accelerator: Accelerator;
      day: CourseDay;
    };
  }>();

  let accelerator = $derived<Accelerator>(data.accelerator);
  let day = $derived<CourseDay>(data.day);
  let lesson = $derived(getTeachingDay(day.slug));
  let Content = $derived(lesson?.default);
  let publishedDays = $derived(accelerator.days.filter((item: CourseDay) => item.published));
  let dayIndex = $derived(publishedDays.findIndex((item: CourseDay) => item.slug === day.slug));
  let prevDay = $derived(dayIndex > 0 ? publishedDays[dayIndex - 1] : undefined);
  let nextDay = $derived(dayIndex >= 0 && dayIndex < publishedDays.length - 1 ? publishedDays[dayIndex + 1] : undefined);
</script>

<PageMeta
  title={`${day.title} | ${site.name}`}
  description={day.description}
  path={day.href}
  type="article"
/>

<section class="handout-page">
  <article class="page-shell handout-layout" lang="zh-Hant">
    <div class="handout-intro" lang="en">
      <nav class="back-nav" aria-label="Back navigation">
        <a href={`/teaching/${accelerator.slug}/`}><span aria-hidden="true">←</span> {accelerator.title}</a>
      </nav>

      <header class="article-head">
        <p class="kicker">{day.day} · Student handout</p>
        <h1>{day.title}</h1>
        <p class="lead">{day.description}</p>
        <div class="meta-line">
          <span>{accelerator.date}</span>
        </div>
      </header>
    </div>

    {#key day.slug}
      <ArticleToc items={lesson?.metadata.articleHeadings} label="本課目錄" />
    {/key}

    <div id="article-content" class="longform">
      {#if Content}
        <Content />
      {/if}
    </div>

    <nav class="day-pager" aria-label="Course day navigation" lang="en">
      {#if prevDay}
        <a class="pager-link" rel="prev" href={prevDay.href}>
          <span>← Previous · {prevDay.day}</span>
          <strong>{prevDay.title}</strong>
        </a>
      {/if}
      {#if nextDay}
        <a class="pager-link next" rel="next" href={nextDay.href}>
          <span>Next · {nextDay.day} →</span>
          <strong>{nextDay.title}</strong>
        </a>
      {/if}
    </nav>
  </article>
</section>

<style>
  .handout-page {
    padding-block: var(--page-pad-block);
  }

  .handout-layout {
    display: grid;
    grid-template-columns: var(--toc-width) minmax(0, var(--article-width));
    grid-template-areas:
      "toc header"
      "toc body"
      "toc pager";
    column-gap: clamp(2rem, 5vw, 4rem);
    align-items: start;
    justify-content: center;
  }

  .handout-intro {
    grid-area: header;
  }

  .longform {
    grid-area: body;
    min-inline-size: 0;
  }

  .article-head {
    margin-bottom: clamp(1.8rem, 4.5vw, 2.75rem);
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--line);
  }

  h1 {
    margin: 0.75rem 0 0.9rem;
    color: var(--ink-strong);
    font-size: var(--page-title-size);
    font-weight: var(--heading-weight);
    letter-spacing: -0.025em;
    line-height: 1.12;
    text-wrap: balance;
    overflow-wrap: anywhere;
  }

  .lead {
    margin: 0 0 0.9rem;
    color: var(--muted);
    font-size: clamp(1.04rem, 0.98rem + 0.4vw, 1.2rem);
    line-height: 1.7;
  }

  .day-pager {
    grid-area: pager;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 14rem), 1fr));
    gap: 0.9rem;
    margin-top: 3rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--line);
  }

  .pager-link {
    display: grid;
    gap: 0.25rem;
    min-height: 44px;
    padding: 0.85rem 1rem;
    border: 1px solid var(--line);
    border-radius: var(--radius-sm);
    background: var(--surface);
    text-decoration: none;
    transition:
      border-color 160ms var(--ease),
      background 160ms var(--ease);
  }

  .pager-link:hover {
    border-color: var(--accent);
    background: var(--accent-soft);
  }

  .pager-link span {
    color: var(--muted);
    font-size: 0.8rem;
  }

  .pager-link strong {
    color: var(--ink-strong);
    font-size: 0.96rem;
    font-weight: var(--heading-weight);
    line-height: 1.35;
  }

  .pager-link:hover strong {
    color: var(--accent);
  }

  .pager-link.next {
    text-align: right;
  }

  @media (max-width: 1040px) {
    .handout-layout {
      grid-template-columns: minmax(0, 1fr);
      grid-template-areas: "header" "toc" "body" "pager";
      width: min(100% - 2rem, var(--article-width));
    }

    .article-head {
      margin-bottom: 1.25rem;
    }
  }

  @media (max-width: 620px) {
    .handout-layout {
      width: min(100% - 1.35rem, var(--article-width));
    }

    .pager-link.next {
      text-align: left;
    }
  }
</style>
