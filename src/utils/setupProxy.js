const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: "https://gamsung-coding.shop/v2/api-docs",
            changeOrigin: true,
        })

    );
};