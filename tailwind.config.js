const { fontFamily, colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    content: ['./src/**/*.vue'],
    options: {
      whitelist: ['mode-dark'],
    },
  },
  theme: {
    fontFamily: {
      sans: [
        'Montserrat',
        ...fontFamily.sans,
      ],
      display: [
        'Comfortaa',
        ...fontFamily.sans,
      ],
    },
    extend: {
      colors: {
        gray: {
          100: '#f8f8fc',
          200: '#efedf7',
          300: '#e3e1ef',
          400: '#cfcce0',
          500: '#a59fc1',
          600: '#787297',
          700: '#4f4a68',
          800: '#322e48',
          900: '#1e1a2d',
          light: 'var(--color-light-gray)',
          medium: 'var(--color-medium-gray)',
          dark: 'var(--color-dark-gray)',
        },
        white: 'var(--color-white)',
        purple: {
          ...colors.purple,
          default: 'var(--color-purple)',
        },
        teal: {
          ...colors.teal,
          default: 'var(--color-teal)',
        },
        yellow: {
          ...colors.yellow,
          default: 'var(--color-yellow)',
        },
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
        'sharp-left': '-8px 8px 0 rgba(0, 0, 0, 0.3)',
        'sharp-right': '8px 8px 0 rgba(0, 0, 0, 0.3)',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd'],
    borderColor: ['responsive', 'hover', 'focus', 'dark', 'dark-focus', 'dark-focus-within'],
    textColor: ['responsive', 'hover', 'focus', 'dark', 'dark-hover', 'dark-active', 'dark-placeholder']
  },
  plugins: [
    require('tailwindcss-dark-mode')()
  ],
}