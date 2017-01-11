// include the http module
//var http = require('http');

// create a webserver
//http.createServer(function (req, res) {

    // respond to any incoming http request
//    res.writeHead(200, {'Content-Type': 'text/plain'});
//    res.end('Hello World\n');

//}).listen(1337, '127.0.0.1');
//----------------------------------------------------------------
//var express = require('express');

//var app = express.createServer();

//app.get('/', function(req, res){
  //  res.send('Hello World');
//});

//app.listen(1337)

// log what that we started listening on localhost:1337
//console.log('Server running at 127.0.0.1:1337');
//----------------------------------------------------------------

var express = require('express');
 
//CREATE APP
var app = express();
 
//LOCATION OF STATIC CONTENT IN YOUR FILESYSTEM
app.use(express.static(__dirname));
 
//PORT TO LISTEN TO
app.listen(1337);