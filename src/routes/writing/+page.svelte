<script lang="ts">
  import PageMeta from "$lib/components/PageMeta.svelte";
  import { site, writings } from "$lib/content/site";
</script>

<PageMeta
  title={`Writing Archive | ${site.name}`}
  description="Field notes, essays, and reasoning surfaces around trustworthy AI, speech evidence, security, and systems design."
  path="/writing/"
/>

<section class="section writing-page">
  <div class="page-shell writing-layout">
    <article class="featured panel" data-reveal>
      <p class="kicker">Writing Archive / Reasoning Layer</p>
      <h1 class="headline">Field notes and reasoning archive.</h1>
      <p class="subhead">
        Writing here records how a system decision is shaped: evidence,
        uncertainty, review, boundaries, and what should be tested next.
      </p>
      <a class="button primary" href={`/writing/${writings[0].slug}/`}>Read featured essay <span class="button-mark">→</span></a>
    </article>
    <div class="note-list">
      {#each writings as writing}
        <a class="note panel-soft" href={`/writing/${writing.slug}/`} data-reveal>
          <span class="mono amber">{writing.date}</span>
          <h2>{writing.title}</h2>
          <p>{writing.summary}</p>
          <small>{writing.category} · {writing.readTime} · {writing.tags.join(" / ")}</small>
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
  .writing-page {
    padding-top: 10.5rem;
  }

  .writing-layout {
    display: grid;
    grid-template-columns: minmax(280px, 0.48fr) minmax(0, 1fr);
    gap: 1rem;
    align-items: start;
  }

  .featured {
    position: sticky;
    top: 7.5rem;
    display: grid;
    gap: 1.2rem;
    min-height: 560px;
    align-content: center;
    padding: clamp(1.4rem, 4vw, 3rem);
  }

  .note-list {
    display: grid;
    gap: 1rem;
  }

  .note {
    display: grid;
    gap: 0.8rem;
    padding: clamp(1.2rem, 3vw, 1.7rem);
  }

  .note h2 {
    margin: 0;
    font-size: clamp(1.5rem, 3vw, 3rem);
    line-height: 1;
  }

  .note p,
  .note small {
    color: var(--muted);
    line-height: 1.65;
  }

  @media (max-width: 960px) {
    .writing-page {
      padding-top: 8rem;
    }

    .writing-layout {
      grid-template-columns: 1fr;
    }

    .featured {
      position: static;
      min-height: auto;
    }
  }
</style>
