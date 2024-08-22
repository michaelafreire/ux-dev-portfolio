/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'pink': '#ff0055',
      'pink-light': '#f0a4be',
      'pink-light-light': '#ecc8d4',
      'gray': '#f0f0f0',
      'transparent-gray': 'rgba(240, 164, 190, 0.8)',
      'black': '#373e4c',
      'white': '#f0f0f0',
    },
    fontFamily: {
      main: ['Montserrat', 'sans-serif']},
  },
  plugins: [],
}
