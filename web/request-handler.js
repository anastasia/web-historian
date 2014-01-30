var path = require('path');
var archive = require('../helpers/archive-helpers'); 
var helpers = require('./http-helpers');
// require more modules/folders here!



exports.handleRequest = function (request, response) {
   if (request.method === "POST"){ 

      helpers.postAssets(request, response); // async func
      return;
    } else if (request.method === "GET") {
      helpers.serveAssets(response, request.url);
   
    } else {
      response.writeHead(404, helpers.headers);
      response.end();
      return;
    };
    
};

