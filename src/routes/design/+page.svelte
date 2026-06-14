<script lang="ts">
  import PageMeta from "$lib/components/PageMeta.svelte";
  import { designConcepts, site } from "$lib/content/site";
</script>

<PageMeta
  title={`Design Source | ${site.name}`}
  description="Archived design references and source records for earlier Jason Lin website concepts."
  path="/design/"
/>

<section class="section design-hero">
  <div class="page-shell grid-two">
    <div data-reveal>
      <p class="kicker">Design Source</p>
      <h1 class="headline">Archived design references for earlier site concepts.</h1>
    </div>
    <div data-reveal>
      <p class="subhead">
        These images are retained as design-source history. The current public
        site now uses a lighter academic blog style, and generated image text is
        not a source of factual claims.
      </p>
      <div class="btn-row">
        <a class="button primary" href="https://github.com/JasonLn0711/JasonLn0711.github.io/blob/main/docs/site-v3-design-source.zh-tw.md" rel="noreferrer" target="_blank">Read source record <span class="button-mark">→</span></a>
        <a class="button" href="https://github.com/JasonLn0711/JasonLn0711.github.io/blob/main/docs/site-v3-content-inventory.zh-tw.md" rel="noreferrer" target="_blank">Content inventory <span class="button-mark">→</span></a>
      </div>
    </div>
  </div>
</section>

<section class="section concept-gallery">
  <div class="page-shell gallery">
    {#each designConcepts as concept, index}
      <article class="concept panel" data-reveal>
        <div class="concept-copy">
          <span class="maturity">{String(index + 1).padStart(2, "0")}</span>
          <h2>{concept.title}</h2>
          <p>{concept.purpose}</p>
          <p class="translation">{concept.translation}</p>
        </div>
        <a href={concept.image} aria-label={`Open ${concept.title} reference image`}>
          <img src={concept.image} alt={`${concept.title} v3.0 design reference`} loading={index < 2 ? "eager" : "lazy"} />
        </a>
      </article>
    {/each}
  </div>
</section>

<style>
  .design-hero {
    padding-top: 11rem;
  }

  .grid-two {
    align-items: end;
  }

  .gallery {
    display: grid;
    gap: 1.4rem;
  }

  .concept {
    display: grid;
    grid-template-columns: minmax(280px, 0.36fr) minmax(0, 1fr);
    gap: 1rem;
    padding: 1rem;
  }

  .concept-copy {
    display: grid;
    align-content: center;
    gap: 0.9rem;
    padding: clamp(1rem, 3vw, 2rem);
  }

  .concept h2 {
    margin: 0;
    font-size: clamp(1.7rem, 3vw, 3rem);
    line-height: 1;
  }

  .concept p {
    color: var(--muted);
    line-height: 1.65;
  }

  .concept .translation {
    color: var(--accent);
  }

  .concept img {
    width: 100%;
    border-radius: calc(var(--radius-lg) - 0.45rem);
    border: 1px solid var(--line);
  }

  @media (max-width: 900px) {
    .design-hero {
      padding-top: 8rem;
    }

    .concept {
      grid-template-columns: 1fr;
    }
  }
</style>
