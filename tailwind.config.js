/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        primaryWhiteWhite: "#57a4b2",
        primaryWhite: "#00212d",
        primary: "#2c6270",
        secondary: "#16424e",
        accent: "#00212d",
        transparent: "rgba(27,34,41,0.5)",
        transparentAccent: "rgba(255,255,255,0.3)",
      },
    },
  },
  plugins: [],
};
