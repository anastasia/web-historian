var path = require('path');
var archive = require('../helpers/archive-helpers'); 
var helpers = require('./http-helpers');
// require more modules/folders here!

var contentTypes = {
  '.js' : 'application/javascript',
  '.css' : 'text/css'
};

exports.handleRequest = function (request, response) {
   if (request.method === "POST"){ 
      // if(request.url !== "/"){
      //   response.writeHead(404, helpers.headers);
      //   response.end();
      //   return;
      // } else {
        // not catching the right request
        console.log("HERE")
        helpers.postAssets(request, response); // async func
        return;
      // }

      // callbacks ASYNCHRONOUSLY GET THIS
    } else if (request.method === "GET"){
      // headers for javascript && css files
      if (contentTypes[path.extname(request.url)]){ 

        console.log(path.extname(request.url), request.url)
        // got to serve up each doc coming in
        helpers.serveAssets(response, path.join(archive.paths['siteAssets'], request.url));
        response.writeHead(200, {'Content-Type' : contentTypes[path.extname(request.url)]});
        response.end();

      } else if (path.extname(request.url) === ".html" || request.url === "/"){
        helpers.serveAssets(response, path.join(archive.paths['siteAssets'], "/index.html"));

      } else {
        response.writeHead(404, helpers.headers);
        response.end();
        return;
      }
    } else {
      response.writeHead(404, helpers.headers);
      response.end();
      return;
    };
};






// INSTALL CAFFEINE

// As you progress, keep thinking about what helper functions you can put here!
// write all requests here ?  
