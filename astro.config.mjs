import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { site } from "./src/lib/site";

export default defineConfig({
  site: site.url,
  integrations: [react(), mdx(), sitemap()],
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "github-light"
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
