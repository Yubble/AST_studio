const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const htmlwap = require('html-webpack-plugin')
module.exports = {
  entry:'./webpackEntry',
  output:{
      path: path.resolve(__dirname +  '/dist'),
      filename: 'build.js'
  },
  module:{
    rules:[
      {
        test: /\.css$/,
        use: [
            'vue-style-loader',
            'css-loader'
        ]
      },
      {
        test:/\.vue$/,
        use:'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new htmlwap({
      title: '首页',
      filename: './index.html',
      template: './index.html'
    })
  ]
}
