export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_description || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300&display=swap"' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300&display=swap"' },
    ]
  },
    router: {
    mode:"hash"
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
  '@fortawesome/fontawesome-svg-core/styles.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
  '~/plugins/fontawesome.js',
  '~/plugins/scrollActive.js',
   { src: '~plugins/ga.js', mode: 'client' }
   ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
    'vue-scrollto/nuxt',
    ['nuxt-i18n', {
      strategy: 'prefix',
      defaultLocale: 'en'
    }]],
      layoutTransition: {
    name: "layout",
    mode: "out-in"
  },
    i18n: {
      strategy: 'prefix',
      useCookie: true,
      // Cookie name
      cookieKey: 'i18n_redirected',
      // Set to always redirect to value stored in the cookie, not just once
      vueI18nLoader: true,
      locales: [{
          code: 'en',
          name: 'English',
          iso: 'en-CA',
          file: 'en.js'
        },
        {
          code: 'fr',
          name: 'Français',
          iso: 'fr-CA',
          file: 'fr.js'
        }
      ],
      lazy: true,
      loadedLanguages: ['en', 'fr'],
      langDir: 'lang/',
      defaultLocale: "en",
      fallbackLocale: 'en',
      fallbackRoot: true,
      silentTranslationWarn: true,
      silentFallbackWarn: true
    },
    /*
     ** Build configuration
     */
    build: {
      loaders: {
        rules: [{
          test: /\.(ico)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            name: '[path][name].[ext]'
          }

        }]
      },
      /*
       ** You can extend webpack config here
       */
      extend(config, ctx) {
        if (!ctx.isDev) {
          config.output.publicPath = './_nuxt/'
        }
        config.module.rules.push({
          test: /\.(pdf|docx|xlsx)(\?.*)?$/,
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }, {
          test: /\.(vtt)$/i,
          use: [{
            loader: 'file-loader'
          }]
        })
      }
    }
  }
