/*

The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum. */

const min =(n,m) =>{
  if(n>m){
    return m}
  else{
    return n}
};
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10