/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          "almost-white": "hsl(0, 0%, 98%)",
          "med-gray": "hsl(0, 0%, 41%)",
          "almost-black": "hsl(0, 0%, 8%)"
        }
      },
      fontFamily: {
        "epilogue": "'Epilogue'"
      }
    },
  },
  plugins: [],
}

