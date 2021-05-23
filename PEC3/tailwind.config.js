module.exports = {
  purge: {
    enabled: true,
    content: ['./src/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flex: {
        '4': '1 0 21%'
      },
      textColor: {
        'accent': '#7e5c64'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
