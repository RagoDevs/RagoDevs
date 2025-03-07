/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#6854FC",
        yellow: "#FFE600",
        backgroundColor: ["disabled"], 
        cursor: ["disabled"],
      },
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
        roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active", 'disabled'],
      cursor: ['disabled']
    },
  },
  plugins: [],
};
