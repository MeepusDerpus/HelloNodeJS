var http = require('http');
var url = require('url');
var dt = require('./DateModule');
var fs = require('fs');

http.createServer(function (req, res) {
  //https://www.w3schools.com/nodejs/nodejs_url.asp
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) 
    {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime() + "<br/>");
    res.write("The currrent URL is: "+req.url+"<br/>");
    res.end();
  });

  }).listen(8080);