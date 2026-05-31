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
    <a class="brand" href="/" aria-label="Jason Chia-Sheng Lin home">{site.name}</a>
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
    <div class="mobile-menu" data-reveal>
      {#each site.nav as item, index}
        <a href={item.href} style={`--i: ${index}`} on:click={() => (open = false)}>{item.label}</a>
      {/each}
      <a href="/zh-tw/" on:click={() => (open = false)}>繁體中文</a>
    </div>
  {/if}
</header>

<style>
  .site-header {
    position: fixed;
    top: 1.35rem;
    right: 0;
    left: 0;
    z-index: 10;
    pointer-events: none;
  }

  .nav-shell {
    display: grid;
    grid-template-columns: minmax(220px, 1fr) auto minmax(150px, 1fr);
    gap: 1rem;
    align-items: center;
    width: min(100% - 32px, 1500px);
    min-height: 4.4rem;
    margin-inline: auto;
    border: 1px solid rgba(255, 255, 255, 0.13);
    border-radius: 999px;
    padding: 0.55rem 0.75rem 0.55rem 1.6rem;
    background: rgba(5, 10, 10, 0.74);
    box-shadow:
      0 18px 60px rgba(0, 0, 0, 0.26),
      inset 0 1px 0 rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(18px);
    pointer-events: auto;
  }

  .brand {
    color: var(--ink-strong);
    font-family: var(--font-mono);
    font-size: clamp(0.78rem, 1.1vw, 0.94rem);
    font-weight: 800;
    letter-spacing: 0.22em;
    text-transform: uppercase;
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
    border-radius: 999px;
    padding: 0.74rem 0.95rem;
    color: var(--muted);
    font-size: 0.95rem;
    line-height: 1;
    transition:
      color 420ms var(--ease),
      background 420ms var(--ease),
      border-color 420ms var(--ease);
  }

  .desktop-nav a:hover,
  .desktop-nav a.active {
    color: var(--ink-strong);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.08);
  }

  .nav-actions {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: flex-end;
  }

  .nav-actions a {
    display: grid;
    width: 2.9rem;
    height: 2.9rem;
    place-items: center;
    padding: 0;
    font-family: var(--font-mono);
    font-size: 0.76rem;
    border-color: rgba(255, 255, 255, 0.12);
  }

  .menu-button {
    display: none;
    position: relative;
    width: 2.9rem;
    height: 2.9rem;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.05);
  }

  .menu-button span {
    position: absolute;
    left: 0.85rem;
    width: 1.1rem;
    height: 1px;
    background: var(--ink);
    transition: transform 420ms var(--ease);
  }

  .menu-button span:first-child {
    top: 1.12rem;
    transform: rotate(var(--r1, 0deg)) translateY(var(--y1, 0));
  }

  .menu-button span:last-child {
    bottom: 1.12rem;
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
      width: min(100% - 32px, 520px);
      margin: 0.75rem auto 0;
      border: 1px solid var(--line);
      border-radius: 1.4rem;
      padding: 1rem;
      background: rgba(5, 10, 10, 0.92);
      backdrop-filter: blur(18px);
      pointer-events: auto;
    }

    .mobile-menu a {
      border-radius: 0.9rem;
      padding: 0.95rem 1rem;
      color: var(--ink);
      background: rgba(255, 255, 255, 0.04);
      transition:
        transform 420ms var(--ease),
        background 420ms var(--ease);
    }

    .mobile-menu a:hover {
      transform: translateX(4px);
      background: rgba(105, 230, 204, 0.12);
    }
  }

  @media (max-width: 620px) {
    .site-header {
      top: 0.75rem;
    }

    .nav-shell {
      width: min(100% - 20px, 520px);
      min-height: 3.85rem;
      padding-left: 1rem;
    }

    .brand {
      max-width: 210px;
      overflow: hidden;
      text-overflow: ellipsis;
      letter-spacing: 0.15em;
    }
  }
</style>
