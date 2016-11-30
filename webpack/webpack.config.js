'use strict';

let path = require('path');
let config = require('./webpack.env.js');

module.exports = {
    entry: require('./config/entry'),

    context: path.join(process.cwd(), config.sourcePath),

    output: require('./config/output'),

    module: require('./config/module'),

    plugins: require('./config/plugins'),

    resolve: require('./config/resolve'),

    devServer: require('./config/dev-server'),

    stats: 'errors-only',

    devtool: 'source-map'
};
