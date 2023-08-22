// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: "Belajar Nuxt JS",
      meta: [
        { name: "description", content: "Belajar Nuxt JS" }
      ],
    }
  }
})
