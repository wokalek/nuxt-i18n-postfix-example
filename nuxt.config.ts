// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n'
  ],
  i18n: {
    defaultLocale: 'ru',
    locales: [
      { code: 'ru', language: 'ru' },
      { code: 'kz', language: 'kk' },
    ],
    customRoutes: 'config',
    pages: {
      index: {
        ru: '/[site]',
        kz: '/[site]/kz',
      }
    }
  }
})
