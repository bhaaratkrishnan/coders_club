/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {

		extend: {
			colors: {
				"logoBlue": "#233dff"
			},

			animation: {
				pulseFast: "pulse 1s linear infinite"
			}
		},
	},
	plugins: [],
}
