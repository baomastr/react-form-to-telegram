var express = require('express');
var app = express();
var bot = require('./telegram-bot/index.js');
var useBot = bot();
console.log(useBot);
// simple logger
app.use(function (req, res, next) {
  console.log('%s %s', req.method, req.url);
  next();
});


app.use('/telegram-bot/', (req, res) => {
  // console.log(req.body)
  res.send('Hello')
  useBot.sendMessage('test');
});

app.listen(3001);