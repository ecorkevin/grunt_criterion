var express = require('express');
var fs = require('fs');
var express = require("express");
var app = express();
app.get('/', function(request, response) {
  var input = fs.readFileSync('index.html');
  var string = input.toString();
  response.send(string);
});
app.get('/log.json', function(request, response) {
  var input = fs.readFileSync('log.json');
  var string = input.toString();
  response.send(string);
});
var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
  console.log("Listening on " + port);
  server.close(); //for istanbul coverage test
});