const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const resolve = require('./utils')

module.exports = {
    entry: {
        'app': resolve('src/client/src/main')
    },

    resolve: {
        extensions: ['.js', '.vue']
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: resolve("src/client/src")
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                include: resolve("src/client/src")
            }
        ]
    },

    plugins: [
        new VueLoaderPlugin()
    ]
};