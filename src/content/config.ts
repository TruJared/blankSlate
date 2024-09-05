import { SITE, DOCS, BLOG } from "../_alkaline_config";
import { defineCollection, z } from "astro:content";

// base schema for all collections
const postCollectionSchema = {
	author: z.string().default(SITE.author),
	// todo: authorContact should support more than just email //
	authorContact: z.string().optional(),
	title: z.string(),
	subtitle: z.string().optional(),
	description: z.string().default(SITE.description || ""),
	pubDatetime: z
		.date()
		.or(z.string().transform((str: string) => new Date(str)))
		.optional(),
	modDatetime: z
		.date()
		.or(z.string().transform((str: string) => new Date(str)))
		.optional(),
	featured: z.boolean().optional(),
	draft: z.boolean().optional(),
	tags: z.array(z.string()).optional(),
	image: z
		.object({
			src: z.string(),
			alt: z.string().optional(),
		})
		.optional()
		.default({ src: SITE.ogImage || "" }),
	canonicalURL: z.string().url().optional(),
	// slug: no need to define slug, it will be generated automatically but you can add it manually in the frontmatter as well - https://docs.astro.build/en/guides/content-collections/#defining-custom-slugs
};

// use destructuring for overrides or additional fields

// blog collection
const blogCollection = defineCollection({
	type: "content",
	schema: () =>
		z.object({
			...postCollectionSchema,
      title: z.string().default(BLOG.title).optional(),
		}),
});

// docs collection
const docsCollection = defineCollection({
	type: "content",
	schema: () =>
		z.object({
			...postCollectionSchema,
			title: z.string().default(DOCS.title).optional(),
		}),
});

export const collections = { blog: blogCollection, docs: docsCollection };
