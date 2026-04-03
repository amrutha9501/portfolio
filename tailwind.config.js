/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        josefin: ['Josefin Slab', 'serif'],
        grandiflora: ['Grandiflora One', 'cursive'],
        amatic: ['"Amatic SC"', 'cursive'],
        oswald: ['Oswald', 'sans-serif'],
        alumni: ['Alumni Sans Pinstripe', 'sans-serif'],
        poiret: ['Poiret One', 'sans-serif'],
        genos: ['Genos', 'sans-serif'],
        bruno: ['Bruno Ace SC', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

