

import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	integrations: [
		react(),
		sitemap(),
		tailwind(),
		robotsTxt(),
		icon(),
		mdx({
			shikiConfig: {
				theme: "poimandres", // https://shiki.matsu.io/themes
			},
			// TODO: remarkPlugins: [], rehypePlugins: []

			// additional plugins
		}),
	],
});
