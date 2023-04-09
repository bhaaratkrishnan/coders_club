/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {

		extend: {
			colors: {
				"logoBlue": "#233dff"
			},
			keyframes: {
				changeBg: {
					"0%": { transform: "translate(0,0)" },
					"50%": { transform: "translate(100%,100%)" },
					"100%": { transform: "translate(0,0)" }

				}
			},
			animation: {
				pulseFast: "pulse 1s linear infinite",
				changeBg: "changeBg 5s linear infinite"
			}
		},
	},
	plugins: [],
}
