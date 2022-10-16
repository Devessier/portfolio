const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}', './svelte.config.js', './mdsvex.config.js'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
				cursive: ['Comfortaa', 'cursive']
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
