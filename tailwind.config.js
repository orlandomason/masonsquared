/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      ltmain: '#FFF8F0',
      dkmain: '#222222',
      ltaccent: '#cc4466',
      dkaccent: '#C97C5D',
    },
    extend: {
      fontFamily: {
        'text': ['Roboto', 'sans-serif'],
        'heading': ['Roboto', 'sans-serif'],
        'mono': ['Roboto Mono', 'sans-serif'],
      },
      boxShadow: {
        ltoutline: '0 0 10px 0 rgba(255, 255, 255, 0.12)',
        dkoutline: '0 0 10px 0 rgba(0, 0, 0, 0.12)',
      },
    },
  },
}
