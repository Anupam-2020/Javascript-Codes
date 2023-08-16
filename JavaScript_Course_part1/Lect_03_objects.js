// objects.

const person = {
    name: "Anupam",
    age: 26,
    hobbies: ["Coding", "reading","playing"],
    "highest education": "B.tech",
}

person.gender = "male"; // adding key in existing object.

const key = "email";
// console.log(person);
// console.log(person["name"]);

// application of square bracket over dot while accessing object......
// console.log(person["highest education"]);

person[key] = "anupam@gmail.com"; // adding key in existing object.
// console.log(person);

// iteration in loop...
// 1. for in loop.
// 2. Objects.keys

for(let key in person) {
    // console.log(`${key} : ${person[key]}`);
    // console.log(key, person[key]);
}

// console.log(Object.keys(person)); // returns all keys of `person Object` in array....
for(let key of Object.keys(person)) {
    // console.log(person[key]);
}

// computed properties............
const key1 = "fruit";
const key2 = "Vegetable";
const value1 = "Apple";
const value2 = "Tomato";

const obj = {
    [key1] : value1,
    [key2] : value2
}

// console.log(obj);

// spread operator in object...
const obj2 = {...obj, ...person};
// console.log(obj2);

// const newObj = {..."abcdef"};  // all string letters become value and corresponding index becomes key.
// console.log(newObj);

// object destructuring...
const {fruit, Vegetable} = obj; // the variables here should be the same as key in obj...
// console.log(Vegetable);

// objects in arrays...
const users = [
    {userId:1, fname: "Anupam", lname: "Anupam"},
    {userId: 2, fname: "Anurag", lname: "Anand"}
]

// delete users[0].userId
console.log(users);


// Another example of object......
const a = {}
const b = { key: 'b'}
const c = { key: 'c'}

a[b] = 123;
a[c] = 456;

console.log(a); // here a will have key as '[object object]' and not b and c.


// strinify vs parse............
// const person = {
//     name: 'Piyush',
//     age: 25
// }

const strObj = JSON.stringify(person) // all keys gets converted to string
console.log(strObj)

console.log(JSON.parse(strObj)) // keys get converted to original format from string.

localStorage.setItem('test',person.name)
const value = localStorage.getItem('test');
console.log(value)
localStorage.removeItem('test')