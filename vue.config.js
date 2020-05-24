module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue_test'
    : '/vue_test',
  outputDir: 'jimmy_dist',
  assetsDir: 'jimmy',
  indexPath: 'web1.html',
  filenameHashing: true,
  devServer: {
    hot:true,
    open : true,
    port : 8080,
    host : "127.0.0.1",
    overlay: {
      warnings: false,
      errors: false
    }
  },
  css: {
  },
  lintOnSave: true
}
