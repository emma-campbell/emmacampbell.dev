const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: "#273036",
      gray: colors.coolGray,
      white: colors.white,
      blue: {
        100: "#6EC2C8",
      },
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      lato: ["Lato", "sans-serif"]
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
