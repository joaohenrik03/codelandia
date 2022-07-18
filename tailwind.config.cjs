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
        'stone-800': '#171228',
        'stone-900': '#0E091B',
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'smmd': '520px',
      // => @media (min-width: 520px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}
