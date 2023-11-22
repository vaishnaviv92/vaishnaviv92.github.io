/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'sage': '#A2B1AB',
        // 'sage':'#D0DFC9',
        'navlightgrey': '#E9E9E9',
        'offwhite': '#EFEFE9',
        'earth': '#B0632B'

      },
      fontFamily: {
        'lato': ['lato', 'sans-serif'],
        'cantarell': ['Cantarell', 'sans-serif']
      }
    }
  },
  plugins: [],

}

