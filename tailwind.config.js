const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ["Nunito", "ui-sans-serif", "system-ui", "Arial", "sans-serif"],
      serif: ["Raleway", "ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fff',
      black: '#000',
      gray: {
        lightest: '#76858D',
        light: '#5a5b5c',
        DEFAULT: '#272829',
        dark: '#0e0f10',
      },
      blue: {
        lightest: '#14e8fe',
        light: '#3e78ba',
        DEFAULT: '#0b4587',
        dark: '#001254',
      },
      yellow: {
        lightest: '#ffff80',
        light: '#fff64d',
        DEFAULT: '#FCC31A',
        dark: '#c99000',
      }
    },
    extend: {
      maxWidth: {
        'max-slide-width': '90%', // Why this needs to be here and does not work in 'spacing' below... I've no idea.
      },
      spacing: {
        'md-sidebar-width': '200px',
        'lg-sidebar-width': '400px',
        'md-nav-width': 'calc(100% - 200px)',
        'lg-nav-width': 'calc(100% - 360px)',
        'nav-height': '60px',
        'sm-slide-height': '280px',
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
