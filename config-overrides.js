const path = require('path');

module.exports = config => {
  return {
    ...config,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':
          'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers':
          'X-Requested-With, content-type, Authorization',
      },
    },
  };
};
