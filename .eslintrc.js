module.exports = {
  root: true,
  extends: ['airbnb-base'],
  env: {
    browser: true,
    es2022: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    sourceType: 'module',
    ecmaVersion: 'latest',
    allowImportExportEverywhere: true,
  },
  rules: {
    // EDS/vanilla: deixa o dev respirar
    'import/extensions': 'off', // isso aqui é dor em ESM/EDS
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    'class-methods-use-this': 'off',
    'no-use-before-define': 'off',
    'no-param-reassign': [2, { props: false }],
    'linebreak-style': 'off', // Windows vs Unix = inferno, desliga
  },
};
