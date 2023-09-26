/** @type {import('tailwindcss').Config} */
import preline from 'preline/plugin.js'
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js'
    ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        oswald: ['Oswald','sans-serif']
      },
    },
  },
  plugins: [
    preline
  ],
}