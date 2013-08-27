var express = require('express');
var fs = require('fs');
var express = require("express");
var app = express();
var growler = require('growler');
var myApp = new growler.GrowlApplication('Simple Growl App');
myApp.setNotifications({
  'Server Status': {}
});
myApp.register();
app.use(express.static(__dirname + '/styles'));
app.get('/', function(request, response) {
  var input = fs.readFileSync('index.html');
  var string = input.toString();
  response.send(string);
});
app.get('/log.json', function(request, response) {
  var input = fs.readFileSync('log.json');
  if (input.toString() == '{"report":[]}') {
    myApp.sendNotification('Server Status', {
      title: 'Node Growler online',
      text: 'No Errors Present'
    });
  } else {
    myApp.sendNotification('Server Status', {
      title: 'Node Growler online',
      text: 'Errors Still Exist'
    });
  }
  var string = input.toString();
  response.send(string);
});
app.get('/file/*', function(request, response) {
  var input = fs.readFileSync(request.params[0]);
  var string = input.toString();
  response.send(string);
});
var port = process.env.PORT || 7000;
var server = app.listen(port, function() {
  console.log("Listening on " + port);
  //server.close(); //for istanbul coverage test
});