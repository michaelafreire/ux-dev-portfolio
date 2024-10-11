/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'pink': '#e6ddde',
      'pink-80': 'rgba(230, 221, 222, 0.8)', // Add the new pink color with 80% opacity
      'red': '#6a0e0c',
      'black': '#010101',
      'white': '#ffffff',
      'grey': '#e4e0e0',
    },
    fontFamily: {
      main: ['Open Sans', 'sans-serif'],
      libre: ['Libre Baskerville', 'serif'], // Add the new font here
    },
  },
  plugins: [],
}
