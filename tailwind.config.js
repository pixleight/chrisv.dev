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
    }
  }
}