module.exports = {
  extends: ['eslint-config-belsrc'],

  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },

  globals: {
    RootState: 'readonly',
    UserState: 'readonly',
    User: 'readonly',
    TodoItem: 'readonly',
  },

  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['core', './src/core'],
          ['components', './src/components'],
          ['data', './src/core/data'],
          ['functions', './src/core/functions'],
          ['store', './src/core/store'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },

  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        'fp-jxl/no-this': 0,
        'fp-jxl/no-class': 0,
        'fp-jxl/no-nil': 0,
        'fp-jxl/no-unused-expression': 0,
        'import/no-anonymous-default-export': 0,
        'new-cap': 0,
        'import/extensions': [
          2,
          {
            sass: 'always',
          },
        ],
      },
    },
  ],
};
