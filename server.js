var Twitter = require('twitter');
var express = require('express');
var http = require('http');
var app = express();
var port = process.env.PORT || 3000;
var generate = require('./lib/generator')

app.get('/', function(req, res) {
  res.send('Congratulations, you sent a GET request!');
});

setInterval(function() {
  try {
    http.get('http://css-ipsum-bot.herokuapp.com');
    console.log('GET request sent; kept alive.');
  } catch(e) {
    console.log(e);
  }
}, 300000);

var t = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

var params = {
  screen_name: process.env.TWITTER_SCREEN_NAME
};

function makeTweet() {
  t.post('statuses/update', {status: generate()}, function(error, tweet, res) {
    if (error) throw error;
    console.log('Posted tweet.');
  });
}

setInterval(function() {
  try {
    makeTweet();
  } catch(e) {
    console.log(e);
  }
}, 600000);

app.listen(port, function() {
  console.log('App now listening on port ' + port + ' in ' + app.get('env') + ' mode...');
});
