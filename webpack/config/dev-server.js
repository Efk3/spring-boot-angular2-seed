'use strict';

let config = require('../webpack.env.js');

module.exports = {
    contentBase: config.sourcePath,
    port: 9000,
    inline: true,
    historyApiFallback: true,
    stats: 'errors-only',
    watchOptions: {
        aggregateTimeout: 300,
        poll: 500
    },
    proxy: {
        '/**': {
            target: config.backendUrl
        }
    }
};
