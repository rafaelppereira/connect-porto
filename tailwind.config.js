/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins, sans-serif"
      },
      colors: {
        gray: {
          800: "#29292D",
          900: "#1F1F22",
        }
      }
    },
  },
  plugins: [],
}
