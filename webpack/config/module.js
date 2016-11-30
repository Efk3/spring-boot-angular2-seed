'use strict';

let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let config = require('../webpack.env.js');

module.exports = {
    rules: [
        {
            test: /\.ts$/,
            use: ['awesome-typescript-loader', 'angular2-template-loader']
        },
        {
            test: /\.html$/,
            use: 'raw-loader'
        },
        {
            test: /\.css$/,
            include: path.resolve(process.cwd(), config.sourcePath + '/' + config.appDirectory),
            loaders: ['to-string-loader', 'css-loader']
        },
        {
            test: /\.css$/,
            exclude: path.resolve(process.cwd(), config.sourcePath + '/' + config.appDirectory),
            loader: ExtractTextPlugin.extract({
                fallbackLoader: 'style-loader',
                loader: 'css-loader'
            })
        }
    ]
};
