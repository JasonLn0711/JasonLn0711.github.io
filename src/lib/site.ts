export const site = {
  name: "Jason Chia-Sheng Lin",
  url: "https://jasonln0711.github.io",
  defaultTitle: "Jason Chia-Sheng Lin | Doctoral Researcher in AI Systems and Trustworthy AI",
  description:
    "Professional website of Jason Chia-Sheng Lin, a doctoral researcher at NYCU working on AI systems, trustworthy AI, speech intelligence, cybersecurity, and real-world high-stakes deployment.",
  ogImage: "/og/default.png",
  locale: "en_US",
  nav: [
    { href: "/research/", label: "Research" },
    { href: "/projects/", label: "Projects" },
    { href: "/blog/", label: "Writing" },
    { href: "/talks/", label: "Talks" },
    { href: "/about/", label: "About" },
    { href: "/contact/", label: "Contact" }
  ]
} as const;

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, site.url).toString();
}
