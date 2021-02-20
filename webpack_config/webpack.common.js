/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable  global-require */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT = path.resolve(__dirname, '..');

module.exports = {
  mode: 'development',
  target: 'web',
  context: ROOT,
  entry: {
    main: './src/index.js',
  },
  output: {
    path: `${ROOT}/dist`,
    publicPath: '/',
  },
  resolve: {
    alias: {
      '@': ROOT,
      Assets: `${ROOT}/src/assets`,
    },
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          minimize: false,
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
      chunks: ['main'],
      minify: false,
    }),
  ],
};
