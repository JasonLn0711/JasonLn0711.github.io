<script lang="ts">
  import PageMeta from "$lib/components/PageMeta.svelte";
  import { site, talkHighlights } from "$lib/content/site";

  const talk = talkHighlights[0];
  const chapters = [
    {
      title: "Regulatory pressure makes cybersecurity design a product requirement.",
      body:
        "The talk frames AI software medical-device cybersecurity as an engineering and governance requirement, not as a compliance appendix added after product design."
    },
    {
      title: "Threat modeling turns vague AI SaMD risk into a reviewable system map.",
      body:
        "Threat modeling gives teams a shared way to discuss model, data, workflow, vendor, update, and monitoring risk before deployment pressure compresses the conversation."
    },
    {
      title: "Patch SLA, SBOM, and Zero Trust create the operational evidence trail.",
      body:
        "The practical goal is a system that can be maintained, audited, and updated with clear responsibility instead of a one-time security document."
    },
    {
      title: "The useful governance question is inspectability after launch.",
      body:
        "The session closes on how teams preserve logs, review paths, ownership, and change control once AI behavior, model versions, and security conditions continue moving."
    }
  ];
</script>

<PageMeta
  title={`Regulated AI Cybersecurity Talk | ${site.name}`}
  description={talk.summary}
  path="/talks/regulated-ai-cybersecurity/"
/>

<section class="detail-page">
  <div class="content-shell">
    <nav class="back-nav" aria-label="Back navigation">
      <a href="/talks/">Talks</a>
    </nav>
    <article>
      <header class="detail-head">
        <p class="kicker">{talk.event}</p>
        <h1>{talk.title}</h1>
        <p class="lead">{talk.summary}</p>
        <p class="talk-meta">{talk.format} · {talk.schedule} · {talk.venue}</p>
      </header>

      {#each chapters as chapter}
        <section class="plain-section">
          <h2>{chapter.title}</h2>
          <p>{chapter.body}</p>
        </section>
      {/each}
    </article>
  </div>
</section>

<style>
  .detail-page {
    padding-block: clamp(3.5rem, 9vw, 6rem);
  }

  .back-nav {
    margin-bottom: 1.5rem;
    font-family: var(--font-mono);
    font-size: 0.78rem;
  }

  .detail-head {
    margin-bottom: clamp(2.2rem, 6vw, 3.5rem);
  }

  h1 {
    margin: 1rem 0 1rem;
    color: var(--ink-strong);
    font-family: var(--font-serif);
    font-size: clamp(2.4rem, 7vw, 4.4rem);
    font-weight: 500;
    line-height: 1.08;
    text-wrap: balance;
  }

  .lead {
    margin: 0;
    color: var(--ink-strong);
    font-size: clamp(1.1rem, 2vw, 1.28rem);
    line-height: 1.72;
  }

  .talk-meta {
    margin: 1rem 0 0;
    color: var(--muted);
    font-family: var(--font-mono);
    font-size: 0.78rem;
    line-height: 1.6;
  }

  .plain-section {
    border-top: 1px solid var(--line);
    padding-block: clamp(1.8rem, 5vw, 3rem);
  }

  h2 {
    margin: 0 0 1rem;
    color: var(--ink-strong);
    font-family: var(--font-serif);
    font-size: clamp(1.45rem, 3.4vw, 2rem);
    font-weight: 500;
    line-height: 1.2;
  }

  p {
    margin: 0;
    color: var(--muted);
    line-height: 1.74;
  }
</style>
