/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      varuna: ["Varuna", "sans-serif"],
    },
    colors: {
      white: "#F2F2F2",
      dark: "#1B1B1B",
      light: "#F2F2F2",
      primary: "#1B1B1B",
      secondary: "#F2F2F2",
      accent: "#F2C94C",
      accent2: "#F2994A",
      accent3: "#EB5757",
      magneta: "#BB6BD9",
    },
  },
  darkMode: "class",
  plugins: [],
};
