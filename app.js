var express = require('express');
var url = require('url');
var request = require('request');
var app = express();

var forceSsl = function (req, res, next) {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect(['https://', req.get('Host'), req.url].join(''));
  }
  return next();
};

app.use(forceSsl);

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.get('/proxy', function(req, res, next) {
  var queryData = url.parse(req.url, true).query;

  if(!queryData.file)
    return next();

  var file = queryData.file;
  var download = request(file);

  return req.pipe(download).on('response', function(res) {
    res.headers['Content-Type'] = 'audio';
  }).pipe(res);
});

app.listen(process.env.PORT || 5000);
