import { error } from "@sveltejs/kit";
import {
  findTeachingAccelerator,
  findTeachingDay,
  teachingAccelerators
} from "$lib/content/site";

export function entries() {
  return teachingAccelerators.flatMap((accelerator) =>
    accelerator.days
      .filter((day) => day.published)
      .map((day) => ({ accelerator: accelerator.slug, day: day.slug }))
  );
}

export function load({ params }) {
  const accelerator = findTeachingAccelerator(params.accelerator);
  const day = findTeachingDay(params.accelerator, params.day);

  if (!accelerator || !day || !day.published) {
    error(404, "Teaching day not found");
  }

  return { accelerator, day };
}
