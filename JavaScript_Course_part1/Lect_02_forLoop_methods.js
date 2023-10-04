// methods on arrays...

// 1. push("") -> adds element in the last.
// 2. pop() -> removes last element.
// 3. shift -> removes 1st element.
// 4. unshift("") -> add element in the 1st position.

let fruits = ["banana","mango","apple"];
console.log(Array.isArray(fruits)); // checks if the variable is array or not.

let array1 = ["item1","item2"];
let array2 = array1;
// In the above case two variables are pointing to same array. If we make change in one, both will get affected.
array2.push("anupam");
console.log(array1);

// various ways to clone an array in other array.
// let array3 = [...array2,"grapes"]; // spread operator
// let array3 = array1.slice(0); // using slice operator
// let array3 = [].concat(array1); // using concat operator

// console.log(array3);

// extending the use of above methods for array3...
// let array3 = array1.slice(0).concat(["item3", "item4"]);
let array3 = [].concat(array1,["item3", "item4"]);
console.log(array3);

// for loop in array...

for(let i = 0;  i < fruits.length; i++) {
    console.log(fruits[i].toUpperCase());
}

// using const we can change vakue in array as well... 
// variable which stores array actually contains the reference of the array. And on changing the value of array we arn't changing the value of reference. So it is okay to change value of array even if it is declared with const keyword.

const array4 = [...array3];
array4.push("pomegrannate");
// array4 = "grapes"; // not acceptable as reference of array is changed...
console.log(array4);

// `for of` and `for in` loop
const array5 = ["fruits", "vegetable", "Roti","Chawal"];
for(let i of array5) {
    console.log(i);
}

for(let i in array5) {
    console.log(array5[i]);
}

// Array destructuring...
const myArray = ["value1", "value2", "value3"];
// let [myVar1,myVar2] = myArray;
let [myVar1, myVar2, ...myNewArray] = myArray;
console.log(myVar1, myVar2, myNewArray);