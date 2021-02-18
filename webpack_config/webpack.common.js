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
    minimize: false,
    splitChunks: {
      chunks: 'all',
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
