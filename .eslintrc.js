// http://eslint.org/docs/user-guide/configuring

module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true
  },
  plugins: ['import'],
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'no-console': 'warn',
    'no-eval': 'error',
    'import/first': 'error'
  }
};
