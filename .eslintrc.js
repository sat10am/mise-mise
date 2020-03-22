const path = require('path');

const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  extends: ['react-app', 'airbnb', 'prettier'],
  plugins: ['import', 'react-hooks'],
  rules: {
    'react/prefer-stateless-function': OFF,
    'react/jsx-filename-extension': OFF,
    'react/jsx-one-expression-per-line': OFF,
    'import/no-extraneous-dependencies': OFF,
    // TODO Webpack 설정을 잡아서 lint 에러가 안나게 해야 함 임시 방편
    // plugin 설정을 해줬는데 -> alias는 못 잡는 이슈가 있다.
    'import/no-unresolved': OFF,
    'react-hooks/rules-of-hooks': ERROR, // Checks rules of Hooks
    'react-hooks/exhaustive-deps': WARNING, // Checks effect dependencies
    'linebreak-style': ERROR,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    browser: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'config-overrides.js',
      },
    },
  },
};
