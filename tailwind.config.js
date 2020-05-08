const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    fontFamily: {
      sans: [
        'Montserrat',
        ...defaultTheme.fontFamily.sans,
      ],
      display: [
        'Comfortaa',
        ...defaultTheme.fontFamily.sans,
      ],
    },
    extend: {
      colors: {
        gray: {
          light: 'var(--color-light-gray)',
          medium: 'var(--color-medium-gray)',
          dark: 'var(--color-dark-gray)',
        },
        white: {
          default: 'var(--color-white)',
          transparent: 'var(--color-white-transparent)',
        },
        purple: 'var(--color-purple)',
        teal: 'var(--color-teal)',
        yellow: 'var(--color-yellow)',
        theme: {
          background: 'var(--theme-background)',
          body: 'var(--theme-body)',
          transparent: 'var(--theme-transparent)',
          primary: 'var(--theme-primary)',
          secondary: 'var(--theme-secondary)',
          accent: 'var(--theme-accent)',
          invert: 'var(--theme-invert)',
        },
      },
      skew: {
        '15': '15deg',
        '-15': '-15deg',
        '30': '30deg',
        '-30': '-30deg',
      },
      boxShadow: {
        'sharp': '8px 8px 0 rgba(0, 0, 0, 0.3)',
      },
    },
  }
}