const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                xs: '.75rem',
                sm: '.875rem',
                base: '1rem',
                lg: '1.125rem',
                xl: '1.25rem',
                '2xl': '1.5rem',
                '3xl': '1.875rem',
                '4xl': '2.25rem',
                '5xl': '3rem',
                '6xl': '4rem',
                '7xl': '5rem',
                '8xl': '6rem',
                '9xl': '7rem',
                '10xl': '8rem',
            },
        },
        zIndex: {
            '0': 0,
            '10': 10,
            '20': 20,
            '30': 30,
            '31': 31,
            '32': 32,
            '33': 33,
            '34': 34,
            '35': 35,
            '36': 36,
            '37': 37,
            '38': 38,
            '39': 39,
            '40': 40,
            '50': 50,
            '100': 100,
            auto: 'auto',
        },
    },
    variants: {
        textColor: ['responsive', 'hover', 'focus', 'first'],
        borderWidth: ['responsive', 'first', 'last'],
        borderRadius: ['responsive', 'first', 'last'],
    },
    plugins: [],
    purge: {
        enabled: false,
    },
}
