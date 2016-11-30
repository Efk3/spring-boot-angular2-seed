'use strict';

let webpack = require('webpack');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let WebpackCleanupPlugin = require('webpack-cleanup-plugin');
let path = require('path');
let config = require('../webpack.env');

module.exports = [
    new webpack.ProgressPlugin(),
    new webpack.ContextReplacementPlugin(
        // The (\\|\/) piece accounts for path separators in *nix and Windows
        /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
        path.join(process.cwd(), 'src')
    ),
    new CopyWebpackPlugin(config.copyAssets),
    new ExtractTextPlugin('style.bundle.css'),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.template.ejs',
        inject: 'body'
    }),
    new WebpackCleanupPlugin()
];
