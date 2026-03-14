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
      theme: "github-dark"
    }
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (!id.includes("node_modules")) {
              return;
            }

            if (id.includes("/node_modules/three/")) {
              return "three-core";
            }

            if (id.includes("/node_modules/@react-three/fiber/")) {
              return "react-three-fiber";
            }

            if (id.includes("/node_modules/@react-three/drei/")) {
              return "react-three-drei";
            }
          }
        }
      }
    }
  }
});
