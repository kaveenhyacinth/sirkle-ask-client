// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL
    }
  },
  modules: [
    '@vueuse/nuxt',
    'nuxt-icons',
    'unplugin-icons/nuxt',
    '@nuxt/ui',
    '@pinia/nuxt'
  ],
  css: [
    '~/assets/styles/main.scss'
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
