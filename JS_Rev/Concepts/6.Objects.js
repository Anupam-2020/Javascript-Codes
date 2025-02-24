// const property = "firstName";
// const name = "Anupam Anand";

// const obj = {
//     [property] : name,
//     age: 25
// }


// console.log(obj.firstName);


// for(let key in obj) {
//     console.log(obj[key]);
// }


// Q1. .............................................................
const obj = {
    a: "one",
    b: "two",
    a: "three"
}

// delete obj[a]

console.log(obj.a); // three(1st `a` will be over-written)


// Q2.
const a = {};
const b = { key: "b"}
const c = { key: "c"};

a[b] = 123; // a["[Object Object]"]
a[c] = 456; // a["[Object Object]"]

console.log(a[b]);


// Q3.
// JSON.stringify and JSON.parse

const data = {
    userName: "Anupam",
    userAge: 27
}

let dataInString = JSON.stringify(data)
console.log(dataInString);
console.log(JSON.parse(dataInString));

// localStorage.setItem("data", dataInString);


// Q4. 
// object referencing.
let d = {
    greetings: "Hey!"
}

let e;
e = d; // e is just a reference to the object `d`
d.greetings = "Hello"

console.log(e.greetings);


// Q5.
// let person = {name: "Anupam"};
// const member = [person];
// person = null;
// console.log(member);


// Q6.
// const value = {number: 10}

// const multiply = (x = {...value}) => {
//     console.log(x.number*=2);
// }


// multiply();
// multiply();
// multiply(value)
// multiply(value)


// Q6.
function changeAgeAndReference(person) {
    person.age = 23;
    person = {
        name: "Example1",
        age: 55
    }

    return person;
}


let personObj1 = {
    name: "Example2",
    age: 34
}


let personObj2 = changeAgeAndReference(personObj1);
console.log(personObj1);
console.log(personObj2);

// Q7.
// shallow copy and deep copy.
let user = {
    name: "Example3",
    age: 33
}


const objClone = Object.assign({}, user);
objClone.name = "Example222"

const objClone2 = JSON.parse(JSON.stringify(user));
objClone2.age = "1"

const objClone3 = {...user}
objClone3.age = 111
console.log(objClone3);
