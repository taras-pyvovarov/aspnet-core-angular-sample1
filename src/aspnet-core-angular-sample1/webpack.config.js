"use strict";

var path = require('path');

var clientBundleConfig = {
    entry: { 'app1-main-client': './ClientApp1/app1-main-client.ts' },

    output: {
        path: path.join(__dirname, './wwwroot/app1'),
        filename: '[name].js',
    },

    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
    },

    module: {
        loaders: [
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                loader: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },

    devtool: 'inline-source-map',
}

// Configuration for server-side (prerendering) bundle suitable for running in Node
var serverBundleConfig = {
    entry: { 'main-server': './ClientApp1/app1-main-server.ts' },
    output: {
        //libraryTarget: 'commonjs',
        path: path.join(__dirname, './ClientApp1/dist'),
        filename: '[name].js',
    },

    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
    },

    module: {
        loaders: [
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                loader: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },

    devtool: 'inline-source-map',
}


module.exports = [clientBundleConfig, serverBundleConfig];