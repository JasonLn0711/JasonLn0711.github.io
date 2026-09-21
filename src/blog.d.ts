declare module "virtual:published-blog" {
  export const modules: Record<string, {
    default: import("svelte").Component;
    metadata: import("./lib/content/blog-model").RawBlogMetadata;
  }>;
}
