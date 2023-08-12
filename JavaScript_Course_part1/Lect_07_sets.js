// 3. sets => a) No index-based access. 
         //   b) Order is not guaranteed.
         //   c) Duplicates not allowed.

const sets = new Set();
sets.add(1);
sets.add(2);
sets.add(3);
const items = ['item1','item2','item3','item2'];
sets.add(items);
console.log(sets);

const myArray = [1,2,3,4,4,4,5,2,7,8];
const uniqueElement = new Set(myArray);
uniqueElement.add("item2");
console.log(uniqueElement);