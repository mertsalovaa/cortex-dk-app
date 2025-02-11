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
      }
    },
  },
  plugins: [],
}

