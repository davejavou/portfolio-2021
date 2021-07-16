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
      spacing: {
        'md-sidebar': '180px',
        'lg-sidebar': '360px',
        'sm-nav': '60px',
        'md-nav': '80px',
        'project-row': '600px',
        'max-project-row': '80vh',
        'video-ratio': '56.25%'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
