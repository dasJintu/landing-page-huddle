module.exports = {
  purge: ["./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "desktop-bg": "url('/images/bg-desktop.svg')",
        "mobile-bg": "url('/images/bg-mobile.svg')",
      }),
      fontFamily: {
        open: "'Open Sans', sans-serif",
        poppins: "'Poppins', sans-serif",
      },
      colors: {
        violet: "hsl(257, 40%, 49%)",
        soft: "hsl(300, 69%, 71%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
