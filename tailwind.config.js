/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Nunito Sans"']
    },
    extend: {
      colors: require('./src/color/colors.json'),
    },
  },
  plugins: [],
}
