/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode:false,
  theme: {
    extend: {
      colors: {
        customBlue: '#6575C8',
      }
    },
  },
  plugins: [],
}

