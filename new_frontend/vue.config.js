const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack');


// module.exports = {
//   transpileDependencies: true,
//   devServer: {
//     // Fixing issue with WDS disconnected and sockjs network error
//     proxy: 'http://localhost:8000',
//     host: '0.0.0.0',
//     public: '0.0.0.0:8080',
//     disableHostCheck: true,
//     // End of fix
//   }
// }


module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: 'http://localhost:8000',
    port: 8080,
    hot:true,
  }
})
