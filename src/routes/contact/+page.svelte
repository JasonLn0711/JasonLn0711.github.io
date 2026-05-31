<script lang="ts">
  import IntentAccordion from "$lib/components/IntentAccordion.svelte";
  import PageMeta from "$lib/components/PageMeta.svelte";
  import { site } from "$lib/content/site";
</script>

<PageMeta
  title={`Contact | ${site.name}`}
  description="Start a low-pressure conversation about research, regulated AI, speaking, or a rough early idea."
  path="/contact/"
/>

<section class="section contact-page">
  <div class="page-shell contact-grid">
    <div class="contact-copy" data-reveal>
      <p class="kicker">Let's start a conversation</p>
      <h1 class="display">Send the rough version.</h1>
      <p class="subhead">
        I work on research at the intersection of AI agents, trustworthy
        systems, and real-world deployment. If you have a hard problem, a
        regulated context, or even a messy idea, I would be glad to hear it.
      </p>
      <ul>
        <li>Low pressure: no pitch deck required.</li>
        <li>Evidence first: context is more useful than polish.</li>
        <li>Confidential boundaries: share only what is safe to share.</li>
      </ul>
      <div class="btn-row">
        <a class="button primary" href={`mailto:${site.email}`}>Email Jason <span class="button-mark">→</span></a>
        <a class="button" href="/about/">Conversation principles <span class="button-mark">→</span></a>
      </div>
    </div>
    <IntentAccordion />
  </div>
</section>

<style>
  .contact-page {
    min-height: 100dvh;
    display: grid;
    align-items: center;
    padding-top: 8rem;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: minmax(0, 0.85fr) minmax(320px, 1fr);
    gap: clamp(1.5rem, 5vw, 5rem);
    align-items: center;
  }

  .contact-copy {
    display: grid;
    gap: 1.5rem;
  }

  ul {
    display: grid;
    gap: 0.8rem;
    margin: 0;
    padding: 0;
    list-style: none;
    color: var(--muted);
  }

  li {
    position: relative;
    padding-left: 1.4rem;
    line-height: 1.6;
  }

  li::before {
    position: absolute;
    top: 0.65rem;
    left: 0;
    width: 0.55rem;
    height: 0.55rem;
    border-radius: 999px;
    background: var(--accent);
    content: "";
  }

  @media (max-width: 960px) {
    .contact-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
