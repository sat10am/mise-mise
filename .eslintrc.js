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
    'react-hooks/rules-of-hooks': ERROR, // Checks rules of Hooks
    'react-hooks/exhaustive-deps': ERROR, // Checks effect dependencies
    'linebreak-style': ERROR,
    'import/prefer-default-export': WARNING,
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
      alias: {
        map: [['@', path.resolve(__dirname, 'src')]],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
  },
};
