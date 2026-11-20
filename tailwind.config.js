/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        earth: {
          brown: '#713B27',
          terracotta: '#A65332',
          ochre: '#C47A50',
          mud: '#8A4A30',
          sand: '#E9D8BD',
          ivory: '#F5EFE2',
          cream: '#FAF5EA',
          soil: '#302019',
          forest: '#435C3B',
          leaf: '#71834E',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Noto Serif Odia"', 'serif'],
        sans: ['"DM Sans"', '"Noto Sans Odia"', 'sans-serif'],
        odia: ['"Noto Sans Odia"', '"Noto Serif Odia"', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        'earth': '0 4px 20px -2px rgba(48, 32, 25, 0.08), 0 2px 6px -1px rgba(48, 32, 25, 0.04)',
        'earth-lg': '0 10px 30px -4px rgba(48, 32, 25, 0.12), 0 4px 10px -2px rgba(48, 32, 25, 0.06)',
      }
    },
  },
  plugins: [],
}
