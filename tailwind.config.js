module.exports = {
  mode: "jit",
  purge: ["./challenges/**/*.html", "./challenges/**/*.js"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        bigShoulders: ['"Big Shoulders Display"', "cursive"],
        LexendDeca: ['"Lexend Deca"', "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "bright-orange": "hsl(31, 77%, 52%)",
        "dark-cyan": "hsl(184, 100%, 22%)",
        "very-dark-cyan": "hsl(179, 100%, 13%)",
        "transparent-white": "hsla(0, 0%, 100%, 0.75)",
        "light-gray": "hsl(0, 0%, 95%)",
      },
    },
  },
  plugins: [],
};
