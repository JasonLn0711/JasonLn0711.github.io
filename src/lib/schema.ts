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
    jobTitle: profile.role,
    description: profile.shortBio,
    url: site.url,
    image: absoluteUrl(profile.avatar),
    email: `mailto:${profile.email}`,
    sameAs: [profile.github, profile.linkedin],
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: profile.institution
    },
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
    },
    about: {
      "@type": "Thing",
      name: profile.positioning
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
    mainEntityOfPage: absoluteUrl(`/writing/${entry.slug}/`),
    author: {
      "@type": "Person",
      name: profile.name
    }
  };
}

export function projectSchema(entry: CollectionEntry<"projects">): JsonLd {
  const primaryLanguage = entry.data.stack.find((item) =>
    ["Python", "TypeScript", "JavaScript", "Rust", "R"].includes(item)
  );

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: entry.data.title,
    description: entry.data.summary,
    url: absoluteUrl(`/projects/${entry.slug}/`),
    dateCreated: `${entry.data.year}-01-01`,
    keywords: [entry.data.category, ...entry.data.tags, ...entry.data.stack].join(", "),
    genre: entry.data.kind,
    creator: {
      "@type": "Person",
      name: profile.name
    },
    about: entry.data.problem,
    ...(entry.data.repo ? { codeRepository: entry.data.repo } : {}),
    ...(primaryLanguage ? { programmingLanguage: primaryLanguage } : {})
  };
}
