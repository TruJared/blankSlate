// TODO: Types

import { SITE } from "./SITE.js";
import { AUTHORS } from "./AUTHORS.js";

// meta data for the docs - example of multiple blog configs
const DOCS = {
	title: SITE.title, // 'my docs'
	author: AUTHORS[0].name,
	description: SITE.description,
	keywords: SITE.keywords,
	// syntaxHighlightTheme: "poimandres", // https://shiki.matsu.io/themes
	postsPerPage: 10,
};

export default DOCS;
