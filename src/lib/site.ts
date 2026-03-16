import { home } from "../data/home";

export const site = {
  name: "Jason Chia-Sheng Lin",
  url: "https://jasonln0711.github.io",
  defaultTitle: "Jason Chia-Sheng Lin | Doctoral Researcher in AI Systems and Trustworthy AI",
  description: home.hero.description,
  ogImage: "/og/default.png",
  locale: "en_US",
  verification: {
    // TODO: Paste the Google Search Console verification token here if available.
    googleSiteVerificationToken: ""
  },
  analytics: {
    // TODO: Paste the exact Plausible "Review Installation" snippet here.
    plausibleSnippet: ""
  },
  nav: [
    { href: "/research/", label: "Research" },
    { href: "/projects/", label: "Projects" },
    { href: "/blog/", label: "Writing" },
    { href: "/talks/", label: "Talks" },
    { href: "/about/", label: "About" },
    { href: "/contact/", label: "Contact" }
  ]
} as const;

export function pageTitle(page?: string, section?: string) {
  if (!page) {
    return site.defaultTitle;
  }

  return [page, section, site.name].filter(Boolean).join(" | ");
}

export function normalizePathname(path = "/") {
  if (!path) {
    return "/";
  }

  let normalized = path.startsWith("/") ? path : `/${path}`;

  normalized = normalized.replace(/\/{2,}/g, "/");
  normalized = normalized.replace(/\/index\.html$/i, "/");

  if (normalized !== "/" && !normalized.endsWith("/") && !/\.[a-z0-9]+$/i.test(normalized)) {
    normalized = `${normalized}/`;
  }

  return normalized;
}

export function absoluteUrl(path = "/") {
  if (/^https?:\/\//i.test(path)) {
    return new URL(path).toString();
  }

  const normalized = normalizePathname(path);
  return new URL(normalized, site.url).toString();
}
