import adapter from "@sveltejs/adapter-static";
import { mdsvex } from "mdsvex";
import remarkMath from "remark-math";
import { remarkMathRender } from "./scripts/remark-math-render.js";

const mdsvexExtensions = [".svx", ".md", ".mdx"];

/**
 * @typedef {object} MarkdownNode
 * @property {string} type
 * @property {number} [depth]
 * @property {string} [value]
 * @property {MarkdownNode[]} [children]
 * @property {{ hProperties?: Record<string, unknown> }} [data]
 */

/** @param {string} value */
function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\u4e00-\u9fff]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** @param {MarkdownNode} node @returns {string} */
function textFromNode(node) {
  if (typeof node.value === "string") return node.value;
  if (Array.isArray(node.children)) return node.children.map(textFromNode).join("");
  return "";
}

function remarkHeadingIds() {
  /**
   * @param {MarkdownNode} tree
   * @param {{ data: { fm?: Record<string, unknown> } }} file
   */
  function transform(tree, file) {
    const seen = new Map();
    /** @type {import("./src/lib/content/article-headings.ts").ArticleHeading[]} */
    const articleHeadings = [];

    /** @param {MarkdownNode} node */
    function visit(node) {
      if (node.type === "heading" && (node.depth === 2 || node.depth === 3)) {
        const label = textFromNode(node).trim();
        const base = slugify(label) || "section";
        const count = seen.get(base) ?? 0;
        const id = count === 0 ? base : `${base}-${count + 1}`;

        seen.set(base, count + 1);
        node.data = node.data ?? {};
        node.data.hProperties = { ...(node.data.hProperties ?? {}), id, tabIndex: -1 };
        articleHeadings.push({ id, label, level: node.depth });
      }

      node.children?.forEach(visit);
    }

    visit(tree);
    // mdsvex exposes this data through its compiled metadata export.
    file.data.fm = { ...file.data.fm, articleHeadings };
  }
  return transform;
}

const config = {
  extensions: [".svelte", ...mdsvexExtensions],
  preprocess: [
    mdsvex({
      extensions: mdsvexExtensions,
      remarkPlugins: [remarkMath, remarkHeadingIds, remarkMathRender]
    })
  ],
  kit: {
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
    files: {
      assets: "public"
    },
    prerender: {
      entries: ["*"]
    }
  }
};

export default config;
