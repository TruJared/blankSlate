import { SITE, COLLECTION_NAMES_LIST } from "../_alkaline_config";
import { BLOG, DOCS } from "../_alkaline_config";
import { defineCollection, z } from "astro:content";

const collectionNames = COLLECTION_NAMES_LIST;

// base schema for all collections
const postCollectionSchema = {
	author: z.string().default(SITE.author),
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
			width: z.number().optional(),
			height: z.number().optional(),
			format: z.enum(["webp", "jpg", "png"]).optional(),
			quality: z.number().min(0).max(100).optional(),
		})
		.optional(),
	canonicalURL: z.string().url().optional(),
	// slug: no need to define slug, it will be generated automatically but you can add it manually in the frontmatter as well - https://docs.astro.build/en/guides/content-collections/#defining-custom-slugs
};

// Advanced customization options //

// use destructuring for overrides or to add additional fields

let collectionSchemas: { [key: string]: any } = {};

// @ts-ignore
collectionNames.forEach((collectionName) => {
	collectionSchemas[collectionName] = defineCollection({
		type: "content",
		schema: () =>
			z.object({
				...postCollectionSchema,

				// * -- Example overrides -- * //

				// * -- Add new field to all collections -- * //

				// customField: z.string().optional(),

				// * -- Override the default author for all collections -- * //

				// author: z.string().optional(),

				// * -- Override the default title for a single collection or multiple collections -- * //

				// title: z
				// 	.string()
				// 	.default(collectionName === "blog" ? BLOG.title : DOCS.title)
				// 	.optional(),
			}),
	});
});

export const collections = collectionSchemas;
