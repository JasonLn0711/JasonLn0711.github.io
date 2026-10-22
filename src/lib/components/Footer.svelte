<script lang="ts">
  import { page } from "$app/state";
  import { homeCopy, site } from "$lib/content/site";
  let zh = $derived(page.url.pathname.startsWith("/zh-tw/"));
  let copy = $derived(homeCopy[zh ? "zh-Hant" : "en"]);
</script>

<footer lang={zh ? "zh-Hant" : "en"}>
  <div class="footer-shell">
    <div class="footer-intro"><h2>{copy.footer}</h2><p>{copy.footerNote}</p><a href={`mailto:${site.email}`}>{site.email}</a></div>
    <nav aria-label={zh ? "其他連結" : "Further links"}>
      <a href={site.learningUrl}>CS Kairos · {zh ? "學習" : "Learn"} ↗</a>
      <a href="/resume/">{copy.cv}</a><a href="/now/">{copy.now}</a><a href={zh ? "/zh-tw/contact/" : "/contact/"}>{copy.contact}</a>
      <a href={site.github} rel="noreferrer" target="_blank">GitHub ↗</a><a href={site.linkedin} rel="noreferrer" target="_blank">LinkedIn ↗</a><a href="/rss.xml">RSS ↗</a>
    </nav>
    <p class="signature">CS Kairos · {site.name} <span>· {zh ? "研究、實作與持續學習" : "Research, practice, and learning"}</span></p>
  </div>
</footer>

<style>
  footer { border-top: 1px solid var(--line-strong); background: var(--surface-strong); }
  .footer-shell { width: min(100% - 2.5rem, 64rem); margin-inline: auto; padding-block: 2.5rem 1.5rem; display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 1.5rem 3rem; }
  h2 { font-size: 1.25rem; font-weight: 600; margin: 0; }
  p { margin: 0.5rem 0; color: var(--muted); }
  .footer-intro a { display: inline-flex; align-items: center; min-height: 44px; overflow-wrap: anywhere; }
  nav { display: grid; grid-template-columns: repeat(2, auto); gap: 0 1.5rem; }
  nav a { display: inline-flex; align-items: center; min-height: 44px; color: var(--ink); font-size: 0.925rem; text-decoration: none; }
  nav a:hover { color: var(--accent); text-decoration: underline; }
  .signature { grid-column: 1 / -1; padding-top: 1.5rem; border-top: 1px solid var(--line); font-size: 0.875rem; }
  @media (max-width: 650px) { .footer-shell { grid-template-columns: 1fr; gap: 1rem; } nav { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0 0.5rem; } .signature span { display: block; } }
</style>
