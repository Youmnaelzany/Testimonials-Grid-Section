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
		fontSize: {
			xs: '0.6875rem',
			sm: '0.8rem',
			base: '1rem',
			xl: '1.25rem',
			'2xl': '1.563rem',
			'3xl': '1.953rem',
			'4xl': '2.441rem',
			'5xl': '3.052rem',
		},
		extend: {
			lineHeight: {
				'leading-3': '0.6875rem',
				'leading-4': ' 0.8125rem',
				'leading-5': '1.25rem',
			},
		},
	},
	plugins: [],
}
