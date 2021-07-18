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
      maxWidth: {
        'max-slide-width': '90%', // Why this needs to be here and does not work in 'spacing' below... I've no idea.
      },
      spacing: {
        'md-sidebar-width': '200px',
        'lg-sidebar-width': '360px',
        'md-nav-width': 'calc(100% - 200px)',
        'lg-nav-width': 'calc(100% - 360px)',
        'nav-height': '60px',
        'md-slide-height': '400px',
        'lg-slide-height': '600px',
        'max-slide-height': '80vh',
        'video-ratio': '56.25%'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
