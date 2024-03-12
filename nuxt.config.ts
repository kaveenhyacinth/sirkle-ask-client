// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL
    }
  },
  css: ['~/assets/scss/main.scss', '~/assets/scss/_typography.scss'],
  modules: [
    '@vueuse/nuxt',
    'nuxt-icons',
    'unplugin-icons/nuxt',
    '@nuxt/ui'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  colorMode: {
    preference: 'light'
  }
})
