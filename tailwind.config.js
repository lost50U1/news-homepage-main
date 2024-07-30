/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        grayishblue: "hsl(233, 8%, 79%)",
        offwhite: "hsl(36, 100%, 99%)",
        softred: "hsl(5, 85%, 63%)",
        verydarkblue: "hsl(240, 100%, 5%)",
        softorange: "hsl(35, 77%, 62%)",
        darkgrayishblue: "hsl(236, 13%, 42%)",
      },
    },
  },
  plugins: [],
};
