import { error } from "@sveltejs/kit";
import { findTeachingAccelerator, teachingAccelerators } from "#lib/content/site.ts";

export function entries() {
  return teachingAccelerators.map((accelerator) => ({ accelerator: accelerator.slug }));
}

export function load({ params }) {
  const accelerator = findTeachingAccelerator(params.accelerator);

  if (!accelerator) {
    error(404, "Teaching accelerator not found");
  }

  return { accelerator };
}
