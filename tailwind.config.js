/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bachoqueta: {
          light: '#84cc16', // lime-500
          DEFAULT: '#22c55e', // green-500
          dark: '#15803d', // green-700
          accent: '#ecfccb', // lime-100
        }
      }
    },
  },
  plugins: [],
}
