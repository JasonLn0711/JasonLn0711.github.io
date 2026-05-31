import { error } from "@sveltejs/kit";
import { findWriting, writings } from "$lib/content/site";

export function entries() {
  return writings.map((writing) => ({ slug: writing.slug }));
}

export function load({ params }) {
  const writing = findWriting(params.slug);

  if (!writing) {
    error(404, "Writing not found");
  }

  return { writing };
}
