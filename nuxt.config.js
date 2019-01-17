module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'navigator',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no' },
      { name: 'HandheldFriendly', content: 'true' },
      { hid: 'description', name: 'description', content: 'soem text' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:200,400,500,600' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400' },
    ]
  },
  /*
  ** Customize the progress bar color
  */

  css: [
    '@/assets/css/reset.css'
  ],

  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: process.env.BASE_URL || 'https://lubava12.ru/',
    credentials: false
  },

  plugins: [
      '@/plugins/init-element.js',
      '@/plugins/vue-resize.js',
  ],
  loading: {
    color: '#3f51b5',
    height: '3px'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
