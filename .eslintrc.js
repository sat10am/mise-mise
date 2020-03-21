const path = require('path');

const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  extends: ['react-app', 'airbnb', 'prettier'],
  rules: {
    'react/prefer-stateless-function': OFF,
    'react/jsx-filename-extension': OFF,
    'react/jsx-one-expression-per-line': OFF,
    'import/no-extraneous-dependencies': OFF,
    // TODO Webpack 설정을 잡아서 lint 에러가 안나게 해야 함 임시 방편
    'import/no-unresolved': OFF,
    'import/extensions': OFF,
  },
  env: {
    browser: true,
    jest: true,
  },
};
