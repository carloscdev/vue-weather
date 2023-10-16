/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#1F1F1F",
        dark: "#282828",
        gray: "#303030",
      }
    },
  },
  plugins: [],
}