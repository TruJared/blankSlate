import { Platforms } from "./Types/types"; // as const

import type {
	Site,
	Author,
	Docs,
	Blog,
	Socials,
	NavEntry,
} from "./Types/types";

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

// I use this to test new socials
// - useful if you want to change the iconography
export const testSocials: Socials[] = Platforms.map(platform => ({
  platform,
  url: `https://${platform}.com`,
  userName: `test_user_${platform}`
}));

export const AUTHORS: Author[] = [
	{
		id: 1,
		name: "Jared Truscott",
		socials: [
			...socials,
			...testSocials,
		], // assumes that the author has the same socials as the site - change if needed
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
	ogImage: "/og-image.png", // in public folder
	socials: socials,
	locale: "en_US",
	postsPerPage: 10,
	shikiConfig: {
		theme: "poimandres",
	},
	// https://fonts.google.com/
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
	// If you're having trouble with the fonts not loading, it's probably because the font family name isn't EXACTLY correct or the font weights are not supported for that font family
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
		text: "Docs By Tag",
	},
	{
		href: "/elements",
		text: "Elements",
	},
	{
		href: "/features",
		text: "Features",
	},
	{
		href: "/404",
		text: "404",
	},
];

export const BLOG: Blog = {
	title: "Alkaline" || SITE.title,
	author: AUTHORS[0].name,
	description: "A blog for the Alkaline theme" || SITE.description,
	keywords: ["Alkaline", "theme", "blog"] || SITE.keywords,
	postsPerPage: 10,
};

// '2nd' blog
export const DOCS: Docs = {
	title: "Alkaline Docs",
	author: AUTHORS[0].name,
	description: SITE.description || "",
	keywords: SITE.keywords,
	postsPerPage: 10,
};

// export the name(s) of the collections as a list - must match the name of the collection in the collections directory
export const COLLECTION_NAMES_LIST = ["blog", "docs"];
