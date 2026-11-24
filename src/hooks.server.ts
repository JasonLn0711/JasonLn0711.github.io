import type { Handle } from "@sveltejs/kit";
import { siteLanguage } from "$lib/content/localization";

export const handle: Handle = ({ event, resolve }) => resolve(event, {
  transformPageChunk: ({ html }) =>
    html.replace('<html lang="en">', `<html lang="${siteLanguage(event.url.pathname)}">`)
});
