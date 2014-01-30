var path = require('path');
var archive = require('../helpers/archive-helpers');
var helpers = require('./http-helpers');
// require more modules/folders here!

exports.handleRequest = function (request, response) {
    if (request.method === "GET"){
      console.log(request)
      response.writeHead(200, helpers.headers);
      helpers.serveAssets(response, request.data);
      return;
    } 
    if (request.method === "POST"){ // is post necessary?
      response.writeHead(200, helpers.headers);
      helpers.serveAssets(response, request.data);
    }
    // if not get, 404
    response.writeHead(400, helpers.headers);
    response.end();
};


// As you progress, keep thinking about what helper functions you can put here!
// write all requests here ?  
