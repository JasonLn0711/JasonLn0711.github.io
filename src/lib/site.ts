export const site = {
  name: "Jason Chia-Sheng Lin",
  url: "https://jasonln0711.github.io",
  defaultTitle: "Jason Chia-Sheng Lin | AI Systems, Speech Intelligence, and Trustworthy AI",
  description:
    "Professional research portfolio for Jason Chia-Sheng Lin, featuring work on AI systems, speech intelligence, fraud detection AI, trustworthy AI, and AI security.",
  ogImage: "/og/default.png",
  locale: "en_US",
  nav: [
    { href: "/about/", label: "About" },
    { href: "/projects/", label: "Projects" },
    { href: "/blog/", label: "Blog" },
    { href: "/contact/", label: "Contact" }
  ]
} as const;

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, site.url).toString();
}
