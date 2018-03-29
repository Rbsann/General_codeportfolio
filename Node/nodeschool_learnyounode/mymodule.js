var fs = require ('fs');
var path = require('path');
module.exports = function filelist(dir, ext, callback){
fs.readdir(dir,function(err,list){
	let files = [];
	if (err) {
		return callback(err,null);
	}
	else{
	let check = '.'+ext;
	for (var i=0;i<list.length;i++){
		if (path.extname(list[i])==check){
			files.push(list[i]);

			//console.log(list[i]);
		}
		
	};
		
		return callback(null,files);
	};

});
};