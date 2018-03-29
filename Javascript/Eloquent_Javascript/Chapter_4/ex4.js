const deepEqual =(a,b) =>{
  if (typeof a=='object' && typeof b=='object' && b !=null){
    let aobj=Object.keys(a);
    let bobj=Object.keys(b);
    if(aobj.length!=bobj.length){
      
      return false}
    
    else {
      for (var i=0; i<aobj.length;i++){
        if (a[Object.keys(a)[i]]==b[Object.keys(b)[i]]){
          console.log(a[Object.keys(a)[i]],b[Object.keys(b)[i]]);
           continue;}
                                    
          else {
          
                return false;}
                                    };
                                    return true;}
                                    }
              
                                    
                                    
                                    };                               
      
 
let obj = {here: {is: "an"}, object: 2};
//let test =obj[Object.keys(obj)[0]];
//console.log(test);
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true