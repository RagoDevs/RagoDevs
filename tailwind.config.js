/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'purple':'#6854FC',
        'yellow':'#FFE600'
      },
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
        roboto: ["Roboto", ...defaultTheme.fontFamily.sans]
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      
    }
  },
  plugins: [],
}
