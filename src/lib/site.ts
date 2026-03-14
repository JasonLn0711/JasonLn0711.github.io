import { primaryNav } from "../data/navigation";

export const site = {
  name: "Jason Chia-Sheng Lin",
  url: "https://jasonln0711.github.io",
  defaultTitle: "Jason Chia-Sheng Lin | Trustworthy AI Systems for Real-World Environments",
  description:
    "Professional identity site for Jason Chia-Sheng Lin, a doctoral researcher building trustworthy AI systems for security-critical, regulated, and real-world environments.",
  ogImage: "/og/default.png",
  locale: "en_US",
  nav: primaryNav
} as const;

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, site.url).toString();
}
