module.exports = {
  purge: {
    enabled: true,
    content: ['./src/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      'primary': '#7e5c64',
      'secondary': '#ffffff'
    },
    flex: {
      '4': '1 0 21%'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
