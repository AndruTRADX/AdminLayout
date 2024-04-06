/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-1": "#242328",
        "gray-2": "#353439",
        "gray-3": "#3E3E40",
        "gray-4": "#B6B7B9",
        "light-1": "#FEFEFE",
        "dark-1": "#000000",
        primary: "#9969FE",
      },
    },
  },
  plugins: [],
};
