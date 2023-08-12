// splice method.
// syntax => Array.splice(start, delete-count, insertedValue).

const myArray = ['item1','item2','item3'];

// delete operation using splice.
// syntax => Array.splice(startingIndex, deleteCount);
// const deletedItem = myArray.splice(1,2);
// console.log(deletedItem);

// insert operation using splice.
// syntax => Array.splice(startingIndex, deleteCount=0, insertedValue)
// myArray.splice(1,0,"inserted item");

// insert and delete both.
// syntax is same as insert. Just we need to put some value in deleteCount instead of 0.
const deletedItem = myArray.splice(1,2,"Anupam","Anand","Anurag");
console.log(myArray);
console.log(deletedItem);