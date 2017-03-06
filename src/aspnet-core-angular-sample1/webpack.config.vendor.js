"use strict";

var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        'angular': [
            '@angular/common',
            '@angular/compiler',
            '@angular/core',
            //'@angular/http',
            '@angular/platform-browser',
            '@angular/platform-browser-dynamic',
            //'@angular/router',
            //'@angular/platform-server',
            'angular2-universal',
            'angular2-universal-polyfills',
            //'es6-shim',
            //'es6-promise',
            //'zone.js',
        ]
    },

    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'wwwroot', 'dist'),

        // The name of the global variable which the library's
        // require() function will be assigned to
        library: '[name]_[hash]',
    },

    plugins: [
      new webpack.DllPlugin({
          // The path to the manifest file which maps between
          // modules included in a bundle and the internal IDs
          // within that bundle
          path: path.join(__dirname, 'wwwroot', 'dist', '[name]-manifest.json'),
          // The name of the global variable which the library's
          // require function has been assigned to. This must match the
          // output.library option above
          name: '[name]_[hash]'
      }),
    ],
}