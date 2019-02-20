module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'cn',
      fallbackLocale: 'cn',
      localeDir: 'locales',
      enableInSFC: true
    }
  },

  devServer: {
    proxy: 'https://api.com/'
  }
}
