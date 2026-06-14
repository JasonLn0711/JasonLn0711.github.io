import adapter from "@sveltejs/adapter-static";
import { mdsvex } from "mdsvex";

const mdsvexExtensions = [".svx", ".md", ".mdx"];

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\u4e00-\u9fff]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function textFromNode(node) {
  if (!node) return "";
  if (typeof node.value === "string") return node.value;
  if (Array.isArray(node.children)) return node.children.map(textFromNode).join("");
  return "";
}

function remarkHeadingIds() {
  return (tree) => {
    const seen = new Map();

    function visit(node) {
      if (!node || typeof node !== "object") return;

      if (node.type === "heading" && (node.depth === 2 || node.depth === 3)) {
        const base = slugify(textFromNode(node)) || "section";
        const count = seen.get(base) ?? 0;
        const id = count === 0 ? base : `${base}-${count + 1}`;

        seen.set(base, count + 1);
        node.data = node.data ?? {};
        node.data.hProperties = { ...(node.data.hProperties ?? {}), id };
      }

      if (Array.isArray(node.children)) {
        node.children.forEach(visit);
      }
    }

    visit(tree);
  };
}

const config = {
  extensions: [".svelte", ...mdsvexExtensions],
  preprocess: [
    mdsvex({
      extensions: mdsvexExtensions,
      remarkPlugins: [remarkHeadingIds]
    })
  ],
  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: "404.html",
      strict: true
    }),
    files: {
      assets: "public"
    },
    prerender: {
      entries: ["*"]
    }
  }
};

export default config;
