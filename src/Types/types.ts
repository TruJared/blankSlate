import type { ShikiConfig } from "astro";
import type { GoogleFontFamily } from "./google-fonts";

//  Accepts GoogleFontFamily for Google Fonts types(about 250 listed).
//  Accept any other string if Google Fonts types doesn't import - comment out the import to remove the font hints
type FontFamily =
	| GoogleFontFamily
	| (GoogleFontFamily extends never ? string : never);

export type Font = {
	typeface: "sans" | "serif" | "mono";
	fontFamily: FontFamily;
	fontWeights: number[] | string[] | null;
	includeItalic?: boolean;
};

// these correspond to icon names for the remix icon library, they may need updated if you change the icon library
export const Platforms =
  ["behance", "bluesky", "codepen", "discord",
  "dribbble", "email", "evernote", "facebook", "flickr", "github",
  "gitlab", "global", "instagram", "line", "linkedin",
  "mastodon", "medium", "messenger", "notion", "patreon", "pinterest",
  "reddit", "rss", "skype", "slack", "snapchat",
  "soundcloud", "spotify", "telegram", "threads", "tiktok",
  "trello", "tumblr", "twitch", "twitter", "twitter-x", "vimeo",
  "vk", "web", "wechat", "whatsapp", "youtube"] as const;

export type Socials = {
	platform: (typeof Platforms)[number] | string;
	url: string;
	userName?: string;
};

export type Author = {
	id: number;
	name: string;
	socials: Socials[];
	email?: string | null;
};

export type Site = {
	title: string;
	url: string;
	author: string;
	postsPerPage: number;
	keywords: string[];
	disableIndexing: boolean;
	logoSrc: string | null;
	shikiConfig: ShikiConfig;
	description?: string | null;
	ogImage?: string;
	locale?: string;
	faviconSrc?: string;
	canonicalUrl?: string;
	fonts: Font[];
	showTitleBackground?: boolean;
	socials: Socials[];
};

export type NavEntry = {
	href: string;
	text: string;
};

export type Blog = {
	title: string;
	author: string;
	description: string;
	keywords: string[];
	postsPerPage: number;
};

export type Docs = Blog;

// This type is auto-generated. Do not edit manually.
export type ThemeNames = 'theme-light' | 'theme-dark' | 'theme-deep-sea' | 'theme-generic' | 'theme-haunted' | 'theme-invisible' | 'theme-leet' | 'theme-neon-bliss' | 'theme-old-couch' | 'theme-peppermint' | 'theme-pop-punk' | 'theme-slime' | 'theme-spring' | 'theme-syntax';
