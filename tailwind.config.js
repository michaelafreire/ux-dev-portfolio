/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'red-60': '#d42e75', // Add the new pink color with 80% opacity
      'red': '#d42e75',
      'black': '#1e1c1c',
      'white': '#fafafa',
      'grey': '#ededec',
      'grey-30': '#f2720c',
      'red-20': "rgba(212, 46, 117, 0.2)"
    },
    fontFamily: {
      main: ['Space Grotesk', 'sans-serif'],
      libre: ['Savate', 'sans-serif'], // Add the new font here
    },
  },
  plugins: [],
}
