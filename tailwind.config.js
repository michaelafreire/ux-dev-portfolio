/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#99a6f9',
      'blue-light': '#c3cafc',
      'orange': '#fe885c',
      'orange-light': '#ffbca4',
      'gray': '#ffffff',
      'transparent-gray': '#ece7e2',
      'black': '#1f0e22',
      'white': '#ffffff'
    },
    fontFamily: {
      main: ['Montserrat', 'sans-serif']},
  },
  plugins: [],
}
