// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
        htmlAttrs: {
            lang: 'ru',
        },
        meta: [
            {
                name: 'viewport',
                content:
                    'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
            },
        ],
    },
  },
  
  modules: ['@nuxtjs/device', "@pinia/nuxt"],
  
  ssr: true,
  devtools: { enabled: true },

  device: {
    refreshOnResize: true,
  },

  css: [
    '@/assets/styles/normalize.css',
    '@/assets/styles/main.scss',
    '@/components/base/index.scss'
  ],

  runtimeConfig: {
    public: {
      API_BASE: 'https://jsonplaceholder.typicode.com'
    },
  },

  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },

  compatibilityDate: '2024-04-03',
})