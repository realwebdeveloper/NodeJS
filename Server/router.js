var exports = module.exports = {};
const fs = require('fs');
const path = require('path');
var data = require('../content/static-file/data');


const staticBasePath = '../content/static-file';

exports.handleRequest = function (request, response) {
    const { headers, method, url } = request;
    console.log('Request at: ', url);
    if (method === "GET")
    {
        if (url.substr(0, 4) === "/api") {
            var api_url = url.slice(5);
            // switch (api_url) {
            //     case "name":
            //         response.writeHead(200, { 'Content-Type': 'text/plain' });
            //         response.write('Huy');
            //         response.end();
            //         break;
            //     case "age":               
            //         response.writeHead(200, { 'Content-Type': 'text/plain' });
            //         response.write('18');
            //         response.end();
            //         break;
            //     default:               
            //         response.writeHead(404);
            //         response.write('Contents you are looking are Not Found');
            //         response.end();
            //         break;
            // }
            if (api_url in data){
                response.writeHead(200, { 'Content-Type': 'text/plain' });
                response.write(data[api_url]);
                response.end();
            }
            else {
                response.writeHead(404);
                response.write('Contents you are looking are Not Found');
                response.end();
            }
        }
        else
        {
            switch (url) {
                case "/":
                    fs.readFile('../content/static-file/index.html', function (error, pageRes) {
                        if (error) {
                            response.writeHead(404);
                            response.write('Contents you are looking are Not Found');
                        }
                        else {                          
                            response.writeHead(200, { 'Content-Type': 'text/html' });
                            response.write(pageRes);
                        }
                        response.end();
                    });
                    break;
                default:      
                    var resolvedBase = path.resolve(staticBasePath);
                    var safeSuffix = path.normalize(url).replace(/^(\.\.[\/\\])+/, '');
                    var fileLoc = path.join(resolvedBase, safeSuffix);

                    fs.readFile(fileLoc, function (error, pageRes) {
                        if (error) {
                            response.writeHead(404);
                            response.write('Contents you are looking are Not Found');
                        }
                        else {
                            response.writeHead(200, { 'Content-Type': 'text/javascript' });
                            response.write(pageRes);
                        }
                        response.end();
                    });
                    break;
            }
        }
    } else {       
        response.writeHead(404);
        response.write('Contents you are looking are Not Found');
        response.end();
    }  
}

return module.exports;