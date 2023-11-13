// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    layoutTransition: { name: "fade", mode: "out-in" },
    pageTransition: { name: "slide", mode: "out-in" },
  },
  modules: ["nuxt-icon", "vue3-carousel-nuxt", "@nuxt/image"],
  devtools: { enabled: true },
  css: ["~/assets/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
