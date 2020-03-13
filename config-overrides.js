const path = require('path');

module.exports = (config, env) => {
    config = {
        ...config,
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src')
            }
        }
    }
    return config;
}