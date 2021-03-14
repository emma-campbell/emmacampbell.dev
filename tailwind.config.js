const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: "#273036",
      gray: colors.coolGray,
      white: colors.white
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      hind: ["Hind", "sans-serif"]
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
