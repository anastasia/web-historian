var http = require("http");
var handler = require("./request-handler");
var connect = require('connect');


var port = 8080;
var ip = "127.0.0.1";

var server = connect.createServer()
  .use(connect.static(__dirname + '/public'))
  .use(handler.handleRequest);
  
console.log("Listening on http://" + ip + ":" + port);
server.listen(port, ip);

