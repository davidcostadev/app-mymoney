const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const resolve = require('./tools');

const CopyWebpackPluginConfig = new CopyWebpackPlugin([
  {
    from: resolve('static'),
    to: 'static',
    ignore: ['.*'],
  },
]);

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: resolve('index.html'),
  filename: 'index.html',
  inject: 'body',
  chunksSortMode: 'dependency',
});

module.exports = [
  HtmlWebpackPluginConfig,
  CopyWebpackPluginConfig,
];
