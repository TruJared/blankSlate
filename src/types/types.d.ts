import type { ShikiConfig } from "astro";
import type { GoogleFontFamily } from "./google-fonts";
import type { IconifyIcon } from "@iconify/types";
import type { CollectionNames } from "../content/config";

export type Font = {
	typeface: "sans" | "serif" | "mono";
	fontFamily: GoogleFontFamily | string;
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
	favicon?: string;
	socials?: Socials;
	canonicalUrl?: string;
	fonts: Font[];
	showTitleBackground?: boolean;
};

export type NavEntry = {
	href: string;
	text: string;
};

export type Navigation = NavEntry;

export type Blog = {
	title: string;
	author: string;
	description: string;
	keywords: string[];
	postsPerPage: number;
};

export type Docs = {
	title: string;
	author: string;
	description: string;
	keywords: string[];
};

// This type is auto-generated. Do not edit manually.
export type ThemeNames = 'theme-light' | 'theme-dark' | 'theme-Alkaline' | 'theme-1337' | 'theme-blue-steel' | 'theme-brutal' | 'theme-Cthulhu-fhtagn' | 'theme-neon-bliss' | 'theme-old-couch' | 'theme-peppermint' | 'theme-pop-punk' | 'theme-slime' | 'theme-syntax' | 'theme-vans';
