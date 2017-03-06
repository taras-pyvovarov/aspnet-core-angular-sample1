"use strict";

var webpack = require('webpack');
var path = require('path');
var nodeExternals = require('webpack-node-externals');

var clientBundleConfig = {
    entry: { 'app1-main-client': './ClientApp1/app1-main-client.ts' },

    output: {
        path: path.join(__dirname, 'wwwroot', 'dist'),
        filename: '[name].js',
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        loaders: [
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

    devtool: 'inline-source-map',
};

var serverBundleConfig = {
    entry: {
        'app1-main-server': './ClientApp1/app1-main-server.ts'
    },
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, 'ClientApp1', 'dist'),
        filename: '[name].js',
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        loaders: [
    {
        loader: 'ts-loader',
        exclude: /node_modules/,
    }
        ]
    },

    target: 'node',

    devtool: 'inline-source-map',

    externals: [nodeExternals()]
};

module.exports = [clientBundleConfig, serverBundleConfig];