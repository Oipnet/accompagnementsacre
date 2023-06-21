// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/image'
  ],
  devtools: { enabled: true },
  css: [
    'modern-css-reset/src/reset.css',
    '~/assets/global.css'
  ],
  image: {
    
  }
})
