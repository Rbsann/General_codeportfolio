/*


Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). */

const countBs = word =>{
  let qty = 0;
  for (var i =0;i<word.length;i++){
    if (word[i]==='B'){
      qty+=1;}
  };
  return qty;
};
const countChar = (word,char) =>{
   let qty = 0;
  for (var i =0;i<word.length;i++){
    if (word[i]===char){
      qty+=1;}
  };
  return qty;
};
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

