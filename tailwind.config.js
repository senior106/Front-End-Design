module.exports = {
  content: ["./src/**/*.{html,js}"],

  darkMode: false, // or 'media' or 'className'
  theme: {
    extend: {
      colors: {
        bgColor: "#F2F2F2",
        buttonColor: "#FF6F00",
        textBlue: "#644F9C",
        textBlack: "#404040",
      },
      margin: {},

      fontFamily: {
        prototype: ["PT-Sans", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
