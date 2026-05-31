import { error } from "@sveltejs/kit";
import { findProject, projects } from "$lib/content/site";

export function entries() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function load({ params }) {
  const project = findProject(params.slug);

  if (!project) {
    error(404, "Project not found");
  }

  return { project };
}
