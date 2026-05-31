import adapter from "@sveltejs/adapter-static";

const config = {
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
