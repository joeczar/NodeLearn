// JavaScript source code
const http = require('http');

const server = http.createServer(function (request, response) {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });

    const body = `<!DOCTYPE html>
      	<html>
        <head>
          <meta charset="utf-8">
          <title>Node.js Demo</title>
        </head>
        <body>
          <h1 style="color:green">Hello World</h1>
        </body>
      </html>`;

    response.end(body);
});

server.listen(8080, function () {
    console.log('Server is listening to http//localhost:8080');
});
