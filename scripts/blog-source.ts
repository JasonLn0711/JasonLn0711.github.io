import { readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { parse } from "yaml";
import type { Plugin } from "vite";
import { createBlogPosts, type RawBlogMetadata, type Series } from "../src/lib/content/blog-model.ts";

export function readPublishedPosts(root: string, today?: string) {
  const content = resolve(root, "src/content/blog");
  const entries = readdirSync(content).filter((name) => name.endsWith(".mdx")).map((name) => {
    const modulePath = `src/content/blog/${name}`;
    const source = readFileSync(resolve(root, modulePath), "utf8");
    const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
    if (!frontmatter) throw new Error(`${modulePath}: missing frontmatter`);
    const metadata = parse(frontmatter[1]) as RawBlogMetadata;
    return { modulePath, metadata, source };
  });
  const series = JSON.parse(readFileSync(resolve(root, "src/lib/content/blog-series.json"), "utf8")) as Series[];
  const posts = createBlogPosts(entries, series, today);
  for (const post of posts.filter((p) => p.languages.length === 2)) {
    const source = entries.find((entry) => entry.modulePath === post.modulePath)!.source;
    for (const [id, lang] of [["zh", "zh-Hant"], ["en", "en"]]) {
      if (!source.includes(`<section id="${id}" lang="${lang}">`)) {
        throw new Error(`${post.modulePath}: missing <section id="${id}" lang="${lang}">`);
      }
    }
  }
  return posts;
}

export function publishedBlogPlugin(): Plugin {
  const id = "virtual:published-blog";
  const resolved = `\0${id}`;
  let root = process.cwd();
  return {
    name: "published-blog",
    configResolved(config) { root = config.root; },
    resolveId(source) { if (source === id) return resolved; },
    load(source) {
      if (source !== resolved) return;
      this.addWatchFile(resolve(root, "src/content/blog"));
      this.addWatchFile(resolve(root, "src/lib/content/blog-series.json"));
      const posts = readPublishedPosts(root);
      for (const post of posts) this.addWatchFile(resolve(root, post.modulePath));
      return posts.map((post, i) => `import * as post${i} from ${JSON.stringify(`/${post.modulePath}`)};`).join("\n") +
        `\nexport const modules = {${posts.map((post, i) => `${JSON.stringify(post.modulePath)}: post${i}`).join(",")}};`;
    },
    configureServer(server) {
      server.watcher.on("all", (_event, path) => {
        if (path.includes("/src/content/blog/") || path.endsWith("/blog-series.json")) {
          const module = server.moduleGraph.getModuleById(resolved);
          if (module) server.moduleGraph.invalidateModule(module);
          server.ws.send({ type: "full-reload" });
        }
      });
    }
  };
}
