'use strict';

let path = require('path');
let config = require('../webpack.env.js');

module.exports = {
    path: path.join(process.cwd(), config.output),
    filename: '[name].[hash].bundle.js'
};
