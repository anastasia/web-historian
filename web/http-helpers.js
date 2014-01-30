var http = require('http');
var path = require('path');
var fs = require('fs');
var mime = require('mime');
var archive = require('../helpers/archive-helpers');

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};

exports.serveAssets = function(response, earl) { // url = request.data
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...), css, or anything that doesn't change often.)
  var readStream = fs.createReadStream(earl); 

  readStream.on('error', function(err) {
    response.writeHead(404, headers);
    response.end(); // f u error
  });
// use readFile
  readStream.on('data', function(){
    response.writeHead(200, headers);
  });
  readStream.pipe(response);
  console.log("pipe it ", earl);


};

exports.getAssets = function(request, response){
  // lookup in file
  // console.log(request.url)
  // archive.isUrlInList(request.url); // or whatever is the actual website, goddamnit
  // redirect all POSTs to loading for now
  response.writeHead(302, {
    'Location': path.join(archive.paths['siteAssets'], '/loading.html')
  }, headers); // not riiiiighhhht

  response.end();
  return;
};
