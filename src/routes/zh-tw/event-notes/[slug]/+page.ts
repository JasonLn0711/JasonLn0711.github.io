import { error } from "@sveltejs/kit";
import { eventNotes } from "$lib/content/site";
export const entries = () => eventNotes.map(({ slug }) => ({ slug }));
export function load({ params }: { params: { slug: string } }) {
 if (!eventNotes.some(note => note.slug === params.slug)) error(404, "Note not found");
 return { slug: params.slug };
}
