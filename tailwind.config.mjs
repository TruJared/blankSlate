/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const { colors } = require("tailwindcss/defaultTheme");

export default {

	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		colors: {
			transparent: "transparent",
		},
		extend: {
			backgroundColor: {
				theme: {
					base: "var(--color-background)",
					alt: "var(--color-text)",
					accent: "var(--color-accent)",
					grey: "hsla(0, 0%, 70%, 0.55)", // Light slate grey
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
						// "var(--color-background)",
						"var(--color-accent)",
						"var(--color-text)",
						"var(--color-shadow)",
					],
				}),
			},
			borderColor: {
				theme: {
					base: "var(--color-border)",
					alt: "var(--color-accent)",
				},
			},
			boxShadowColor: {
				theme: {
					base: "var(--color-shadow)",
				},
			},
			textColor: {
				theme: {
					base: "var(--color-text)",
					accent: "var(--color-accent)",
					alt: "var(--color-text-alt)",
				},
			},
			textDecorationColor: {
				theme: {
					base: "var(--color-text)",
					accent: "var(--color-accent)",
					alt: "var(--color-text-alt)",
				},
			},
			fontFamily: {
				sans: ["Recursive", ...defaultTheme.fontFamily.sans],
				serif: ["Recursive", ...defaultTheme.fontFamily.serif],
				mono: ["Rubik Mono One", ...defaultTheme.fontFamily.mono],
			},
		},
	},
	plugins: [],
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
