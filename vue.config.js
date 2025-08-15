module.exports = {
    transpileDependencies: true,
    devServer: {
        proxy: {
            '/rabbit/login': {
                target: 'https://10.30.108.250:3443',
                changeOrigin: true,
                // pathRewrite: {'^/rabbit': ''},
                secure: false, // 忽略 HTTPS 证书错误（仅开发环境）
                ws: true
            }
        }
    }
}
