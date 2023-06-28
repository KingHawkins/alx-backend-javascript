module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-console': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement'
    ]
  },
  overrides: [
    {
      files: '*.js',
      excludedFiles: 'babel.config.js'
    }
  ]
};
