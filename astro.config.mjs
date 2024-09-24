import { SITE, COLLECTION_NAMES_LIST } from "./src/_alkaline_config";
import robotsConfig from './src/utils/robots-txt.config';

import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	site: SITE.url,
	integrations: [
		react(),
		sitemap(),
		tailwind(),
		robotsTxt({robotsConfig}),
		icon(),
		mdx({
			shikiConfig: SITE.shikiConfig,
		}),
		// TODO: remarkPlugins: [],
		// additional plugins
	],
	content: {
		collections: COLLECTION_NAMES_LIST.map((collection) => ({ name: collection, type: 'content' })),
	},
});
