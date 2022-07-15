/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['DM Sans', 'sans-serif'],
        'plex': ['IBM Plex Mono', 'monospace']
      },
      colors: {
        'purple-500': '#873EFF',
        'green-400': '#04D361',
        'gray-300': '#AEAEAE', 
        'gray-50': '#F9F9F9',
      }
    },
  },
  plugins: [],
}
