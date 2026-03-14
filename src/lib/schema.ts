import type { CollectionEntry } from "astro:content";
import type { Profile } from "../data/profile";
import { profile } from "../data/profile";
import { absoluteUrl, site } from "./site";

type JsonLd = Record<string, unknown>;

export function personSchema(profile: Profile): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    description: profile.bio,
    url: site.url,
    image: absoluteUrl(profile.avatar),
    email: `mailto:${profile.email}`,
    sameAs: [profile.github, profile.linkedin],
    knowsAbout: profile.keywords
  };
}

export function websiteSchema(profile: Profile): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: profile.name,
    url: site.url,
    description: site.description,
    author: {
      "@type": "Person",
      name: profile.name
    }
  };
}

export function blogSchema(entry: CollectionEntry<"blog">): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: entry.data.title,
    description: entry.data.description,
    datePublished: entry.data.pubDate.toISOString(),
    dateModified: (entry.data.updatedDate ?? entry.data.pubDate).toISOString(),
    image: absoluteUrl(entry.data.ogImage ?? entry.data.cover),
    keywords: entry.data.tags.join(", "),
    mainEntityOfPage: absoluteUrl(`/blog/${entry.slug}/`),
    author: {
      "@type": "Person",
      name: profile.name
    }
  };
}

export function projectSchema(entry: CollectionEntry<"projects">): JsonLd {
  const primaryLanguage = entry.data.stack.find((item) =>
    ["Python", "TypeScript", "JavaScript", "R"].includes(item)
  );

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: entry.data.title,
    description: entry.data.summary,
    codeRepository: entry.data.repo,
    url: absoluteUrl(`/projects/${entry.slug}/`),
    dateCreated: `${entry.data.year}-01-01`,
    keywords: [entry.data.category, ...entry.data.stack].join(", "),
    genre: entry.data.category,
    creator: {
      "@type": "Person",
      name: profile.name
    },
    ...(primaryLanguage ? { programmingLanguage: primaryLanguage } : {})
  };
}
