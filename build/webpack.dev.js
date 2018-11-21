const WebpackCommon = require('./webpack.common')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const webpack = require('webpack')
const getRootPath = require('./utils').getRootPath
const devConfig = require('../config').client.dev

module.exports = merge(WebpackCommon, {

    mode: 'development',

    output: {
        filename: '[name]-[hash].js',
        publicPath: devConfig.publicPath
    },

    devtool: devConfig.devtoolType,

    devServer: {
        contentBase: getRootPath('dist'),
        host: devConfig.host,
        port: devConfig.port,
        open: true,
        inline: true,
        hot: true,
        quiet: true,

        // 在浏览器上全屏显示编译的errors或warnings
        overlay: {
            errors: true,
            warnings: false
        },

        proxy: devConfig.proxyTable
    },

    plugins: [

        // 热替换
        new webpack.HotModuleReplacementPlugin(),

        // 编译友好提示插件
        new FriendlyErrorsWebpackPlugin({

            compilationSuccessInfo: {
                messages: [`You application is running here http://${devConfig.host}:${devConfig.port}`],
            }
        }),

        // 配置html入口信息
        new HtmlWebpackPlugin({
            title: 'vue-express-mongo-demo',
            filename: 'index.html',
            template: 'src/client/index.html',
            inject: true
        }),
    ]
});