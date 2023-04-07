/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		
		extend: {
			colors: {
				"logoBlue" : "#233dff"
			},
			keyframes : {
				borderPulse: {
					"0%": {transform: "border-width: 0px"},
					"100%":{transform:"border-width: 1px"}
				}
			},
			animation: {
				borderPulse: "borderPulse 2s infinite"
			}
		},
	},
	plugins: [],
}
