var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var ext = process.argv[3];
fs.readdir(dir,function(err,list){
	let files = [];
	if (err) return console.error(err);
	let check = '.'+ext;
	for (var i=0;i<list.length;i++){
		if (path.extname(list[i])==check){

			console.log(list[i]);
		}
		else{
			continue;
		}
	};
		
		
	

});