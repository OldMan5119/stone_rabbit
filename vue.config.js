module.exports = {
    transpileDependencies: true,
    devServer: {
        proxy: {
            '/rabbit/login': {
                target: 'http://192.168.3.3:3000',
                changeOrigin: true,
                // pathRewrite: {'^/rabbit': ''},
                secure: false, // 忽略 HTTPS 证书错误（仅开发环境）
                ws: true
            }
        }
    }
}
