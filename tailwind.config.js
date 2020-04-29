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
          invert: 'var(--color-invert)',
        },
      },
    },
  }
}