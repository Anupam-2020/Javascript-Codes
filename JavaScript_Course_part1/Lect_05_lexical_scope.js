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

// console.log(firstName); // throws error.

// rest parameters...
const addAll = (a,b,...c) => {
    console.log(a); // => 1
    console.log(b); // => 2
    console.log(c); // => [3,4,5,6]
}

addAll(1,2,3,4,5,6);

// object destructuring...
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


// Currying is a concept in JavaScript where a function with multiple arguments is transformed into a sequence of functions, 
// each taking a single argument. The process of currying allows you to partially apply arguments to a function and create new functions with fewer parameters.
function sum1(x) {
    return function(y) {
        return function(z) {
            return x+y+z;
        }
    }
}
// console.log(sum1(2)(3)(4));

// Uses of currying - 
// 1. Code Reusability,
// 2. Makes codes simpler by createing specialized functions.
// 3. Can help in event handling.
// 4. Memoization.


// Currying examples...
const ADDITION = '+';
const SUBTRACTION = '-';
const MULTIPLICATION = '*';
const DIVISION = '/';

function performOperation(operation) {
    return function(a) {
        return function(b) {
            switch(operation) {
                case ADDITION: return a + b;
                case SUBTRACTION: return Math.abs(a - b);
                case MULTIPLICATION: return Math.abs(a * b);
                case DIVISION: return Math.round(a/ b);
                default: return 'Invalid Operation';
            }
        }
    }
}

console.log(performOperation('/')(2)(3));



let ans = fun1();
console.log(ans());

function add(a) {
    return function(b) {
        if(b) return add(a+b); 
        return a;
    }
}

console.log(add(2)(4)(6)());

// currying implementation using normal function...
function curry(func) {
    return function curriedFunc(...args) {
        if(args.length >= func.length) {
            return func(...args);
        } else {
            return function (...next) {
                return curriedFunc(...args, ...next);
            }
        }
    }
}

const sum = (a,b,c,d) => a+b+c+d;

const totalSum = curry(sum);

console.log(totalSum(1)(3)(4)(2));

// Concept of shadowing.....................
// function func() {
//     var a = 'Geeks';
//     let b = 'Geeks';
     
//     if (true) {
//         let a = 'GeeksforGeeks'; // Legal Shadowing
//         var b = 'Geeks'; // Illegal Shadowing
//         console.log(a); // It will print 'GeeksforGeeks'
//         console.log(b); // It will print error
//     }
// }
// func();