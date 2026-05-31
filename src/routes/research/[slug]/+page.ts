import { error } from "@sveltejs/kit";
import { findResearch, researchPillars } from "$lib/content/site";

export function entries() {
  return researchPillars.map((pillar) => ({ slug: pillar.slug }));
}

export function load({ params }) {
  const pillar = findResearch(params.slug);

  if (!pillar) {
    error(404, "Research direction not found");
  }

  return { pillar };
}
