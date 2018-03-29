/*
Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?*/

const isEven= n => {
  n=Math.abs(n);
  if (n===1){
  return false}
else if (n===0){
  return true }
else {
  return isEven (n-2)}
};

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??