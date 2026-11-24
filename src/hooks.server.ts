import type { Handle } from "@sveltejs/kit/hooks";
import { siteLanguage } from "#lib/content/localization.ts";

export const handle: Handle = ({ event, resolve }) => resolve(event, {
  transformPageChunk: ({ html }) =>
    html.replace('<html lang="en">', `<html lang="${siteLanguage(event.url.pathname)}">`)
});
