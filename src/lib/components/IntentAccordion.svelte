<script lang="ts">
  import { contactIntents, contactIntentsZh } from "#lib/content/site.ts";

  let { locale = "en" }: { locale?: "en" | "zh-Hant" } = $props();
  let intents = $derived(locale === "zh-Hant" ? contactIntentsZh : contactIntents);
  let groupLabel = $derived(locale === "zh-Hant" ? "常見交流主題" : "Conversation topics");
</script>

<div class="intent-list" role="region" aria-label={groupLabel} lang={locale}>
  {#each intents as intent, index (intent.title)}
    <details class="intent panel" open={index === 0}>
      <summary>
        <span class="intent-number">{String(index + 1).padStart(2, "0")}</span>
        <span class="intent-header">
          <strong>{intent.title}</strong>
          <span class="intent-summary">{intent.summary}</span>
        </span>
        <span class="intent-mark" aria-hidden="true"></span>
      </summary>
      <p class="intent-prompt">{intent.prompt}</p>
    </details>
  {/each}
</div>

<style>
  .intent-list {
    display: grid;
    gap: 0.85rem;
  }

  .intent {
    overflow: hidden;
    transition:
      border-color 180ms var(--ease),
      background 180ms var(--ease);
  }

  .intent:hover,
  .intent[open] {
    border-color: var(--line-strong);
    background: var(--surface-strong);
  }

  summary {
    display: grid;
    grid-template-columns: 2rem minmax(0, 1fr) auto;
    gap: 0.9rem;
    align-items: start;
    width: 100%;
    min-height: 44px;
    padding: 1.15rem 1.25rem;
    list-style: none;
    cursor: pointer;
    text-align: left;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  summary:focus-visible {
    outline-offset: -3px;
  }

  .intent-number {
    padding-top: 0.2rem;
    color: var(--amber);
    font-size: 0.84rem;
    font-weight: var(--strong-weight);
    font-variant-numeric: tabular-nums;
  }

  .intent-header {
    display: grid;
    gap: 0.35rem;
    min-inline-size: 0;
  }

  .intent-header strong {
    color: var(--ink-strong);
    font-size: clamp(1.06rem, 0.98rem + 0.45vw, 1.28rem);
    font-weight: var(--heading-weight);
    line-height: 1.35;
  }

  .intent-summary {
    color: var(--muted);
    font-size: 0.95rem;
    line-height: 1.6;
  }

  .intent-prompt {
    margin: 0;
    padding: 0 1.25rem 1.2rem 4.15rem;
    color: var(--accent);
    font-size: 0.95rem;
    line-height: 1.65;
  }

  .intent-mark {
    display: grid;
    width: 2rem;
    height: 2rem;
    place-items: center;
    border: 1px solid var(--line-strong);
    border-radius: var(--radius-sm);
    color: var(--ink-strong);
    background: var(--surface);
    font-size: 1rem;
    line-height: 1;
  }

  .intent-mark::before {
    content: "+";
  }

  .intent[open] .intent-mark::before {
    content: "−";
  }

  @media (max-width: 640px) {
    summary {
      grid-template-columns: minmax(0, 1fr) auto;
      gap: 0.4rem 0.75rem;
      padding: 1rem;
    }

    .intent-number {
      grid-column: 1 / -1;
      padding-top: 0;
    }

    .intent-prompt {
      padding: 0 1rem 1rem;
    }
  }
</style>
