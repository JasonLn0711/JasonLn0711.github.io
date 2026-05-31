<script lang="ts">
  import { contactIntents } from "$lib/content/site";

  let active = 0;
</script>

<div class="intent-list">
  {#each contactIntents as intent, index}
    <button
      class="intent panel"
      class:open={active === index}
      type="button"
      aria-expanded={active === index}
      on:click={() => (active = active === index ? -1 : index)}
      data-reveal
    >
      <span class="intent-number mono">{String(index + 1).padStart(2, "0")}</span>
      <span class="intent-copy">
        <strong>{intent.title}</strong>
        <span>{intent.summary}</span>
        {#if active === index}
          <em>{intent.prompt}</em>
        {/if}
      </span>
      <span class="intent-mark" aria-hidden="true">{active === index ? "-" : "+"}</span>
    </button>
  {/each}
</div>

<style>
  .intent-list {
    display: grid;
    gap: 0.8rem;
  }

  .intent {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 1.1rem;
    width: 100%;
    padding: 1.25rem;
    text-align: left;
    cursor: pointer;
    transition:
      transform 520ms var(--ease),
      border-color 520ms var(--ease),
      background 520ms var(--ease);
  }

  .intent:hover,
  .intent.open {
    transform: translateY(-2px);
    border-color: var(--line-strong);
    background: rgba(15, 32, 30, 0.88);
  }

  .intent-number {
    color: var(--amber);
    font-size: 0.86rem;
    font-weight: 800;
  }

  .intent-copy {
    display: grid;
    gap: 0.45rem;
  }

  .intent-copy strong {
    font-size: clamp(1.1rem, 2vw, 1.45rem);
  }

  .intent-copy span,
  .intent-copy em {
    color: var(--muted);
    line-height: 1.55;
    font-style: normal;
  }

  .intent-copy em {
    color: var(--accent);
  }

  .intent-mark {
    display: grid;
    width: 2rem;
    height: 2rem;
    place-items: center;
    border: 1px solid var(--line);
    border-radius: 999px;
  }

  @media (max-width: 640px) {
    .intent {
      grid-template-columns: 1fr auto;
    }

    .intent-number {
      grid-column: 1 / -1;
    }
  }
</style>
