const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { getRootPath, assetsPath } = require('./utils')

const development = process.env.NODE_ENV === 'development'

module.exports = {
    entry: {
        'app': getRootPath('src/client/src/main')
    },

    resolve: {
        extensions: ['.js', '.vue']
    },

    module: {
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                include: getRootPath("src/client/src"),
                options: {
                    sourceMap: development
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                include: getRootPath("src/client/src")
            },
            {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        modules: false
                    }
                }]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 50000,
                    name: assetsPath('fonts/[name].[ext]')
                }
            }
        ]
    },

    plugins: [
        new VueLoaderPlugin()
    ]
}