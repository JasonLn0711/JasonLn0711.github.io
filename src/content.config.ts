import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    category: z.enum(["research-note", "engineering-note", "essay"]).default("research-note"),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    cover: z.string().default("/og/default.png"),
    ogImage: z.string().optional()
  })
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    year: z.number(),
    role: z.string().default("Research Engineer"),
    category: z.enum(["AI Systems", "Cybersecurity", "Forensics", "Fraud Analysis"]),
    stack: z.array(z.string()).min(1),
    featured: z.boolean().default(false),
    status: z.string().default("Completed"),
    cover: z.string().default("/og/default.png"),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    paper: z.string().url().optional()
  })
});

export const collections = { blog, projects };
