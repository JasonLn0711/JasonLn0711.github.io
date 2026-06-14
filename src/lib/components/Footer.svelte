<script lang="ts">
  import { site } from "$lib/content/site";
</script>

<footer class="footer section-tight">
  <div class="page-shell footer-grid">
    <div>
      <p class="kicker">{site.shortName}</p>
      <h2>Evidence-aware AI systems, research, and writing.</h2>
      <p>
        A plain personal site for speech decision stability, clinical workflow
        support, agent governance, cybersecurity, and AI systems engineering.
      </p>
    </div>
    <div class="footer-links">
      <a href="/now/">Now</a>
      <a href="/research/">Research</a>
      <a href="/projects/">Systems</a>
      <a href="/blog/">Writing</a>
      <a href="/about/">About</a>
      <a href="/resume/">CV</a>
      <a href="/contact/">Contact</a>
    </div>
    <div class="contact-card">
      <span class="mono muted">Direct route</span>
      <a class="email" href={`mailto:${site.email}`}>{site.email}</a>
      <div class="meta-line">
        <a href={site.github} rel="noreferrer" target="_blank">GitHub</a>
        <a href={site.linkedin} rel="noreferrer" target="_blank">LinkedIn</a>
      </div>
    </div>
  </div>
</footer>

<style>
  .footer {
    border-top: 1px solid var(--line);
    background: var(--surface-strong);
  }

  .footer-grid {
    display: grid;
    grid-template-columns: 1.2fr 0.55fr 0.75fr;
    gap: 2rem;
    align-items: start;
  }

  h2 {
    margin: 0.5rem 0 1rem;
    max-width: 620px;
    color: var(--ink-strong);
    font-family: var(--font-serif);
    font-size: clamp(1.7rem, 4vw, 3rem);
    font-weight: 500;
    line-height: 1.12;
  }

  p {
    max-width: 58ch;
    color: var(--muted);
    line-height: 1.7;
  }

  .footer-links {
    display: grid;
    gap: 0.55rem;
  }

  .footer-links a {
    color: var(--muted);
    text-decoration: none;
  }

  .footer-links a:hover {
    color: var(--accent);
  }

  .contact-card {
    display: grid;
    gap: 0.75rem;
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
