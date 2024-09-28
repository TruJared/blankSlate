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

export type Socials = {
	email?: string;
	twitter?: string;
	github?: string;
	linkedin?: string;
	youtube?: string;
	instagram?: string;
	facebook?: string;
	tiktok?: string;
	twitch?: string;
	discord?: string;
	website?: string;
	other?: string;
};

export type Author = {
	id: number;
	email: string;
	name: string;
	socials: Socials;
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
	socials?: Socials;
	canonicalUrl?: string;
	fonts: Font[];
	showTitleBackground?: boolean;
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
export type ThemeNames = 'theme-light' | 'theme-dark' | 'theme-Alkaline' | 'theme-1337' | 'theme-blue-steel' | 'theme-Cthulhu-fhtagn' | 'theme-haunted' | 'theme-neon-bliss' | 'theme-old-couch' | 'theme-peppermint' | 'theme-pop-punk' | 'theme-slime' | 'theme-spring' | 'theme-syntax';
