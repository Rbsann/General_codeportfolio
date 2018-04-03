/*
you want to replace all the dialogue quotes with double quotes, while keeping the single quotes used in contractions like aren’t.

Think of a pattern that distinguishes these two kinds of quote usage and craft a call to the replace method that does the proper replacement.*/

var text = "'I'm the cook,' he said, 'it's my job.'";
var text = "'I'm the cook' he said, 'it's my job'";
console.log(text.replace(/(^)'|(\W)'|'(\W)|'($)/g, "$1$2\"$3"));