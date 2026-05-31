<script lang="ts">
  import PageMeta from "$lib/components/PageMeta.svelte";
  import {
    audienceRoutes,
    projects,
    researchPillars,
    site,
    talkHighlights,
    writings,
    workingPrinciples
  } from "$lib/content/site";
</script>

<PageMeta title={site.defaultTitle} description={site.description} path="/" />

<section class="hero">
  <div class="hero-bg" aria-hidden="true"></div>
  <div class="page-shell hero-inner">
    <div class="hero-copy">
      <p class="kicker">Researcher · AI Agents · Cybersecurity</p>
      <h1 class="display">{site.name}</h1>
      <p class="hero-subtitle">Trustworthy AI systems for evidence-heavy work.</p>
      <div class="btn-row">
        <a class="button primary" href="/research/">Explore research <span class="button-mark">→</span></a>
        <a class="button" href="/projects/">View systems <span class="button-mark">→</span></a>
      </div>
    </div>
    <div class="hero-side panel-soft">
      <span class="mono amber">Not just intelligent.</span>
      <span>Accountable.</span>
      <span>Inspectable.</span>
      <span>Useful in context.</span>
    </div>
  </div>
</section>

<section class="section route-atlas">
  <div class="page-shell atlas-grid">
    <div class="atlas-intro" data-reveal>
      <p class="kicker">Living Research Atlas</p>
      <h2 class="headline">Seven paths. One research agenda.</h2>
      <p class="subhead">
        Different visitors need different starting points. Choose the route that
        matches the decision in front of you.
      </p>
      <div class="legend">
        <span><i></i> Recommended paths</span>
        <span><i class="amber-dot"></i> Signals and evidence</span>
      </div>
    </div>
    <div class="route-map" aria-label="Audience routes">
      <div class="route-question panel" data-reveal>
        <h3>What are you trying to decide?</h3>
        <p>Pick the path that matches your role, need, and next useful action.</p>
      </div>
      {#each audienceRoutes as route, index}
        <a class={`route-card panel r${index + 1}`} href={route.href} data-reveal>
          <span class="route-number mono">{String(index + 1).padStart(2, "0")}</span>
          <strong>{route.title}</strong>
          <small>{route.audience}</small>
        </a>
      {/each}
    </div>
  </div>
</section>

<section class="section research-preview">
  <div class="page-shell">
    <div class="grid-two section-head">
      <div data-reveal>
        <p class="kicker">Research Atlas</p>
        <h2 class="headline">Evidence-aware directions for real-world AI systems.</h2>
      </div>
      <p class="subhead" data-reveal>
        Three territories share one throughline: build AI agents and systems
        that remain useful, inspectable, and trustworthy where it matters most.
      </p>
    </div>
    <div class="territory-grid">
      {#each researchPillars as pillar, index}
        <a class="territory panel" href={`/research/${pillar.slug}/`} data-reveal>
          <div class="territory-top">
            <span class="mono">0{index + 1}</span>
            <span class="maturity">{pillar.maturity}</span>
          </div>
          <h3>{pillar.shortTitle}</h3>
          <p>{pillar.summary}</p>
          <div class="ledger">
            {#each pillar.evidence as item}
              <span>{item}</span>
            {/each}
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<section class="section project-lab">
  <div class="page-shell project-grid">
    <div data-reveal>
      <p class="kicker">Project Evidence Lab</p>
      <h2 class="headline">Systems you can inspect.</h2>
      <p class="subhead">Open the benches. Follow the evidence. Read maturity before claims.</p>
    </div>
    <div class="project-bench panel" data-reveal>
      <div>
        <p class="kicker">Featured system bench</p>
        <h3>{projects[0].title}</h3>
        <p>{projects[0].summary}</p>
      </div>
      <div class="pipeline" data-draw-line>
        {#each ["Ingest", "ASR", "Segment", "Retrieve", "Evidence pack"] as step}
          <span>{step}</span>
        {/each}
      </div>
      <a class="button" href={`/projects/${projects[0].slug}/`}>Inspect system <span class="button-mark">→</span></a>
    </div>
    <div class="project-stack">
      {#each projects.slice(1) as project}
        <a class="project-card panel" href={`/projects/${project.slug}/`} data-reveal>
          <span class="maturity">{project.readiness}</span>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
        </a>
      {/each}
    </div>
  </div>
</section>

<section class="section talks-preview">
  <div class="page-shell talks-grid">
    <div class="talk-hero" data-reveal>
      <p class="kicker">Public framing</p>
      <h2 class="headline">Talks turn complex systems into shared decisions.</h2>
      <p class="subhead">
        Speaking surfaces connect AI agents, medical cybersecurity, threat modeling,
        and evidence-aware deployment for mixed technical audiences.
      </p>
      <a class="button primary" href="/talks/">Review talks <span class="button-mark">→</span></a>
    </div>
    <div class="talk-list panel">
      {#each talkHighlights as talk}
        <a href={talk.href} data-reveal>
          <span class="mono amber">{talk.event}</span>
          <strong>{talk.title}</strong>
          <small>{talk.format} · {talk.schedule}</small>
        </a>
      {/each}
    </div>
  </div>
</section>

<section class="section writing-preview">
  <div class="page-shell writing-grid">
    <article class="featured-writing panel" data-reveal>
      <p class="kicker">Writing Archive</p>
      <h2>Field notes and reasoning archive.</h2>
      <p>{writings[0].summary}</p>
      <a class="button" href={`/writing/${writings[0].slug}/`}>Read essay <span class="button-mark">→</span></a>
    </article>
    <div class="note-list">
      {#each writings.slice(1) as writing}
        <a class="note-row panel-soft" href={`/writing/${writing.slug}/`} data-reveal>
          <span class="mono">{writing.date}</span>
          <strong>{writing.title}</strong>
          <small>{writing.tags.join(" · ")} · {writing.readTime}</small>
        </a>
      {/each}
      <a class="button" href="/writing/">View archive <span class="button-mark">→</span></a>
    </div>
  </div>
</section>

<section class="section about-preview">
  <div class="page-shell about-grid">
    <div class="portrait-card" data-reveal>
      <img src={site.avatar} alt="Jason Chia-Sheng Lin" />
      <div class="portrait-caption panel">
        <strong>Calm human core.</strong>
        <span>Evidence in hand. Systems in service.</span>
      </div>
    </div>
    <div data-reveal>
      <p class="kicker">About / Working With Me</p>
      <h2 class="headline">A calm, evidence-led approach to serious AI systems.</h2>
      <p class="subhead">
        I work where uncertainty is high and the margin for error is low. The
        collaboration style should feel clear, relaxed, and grounded.
      </p>
    </div>
    <div class="principle-grid">
      {#each workingPrinciples as item, index}
        <article class="panel principle" data-reveal>
          <span class="maturity">0{index + 1}</span>
          <h3>{item.title}</h3>
          <p class="accent-line">{item.subtitle}</p>
          <p>{item.body}</p>
        </article>
      {/each}
    </div>
  </div>
</section>

<section class="section contact-preview">
  <div class="page-shell contact-band panel">
    <div data-reveal>
      <p class="kicker">Let's start a conversation</p>
      <h2 class="headline">Send the rough version.</h2>
      <p class="subhead">
        If you have a hard problem, a regulated context, or even a messy idea,
        you can start with the context you already have.
      </p>
    </div>
    <div class="btn-row" data-reveal>
      <a class="button primary" href={`mailto:${site.email}`}>Email Jason <span class="button-mark">→</span></a>
      <a class="button" href="/contact/">See intents <span class="button-mark">→</span></a>
    </div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    min-height: 100dvh;
    display: grid;
    align-items: center;
    overflow: hidden;
    padding-top: 5rem;
  }

  .hero-bg {
    position: absolute;
    inset: 0;
    z-index: -1;
    background:
      linear-gradient(90deg, rgba(3, 8, 7, 0.95), rgba(3, 8, 7, 0.58), rgba(3, 8, 7, 0.9)),
      linear-gradient(0deg, rgba(3, 8, 7, 0.9), rgba(3, 8, 7, 0.1) 52%, rgba(3, 8, 7, 0.86)),
      url("/images/headshot.jpg") 73% center / min(58vw, 860px) auto no-repeat;
    filter: saturate(0.88) contrast(1.08);
  }

  .hero-inner {
    position: relative;
    display: grid;
    gap: 2rem;
    align-items: center;
  }

  .hero-copy {
    display: grid;
    gap: 1.7rem;
    justify-items: center;
    text-align: center;
  }

  .hero-subtitle {
    margin: 0;
    color: var(--ink);
    font-size: clamp(1.35rem, 2.5vw, 2.2rem);
    font-weight: 760;
  }

  .hero-side {
    position: absolute;
    right: 0;
    top: 46%;
    display: grid;
    gap: 0.55rem;
    max-width: 220px;
    padding: 1rem;
    color: var(--muted);
  }

  .route-atlas {
    overflow: hidden;
  }

  .atlas-grid {
    display: grid;
    grid-template-columns: 0.45fr 1fr;
    gap: 2rem;
    align-items: center;
  }

  .legend {
    display: grid;
    gap: 0.8rem;
    margin-top: 2rem;
    color: var(--muted);
    font-size: 0.92rem;
  }

  .legend span {
    display: flex;
    gap: 0.7rem;
    align-items: center;
  }

  .legend i {
    width: 0.65rem;
    height: 0.65rem;
    border-radius: 999px;
    background: var(--accent);
    box-shadow: 0 0 18px rgba(105, 230, 204, 0.65);
  }

  .legend .amber-dot {
    background: var(--amber);
  }

  .route-map {
    position: relative;
    min-height: 760px;
  }

  .route-map::before {
    position: absolute;
    inset: 11% 18%;
    border: 1px solid rgba(105, 230, 204, 0.34);
    border-radius: 999px;
    content: "";
    box-shadow: 0 0 70px rgba(105, 230, 204, 0.12);
  }

  .route-question {
    position: absolute;
    top: 37%;
    left: 35%;
    width: 30%;
    padding: 2rem;
    text-align: center;
  }

  .route-question h3 {
    margin: 0;
    font-size: clamp(1.7rem, 3vw, 3rem);
    line-height: 1;
  }

  .route-question p {
    color: var(--muted);
  }

  .route-card {
    position: absolute;
    display: grid;
    gap: 0.5rem;
    width: min(280px, 32%);
    padding: 1.2rem;
    transition:
      transform 520ms var(--ease),
      border-color 520ms var(--ease);
  }

  .route-card:hover {
    transform: translateY(-4px);
    border-color: var(--accent);
  }

  .route-number,
  .maturity {
    color: var(--amber);
    font-size: 0.78rem;
    font-weight: 850;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .route-card strong {
    color: var(--accent);
    font-size: 1.25rem;
    line-height: 1.1;
  }

  .route-card small {
    color: var(--muted);
    line-height: 1.5;
  }

  .r1 {
    top: 0;
    left: 33%;
  }

  .r2 {
    top: 12%;
    right: 0;
  }

  .r3 {
    top: 39%;
    right: 4%;
  }

  .r4 {
    right: 18%;
    bottom: 0;
  }

  .r5 {
    left: 24%;
    bottom: 0;
  }

  .r6 {
    top: 44%;
    left: 0;
  }

  .r7 {
    top: 20%;
    left: 15%;
  }

  .section-head {
    margin-bottom: 2rem;
  }

  .territory-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
  }

  .territory {
    display: grid;
    gap: 1.2rem;
    min-height: 560px;
    padding: 1.5rem;
  }

  .territory-top {
    display: flex;
    justify-content: space-between;
  }

  .territory h3,
  .project-bench h3,
  .project-card h3 {
    margin: 0;
    color: var(--ink-strong);
    font-size: clamp(1.45rem, 2.8vw, 2.35rem);
    line-height: 1.02;
  }

  .territory p,
  .project-card p,
  .project-bench p,
  .principle p {
    color: var(--muted);
    line-height: 1.62;
  }

  .ledger {
    display: grid;
    gap: 0.7rem;
    margin-top: auto;
  }

  .ledger span {
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 0.8rem;
    padding: 0.8rem;
    background: rgba(255, 255, 255, 0.035);
  }

  .project-grid {
    display: grid;
    grid-template-columns: 0.75fr 1.25fr 0.7fr;
    gap: 1rem;
    align-items: start;
  }

  .project-bench {
    display: grid;
    gap: 1.5rem;
    padding: 1.5rem;
  }

  .pipeline {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0.7rem;
    padding-block: 0.5rem;
  }

  .pipeline span {
    display: grid;
    min-height: 4.4rem;
    place-items: center;
    border: 1px solid var(--line);
    border-radius: 0.8rem;
    color: var(--accent);
    background: rgba(105, 230, 204, 0.07);
    font-family: var(--font-mono);
    font-size: 0.78rem;
  }

  .project-stack,
  .note-list {
    display: grid;
    gap: 1rem;
  }

  .project-card {
    display: grid;
    gap: 0.8rem;
    padding: 1.2rem;
  }

  .talks-grid,
  .writing-grid,
  .about-grid {
    display: grid;
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    gap: clamp(1.5rem, 4vw, 4rem);
    align-items: start;
  }

  .talk-hero {
    min-height: 560px;
    display: grid;
    align-content: center;
    gap: 1.25rem;
    border-radius: var(--radius-lg);
    padding: clamp(1.4rem, 4vw, 3rem);
    background:
      linear-gradient(90deg, rgba(3, 8, 7, 0.95), rgba(3, 8, 7, 0.4)),
      url("/images/headshot.jpg") right center / min(46vw, 720px) auto no-repeat;
  }

  .talk-list {
    display: grid;
    gap: 0;
    padding: 0.5rem;
  }

  .talk-list a {
    display: grid;
    gap: 0.55rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    padding: 1.15rem;
  }

  .talk-list a:last-child {
    border-bottom: 0;
  }

  .talk-list small,
  .note-row small {
    color: var(--muted);
  }

  .featured-writing {
    min-height: 520px;
    display: grid;
    align-content: center;
    gap: 1.2rem;
    padding: clamp(1.5rem, 4vw, 3rem);
  }

  .featured-writing h2 {
    margin: 0;
    max-width: 680px;
    font-size: clamp(2.3rem, 5vw, 5rem);
    line-height: 0.95;
  }

  .featured-writing p {
    max-width: 58ch;
    color: var(--muted);
    line-height: 1.7;
  }

  .note-row {
    display: grid;
    gap: 0.45rem;
    padding: 1rem;
  }

  .about-grid {
    grid-template-columns: 0.58fr 0.55fr 1fr;
  }

  .portrait-card {
    position: relative;
  }

  .portrait-card img {
    width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    border-radius: var(--radius-lg);
    filter: saturate(0.92) contrast(1.04);
  }

  .portrait-caption {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    left: 1rem;
    display: grid;
    gap: 0.35rem;
    padding: 1rem;
  }

  .principle-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  .principle {
    padding: 1.2rem;
  }

  .principle h3 {
    margin-bottom: 0.2rem;
  }

  .accent-line {
    color: var(--accent) !important;
  }

  .contact-band {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 2rem;
    align-items: center;
    padding: clamp(1.5rem, 4vw, 3rem);
  }

  @media (max-width: 1120px) {
    .hero-side {
      position: static;
      justify-self: center;
    }

    .atlas-grid,
    .project-grid,
    .talks-grid,
    .writing-grid,
    .about-grid,
    .contact-band {
      grid-template-columns: 1fr;
    }

    .route-map {
      display: grid;
      min-height: auto;
      gap: 1rem;
    }

    .route-map::before {
      display: none;
    }

    .route-question,
    .route-card {
      position: static;
      width: 100%;
    }

    .territory-grid,
    .principle-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 640px) {
    .hero {
      min-height: 92dvh;
      padding-top: 5.5rem;
    }

    .hero-bg {
      background:
        linear-gradient(90deg, rgba(3, 8, 7, 0.95), rgba(3, 8, 7, 0.58), rgba(3, 8, 7, 0.9)),
        linear-gradient(0deg, rgba(3, 8, 7, 0.92), rgba(3, 8, 7, 0.25) 52%, rgba(3, 8, 7, 0.9)),
        url("/images/headshot.jpg") center 15% / 120vw auto no-repeat;
    }

    .hero-copy {
      justify-items: start;
      text-align: left;
    }

    .btn-row,
    .button {
      width: 100%;
    }

    .pipeline {
      grid-template-columns: 1fr;
    }
  }
</style>
