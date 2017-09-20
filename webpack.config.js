var path = require('path')

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
    devtool: 'eval-source-map'
}