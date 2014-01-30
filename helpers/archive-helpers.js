var fs = require('fs');
var path = require('path');

/* You will need to reuse the same paths many times over in the course of this sprint.
  Consider calling this function in `request-handler.js` and passing in the necessary
  directories/files. This way, if you move any files, you'll only need to change your
  code in one place! Feel free to customize it in any way you wish.
*/

// shared between web and workers applications

exports.paths = {
  'siteAssets' : path.join(__dirname, '../web/public'),
  'archivedSites' : path.join(__dirname, '../archives/sites'),
  'list' : path.join(__dirname, '../archives/sites.txt')
};


// Used for stubbing paths for jasmine tests, do not modify
exports.initialize = function(pathsObj){
  for(var type in pathsObj) {
    // Check that the type is valid
    if (exports.paths[type] && pathsObj.hasOwnProperty(type)) {
      exports.paths[type] = pathsObj[type];
    }
  }
};



// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(){
  fs.readFile(this.paths['list'], 'utf8', function(err, data){
    if(err) {
      console.log("OMG SORRY NOT SORRY.");
    } else {
      console.log(data);
    }
  });
};

exports.isUrlInList = function(earl){
  fs.readFile(this.paths['list'], 'utf8', function(err, data){
    if(err){
      console.log("THIS SHOULDN'T BE HAPPENING MAN. I DON'T KNOW WHAT'S WRONG.")
    } else {
      // pretend that all urls start with www
      var content = data;
      return processFile(earl, content);
    }
  })
};

exports.addUrlToList = function(earl){

};

exports.isURLArchived = function(earl){
  path.exists(path.join(this.paths['archivedSites'], earl) , function(exists){
    if(exists){
      return true;
    } else {
      return false;
    }
  })
};

exports.downloadUrls = function(){

};
///////////////////////
var processFile = function (earl, content) {
  if(content.indexOf(earl) > 0){
    return true;
  } else {
    return false;
  }
}
