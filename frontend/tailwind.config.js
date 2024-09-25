/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6f61',
        secondary: '#333',
        'primary-dark': 'e65a50'
      }
    },
  },
  plugins: [],
}

