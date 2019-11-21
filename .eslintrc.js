module.exports = {
  extends: ['eslint-config-belsrc'],

  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['core', './src/core'],
          ['components', './src/components'],
          ['data', './src/core/data/'],
          ['functions', './src/core/functions/'],
          ['store', './src/core/store/'],
        ],
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },

  rules: {
    'fp-jxl/no-this': 0,
  },
};
