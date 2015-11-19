var fs = require('fs');
var path = require('path');
var Promise = require('bluebird');

var fileName = path.join(__dirname, '../players.json');

function readFile() {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, 'utf8', function (err, fileContent) {
      if (err) {
        reject(err);
        return;
      }

      var json = JSON.parse(fileContent);

      resolve(json);
    });
  });
}

function updateFile(json) {
  return new Promise(function (resolve, reject) {
    var fileContent = JSON.stringify(json);

    fs.writeFile(fileName, fileContent, function (err) {
      if (err) {
        reject(err);
        return;
      }

      resolve(json);
    });
  });
}

var self = {};

self.readFile = readFile;
self.updateFile = updateFile;

module.exports = self;