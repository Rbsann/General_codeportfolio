/*
Analogous to the some method, arrays also have an every method. 
This one returns true when the given function returns true for every element in the array. 
In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.

Implement every as a function that takes an array and a predicate function as parameters. */

function every(array, test) {
  for (elements of array){
    if (test(elements)){
      continue;}
    else{
      return false;
    }
  // Your code here.
};
  return true;
};

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true