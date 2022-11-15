const theme = 'night';

/** @type {import('tailwindcss').Config} */
module.exports = {
  relative: true,
  content: ['./app/**/*.{html,tsx}', './libs/**/*.tsx'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  theme: {
    fontFamily: {
      hero: ['Permanent Marker', 'cursive'],
    },
  },
  daisyui: {
    themes: [theme],
    darkTheme: theme,
  },
};