/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red-primary': '#AB0F24',
        'red-secondary': '#B91C1C',
        'gold': '#BE9E4A',
      }
    },
  },
  plugins: [],
}