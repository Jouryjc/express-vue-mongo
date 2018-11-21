module.exports = {
    client: {
        dev: {
            publicPath: '/',
            devtoolType: 'cheap-module-eval-source-map',
            host: 'localhost',
            port: '3333',
            proxyTable: {
                '/api': {
                    target: 'http://localhost:8888',
                    pathRewrite: {
                        '^/api': ''
                    },
                    changeOrigin: true
                }
            }
        },

        build: {
            publicPath: '/client/',
            devtoolType: 'source-map',
        }
    }
}