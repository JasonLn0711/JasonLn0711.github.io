<script lang="ts">
  import { onMount } from "svelte";

  type TocItem = {
    id: string;
    label: string;
    level: 2 | 3;
  };

  export let contentId = "article-content";

  let items: TocItem[] = [];
  let activeId = "";

  function slugify(value: string) {
    return value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\u4e00-\u9fff]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  onMount(() => {
    const root = document.getElementById(contentId);
    if (!root) return;

    const headings = Array.from(root.querySelectorAll<HTMLElement>("h2, h3"));
    const seen = new Map<string, number>();

    items = headings.map((heading) => {
      const label = heading.textContent?.trim() ?? "";
      const base = heading.id || slugify(label) || "section";
      const count = seen.get(base) ?? 0;
      const id = count === 0 ? base : `${base}-${count + 1}`;

      seen.set(base, count + 1);
      heading.id = id;

      return {
        id,
        label,
        level: heading.tagName === "H3" ? 3 : 2
      };
    });

    if (headings.length === 0) return;

    activeId = headings[0].id;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]?.target instanceof HTMLElement) {
          activeId = visible[0].target.id;
        }
      },
      {
        rootMargin: "-22% 0px -62% 0px",
        threshold: [0, 1]
      }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  });
</script>

{#if items.length > 0}
  <aside class="article-toc" aria-label="Table of contents">
    <p>Contents</p>
    <nav>
      {#each items as item}
        <a
          class:active={activeId === item.id}
          class:depth-three={item.level === 3}
          href={`#${item.id}`}
        >
          {item.label}
        </a>
      {/each}
    </nav>
  </aside>
{/if}

<style>
  .article-toc {
    position: sticky;
    top: 5.5rem;
    width: var(--toc-width);
    max-height: calc(100dvh - 7rem);
    overflow: auto;
    padding-block: 0.35rem;
    color: var(--muted);
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

  nav {
    display: grid;
    gap: 0.18rem;
    border-left: 1px solid var(--line);
  }

  a {
    display: block;
    border-left: 2px solid transparent;
    margin-left: -1px;
    padding: 0.34rem 0 0.34rem 0.85rem;
    color: var(--muted);
    line-height: 1.35;
  }

  a:hover,
  a.active {
    color: var(--accent);
    border-left-color: var(--accent);
  }

  .depth-three {
    padding-left: 1.7rem;
    font-size: 0.82rem;
  }

  @media (max-width: 1040px) {
    .article-toc {
      display: none;
    }
  }
</style>
