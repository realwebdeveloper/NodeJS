var exports = module.exports = {}; 
var fs = require('fs');

exports.handleRequest = function(request, response) {
  const { methods, url } = request;
  if (url === '/') {
    fs.readFile('../Client/dist/index.html', function (err, file) {
      if (err) {
        throw err; 
      }
      response.end(file);
    });
  }
  else if (url === '/index_bundle.js') {
    fs.readFile('../Client/dist/index_bundle.js', function (err, file) {
      if (err) {
        throw err; 
      }
      response.end(file);
    });
  }
  else if (url === '/api/GET') {
    response.writeHead(200, {
      'Access-Control-Allow-Origin': 'http://localhost:8080',
      'Access-Control-Allow-Credentials': true
    });
    if (method === "GET")  {
           if (url === "/name") response.end('THUC');
           if (url === "/age") response.end('18');
           else if (url === '/') response.end(html);
       }
       response.end();
  }
};
return module.exports;