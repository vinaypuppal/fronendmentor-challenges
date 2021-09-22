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
      },
    },
  },
  plugins: [],
};
