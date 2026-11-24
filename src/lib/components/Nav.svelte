<script lang="ts">
  import { browser } from "$app/env";
  import { page } from "$app/state";
  import { alternatePage, siteLanguage } from "#lib/content/localization.ts";
  import { homeCopy, site } from "#lib/content/site.ts";

  let mobileMenu: HTMLDetailsElement | undefined = $state();
  let menuToggle: HTMLElement | undefined = $state();
  let pathname = $derived(page.url.pathname);
  let locale = $derived(siteLanguage(pathname));
  let zh = $derived(locale === "zh-Hant");
  let copy = $derived(homeCopy[locale]);
  let alternate = $derived(alternatePage(pathname));
  let alternateHref = $derived(browser && alternate.isPaired
    ? alternate.href + page.url.search + page.url.hash
    : alternate.href);
  let post = $derived(page.data.post);
  let bilingual = $derived(post?.path === pathname &&
    post.languages.includes("en") && post.languages.includes("zh-Hant"));

  $effect(() => { pathname; closeMenu(); });

  function localizedHref(href: string) {
    return zh && href === "/event-notes/" ? `/zh-tw${href}` : href;
  }

  function current(href: string) {
    if (pathname === href) return "page";
    return pathname.startsWith(href) ? "location" : undefined;
  }

  function closeMenu() {
    if (mobileMenu) mobileMenu.open = false;
  }

  function closeOnEscape(event: KeyboardEvent) {
    if (event.key !== "Escape" || !mobileMenu?.open) return;
    closeMenu();
    menuToggle?.focus();
  }

  function closeOnFocusLeave(event: FocusEvent & { currentTarget: HTMLDetailsElement }) {
    if (event.relatedTarget instanceof Node && !event.currentTarget.contains(event.relatedTarget)) {
      closeMenu();
    }
  }
</script>

<svelte:window onkeydown={closeOnEscape} />

{#snippet navLinks()}
  {#each site.nav as item}
    {@const href = localizedHref(item.href)}
    <a aria-current={current(href)} {href} onclick={closeMenu}>{zh ? item.labelZh : item.label}</a>
  {/each}
{/snippet}

<a class="skip-link" href="#main" lang={locale}>{copy.skip}</a>
<header class="site-header" lang={locale}>
  <div class="nav-shell">
    <a class="brand" href={zh ? "/zh-tw/" : "/"} aria-label={`${site.shortName} · ${copy.home}`}>{site.shortName}<span aria-hidden="true">.</span></a>
    <nav class="desktop-nav" aria-label={zh ? "主要導覽" : "Primary"}>
      {@render navLinks()}
    </nav>
    <div class="nav-actions">
      {#if bilingual}
        <nav class="article-languages" aria-label="Article languages">
          <a class="language" href="#zh" lang="zh-Hant" aria-label="閱讀本文中文">中文</a>
          <a class="language" href="#en" lang="en" aria-label="Read this article in English">EN</a>
        </nav>
      {:else}
        <a class="language" href={alternateHref} lang={alternate.locale} hreflang={alternate.locale}>{alternate.label}</a>
      {/if}
      <details class="mobile-nav" bind:this={mobileMenu} onfocusout={closeOnFocusLeave}>
        <summary bind:this={menuToggle}>{zh ? "選單" : "Menu"}<span aria-hidden="true"></span></summary>
        <nav aria-label={zh ? "手機主要導覽" : "Mobile primary"}>
          {@render navLinks()}
        </nav>
      </details>
    </div>
  </div>
</header>

<style>
  .site-header { container: site-navigation / inline-size; position: sticky; top: 0; z-index: 10; background: var(--bg); border-bottom: 1px solid var(--line); }
  .nav-shell { --nav-height: 4rem; width: min(100% - 2.5rem, var(--page-width)); min-height: var(--nav-height); margin-inline: auto; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0 0.5rem; }
  .brand { font-size: 1.1rem; font-weight: 700; color: var(--ink-strong); text-decoration: none; white-space: nowrap; min-height: 44px; display: inline-flex; align-items: center; }
  .brand span { color: var(--accent); }
  .desktop-nav { display: none; align-items: center; gap: 0.5rem; }
  .desktop-nav a, .language, summary { display: inline-flex; align-items: center; justify-content: center; min-height: 44px; padding: 0.4rem 0.65rem; color: var(--muted); text-decoration: none; font-size: 0.925rem; transition: color 160ms ease, background 160ms ease; }
  a:hover, nav a[aria-current] { color: var(--accent); }
  nav a[aria-current] { text-decoration: underline; text-underline-offset: 0.35em; }
  .desktop-nav a { border-radius: 0.75rem; }
  .desktop-nav a:is(:hover, [aria-current]) { background: var(--bg-soft); }
  .nav-actions { display: flex; align-items: center; gap: 0.5rem; }
  .language { color: var(--accent); border-left: 1px solid var(--line); padding-left: 1rem; }
  .article-languages { display: flex; border-inline-start: 1px solid var(--line); }
  .article-languages .language { border: 0; padding-inline: 0.45rem; }
  summary { cursor: pointer; list-style: none; color: var(--ink); gap: 0.25rem; }
  summary::-webkit-details-marker { display: none; }
  summary span::before { content: "+"; }
  details[open] summary span::before { content: "−"; }
  .mobile-nav nav {
    position: absolute;
    inset-block-start: 100%;
    inset-inline: 0;
    display: grid;
    max-block-size: calc(100vh - var(--nav-height) - 1px);
    max-block-size: calc(100dvh - var(--nav-height) - 1px);
    overflow-y: auto;
    overscroll-behavior-y: contain;
    padding: 0.75rem 1.25rem;
    background: var(--bg);
    border-bottom: 1px solid var(--line-strong);
  }
  .mobile-nav nav a { display: flex; align-items: center; min-height: 48px; color: var(--ink); text-decoration: none; padding-inline: 0.5rem; }
  .mobile-nav nav a:hover, summary:hover { background: var(--accent-soft); }
  @container site-navigation (min-width: 70rem) {
    .nav-shell { --nav-height: 4.5rem; flex-wrap: nowrap; gap: 1.5rem; }
    .desktop-nav { display: flex; }
    .mobile-nav { display: none; }
  }
  @media (max-height: 28rem) {
    .mobile-nav nav { padding-block: 0.375rem; }
    .mobile-nav nav a { min-height: 44px; }
  }
  @media (max-width: 380px) { .nav-shell { --nav-height: 4rem; width: calc(100% - 2rem); } .language { padding-left: 0.65rem; } .nav-actions { gap: 0; } }
</style>
