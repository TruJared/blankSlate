// TODO: types

import { SITE } from "./SITE.js";
import { AUTHORS } from "./AUTHORS.js";

// useful if you need to have different meta data for blog and site

const BLOG = {
  title: SITE.title, // 'my blog'
	author: AUTHORS[0].name,
	description: SITE.description,
	keywords: SITE.keywords,
	postsPerPage: 10,
	syntaxHighlighting: "poimandres" || null, // https://shiki.matsu.io/themes
};

export default BLOG;
