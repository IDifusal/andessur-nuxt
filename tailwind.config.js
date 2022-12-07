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
          "base-100": "#f0f0f1",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
          white:"#FFFFFF",
        },
      },
    ],
  },
  theme: {
    colors: {
      primary: "#1fa185",
      ong: "#1fa185",
      white:"#FFFFFF",
      black:"#1d2327",
      hoverdash:"#72AEE6",
      ong:'#10393b'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
