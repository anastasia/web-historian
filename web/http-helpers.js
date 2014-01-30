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
var contentTypes = {
  '.js' : 'text/javascript',
  '.css' : 'text/css'
};

exports.serveAssets = serveAssets = function(response, earl) { // earl = request.url
  if(earl === "/"){ earl = "index.html" };
  earl = path.join(archive.paths['siteAssets'], earl);

  fs.readFile(earl, function(err, data){
    console.log(earl);
    if(err){ 
      console.log('err: ', err)
      response.writeHead(404, headers); 
    } else if (data){
      if (contentTypes[path.extname(earl)]){ // headers for javascript && css files
        response.writeHead(200, {'Content-Type' : contentTypes[path.extname(earl)]});
        response.write(data);    
      } else if (path.extname(earl) === ".html" || earl === "/"){
        response.writeHead(200, headers);
        response.write(data);
      } else {
        response.writeHead(404, helpers.headers);
        response.end();
        return;
      }
      console.log("here");
      response.end();
    };
  }); 

};


//   readStream.on('error', function(err) {
//     response.writeHead(404, headers);
//     response.end(); 
//   });
// // use readFile ? 
//   readStream.on('data', function(earl){
//     // console.log("in data", earl);
//     response.writeHead(200, headers);
//   });
  
//   readStream.pipe(response); // console.log("pipe it ", earl);

exports.postAssets = postAssets = function(request, response){

  if(!archive.isUrlInList(request.data)){ // is it request.data or request.url?
    serveAssets(response, archive.paths['siteAssets'] + '/loading.html');
    response.writeHead(302, headers);
  } else {

  } 
  return;
};
