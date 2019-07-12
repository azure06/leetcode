module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2020
  },
  extends: ['prettier', 'plugin:prettier/recommended'],
  // required to lint *.vue files
  plugins: [],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
    'prettier/prettier': ['error', { semi: true }]
  }
};
