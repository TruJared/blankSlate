/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const { colors } = require("tailwindcss/defaultTheme");

const { SITE } = require("./src/_alkaline_config.ts");

export default {
	darkMode: "class",
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		colors: {}, // delete this line to include the default Tailwind colors
		extend: {
			colors: {
				white: colors.white || "#ffffff",
				black: colors.black || "#000000",
				slate: {
					300: "#e2e8f0",
					400: "#94a3b8",
					700: "#334155",
					900: "#0f172a",
				},
				transparent: "transparent",
			},
			backgroundColor: {
				theme: {
					primary: "var(--color-background)",
					secondary: "var(--color-text)",
					accent: "var(--color-accent)",
					accentAlt: "var(--color-accent-alt)",
				},
			},
			backgroundImage: {
				"gradient-linear": generateGradient({
					type: "linear",
					angle: 145,
					colors: ["var(--color-background)", "var(--color-gradient)"],
				}),
				"gradient-radial": generateGradient({
					type: "radial",
					shape: "ellipse",
					position: "center right",
					colors: [
						"var(--color-background)",
						"var(--color-accent)",
						"var(--color-text)",
						"var(--color-shadow)",
					],
				}),
			},
			borderColor: {
				theme: {
					primary: "var(--color-accent)",
					secondary: "var(--color-accent-alt)",
				},
			},
			boxShadowColor: {
				theme: {
					primary: "var(--color-shadow)",
					secondary: "var(--color-text)",
				},
			},
			textColor: {
				theme: {
					primary: "var(--color-text)",
					secondary: "var(--color-background)",
					accent: "var(--color-accent)",
					accentAlt: "var(--color-accent-alt)",
				},
			},
			textDecorationColor: {
				theme: {
					primary: "var(--color-accent)",
					secondary: "var(--color-accent-alt)",
				},
			},
			fontFamily: {
				sans: [
					`"${SITE.fonts
						.find((o) => o.typeface === "sans")
						?.fontFamily.replace(/\+/g, " ")}"`,
					...defaultTheme.fontFamily.sans,
				],
				serif: [
					`"${SITE.fonts
						.find((o) => o.typeface === "serif")
						?.fontFamily.replace(/\+/g, " ")}"`,
					...defaultTheme.fontFamily.serif,
				],
				mono: [
					`"${SITE.fonts
						.find((o) => o.typeface === "mono")
						?.fontFamily.replace(/\+/g, " ")}"`,
					...defaultTheme.fontFamily.mono,
				],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};

/**
 * Generate a CSS gradient string.
 *
 * @param {object} options
 * @param {string} options.type - The type of gradient. Either "linear" or "radial".
 * @param {string[]} options.colors - An array of color stops.
 * @param {string} [options.direction="right"] - The direction of the gradient.
 * @param {number} [options.angle=0] - The angle of the gradient.
 * @param {string} [options.shape="ellipse"] - The shape of the gradient.
 * @param {string} [options.position="center"] - The position of the gradient.
 * @returns {string} The generated gradient string.
 */

function generateGradient({
	type,
	colors,
	direction = "top",
	angle = 0,
	shape = "ellipse",
	position = "center",
}) {
	if (!Array.isArray(colors) || colors.length < 2)
		throw new Error("At least two colors must be provided");

	if (type === "radial")
		return `radial-gradient(${shape} at ${position}, ${colors.join(", ")})`;

	return `linear-gradient(${
		angle ? angle + "deg" : "to " + direction
	}, ${colors.join(", ")})`;
}
