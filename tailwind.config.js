module.exports = {
  mode: "jit",
  purge: [
    "./challenges/**/*.html",
    "./challenges/**/*.svelte",
    "./challenges/**/*.js",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        bigShoulders: ['"Big Shoulders Display"', "cursive"],
        LexendDeca: ['"Lexend Deca"', "sans-serif"],
        inter: ["Inter", "sans-serif"],
        spaceMono: ["'Space Mono'", "sans-serif"],
      },
      colors: {
        "bright-orange": "hsl(31, 77%, 52%)",
        "dark-cyan": "hsl(184, 100%, 22%)",
        "very-dark-cyan": "hsl(179, 100%, 13%)",
        "transparent-white": "hsla(0, 0%, 100%, 0.75)",
        "light-gray": "hsl(0, 0%, 95%)",
        calc: {
          "cyna-900": "hsl(183, 100%, 15%)",
          "cyna-500": "#26c2ae",
          "gray-cyna-50": "hsl(189, 41%, 97%)",
          "gray-cyna-100": "hsl(185, 41%, 84%)",
          "gray-cyna-200": "hsl(186, 14%, 56%)",
          "gray-cyna-300": "hsl(186, 14%, 43%)",
        },
        pricing: {
          "cyan-100": "hsl(174, 77%, 80%)",
          "cyan-200": "hsl(174, 86%, 45%)",
          "red-100": "hsl(14, 92%, 95%)",
          "red-200": "hsl(15, 100%, 70%)",
          "blue-50": "hsl(230, 100%, 99%)",
          "blue-100": "hsl(226, 100%, 87%)",
          "blue-200": "hsl(224, 65%, 95%)",
          "blue-300": "hsl(223, 50%, 87%)",
          "blue-400": "hsl(225, 20%, 60%)",
          "blue-500": "hsl(227, 35%, 25%)",
        },
      },
      screens: {
        xs: "325px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
