import { defaultErrorMap } from "astro:schema";

const socials = {
	twitter: "https://twitter.com/{your-twitter-username}",
	github: "...",
};

const SITE = {
	name: "_Blank Slate",
	url: "{your-website-url}",
	author: "{your-name}", // Made with ❤️ by {your-name}
	description: "{your-website-description}",
	title: "{your-website-title}",
	tagline: "{your-website-tagline}",
	keywords: ["{your-website-keyword}, {your-website-keyword-2}, ..."],
	follow: false, // robots follow ?
	logo: "/logo.svg", // "{in public folder}"
	socials: socials,
	ogImage: "",
};

export default SITE;
