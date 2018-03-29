/*Exercise to flatten an array of arrays into a single array */
let arrays = [[1, 2, 3], [4, 5], [6]];
const flatten = a=>{
 let flattened=[];
  for (var i=0;i<a.length;i++){
    for( var j=0;j<a[i].length;j++){
    flattened.push(a[i][j]);
    
  };
                     };
  return flattened;
};
console.log(flatten(arrays));