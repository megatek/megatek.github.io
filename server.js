var express = require('express');
var app = express();
var favicon = require('serve-favicon');
var path = require("path");
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config.dev.js');
var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use(favicon(path.join(__dirname,'favicon.ico')));
app.use('/assets/images', express.static(__dirname + '/assets/images'));
app.use('/assets/fonts', express.static(__dirname + '/assets/fonts'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/contact.html', function (req, res) {
  res.sendFile(path.join(__dirname+'/contact.html'));
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
