/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    fontFamily: {
      sans: ["Overpass"],
    },
    extend: {
      fontSize: {
        base2: ["0.9375rem", "1.40625rem"],
      },
      colors: {
        white: "hsl(0, 0%, 100%)",
        lightGrey: "hsl(217, 12%, 63%)",
        mediumGrey: "hsl(216, 12%, 54%)",
        darkBlue: "hsl(213, 19%, 18%)",
        veryDarkBlue: "hsl(216, 12%, 8%)",
        orange: "hsl(25, 97%, 53%)",
      },
    },
  },
  plugins: [],
};
