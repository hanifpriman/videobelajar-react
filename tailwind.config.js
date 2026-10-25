/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FAF6ED",
        brand: {
          orange: "#F2A541",
          red: "#E05B4F",
          green: "#3CB043",
          greenLight: "#E3F6E3",
        },
      },
    },
  },
  plugins: [],
};
