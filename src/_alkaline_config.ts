import type {
	Site,
	Author,
	Docs,
	Blog,
	Socials,
	Navigation,
} from "./Types/types.d";

//  SITE socials - used for the site footer
export const socials: Socials = {
	email: "jared@jaredmakes.com",
	twitter: "https://twitter.com/jaredmakes",
	github: "...",
	linkedin: "...",
	youtube: "...",
	instagram: "...",
	facebook: "...",
	tiktok: "...",
	twitch: "...",
	discord: "...",
	website: "...",
	other: "...",
};

export const AUTHORS: Author[] = [
	{
		id: 1,
		email: socials.email || "",
		name: "Jared Truscott",
		socials: socials, // assumes that the author has the same socials as the site - change if needed
	},
	{
		id: 2,
		email: "guestAuthor@coolGuestAuthors.com",
		name: "Mr. Cool Ice",
		socials: {
			email: "guestAuthor@coolGuestAuthors.com",
			twitter: "https://twitter.com/coolGuestAuthors",
		},
	},
];

export const SITE: Site = {
	title: "Alkaline",
	showTitleBackground: false,
	url: "https://fakesite.fake", // ! make sure to change this ! //
	author: AUTHORS[0].name, // Made with ❤️ by {your-name}
	description:
		"Alkaline is a theme for Astro that is designed to be easy to customize and use.",
	keywords: ["astro", "theme"],
	disableIndexing: false, // true for no indexing
	logoSrc: '/logo.png' ||null, // in public folder png or svg
	ogImage: "/og-image.png", // in public folder
	favicon: "/favicon.png", // in public folder png or svg
	socials: socials,
	locale: "en_US",
	postsPerPage: 10,
	shikiConfig: {
		theme: "night-owl",
	},

	// https://fonts.google.com/
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
	// If you're having trouble with the fonts not loading, it's probably because the font family name is incorrect or the font weights are not supported for that font family
};

export const NAVIGATION: Navigation[] = [
	{
		href: "/",
		text: "Home",
	},
	{
		href: "/blog",
		text: "Blog",
	},
	{
		href: "/docs",
		text: "Docs",
	},
	{
		href: "/tags",
		text: "Tags",
	},
	{
		href: "/themes",
		text: "Themes",
	},
	{
		href: "/typography",
		text: "Typography",
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

// export the collection names list
export const COLLECTION_NAMES_LIST = ["blog", "docs"] as const;
