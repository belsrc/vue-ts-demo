const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { IS_PRODUCTION } = require('./constants');
const { ENTRY_PATH } = require('./constants');

module.exports = [
  {
    enforce: 'pre',
    test: /\.(jsx?|vue)$/,
    exclude: /node_modules/,
    include: [ENTRY_PATH],
    loader: 'eslint-loader?parser=babel-eslint',
    options: {
      fix: true,
      emitError: false,
    },
  },

  // js/jsx loader
  {
    test: /\.jsx?$/,
    exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file),
    use: ['babel-loader'],
  },

  // vue loader
  {
    test: /\.vue$/,
    use: ['vue-loader'],
  },

  // css/scss loader
  {
    test: /\.s?[ac]ss$/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: { modules: false },
      },
      {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          map: false,
          plugins: () => [
            // eslint-disable-next-line array-element-newline
            require('postcss-preset-env')({ browsers: ['last 2 versions']}),
            require('cssnano')({
              calc: { precision: 2 },
              discardEmpty: IS_PRODUCTION,
              mergeRules: true,
              discardDuplicates: true,
              discardComments: { removeAll: IS_PRODUCTION },
            }),
          ],
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sassOptions: {
            outputStyle: IS_PRODUCTION ? 'compressed' : 'expanded',
            includePaths: [path.resolve(__dirname, '../node_modules')],
          },
        },
      },
    ],
  },
];
