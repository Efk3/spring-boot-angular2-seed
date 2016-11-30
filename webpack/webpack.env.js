'use strict';

module.exports = {
    sourcePath: 'src/main/web',
    output: 'src/main/resources/static',
    appDirectory: 'app',
    backendUrl: 'http://localhost:8080',
    copyAssets: [
        {from: 'favicon.ico'},
        {from: 'assets', to: 'assets'}
    ]
};
