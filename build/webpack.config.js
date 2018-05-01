const resolve = require('./tools');
const plugins = require('./plugins');

module.exports = {
  entry: resolve('src/main.js'),
  output: {
    path: resolve('public'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'sass-loader',
        }],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpg|gif|ttf)$/,
        loader: 'url-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '~': resolve('src'),
    },
  },
  plugins,
  devtool: 'source-map',
  performance: { hints: false },
  stats: {
    colors: true,
  },
};
