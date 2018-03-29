var fs = require('fs');
var lines = fs.readFileSync(process.argv[2]).toString();
console.log(lines.split('\n').length - 1);