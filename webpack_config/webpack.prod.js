/* eslint-disable import/no-extraneous-dependencies */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: 'assets/js/[name].[contenthash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.(css|s[ac]ss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|svg|ico|gif|webp)$/,
        loader: 'url-loader',
        options: {
          limit: 1024 * 5,
          fallback: 'file-loader',
          name: 'assets/img/[name].[contenthash:8].[ext]',
        },
      },
      {
        test: /\.(ttf|otf|woff2?)$/,
        loader: 'url-loader',
        options: {
          limit: 1024 * 5,
          fallback: 'file-loader',
          name: 'assets/fonts/[name].[contenthash:8].[ext]',
        },
      },
      {
        test: /\.(ogg|mp3|wav)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/audio/[name].[contenthash:8].[ext]',
        },
      },
      {
        test: /\.(ogv|mp4|webm)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/video/[name].[contenthash:8].[ext]',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[contenthash:8].css',
    }),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [
          ['svgo', {
            plugins: [
              {
                removeViewBox: false,
              },
            ],
          }],
        ],
      },
    }),
  ],
};
