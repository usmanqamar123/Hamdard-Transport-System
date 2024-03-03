/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#383c45",
        primarytwo:"#b3e44d",
        secondary:"#2a2e37",
      }
    },
  },
  plugins: [],
}