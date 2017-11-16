var exports = module.exports = {};
const fs = require('fs');

exports.handleRequest = function(request, response) {
    const { headers, method, url } = request;
    console.log('Request at: ', url);
    if (method === 'GET') {
        if (url === '/name') response.end('Huy');
        else {
            if (url === '/age') response.end('18');
            else {
                if (url === "/") {
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
                }
                else {
                    if (url === "/index_bundle.js") {
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
                    } else response.end('Not exist');
                }
            }
        }
    }
}

exports.handleRequest1 = function (request, response) {
    const { headers, method, url } = request;
    switch (url) {
        case "/":
            
            break;
    
        default:
            break;
    }
}

return module.exports;