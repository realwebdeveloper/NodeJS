var exports = module.exports = {};
const fs = require('fs');

exports.handleRequest1 = function (request, response) {
    const { headers, method, url } = request;
    console.log('Request at: ', url);
    if (method === "GET")
    {
        if (url.substr(0, 4) === "/api") {
            var api_url = url.slice(5);
            switch (api_url) {
                case "name":
                    response.writeHead(200, { 'Content-Type': 'text/plain' });
                    response.write('Huy');
                    response.end();
                    break;
                case "age":               
                    response.writeHead(200, { 'Content-Type': 'text/plain' });
                    response.write('18');
                    response.end();
                    break;
                default:               
                    response.writeHead(404);
                    response.write('Contents you are looking are Not Found');
                    response.end();
                    break;
            }
        }
        else
        {
            switch (url) {
                case "/":
                    fs.readFile('../Client/index.html', function (error, pageRes) {
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
                case "/index_bundle.js":
                    fs.readFile('../Client/index_bundle.js', function (error, pageRes) {
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
                default:            
                    response.writeHead(404);
                    response.write('Contents you are looking are Not Found');
                    response.end();
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