var path = require('path')
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.jsx'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /jsx$/, loader: 'babel-loader' }
        ]
    },
    devtool: 'inline-source-map'
}