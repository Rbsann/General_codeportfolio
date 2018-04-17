var http = require('http');
var port =Number(process.argv[2]);
var fs= require('fs');
var file = process.argv[3];
var map = require('through2-map');  

  var server = http.createServer(function (req, res) {  
			 req.pipe(map(function (chunk) {  
     return chunk.toString().toUpperCase()  
   })).pipe(res)

	     })  
    
        server.listen(port);  