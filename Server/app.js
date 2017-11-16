var http = require('http'),
fs = require('fs'),
router = require('./router');
http.createServer(router.handleRequest).listen(8000);