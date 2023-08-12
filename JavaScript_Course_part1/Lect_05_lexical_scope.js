// lexical scope. -> If a variable is used/called in a function-scope but not declared in it, it will search in the parent function-scope and will return that value. 
// This is called as lexical scoping.

const value1 = "Anupam";
const myApp = () => {
    const nameOfPErson = () => {
        console.log(value1);
    }
    nameOfPErson();
}
myApp();

// block scope vs function scope
// let and const are block scoped.
// var is function scoped.

// {
//     let firstName = "Anupam Anand";
// }

// console.log(firstName);

// rest parameters...
const addAll = (a,b,...c) => {
    console.log(a); // => 1
    console.log(b); // => 2
    console.log(c); // => [3,4,5,6]
}

addAll(1,2,3,4,5,6);

// params destructuring...
const person = {
    firstName: "Anupam",
    lastname: "Anand"
}

const printDetails = ({firstName, lastname}) => {
    console.log(`My name is ${firstName} ${lastname}`)
}

printDetails(person);


// Callback functions..........................
const myFunc2 = (name) => {
    console.log("inside my func2");
    console.log(name);
}

const myFunc = (callback) => {
    console.log("This is my func");
    callback("Anupam");
}

myFunc(myFunc2);

// function returning function.... (can be termed as currying)
function fun1() {
    return function fun2() {
        return "Hello World";
    }
}

// console.log(fun1()());
let ans = fun1();
console.log(ans());