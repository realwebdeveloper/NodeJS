var exports = module.exports = {}; 
var fs = require('fs');

const path = '../Client/dist';

exports.handleRequest = function(request, response) {
  const { methods, url } = request;
  if (url === '/') {
    fs.readFile(path + '/index.html', function (err, html) {
      if (err) {
        throw err; 
      }
      response.end(html);
    });
  }
  else {
    fs.readFile(path + url, function (err, file) {
      if (err) {
        throw err; 
      }
      response.end(file);
    });
  }
};
return module.exports;