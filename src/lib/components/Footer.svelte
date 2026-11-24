<script lang="ts">
  import { page } from "$app/state";
  import { homeCopy, site } from "#lib/content/site.ts";
  let zh = $derived(page.url.pathname.startsWith("/zh-tw/"));
  let copy = $derived(homeCopy[zh ? "zh-Hant" : "en"]);
</script>

<footer lang={zh ? "zh-Hant" : "en"}>
  <div class="footer-shell">
    <div class="footer-intro"><h2>{copy.footer}</h2><p>{copy.footerNote}</p><a href={`mailto:${site.email}`}>{site.email}</a></div>
    <nav aria-label={zh ? "頁尾連結" : "Footer links"}>
      <div>
        <h3>{zh ? "工作與聯絡" : "Work & contact"}</h3>
        <ul>
          <li><a href="/resume/">{copy.cv}</a></li>
          <li><a href="/now/">{copy.now}</a></li>
          <li><a href={zh ? "/zh-tw/contact/" : "/contact/"}>{copy.contact}</a></li>
        </ul>
      </div>
      <div>
        <h3>{zh ? "學習與追蹤" : "Learn & follow"}</h3>
        <ul>
          <li><a href={site.learningUrl}>CS Kairos · {zh ? "學習" : "Learn"} ↗</a></li>
          <li><a href={site.github} rel="noreferrer" target="_blank">GitHub ↗</a></li>
          <li><a href={site.linkedin} rel="noreferrer" target="_blank">LinkedIn ↗</a></li>
          <li><a href="/rss.xml">RSS ↗</a></li>
        </ul>
      </div>
    </nav>
    <p class="signature">CS Kairos · {site.name} <span>· {zh ? "研究、實作與持續學習" : "Research, practice, and learning"}</span></p>
  </div>
</footer>

<style>
  footer { border-top: 1px solid var(--line-strong); background: var(--surface-strong); }
  .footer-shell { width: min(100% - 2.5rem, 64rem); margin-inline: auto; padding-block: 2.5rem 1.5rem; display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 1.5rem 3rem; }
  h2 { font-size: 1.25rem; font-weight: var(--heading-weight); margin: 0; }
  p { margin: 0.5rem 0; color: var(--muted); }
  .footer-intro a { display: inline-flex; align-items: center; min-height: 44px; overflow-wrap: anywhere; }
  nav { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem 2rem; }
  nav h3 { margin: 0 0 0.3rem; font-size: 0.975rem; line-height: 1.4; }
  nav ul { margin: 0; padding: 0; list-style: none; }
  nav a { display: inline-flex; align-items: center; min-height: 44px; color: var(--ink); font-size: 0.925rem; text-decoration: none; overflow-wrap: anywhere; }
  nav a:hover { color: var(--accent); text-decoration: underline; }
  .signature { grid-column: 1 / -1; padding-top: 1.5rem; border-top: 1px solid var(--line); font-size: 0.875rem; }
  @media (max-width: 650px) { .footer-shell { grid-template-columns: 1fr; gap: 1rem; } nav { grid-template-columns: repeat(auto-fit, minmax(min(100%, 8em), 1fr)); } .signature span { display: block; } }
</style>
