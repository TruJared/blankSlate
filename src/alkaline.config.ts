import { Platforms } from "./Types/types"; // as const

import type {
	Site,
	Author,
	// Docs,
	Blog,
	Socials,
	NavEntry,
} from "./Types/types";

/**
 * @description This file contains the configuration for the Alkaline theme.
 * - There are quite a few settings, but they allow for a vast amount of automatization across the theme
 * @exports SITE - The site configuration object
 * @exports NAVIGATION - The navigation configuration object
 * @exports BLOG - The blog configuration object
 * @exports DOCS - The docs configuration object
 */

//  SITE socials - used for the site footer
export const socials: Socials[] = [
	{
		platform: "email",
		url: "jared@jaredmakes.com",

	},
	{
		platform: "github",
		url: "https://github.com/TruJared/blankSlate",
	},
	{
		platform: "web",
		url: "https://jaredmakes.com",
	}
];

// I use this in development to easily see all socials at once
// - useful if you want to change the iconography
export const allSocials: Socials[] = Platforms.map(platform => ({
  platform,
  url: `https://${platform}.com`,
  userName: `test_user_${platform}`
}));

export const AUTHORS: Author[] = [
// assumes that the 1st author has the same socials as the site - change if needed
	{
		id: 1,
		name: "Jared Truscott",
		socials: [
			...socials,
			...allSocials,
		],
		email: null,
	},
	{
		id: 2,
		email: "guestAuthor@coolGuestAuthors.com",
		name: "Mr. Cool Ice",
		socials: [{
			platform: "web",
			url: "https://jaredmakes.com",
		}],
	},
];

export const SITE: Site = {
	title: "Alkaline",
	showTitleBackground: true,
	url: "https://fakesite.fake", // ! make sure to change this ! //
	author: AUTHORS[0].name, // Made with ❤️ by {your-name}
	description: "A Neutral Base For Your Next Creation",
	keywords: ["astro", "theme", "blog"],
	disableIndexing: false, // true for no indexing
	logoSrc: "/alk-4.png" || null, // in public folder png or svg
	faviconSrc: "/favicon.png" || null, // in public folder png or svg
	ogImage: "/og-image.png" || null, // in public folder
	socials: socials,
	locale: "en_US",
	postsPerPage: 3,
	shikiConfig: {
		theme: "poimandres",
	},
	// * edit or remove ./Types/google-fonts.d.ts to add/remove font types * //
	fonts: [
		{
			typeface: "serif",
			fontFamily: "SUSE",
			fontWeights: ["100..800"],
		},
		{
			typeface: "sans",
			fontFamily: "Roboto",
			fontWeights: [400, 500, 600, 700],
			includeItalic: true,
		},
		{
			typeface: "mono",
			fontFamily: "Fira Code",
			fontWeights: [400, 500, 700],
		},
	],
	// If you're having trouble with the fonts not loading, it's probably because the font family name isn't EXACTLY correct or the font weights you're trying to fetch are not supported for that font family
};

export const NAVIGATION: NavEntry[] = [
	{
		href: "/",
		text: "Home",
	},
	// {
	// 	href: "/blog",
	// 	text: "Blog",
	// },
	{
		href: "/docs",
		text: "Docs",
	},
	{
		href: "/tags",
		text: "Tags",
	},
	{
		href: "/elements",
		text: "Elements",
	},
	{
		href: "/features/feature-list",
		text: "Features",
	},
	{
		href: "/features/faq",
		text: "FAQ",
	},
	{
		href: "/404",
		text: "404",
	},
];

// '2nd' blog


export const DOCS: Docs = {
	title: "Alkaline Docs",
	author: AUTHORS[0].name,
	description: SITE.description || "",
	keywords: SITE.keywords,
	postsPerPage: 3,
};



/*
  in theory Alkaline supports multiple blogs without any major changes.
   Be sure to update the collection names in the content.config.ts file
  and the rss feed \astro-blankslate\src\pages\rss.xml.js

	export const BLOG: Blog = {
	title: "Alkaline" || SITE.title,
	author: AUTHORS[0].name,
	description: "A blog for the Alkaline theme" || SITE.description,
	keywords: ["Alkaline", "theme", "blog"] || SITE.keywords,
	postsPerPage: 3,
};

*/

// export the name(s) of the collections as a list - must match the name of the collection in the content directory
export const COLLECTION_NAMES_LIST = ["docs"]; // ["blog", "docs"]
