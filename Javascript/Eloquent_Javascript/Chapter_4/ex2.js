/*
Arrays have a reverse method which changes the array by inverting the order 
in which its elements appear. For this exercise, write two functions, 
reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument
 and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace,
  does what the reverse method does: it modifies the array given as argument by reversing its elements. 
  Neither may use the standard reverse method.

*/
const reverseArray = (array)=>{
  let newArray=[];
  for (var i=array.length;i>0;i--){
    newArray.push(array.pop(i));
  };
  return newArray;
};

const reverseArrayInPlace = (array)=>{
  var newArray=[];
  for (var i=array.length-1;i>=0;i--){
    newArray.push(array[i]);
  };
 arrayValue=newArray;
  return arrayValue;
};
    




console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]