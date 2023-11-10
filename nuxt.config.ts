// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
modules: ['nuxt-icon'],
  devtools: { enabled: true },
  css: ["~/assets/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
