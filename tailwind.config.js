/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      colors: {
        'sage': '#D0DFC9',
        'navlightgrey': '#E9E9E9'
      },
      fontFamily: {
        'lato': ['lato', 'sans-serif'],
        'cantarell': ['Cantarell', 'sans-serif']
      }
    }
  },
  plugins: [],

}

