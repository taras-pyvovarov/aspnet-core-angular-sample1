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

module.exports = [clientBundleConfig];