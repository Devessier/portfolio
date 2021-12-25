const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
				cursive: ['Comfortaa', 'cursive']
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
	]
};
