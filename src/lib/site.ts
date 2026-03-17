import { home } from "../data/home";

const publicEnv = {
  googleSiteVerificationToken: import.meta.env.PUBLIC_GOOGLE_SITE_VERIFICATION_TOKEN ?? "",
  plausibleSnippet: import.meta.env.PUBLIC_PLAUSIBLE_SNIPPET ?? "",
  clarityProjectId: import.meta.env.PUBLIC_CLARITY_PROJECT_ID ?? ""
} as const;

export const site = {
  name: "Jason Chia-Sheng Lin",
  url: "https://jasonln0711.github.io",
  defaultTitle: "Jason Chia-Sheng Lin | AI Agents, Speech Intelligence, and Security",
  description: home.hero.description,
  ogImage: "/og/default.png",
  locale: "en_US",
  verification: {
    // You can keep this empty or provide PUBLIC_GOOGLE_SITE_VERIFICATION_TOKEN in .env.
    googleSiteVerificationToken: publicEnv.googleSiteVerificationToken
  },
  analytics: {
    // Paste the exact Plausible "Review Installation" snippet here,
    // or provide it via PUBLIC_PLAUSIBLE_SNIPPET.
    plausibleSnippet: publicEnv.plausibleSnippet,
    // Optional: enable Microsoft Clarity heatmaps and session replays.
    clarityProjectId: publicEnv.clarityProjectId,
    // Optimized for lower-noise engagement tracking.
    scrollDepthThresholds: [50, 90]
  },
  nav: [
    { href: "/research/", label: "Research", description: "Agenda, active work, and recent papers." },
    { href: "/projects/", label: "Projects", description: "Selected case studies, agent builds, and system work." },
    { href: "/blog/", label: "Writing", description: "Short essays and research notes." },
    { href: "/talks/", label: "Talks", description: "Speaking topics, recent sessions, and the web keynote." },
    { href: "/resume/", label: "Resume", description: "Professional snapshot for hiring and collaboration." },
    { href: "/about/", label: "About", description: "Background, working style, and research path." },
    { href: "/contact/", label: "Contact", description: "The fastest route for collaboration or speaking." }
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
