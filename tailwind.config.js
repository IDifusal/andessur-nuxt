module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1fa185",
          secondary: "#D926A9",
          accent: "#1FB2A6",
          neutral: "#191D24",
          "base-100": "#2A303C",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  theme: {
    colors: {
      primary: "#1fa185",
      ong: "#1fa185",
      white:"#FFFFFF"
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
