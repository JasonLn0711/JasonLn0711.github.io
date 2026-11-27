# Main-site release and rollback

The existing Cloudflare Git integration builds `npm run build` and deploys with
`npx wrangler deploy`. `wrangler.jsonc` explicitly uploads only `build/`; it keeps
SvelteKit's static adapter. No runtime secrets or protected API bindings are needed.
The project pins pnpm in `package.json` and uses `pnpm-lock.yaml` for dependency
installation. Verify the Cloudflare build after publishing this toolchain change;
the existing remote build and deploy command settings are recorded above.

1. Open a PR. Run tests, Svelte checks, build, `node scripts/check-release.mjs` and
   inspect the static preview at mobile and desktop sizes. Cloudflare preview or
   `pnpm exec wrangler dev --port 4175` supplies the actual static-asset routing behavior.
2. Record the current successful production deployment ID and Git commit before
   merging. Keep the previous build available. Merge only the reviewed head.
3. Check the Cloudflare build result. Verify root, Chinese home, deep article,
   genuine 404, assets, canonical, RSS and sitemap over HTTPS.
4. Bind `cs-kairos.com` to this Worker only after the preview passes. Bind `www.cs-kairos.com` as a second Custom Domain and add a host-specific Single Redirect to `https://cs-kairos.com`,
   preserving path and query, with status 301. Verify a single hop. Native asset
   `_redirects` does not support domain-level redirects.
5. Switch `site.url` and robots to the canonical domain after it is reachable.
   Keep old GitHub Pages paths readable with the new canonical. Preserve `learn`,
   `api`, `console`, `shanghui` and `shanghui-staging` records.

## Recovery

In Worker Deployments, choose the recorded previous successful version and roll
back; alternatively use `pnpm exec wrangler rollback <version-id>` under the already
authorized Cloudflare identity. This operation restores a known deployment,
not a source-history rewrite. Recheck HTTPS, deep pages, assets and 404 afterward.
If a build setting caused failure, restore the recorded setting and redeploy the
known commit. Revert a code change through a new PR; never force-push main.

Before the first successful Worker deployment, the fallback is the unchanged
GitHub Pages site. Keep the previous DNS snapshot available. For new-domain
failure, restore only the newly added main-site records or last known working
deployment; do not alter protected services to compensate.

A rollback drill must record the selected version, actual outcome and restore
to the intended release. A written command alone does not prove recovery.
Field Core Web Vitals and independent reader acceptance require real user data;
automated accessibility and Lighthouse checks cover their reported scope only.

See [phase evidence](phase-0-3-implementation.zh-tw.md) and
[Cloudflare redirects](https://developers.cloudflare.com/workers/static-assets/redirects/).

The [November 24 reading and navigation record](site-reading-refinement.zh-tw.md)
defines the homepage entry points, bilingual navigation, article contents,
research evidence links, and portrait assets to verify in the current design.

The [November 24 release receipt](releases/2026-11-24-main-site-reading.md) links
the deployed source and both production checks.
