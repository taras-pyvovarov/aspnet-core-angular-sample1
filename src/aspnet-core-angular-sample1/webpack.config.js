"use strict";

module.exports = {

    entry: "./ClientApp1/main.ts",

    output: {
        filename: "./wwwroot/dist/bundle.js"
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
};