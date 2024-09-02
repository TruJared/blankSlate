import SITE from "../../../configs/SITE";
import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
	type: "content",
	schema: () =>
		z.object({
			author: z.string().default(SITE.author),
			pubDatetime: z.date().or(z.string().transform((str) => new Date(str))).optional(),
			modDatetime: z.date().or(z.string().transform((str) => new Date(str))).optional(),
			title: z.string().optional(),
			featured: z.boolean().optional(),
			draft: z.boolean().optional(),
			tags: z.array(z.string()).optional(),
			image: z
				.object({
					src: z.string(),
					alt: z.string().optional(),
				})
				.optional()
				.default({ src: SITE.ogImage }),
			authorContact: z.string().default(SITE.socials.email),
			description: z.string().default(SITE.description),
      canonicalURL: z.string().url().optional(),
      // slug: https://docs.astro.build/en/guides/content-collections/#defining-custom-slugs
		}),
});

export const collections = { posts: blogCollection };
