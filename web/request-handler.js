var path = require('path');
var archive = require('../helpers/archive-helpers');
var helpers = require('./http-helpers');
// require more modules/folders here!

exports.handleRequest = function (request, response) {
  if(request === "GET"){ 
    // redirect to loading.html after a user submits a site. 
    // console.log(__dirname);
    // callback here
    // function(err, data){
    //   if(err){
    //     err;
    //   } else {
        // redirect to website
        response.end(archive.paths.archivedSites);
      // }
    // }
    helpers.sendResponse(response);
  }
  else if(request === "POST"){ 
    // do later
    // res.end(archive.paths.list);
  } 
  else if(request === "OPTIONS"){ 
    helpers.sendResponse(response, null);
  }
  response.end(); // res.end(archive.paths.list);
};


// As you progress, keep thinking about what helper functions you can put here!
// write all requests here ?  
