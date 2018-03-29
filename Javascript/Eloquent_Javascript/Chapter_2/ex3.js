//Chess board with custom height and width

function grid(height,width){
  let j=0;
  hash1='#';
  hash2=' ';
  for (i=2;i<=width;i++){
    if(i%2===0){
      hash1+=' ';
      hash2+='#';
    }
    else{
      hash1+='#';
      hash2+=' ';
    }
  }
j=height;
  while(j!=0){
    console.log(hash2);
    j--;
    if(j===0){
      break;}
      else{
        console.log(hash1);
        j--}
    }
  }
  
  grid(9,8);''