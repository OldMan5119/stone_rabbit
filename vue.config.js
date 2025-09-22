module.exports = {
    transpileDependencies: true,
    devServer: {
        proxy: {
            '/api': {
                target: 'https://localhost:3443/',
                changeOrigin: true,
                // pathRewrite: {'^/rabbit': ''},
                secure: false, // 忽略 HTTPS 证书错误（仅开发环境）
                ws: true
            }
        }
    }
}
