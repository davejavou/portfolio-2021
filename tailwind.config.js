const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
        serif: ["Raleway", ...defaultTheme.fontFamily.serif],
      },
      width: {
        'md-sidebar': '180px',
        'lg-sidebar': '360px'
      },
      height: {
        'sm-nav': '60px',
        'md-nav': '80px',
        'portfolio-item': '600px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
