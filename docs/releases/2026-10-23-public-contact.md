# Public contact address — 2026-10-23

The current public contact address is `contact@cs-kairos.com`.

- Updated `src/lib/content/site.ts`, the shared source for both languages, footer, contact links and résumé.
- Updated the repository README and GitHub profile README contact entries.
- Retained `src/data/profile.ts` and `docs/site-v3-content-inventory.zh-tw.md` as historical migration/source inventory, per AGENTS.md. They are not deployed contact surfaces.
- Use a readable `@` and standard `mailto:` links. No new email obfuscation or crawler mechanism was enabled.
- Email Routing was checked read-only; an existing test delivery passed. Routing receives/forwards mail; it does not configure the identity used to send or reply.
- No DNS, routing, security, authentication, or private mailbox settings were changed by this release.

Validation follows the existing main-site release runbook: tests, Svelte check, static build and release checks. Production uses the Cloudflare Git integration (`npm run build`, `npx wrangler deploy`); the GitHub Pages workflow is also retained. Deployment and production readback are tracked separately from this source change.
