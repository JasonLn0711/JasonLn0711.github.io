<script lang="ts">
  import { page } from "$app/state";
  import { homeCopy, site } from "$lib/content/site";
  let open = $state(false);
  let menuToggle: HTMLElement;
  let pathname = $derived(page.url.pathname);
  let zh = $derived(pathname.startsWith("/zh-tw/"));
  let copy = $derived(homeCopy[zh ? "zh-Hant" : "en"]);
  $effect(() => { pathname; open = false; });
  function active(href: string) { return pathname.startsWith(href); }
  function closeOnEscape(event: KeyboardEvent) {
    if (event.key === "Escape" && open) { open = false; menuToggle?.focus(); }
  }
</script>

<svelte:window onkeydown={closeOnEscape} />

<a class="skip-link" href="#main">{copy.skip}</a>
<header class="site-header" lang={zh ? "zh-Hant" : "en"}>
  <div class="nav-shell">
    <a class="brand" href={zh ? "/zh-tw/" : "/"} aria-label={`${site.shortName} · ${copy.home}`}>{site.shortName}<span aria-hidden="true">.</span></a>
    <nav class="desktop-nav" aria-label={zh ? "主要導覽" : "Primary"}>
      {#each site.nav as item}
        <a aria-current={active(item.href) ? "page" : undefined} href={item.href}>{zh ? item.labelZh : item.label}</a>
      {/each}
    </nav>
    <div class="nav-actions">
      <a class="language" href={zh ? "/" : "/zh-tw/"} lang={zh ? "en" : "zh-Hant"} hreflang={zh ? "en" : "zh-Hant"}>{zh ? "English" : "繁中"}</a>
      <details class="mobile-nav" bind:open>
        <summary bind:this={menuToggle}>{zh ? "選單" : "Menu"}<span aria-hidden="true"> +</span></summary>
        <nav aria-label={zh ? "手機主要導覽" : "Mobile primary"}>
          {#each site.nav as item}
            <a aria-current={active(item.href) ? "page" : undefined} href={item.href} onclick={() => open = false}>{zh ? item.labelZh : item.label}</a>
          {/each}
        </nav>
      </details>
    </div>
  </div>
</header>

<style>
  .site-header { position: sticky; top: 0; z-index: 10; background: var(--bg); border-bottom: 1px solid var(--line); }
  .nav-shell { width: min(100% - 2.5rem, var(--page-width)); min-height: 4.5rem; margin-inline: auto; display: flex; align-items: center; justify-content: space-between; gap: 1.5rem; }
  .brand { font-size: 1.1rem; font-weight: 700; color: var(--ink-strong); text-decoration: none; white-space: nowrap; min-height: 44px; display: inline-flex; align-items: center; }
  .brand span { color: var(--accent); }
  .desktop-nav { display: flex; align-items: center; gap: 0.5rem; }
  .desktop-nav a, .language, summary { display: inline-flex; align-items: center; justify-content: center; min-height: 44px; padding: 0.4rem 0.65rem; color: var(--muted); text-decoration: none; font-size: 0.925rem; transition: color 160ms ease, background 160ms ease; }
  a:hover, a[aria-current="page"] { color: var(--accent); }
  .desktop-nav a[aria-current="page"] { text-decoration: underline; text-underline-offset: 0.4em; }
  .nav-actions { display: flex; align-items: center; gap: 0.5rem; }
  .language { color: var(--accent); border-left: 1px solid var(--line); padding-left: 1rem; }
  .mobile-nav { display: none; }
  summary { cursor: pointer; list-style: none; color: var(--ink); gap: 0.25rem; }
  summary::-webkit-details-marker { display: none; }
  .mobile-nav nav { position: absolute; top: 100%; left: 0; right: 0; display: grid; padding: 0.75rem 1.25rem; background: var(--bg); border-bottom: 1px solid var(--line-strong); }
  .mobile-nav nav a { display: flex; align-items: center; min-height: 48px; color: var(--ink); text-decoration: none; padding-inline: 0.5rem; }
  .mobile-nav nav a:hover, summary:hover { background: var(--accent-soft); }
  @media (max-width: 800px) { .desktop-nav { display: none; } .mobile-nav { display: block; } .nav-shell { gap: 0.5rem; min-height: 4rem; } }
  @media (max-width: 380px) { .nav-shell { width: calc(100% - 2rem); } .language { padding-left: 0.65rem; } .nav-actions { gap: 0; } }
</style>
