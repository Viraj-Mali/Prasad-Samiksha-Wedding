/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#fdf7f3', // Cream background
          DEFAULT: '#9b1c1c', // Maroon
          dark: '#771515',
        },
        gold: {
          light: '#fde047',
          DEFAULT: '#eab308',
          dark: '#ca8a04',
        },
        saffron: '#f97316',
      },
      fontFamily: {
        sans: ['"Noto Sans Devanagari"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        decorative: ['"Yatra One"', 'cursive'],
      }
    },
  },
  plugins: [],
}
