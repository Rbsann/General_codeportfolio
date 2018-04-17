var http = require('http');
var port =process.argv[2];
var fs= require('fs');
var file = process.argv[3];
var stream = fs.createReadStream(file);

  var server = http.createServer(function (req, res) {  
			stream.pipe(res);


	     })  
     server.listen(port);  