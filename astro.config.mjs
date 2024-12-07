import { SITE, COLLECTION_NAMES_LIST } from "./src/alkaline.config";
import robotsConfig from './src/utils/robots-txt.config';

import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import icon from "astro-icon";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    site: SITE.url,
    markdown: {
        shikiConfig: SITE.shikiConfig,
    },
    integrations: [react(), sitemap(), tailwind(), robotsTxt({robotsConfig}), // TODO: remarkPlugins: [],
    // additional plugins
    icon(), mdx()],
    content: {
        collections: COLLECTION_NAMES_LIST.map((collection) => ({ name: collection, type: 'content' })),
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@import "src/styles/animations.css";`
                }
            }
        }
    }
});