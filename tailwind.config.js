/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sulu: {
          '50': '#f6fee7',
          '100': '#eafccb',
          '200': '#d7f99d',
          '300': '#bef264',
          '400': '#a5e635',
          '500': '#89cc16', // Este suele ser el color base o principal
          '600': '#6ca30d',
          '700': '#547c0f',
          '800': '#456212',
          '900': '#3c5314',
          '950': '#1f2e05',
        },
      }
    },
  },
  plugins: [],
}

