<script lang="ts">
  import IntentAccordion from "#lib/components/IntentAccordion.svelte";
  import PageMeta from "#lib/components/PageMeta.svelte";
  import { site, zhTw } from "#lib/content/site.ts";
</script>

<PageMeta
  title={`聯絡 | ${site.name}`}
  description={zhTw.contactLead}
  path="/zh-tw/contact/"
  lang="zh-tw"
/>

<section class="section zh-contact" lang="zh-Hant">
  <div class="page-shell contact-grid">
    <div class="contact-copy" data-reveal>
      <p class="kicker">低壓力聯絡入口</p>
      <h1 class="display">{zhTw.contactTitle}</h1>
      <p class="subhead">{zhTw.contactLead}</p>
      <ul>
        <li>低壓力開始：不需要先準備簡報或完整提案。</li>
        <li>證據優先：提供脈絡與問題，比過度包裝更有幫助。</li>
        <li>清楚保密邊界：只需分享安全可公開討論的內容。</li>
      </ul>
      <div class="btn-row">
        <a class="button primary" href={`mailto:${site.email}`}>寄信給 Jason <span class="button-mark" aria-hidden="true">→</span></a>
        <a class="button" href="/about/">看工作方式 <span class="button-mark" aria-hidden="true">→</span></a>
      </div>
    </div>
    <IntentAccordion locale="zh-Hant" />
  </div>
</section>

<style>
  .zh-contact {
    padding-block: clamp(2.6rem, 6vw, 4.75rem);
  }

  .contact-grid {
    display: grid;
    grid-template-columns: minmax(0, 0.88fr) minmax(0, 1fr);
    gap: clamp(2rem, 5vw, 4.5rem);
    align-items: start;
  }

  .contact-copy {
    display: grid;
    gap: 1.25rem;
  }

  ul {
    display: grid;
    gap: 0.7rem;
    margin: 0;
    padding: 0;
    list-style: none;
    color: var(--muted);
  }

  li {
    position: relative;
    padding-left: 1.35rem;
    line-height: 1.65;
  }

  li::before {
    position: absolute;
    top: 0.65rem;
    left: 0;
    width: 0.48rem;
    height: 0.48rem;
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
