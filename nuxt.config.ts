// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss', '~/assets/scss/_typography.scss'],
  modules: [
    '@vueuse/nuxt',
    'nuxt-icons',
    'unplugin-icons/nuxt'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
