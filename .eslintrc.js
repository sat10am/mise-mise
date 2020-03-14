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
  },
  env: {
    browser: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: path.join(__dirname, '/config-overrides.js'),
      },
    },
  },
};
