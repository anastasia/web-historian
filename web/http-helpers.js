var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};

exports.serveAssets = function(response, url) { // url = request.data
  
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...), css, or anything that doesn't change often.)
  var readStream = fs.createReadStream('./public' + url);

  readStream.on('open', function(){
    readStream.pipe(response); // pipe it wheeeeeeerrreee
  });
  readStream.on('error', function(err) {
    response.end(err);
  });

};

/*
The res object in Express is a subclass of Node.js's http.ServerResponse 
(read the http.js source). You are allowed to call res.setHeader(name, value)
as often as you want until you call res.writeHead(statusCode).
After writeHead, the headers are baked in and you can only call res.write(data),
and finally res.end(data).
The error "Error: Can't set headers after they are sent." means that you're already
in the Body or Finished state, but some function tried to set a header or statusCode.
When you see this error, try to look for anything that tries to send a header after some
of the body has already been written. For example, look for callbacks that are accidentally
called twice, or any error that happens after the body is sent.

In your case, you called res.redirect(), which caused the response to
become Finished. Then your code threw an error (res.req is null). and
since the error happened within your actual function(req,res,next) (not within a callback),
Connect was able to catch it and then tried to send a 500 error page. But since the headers
were already sent, Node.js's setHeader threw the error that you saw.
*/

// fs.createReadStream(filename, {
//   'bufferSize': 4 * 1024
// }).pipe(response)

// // 0.2.x style
// sys.pump(fs.createReadStream(filename, {
//   'bufferSize': 4 * 1024
// }), response)

