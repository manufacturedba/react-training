var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackConfig = require('./webpack.config.js');

var app = express();
var compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/',

  index: "index.html"
}));

app.use(webpackHotMiddleware(compiler));

app.get('/', function(req, res) {
   res.sendFile(__dirname + '/index.html');
});

app.listen(8080, function () {
  console.log('Listening on port 8080');
});
