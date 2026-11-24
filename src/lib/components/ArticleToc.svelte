<script lang="ts">
  import type { ArticleHeading } from "#lib/content/article-headings.ts";

  let { items = [], label = "Contents" }: { items?: ArticleHeading[]; label?: string } = $props();
  let activeId = $state("");
  let mobileContents: HTMLDetailsElement | undefined = $state();

  function selectHeading(id: string) {
    activeId = id;
    if (mobileContents) mobileContents.open = false;
  }

  $effect(() => {
    const observer = new IntersectionObserver((entries) => {
      const first = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (first) activeId = first.target.id;
    }, { rootMargin: "-16% 0px -65% 0px" });

    for (const { id } of items) {
      const heading = document.getElementById(id);
      if (heading) observer.observe(heading);
    }
    return () => observer.disconnect();
  });
</script>

{#snippet sectionLinks()}
  <ul>
    {#each items as item (item.id)}
      <li class:subsection={item.level === 3}>
        <a href={"#" + item.id} aria-current={activeId === item.id ? "location" : undefined}
          onclick={() => selectHeading(item.id)}>
          {item.label}
        </a>
      </li>
    {/each}
  </ul>
{/snippet}

{#if items.length > 0}
  <div class="article-toc">
    <nav class="desktop-contents" aria-label={label}>
      <p>{label}</p>
      {@render sectionLinks()}
    </nav>
    <details class="mobile-contents" bind:this={mobileContents}>
      <summary>{label}</summary>
      <nav aria-label={label}>
        {@render sectionLinks()}
      </nav>
    </details>
  </div>
{/if}

<style>
  .article-toc {
    grid-area: toc;
    position: sticky;
    top: 5.5rem;
    max-height: calc(100dvh - 7rem);
    overflow: auto;
    padding: 0.35rem 0.4rem 0.35rem 0;
    font-size: 0.86rem;
  }

  p {
    margin: 0 0 0.8rem;
    color: var(--ink);
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  ul {
    display: grid;
    gap: 0.18rem;
    margin: 0;
    padding: 0;
    border-inline-start: 1px solid var(--line);
    list-style: none;
  }

  a {
    display: block;
    border-inline-start: 2px solid transparent;
    margin-inline-start: -1px;
    padding: 0.34rem 0.25rem 0.34rem 0.8rem;
    color: var(--muted);
    line-height: 1.35;
    overflow-wrap: anywhere;
  }

  a:hover,
  a[aria-current] {
    color: var(--accent);
    border-inline-start-color: var(--accent);
  }

  a:focus-visible {
    outline-offset: -2px;
  }

  .subsection a {
    padding-inline-start: 1.6rem;
  }

  .mobile-contents {
    display: none;
  }

  @media (max-width: 1040px) {
    .article-toc {
      position: static;
      max-height: none;
      overflow: visible;
      padding: 0;
      margin-block: 0 1.5rem;
    }

    .desktop-contents {
      display: none;
    }

    .mobile-contents {
      display: block;
      border: 1px solid var(--line-strong);
      border-radius: var(--radius-sm);
      background: var(--surface);
    }

    summary {
      min-height: 44px;
      padding: 0.65rem 0.9rem;
      cursor: pointer;
      color: var(--ink-strong);
      font-size: 0.95rem;
      font-weight: 650;
    }

    .mobile-contents nav {
      padding: 0 0.75rem 0.65rem;
    }

    .mobile-contents a {
      display: flex;
      align-items: center;
      min-height: 44px;
    }
  }
</style>
