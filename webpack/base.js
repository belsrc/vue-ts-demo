const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const { ENTRY_PATH, OUTPUT_PATH, IS_PRODUCTION, ENV } = require('./constants');
const rules = require('./rules');

// publicPath should have trailing `/`
const publicPath = IS_PRODUCTION ?
  `${ process.env.PUBLIC_PATH || '' }/js/` :
  `http://localhost:${ process.env.PORT }/js/`;

const config = {
  mode: ENV,
  context: path.resolve(__dirname, '..'),

  entry: {
    app: path.join(ENTRY_PATH, '/main.js'),
    'element-custom-theme': path.resolve(__dirname, '../src/core/styles/el-ui/index.scss'),
  },

  output: {
    path: path.join(OUTPUT_PATH, '/js'),
    filename: IS_PRODUCTION ? '[name].[contenthash].js' : '[name].js',
    libraryTarget: 'umd',
    publicPath,
  },

  resolve: {
    extensions: [
      '.webpack.js',
      '.web.js',
      '.js',
      '.json',
      '.jsx',
      '.vue',
    ],

    alias: {
      sass: path.resolve(__dirname, '../src/core/styles/sass/main.scss'),
      core: path.resolve(__dirname, '../src/core'),
      components: path.resolve(__dirname, '../src/components'),
      data: path.resolve(__dirname, '../src/core/data'),
      functions: path.resolve(__dirname, '../src/core/functions'),
      store: path.resolve(__dirname, '../src/core/store'),
    },
  },

  module: { rules },

  optimization: {
    splitChunks: {
      name: true,
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
        default: {
          chunks: 'all',
          reuseExistingChunk: true,
        },
      },
    },
  },

  plugins: [
    new VueLoaderPlugin(),

    new MiniCssExtractPlugin({
      filename: `../css/[name]${ IS_PRODUCTION ? '.[contenthash]' : '' }.css`,
      ignoreOrder: true,
    }),

    new webpack.ProvidePlugin({ Promise: 'es6-promise-promise' }),

    new HtmlWebpackPlugin({
      filename: path.join(OUTPUT_PATH, '/index.html'),
      template: path.join(ENTRY_PATH, '/index.html'),
      alwaysWriteToDisk: !IS_PRODUCTION,
      env: ENV,

      // preloads: [
      //   IS_PRODUCTION ?
      //     'https://s3.amazonaws.com/icomoon.io/138200/savve/style.css?afdzug' :
      //     'https://i.icomoon.io/public/83fc5c62e4/savve/style.css',
      // ],
    }),

    new ScriptExtHtmlWebpackPlugin({ defaultAttribute: 'defer' }),
  ],

  devtool: 'source-map',
};

module.exports = config;
