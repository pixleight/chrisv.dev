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
        site: {
          background: 'var(--color-background)',
          body: 'var(--color-body)',
          transparent: 'var(--color-transparent)',
          primary: 'var(--color-primary)',
          secondary: 'var(--color-secondary)',
          accent: 'var(--color-accent)',
          invert: 'var(--color-invert)',
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