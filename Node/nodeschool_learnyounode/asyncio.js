var fs = require('fs');
var lines = fs.readFile(process.argv[2],function(err,data) {
	if (err) return console.error(err);
	data = data.toString();
	data = data.split('\n');
	let totLines = data.length -1
	console.log(totLines);
})	;
