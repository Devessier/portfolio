const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts,svx}', './svelte.config.js', './mdsvex.config.js'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
				cursive: ['Comfortaa', 'cursive']
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						'code::before': {
							content: 'unset'
						},
						'code::after': {
							content: 'unset'
						},
						code: {
							color: theme('colors.red.700')
						}
					}
				},
				red: {
					css: {
						'--tw-prose-links': theme('colors.red.700')
					}
				}
			})
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
