/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'card-bg': '#3B3E43',
        'custom-gray': 'rgb(158, 158, 158)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
