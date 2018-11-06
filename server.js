// JavaScript source code
const http = require('http');
const url = require('url');

const server = http.createServer(function (request, response) {
    console.log('createServer callback');
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });

    const parsedUrl = url.parse(request.url, true);

    console.log(parsedUrl);
    console.log('Name: ', parsedUrl.query.name);

    const body = `<!DOCTYPE html>
      	<html>
        <head>
          <meta charset="utf-8">
          <title>Node.js Demo</title>
        </head>
        <body>
          <h1 style="color:green">Hello ${ parsedUrl.query.name }</h1>
        </body>
      </html>`;

    response.end(body);
});

console.log('listen');
server.listen(8080, function () {
    console.log('Server is listening to http//localhost:8080');
});
