'use strict';

let path = require('path');
let config = require('../webpack.env.js');

module.exports = {
    modules: [
        'node_modules',
        path.resolve(process.cwd(), config.sourcePath)
    ],
    extensions: ['.ts', '.js']
};
