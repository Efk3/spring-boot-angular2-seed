# Spring Boot Hello World with Angular 2 and Webpack seed
[![Dependency Status](https://david-dm.org/Efk3/spring-boot-angular2-seed.svg)](https://david-dm.org/Efk3/spring-boot-angular2-seed)
[![devDependency Status](https://david-dm.org/Efk3/spring-boot-angular2-seed/dev-status.svg)](https://david-dm.org/Efk3/spring-boot-angular2-seed?type=dev)

This repository is a seed for Spring Boot application with Angular 2 (AOT) client side.

The client side is based on the [Angular2 AOT Webpack](https://github.com/blacksonic/angular2-aot-webpack/) repository.

## Structure

The application contains a simple REST service 
and a hello world app in the client side which calls the REST service on start.

The ``src/main/java`` directory is for the java source files.

``src/main/web`` directory contains the source files for the client.
There is an app/ directory for the Angular 2 app.
The index.template.ejs is used for the index.html generation.

The ``src/main/reources`` directory is empty at the start. After the build it 
will contain the compiled bundles and the generated index.html for the client.

## Configuration

The ``webpack/webpack.env.js`` contains the configuration for the webpack.

```
{
    sourcePath: 'src/main/web',
    output: 'src/main/resources/static',
    appDirectory: 'app',
    backendUrl: 'http://localhost:8080',
    copyAssets: [
        {from: 'favicon.ico'},
        {from: 'assets', to: 'assets'}
    ]
}
```

``sourcePath``: the directory for the client side sources.<br />
``output``: the directory for the generated files.<br />
``appDirectory``: the Angular 2 app root in the ``sourcePath`` directory.<br />
``backendUrl``: backend URL for the webpack dev server proxy.<br />
``copyAssets``: [copy-webpack-plugin](https://github.com/kevlened/copy-webpack-plugin)
configuration for the assets. If you need other assets along with bundles you can configure
to copy those from the ``sourcePath``.

## How to develop

In the dev mode and in the build process too the index.html will created automatically based on the
index.template.ejs file in the ``sourcePath`` directory. The webpack will insert the generated 
JS and CSS links.

``npm start`` will start the webpack dev server. The webpack dev server serves the client from the
``src/main/web`` directory. The webpack is configured to proxy every request to the backend 
(except the index.html and the generated js/css files of course).

``npm run build`` will create the AOT files and bundle the code for our client side.
The bundle will be placed in the ``output`` directory for the Spring Boot.
This directory is in the .gitignore because it will contain only generated files and will be 
cleared in every build so do not place sources there.

``npm run ngc`` will create the AOT files.

``npm run webpack`` will create the bundle without AOT.

``npm run webpack-prod`` will create the bundle from AOT files.

The best method for developing is to concurrently start the spring boot application and the
webpack dev server then open http://localhost:9000 in your browser.

## Others

If you want to change the ``sourcePath`` or the ``output`` directory then check the ``tsconfig.json``
and ``tsconfig.aot.json`` files too.

