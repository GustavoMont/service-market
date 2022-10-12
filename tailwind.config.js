/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        light_primary: "#76C3FF",
        primary: "#3993dd",
        dark_primary: "#0066AB",
        light_secondary: "#4EB881",
        secondary: "#0a8754",
        dark_secondary: "#00592B",
        light_white: "#FDFDFD",
        white: "#f6f6f6",
        dark_white: "#c3c3c3",
        light_black: "#3f3f3f",
        black: "#191919",
        dark_black: "#101010",
      },
    },
  },
};
