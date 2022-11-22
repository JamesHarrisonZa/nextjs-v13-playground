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
      hero: ['Smooch'],
    },
  },
  daisyui: {
    themes: [
      'dark',
      'light',
      'night',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'coffee',
      'winter',
    ],
  },
};
