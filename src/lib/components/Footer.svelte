<script lang="ts">
  import { site } from "$lib/content/site";
</script>

<footer class="footer section-tight">
  <div class="page-shell footer-grid">
    <div>
      <p class="kicker">Living Research Atlas</p>
      <h2>Evidence first. Context always.</h2>
      <p>
        A personal research site for people working through AI, evidence,
        cybersecurity, speech, and regulated deployment problems.
      </p>
    </div>
    <div class="footer-links">
      <a href="/design/">Design source</a>
      <a href="/research/">Research</a>
      <a href="/projects/">Projects</a>
      <a href="/writing/">Writing</a>
      <a href="/contact/">Contact</a>
      <a href="/zh-tw/">繁體中文</a>
    </div>
    <div class="contact-card panel-soft">
      <span class="mono muted">Direct route</span>
      <a class="email" href={`mailto:${site.email}`}>{site.email}</a>
      <div class="meta-line">
        <span class="status-dot"></span>
        <span>Low pressure conversation welcome</span>
      </div>
    </div>
  </div>
</footer>

<style>
  .footer {
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(0, 0, 0, 0.16);
  }

  .footer-grid {
    display: grid;
    grid-template-columns: 1.4fr 0.6fr 0.8fr;
    gap: 2rem;
    align-items: start;
  }

  h2 {
    margin: 0.5rem 0 1rem;
    max-width: 620px;
    font-size: clamp(2rem, 4vw, 4rem);
    line-height: 0.95;
  }

  p {
    max-width: 58ch;
    color: var(--muted);
    line-height: 1.7;
  }

  .footer-links {
    display: grid;
    gap: 0.8rem;
  }

  .footer-links a {
    color: var(--muted);
  }

  .footer-links a:hover {
    color: var(--accent);
  }

  .contact-card {
    display: grid;
    gap: 1rem;
    padding: 1.2rem;
  }

  .email {
    color: var(--accent);
    font-size: 1.1rem;
    overflow-wrap: anywhere;
  }

  @media (max-width: 900px) {
    .footer-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
