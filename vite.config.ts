import adapter from "@sveltejs/adapter-static";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { publishedBlogPlugin } from "./scripts/blog-source.ts";
import { markdownPreprocessor, mdsvexExtensions } from "./scripts/mdsvex-config.js";

export default defineConfig({
  plugins: [
    publishedBlogPlugin(),
    sveltekit({
      extensions: [".svelte", ...mdsvexExtensions],
      preprocess: [markdownPreprocessor],
      csp: {
        mode: "hash",
        directives: {
          "script-src": ["self"],
          "style-src": ["self", "unsafe-inline"],
          "object-src": ["none"],
          "base-uri": ["self"]
        }
      },
      adapter: adapter({
        pages: "build",
        assets: "build",
        fallback: "404.html",
        strict: true
      }),
      files: { assets: "public" },
      prerender: { entries: ["*"] }
    })
  ]
});
