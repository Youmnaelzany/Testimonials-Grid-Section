/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'white': '#FFFFFF',
			'dark-gray': '#48556A',
			'purple': '#733FC8',
			'light-purple': '#A775F1',
			'off-white': '#ECF2F8 ',
			'dark-navy': '#19202D ',
			'light-gray': '#CFCFCF',
		},
		fontFamily: {
			'Barlow': ['Barlow Semi Condensed', 'sans-serif'],
		},
		extend: {},
	},
	plugins: [],
}
