/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light": "#ededed",
        "dark": "#111",
        "active": "#eaa053",
        "violet": "#705cd0",
        "light-dark": "#919191",
        "light-orange": "#eaa053",
        "orange": "#e58148",
      }
    },
  },
  plugins: [],
}

