/**
 * Module dependencies.
 */
var express = require('express');
var Twitter = require('mtwitter');
var hbs = require('hbs');

var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use('/public', express.static(path.join(__dirname, 'public')));


var twitter = new Twitter({
  consumer_key: 'vEAmcUdgeSpdGiMbH1FMZw',
  consumer_secret: 'GC8j8FBIRDxiKgUwtB0idqDAmADTAF0SW7Yc7OUA',
  application_only: true
});

app.get('/', function (req, res) {
  var screen_name = 'cnnbrk';
  res.render('index', {
    screen_name: screen_name
  });
});

app.get('/:id', function (req, res) {
  var screen_name = (req.params.id === 'cnnbrk-tweets') ? 'cnnbrk' : req.params.id;
  res.render('index', {
    screen_name: screen_name
  });
});


app.get('/api/tweets', function (req, res) {
  var screen_name = req.query.screen_name;

  twitter.get("statuses/user_timeline", {
    screen_name: screen_name,
    count: 10
  },
    function (err, feed) {
      if (err) {
        throw err;
      }
      res.send(feed);
    });
});


http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});