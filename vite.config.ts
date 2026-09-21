import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { publishedBlogPlugin } from "./scripts/blog-source.ts";

export default defineConfig({
  plugins: [publishedBlogPlugin(), sveltekit()]
});
