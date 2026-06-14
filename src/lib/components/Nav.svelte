<script lang="ts">
  import { page } from "$app/stores";
  import { site } from "$lib/content/site";

  let open = false;

  $: pathname = $page.url.pathname;

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }
</script>

<a class="skip-link" href="#main">Skip to content</a>

<header class="site-header">
  <div class="nav-shell">
    <a class="brand" href="/" aria-label="Jason Chia-Sheng Lin home">{site.shortName}</a>
    <nav class="desktop-nav" aria-label="Primary">
      {#each site.nav as item}
        <a class:active={isActive(item.href)} href={item.href}>{item.label}</a>
      {/each}
    </nav>
    <div class="nav-actions">
      <a href={site.github} aria-label="GitHub" rel="noreferrer" target="_blank">GH</a>
      <a href={site.linkedin} aria-label="LinkedIn" rel="noreferrer" target="_blank">IN</a>
      <button
        class="menu-button"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        on:click={() => (open = !open)}
      >
        <span></span>
        <span></span>
      </button>
    </div>
  </div>

  {#if open}
    <div class="mobile-menu">
      {#each site.nav as item}
        <a href={item.href} on:click={() => (open = false)}>{item.label}</a>
      {/each}
      <a href="/zh-tw/" on:click={() => (open = false)}>繁體中文</a>
    </div>
  {/if}
</header>

<style>
  .site-header {
    position: sticky;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;
    border-bottom: 1px solid var(--line);
    background: color-mix(in srgb, var(--bg) 92%, transparent);
    backdrop-filter: blur(10px);
  }

  .nav-shell {
    display: grid;
    grid-template-columns: minmax(10rem, 1fr) auto minmax(7rem, 1fr);
    gap: 0.75rem;
    align-items: center;
    width: min(100% - 2rem, var(--page-width));
    min-height: 4.2rem;
    margin-inline: auto;
  }

  .brand {
    color: var(--ink-strong);
    font-size: 1rem;
    font-weight: 750;
    text-decoration: none;
    white-space: nowrap;
  }

  .desktop-nav {
    display: flex;
    gap: 0.4rem;
    align-items: center;
    justify-content: center;
  }

  .desktop-nav a,
  .nav-actions a {
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    padding: 0.42rem 0.55rem;
    color: var(--muted);
    font-size: 0.92rem;
    line-height: 1;
    text-decoration: none;
    transition:
      color 160ms var(--ease),
      background 160ms var(--ease),
      border-color 160ms var(--ease);
  }

  .desktop-nav a:hover,
  .desktop-nav a.active {
    color: var(--accent);
    background: var(--accent-soft);
    border-color: var(--accent-soft);
  }

  .nav-actions {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: flex-end;
  }

  .nav-actions a {
    display: grid;
    width: 2.35rem;
    height: 2.35rem;
    place-items: center;
    padding: 0;
    font-family: var(--font-mono);
    font-size: 0.76rem;
    border-color: var(--line);
  }

  .menu-button {
    display: none;
    position: relative;
    width: 2.35rem;
    height: 2.35rem;
    border: 1px solid var(--line);
    border-radius: var(--radius-sm);
    background: var(--surface);
  }

  .menu-button span {
    position: absolute;
    left: 0.62rem;
    width: 1.1rem;
    height: 1px;
    background: var(--ink);
    transition: transform 160ms var(--ease);
  }

  .menu-button span:first-child {
    top: 0.84rem;
    transform: rotate(var(--r1, 0deg)) translateY(var(--y1, 0));
  }

  .menu-button span:last-child {
    bottom: 0.84rem;
    transform: rotate(var(--r2, 0deg)) translateY(var(--y2, 0));
  }

  .menu-button[aria-expanded="true"] {
    --r1: 45deg;
    --r2: -45deg;
    --y1: 0.28rem;
    --y2: -0.28rem;
  }

  .mobile-menu {
    display: none;
  }

  @media (max-width: 1120px) {
    .nav-shell {
      grid-template-columns: 1fr auto;
    }

    .desktop-nav {
      display: none;
    }

    .menu-button {
      display: block;
    }

    .nav-actions a {
      display: none;
    }

    .mobile-menu {
      display: grid;
      gap: 0.4rem;
      width: min(100% - 2rem, var(--page-width));
      margin: 0 auto 0.7rem;
      border: 1px solid var(--line);
      border-radius: var(--radius-md);
      padding: 0.55rem;
      background: var(--surface);
    }

    .mobile-menu a {
      border-radius: var(--radius-sm);
      padding: 0.72rem 0.8rem;
      color: var(--ink);
      text-decoration: none;
      transition:
        color 160ms var(--ease),
        background 160ms var(--ease);
    }

    .mobile-menu a:hover {
      color: var(--accent);
      background: var(--accent-soft);
    }
  }

  @media (max-width: 620px) {
    .nav-shell {
      width: min(100% - 1.35rem, 520px);
      min-height: 3.6rem;
    }

    .brand {
      max-width: 210px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
</style>
