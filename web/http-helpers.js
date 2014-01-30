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

var serveAssets = exports.serveAssets = function(response, earl) { // earl = request.url
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...), css, or anything that doesn't change often.)
  var readStream = fs.createReadStream(earl); 

  readStream.on('error', function(err) {
    response.writeHead(404, headers);8
    response.end(); 
  });
// use readFile
  readStream.on('data', function(){
    response.writeHead(200, headers);
  });
  readStream.pipe(response);
  console.log("pipe it ", earl);


};

var postAssets = exports.postAssets = function(request, response){
  // lookup in file
  console.log(request.url);
  if(!archive.isUrlInList(request.data)){ // is it request.data or request.url?
    serveAssets(response, archive.paths['siteAssets'] + '/loading.html');
    response.writeHead(302, headers);
  } else {

  }
  return;
};
