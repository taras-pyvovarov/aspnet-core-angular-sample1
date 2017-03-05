"use strict";

var webpack = require('webpack')
var path = require('path');

module.exports = {

    entry: path.join(__dirname, 'ClientApp1', 'main.ts'),

    output: {
        path: path.join(__dirname, 'wwwroot', 'dist'),
        filename: "bundle.js"
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

    plugins: [
        new webpack.DllReferencePlugin({
            context: '.',
            manifest: require(path.join(__dirname, 'wwwroot', 'dist', 'angular-manifest.json'))
        }),
    ],

    //target: 'node',

    devtool: 'inline-source-map',
};