/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'sage': '#D1DBBD',
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

