var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var node = require('node-dev');

module.exports = {
  entry: './index.js',
  output: {
    filename: './build/bundle.js'
  },
  devtool: '#source-map',
  watch: true,
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' }
    ]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //       warnings: false
    //   }
    // }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 8080,
      proxy: { target: 'http://localhost:3000' }
    })
  ]
};

node(['server.js']);
