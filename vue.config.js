const { defineConfig } = require('@vue/cli-service')
const proxy = require('http-proxy-middleware')
module.exports = defineConfig({
  publicPath: './',
  // lintOnSave: false,
  transpileDependencies: true,
  devServer:{
    open: true,
    https: false,
    proxy: {
      '/': {
        target: process.env.VUE_APP_DEV_DOMAIN,
        ws: false,
        changeOrigin: true,
    }}
  },
  filenameHashing: false,
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  },
  configureWebpack: {
    performance: {
      hints: false
      // 入口起点的最大体积
      // maxEntrypointSize: 50000000,
      // 生成文件的最大体积
      // maxAssetSize: 30000000,
      // 只给出 js 文件的性能提示
      // assetFilter: function(assetFilename) {
      //   return assetFilename.endsWith('.js');
      // }
    }
  },
})
