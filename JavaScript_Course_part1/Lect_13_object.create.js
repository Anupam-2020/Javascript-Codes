// creating object using Object.create. => It allows accessing of data from other objects if that key is not available in our required object.

const obj1 = {
    key1: "value1",
    key2: "value2"
}

const obj2 = Object.create(obj1);
obj2.key3 = "value3";

console.log(obj2.key2);
console.log(obj2.__proto__); // it will print key/value of obj1....
// Note:- This concept is used in Lect_12_this.js....