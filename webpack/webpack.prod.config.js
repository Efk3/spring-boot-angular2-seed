'use strict';

let path = require('path');
let webpack = require('webpack');
let ngtools = require('@ngtools/webpack');
let config = require('./webpack.env.js');

module.exports = {
    entry: require('./config/entry.prod.js'),

    context: path.join(process.cwd(), config.sourcePath),

    output: require('./config/output'),

    module: require('./config/module'),

    plugins: require('./config/plugins').concat([
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            },
            sourceMap: true
        })
    ]),

    resolve: require('./config/resolve'),

    stats: 'errors-only',

    devtool: 'source-map'
};
