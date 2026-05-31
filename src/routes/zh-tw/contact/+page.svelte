<script lang="ts">
  import IntentAccordion from "$lib/components/IntentAccordion.svelte";
  import PageMeta from "$lib/components/PageMeta.svelte";
  import { site, zhTw } from "$lib/content/site";
</script>

<PageMeta
  title={`聯絡 | ${site.name}`}
  description={zhTw.contactLead}
  path="/zh-tw/contact/"
  lang="zh-tw"
/>

<section class="section zh-contact">
  <div class="page-shell contact-grid">
    <div data-reveal>
      <p class="kicker">低壓力聯絡入口</p>
      <h1 class="display">{zhTw.contactTitle}</h1>
      <p class="subhead">{zhTw.contactLead}</p>
      <div class="btn-row">
        <a class="button primary" href={`mailto:${site.email}`}>寄信給 Jason <span class="button-mark">→</span></a>
        <a class="button" href="/about/">看工作方式 <span class="button-mark">→</span></a>
      </div>
    </div>
    <IntentAccordion />
  </div>
</section>

<style>
  .zh-contact {
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

  @media (max-width: 960px) {
    .contact-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
