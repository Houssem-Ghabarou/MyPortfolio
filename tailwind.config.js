/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      body: ["Fira Code"],
    },
    colors: {
      white: "#F2F2F2",
      dark: "#011627",
      primary: "#607B96",
      secondary: "#E5E5E5",
      borderBottomColor: "#FEA55F",
      borderColor: "rgba(96,123,150, 0.25)",
    },
  },
  darkMode: "class",
  plugins: [],
};
