const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blueGray: colors.blueGray,
        emerald: colors.emerald,
      },
      screens: {
        xs: '475px',
      },
    },
  },
  variants: {
    extend: { cursor: ['disabled'] },
  },
  plugins: [],
};
