/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'pink': '#ff0055',
      'pink-light': '#fcbcd2',
      'gray': '#f0f0f0',
      'transparent-gray': 'rgba(240, 240, 240, 0.8)',
      'black': '#373e4c',
      'white': '#ffffff',
    },
    fontFamily: {
      main: ['Montserrat', 'sans-serif'],    },
  },
  plugins: [],
}
