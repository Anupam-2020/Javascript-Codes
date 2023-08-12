// fill method.

// fill is used to create new array with pre-filled values.
const myArray = new Array(10).fill(0);
console.log(myArray);

const array = ["Hello","Anupam",9,4,2,null,[2,4,"Rahul",-9]];

// fill is also used to replace elements of existing array...
array.fill(1,2,5); // 1st parameter => which value to be replaced with, 2nd/3rd parameter => represents indices of array from/to which elements are to be replaced.
array[6].fill(0, 0,array[6].length);

console.log(array);