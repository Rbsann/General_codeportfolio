var http = require('http');
var url = require('url');
var port =Number(process.argv[2]);

var time, query, isoTime, chunk;

var server = http.createServer(function(request, response) {
    if (request.method === 'GET') {
        response.writeHead(200,{'Content-Type':'application/json'});
        query = url.parse(request.url, true);

        switch(query.pathname) {
        case '/api/parsetime':
            time = new Date(query.query.iso);
            isoTime = {
                'hour': time.getHours(),
                'minute': time.getMinutes(),
                'second': time.getSeconds()
            };
            response.end(JSON.stringify(isoTime));
            break;

        case '/api/unixtime':
            time = new Date(query.query.iso);
            chunk = {"unixtime": time.getTime()};
            response.end(JSON.stringify(chunk));
        }
    }

   
});

server.listen(port);