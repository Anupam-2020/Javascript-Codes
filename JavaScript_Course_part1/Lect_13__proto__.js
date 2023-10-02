

// __proto__ -> all the data-types have a proto object associated with it(especially used for object)...
// creating object using Object.create. => It allows accessing of data from other objects if that key is not available in our required object using its __proto__ object.

const obj1 = {
    key1: "value1",
    key2: "value2"
}

// const obj2 = obj1;

// M-1 for attaching __proto__ of one object to another object (also called prototypal inheritance)...
// const obj2 = Object.create(obj1); // creates an empty object...

const obj2 = {};
// M-2 for attaching __proto__ of one object to another object...
// Object.setPrototypeOf(obj2, obj1);

// M-3 for attaching __proto__ of one object to another object...
obj2.__proto__ = obj1;
// Note:- This concept is used in Lect_12_this.js....
obj2.key3 = "value3";

console.log(obj2.key2);
console.log(obj2.__proto__); // __proto__, in this case contains all the key/value from obj1...
console.log(obj2.__proto__.key1)



function proto() {
    const obj2 = Object.create(obj1);
    return obj2;
}

console.log(proto().__proto__);

const arr = []

console.log(arr.__proto__)

const a = obj1;
console.log(a.__proto__);