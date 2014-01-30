var fs = require('fs');
var path = require('path');

exports.paths = {
  'siteAssets' : path.join(__dirname, '../web/public'),
  'archivedSites' : path.join(__dirname, '../archives/sites'),
  'list' : path.join(__dirname, '../archives/sites.txt')
};


exports.initialize = function(pathsObj){
  for(var type in pathsObj) {
    if (exports.paths[type] && pathsObj.hasOwnProperty(type)) {
      exports.paths[type] = pathsObj[type];
    }
  }
};


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
      processFile(earl, content);
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
