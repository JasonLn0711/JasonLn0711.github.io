import type { CollectionEntry } from "astro:content";
import type { Profile } from "../data/profile";
import { profile } from "../data/profile";
import { getBlogLocale, getBlogPath } from "./content";
import { getLocaleMeta, type SiteLocale } from "./i18n";
import { absoluteUrl, site } from "./site";

type JsonLd = Record<string, unknown>;
interface WebPageSchemaInput {
  name: string;
  description: string;
  pathname: string;
  image?: string;
}

interface BreadcrumbSchemaItem {
  name: string;
  pathname: string;
}

interface ItemListSchemaItem {
  name: string;
  pathname: string;
}

export function personSchema(profile: Profile): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    alternateName: profile.handle,
    jobTitle: profile.title,
    description: profile.bio,
    url: site.url,
    image: absoluteUrl(profile.avatar),
    email: `mailto:${profile.email}`,
    sameAs: [profile.github, profile.linkedin, profile.externalProfiles.cybersecSpeaker.url],
    knowsAbout: profile.keywords,
    affiliation: {
      "@type": "Organization",
      name: profile.lab.name,
      url: profile.lab.url,
      parentOrganization: {
        "@type": "CollegeOrUniversity",
        name: profile.institution
      }
    },
    homeLocation: {
      "@type": "Place",
      name: profile.location
    }
  };
}

export function websiteSchema(profile: Profile): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
    author: {
      "@type": "Person",
      name: profile.name
    }
  };
}

export function webPageSchema({ name, description, pathname, image }: WebPageSchemaInput): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: absoluteUrl(pathname),
    isPartOf: {
      "@type": "WebSite",
      name: site.name,
      url: site.url
    },
    ...(image
      ? {
          primaryImageOfPage: {
            "@type": "ImageObject",
            url: absoluteUrl(image)
          }
        }
      : {})
  };
}

export function breadcrumbSchema(items: BreadcrumbSchemaItem[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.pathname)
    }))
  };
}

export function itemListSchema(name: string, items: ItemListSchemaItem[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.pathname)
    }))
  };
}

export function blogSchema(entry: CollectionEntry<"blog">, locale: SiteLocale = "en"): JsonLd {
  const actualLocale = getBlogLocale(entry);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: entry.data.title,
    description: entry.data.description,
    url: absoluteUrl(getBlogPath(entry, locale)),
    datePublished: entry.data.pubDate.toISOString(),
    dateModified: (entry.data.updatedDate ?? entry.data.pubDate).toISOString(),
    image: absoluteUrl(entry.data.ogImage ?? entry.data.cover),
    keywords: entry.data.tags.join(", "),
    inLanguage: getLocaleMeta(actualLocale).htmlLang,
    mainEntityOfPage: absoluteUrl(getBlogPath(entry, locale)),
    author: {
      "@type": "Person",
      name: profile.name
    },
    publisher: {
      "@type": "Person",
      name: profile.name,
      url: site.url
    },
    ...(entry.data.references.length > 0
      ? {
          citation: entry.data.references.map((reference) => ({
            "@type": "CreativeWork",
            name: reference.title,
            url: reference.url,
            ...(reference.publisher ? { publisher: reference.publisher } : {})
          }))
        }
      : {})
  };
}

export function projectSchema(entry: CollectionEntry<"projects">): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ResearchProject",
    name: entry.data.title,
    description: entry.data.summary,
    url: absoluteUrl(`/projects/${entry.slug}/`),
    image: absoluteUrl(entry.data.cover),
    dateCreated: `${entry.data.year}-01-01`,
    keywords: [entry.data.category, ...entry.data.stack].join(", "),
    about: entry.data.category,
    creator: {
      "@type": "Person",
      name: profile.name,
      url: site.url
    }
  };
}
