const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
    }),
  );
  app.use(
    '/api/poster',
    createProxyMiddleware({
      target: 'https://image.tmdb.org/t/p/w500',
      changeOrigin: true,
    }),
  );
};
