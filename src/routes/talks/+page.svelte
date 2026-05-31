<script lang="ts">
  import PageMeta from "$lib/components/PageMeta.svelte";
  import { site, talkHighlights } from "$lib/content/site";
</script>

<PageMeta
  title={`Talks | ${site.name}`}
  description="Speaking and public framing for AI agents, trustworthy AI, medical cybersecurity, and deployment risk."
  path="/talks/"
/>

<section class="section talks-page">
  <div class="page-shell talks-layout">
    <div class="talk-stage" data-reveal>
      <p class="kicker">Talks / Speaking</p>
      <h1 class="headline">Public explanations for serious AI systems.</h1>
      <p class="subhead">
        Talks are organized by audience fit and decision value: evidence,
        system design, security, resilience, and deployment constraints.
      </p>
      <a class="button primary" href="/talks/regulated-ai-cybersecurity/">Open CYBERSEC narrative <span class="button-mark">→</span></a>
    </div>
    <div class="fit-matrix panel" data-reveal>
      <h2>Topic fit matrix</h2>
      <div class="matrix-row header">
        <span>Audience</span>
        <span>Evidence</span>
        <span>System design</span>
        <span>Security</span>
        <span>Deployment</span>
      </div>
      {#each ["Researchers", "Engineers", "Security teams", "Policy leads"] as audience, index}
        <div class="matrix-row">
          <strong>{audience}</strong>
          <span>{index === 1 ? "○" : "●"}</span>
          <span>{index === 2 ? "○" : "●"}</span>
          <span>{index === 0 ? "○" : "●"}</span>
          <span>{index === 0 ? "○" : "●"}</span>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="section talk-timeline">
  <div class="page-shell timeline">
    {#each talkHighlights as talk}
      <a class="talk-card panel" href={talk.href} data-reveal>
        <span class="maturity">{talk.event}</span>
        <h2>{talk.title}</h2>
        <p>{talk.summary}</p>
        <small>{talk.format} · {talk.schedule} · {talk.venue}</small>
      </a>
    {/each}
  </div>
</section>

<style>
  .talks-page {
    min-height: 100dvh;
    display: grid;
    align-items: center;
    padding-top: 8rem;
  }

  .talks-layout {
    display: grid;
    grid-template-columns: 0.95fr 1.05fr;
    gap: 1rem;
    align-items: center;
  }

  .talk-stage {
    min-height: 620px;
    display: grid;
    align-content: center;
    gap: 1.25rem;
    border-radius: var(--radius-lg);
    padding: clamp(1.4rem, 4vw, 3rem);
    background:
      linear-gradient(90deg, rgba(3, 8, 7, 0.96), rgba(3, 8, 7, 0.46)),
      url("/images/headshot.jpg") right center / min(44vw, 720px) auto no-repeat;
  }

  .fit-matrix {
    padding: 1.2rem;
  }

  .fit-matrix h2 {
    margin: 0 0 1rem;
    font-size: clamp(1.8rem, 3vw, 3rem);
  }

  .matrix-row {
    display: grid;
    grid-template-columns: 1.1fr repeat(4, 0.7fr);
    gap: 0.5rem;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    padding: 1rem 0;
  }

  .matrix-row:last-child {
    border-bottom: 0;
  }

  .matrix-row span {
    color: var(--accent);
    text-align: center;
  }

  .matrix-row.header span {
    color: var(--muted);
    font-size: 0.86rem;
  }

  .timeline {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
  }

  .talk-card {
    display: grid;
    gap: 0.9rem;
    padding: 1.3rem;
  }

  .talk-card h2 {
    margin: 0;
    font-size: clamp(1.35rem, 2.6vw, 2.4rem);
    line-height: 1.04;
  }

  .talk-card p,
  .talk-card small {
    color: var(--muted);
    line-height: 1.6;
  }

  @media (max-width: 1000px) {
    .talks-layout,
    .timeline {
      grid-template-columns: 1fr;
    }

    .talk-stage {
      min-height: 520px;
      background:
        linear-gradient(90deg, rgba(3, 8, 7, 0.96), rgba(3, 8, 7, 0.52)),
        url("/images/headshot.jpg") right center / 92vw auto no-repeat;
    }

    .matrix-row {
      grid-template-columns: 1fr;
    }

    .matrix-row span {
      text-align: left;
    }
  }
</style>
