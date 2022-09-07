export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "andessur-nuxt",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ["@nuxtjs/firebase",
    {
      config: {
        apiKey: "AIzaSyC1T37d59hUIhAhbrhyztUOSQhz-okGnNc",
        authDomain: "ong-andes-sur.firebaseapp.com",
        projectId: "ong-andes-sur",
        storageBucket: "ong-andes-sur.appspot.com",
        messagingSenderId: "319024319197",
        appId: "1:319024319197:web:3c393892bb23d9d056e934",
      },
      services: {
        auth: {
          initialize: {
            onAuthStateChangedAction: "onAuthStateChanged",
          },
          ssr: true,
        },
      },
    },
  ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

};
