var express = require('express');
var fs= require('fs');
var querystring = require('querystring');
var http = require('http');

var app = express();
app.get('/', function (req, res) {
  var data = querystring.stringify({
    username: "myname",
    password: " pass"
  });

  var options = {
    host: 'zso11.edupage.org',
    path: '/substitution/?',
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(data)
    }
  };

  var httpreq = http.request(options, function (response) {
      var x="";
    response.setEncoding('utf8');
    response.on('data', function (chunk) {
        //var x=chunk;
        x+=chunk;
      console.log("body: " + x.length);
        //fs.writeFileSync(__dirname+'/json/pageZSO.txt', chunk, 'utf-8');
    });
    response.on('end', function() {
        fs.writeFileSync(__dirname+'/json/pageZSO.txt', x, 'utf-8');
      res.send('ok');
    })
  });
  httpreq.write(data);
  httpreq.end();
});

app.listen(8090);