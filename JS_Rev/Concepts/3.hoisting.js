// Function expression.........................................................
// const square = function (num) {
//   return num * num;
// };

// console.log(square(4));


// First class Functions.........................................................
// function square(num) {
//     return num * num;
// }


// function displaySquare(fn) {
//     console.log(fn(5));
// }


// displaySquare(square)


// IIFE Immediately invoked function..............................................
// (function(num) {
//     console.log(num * num);
// })(15);


// Questions on clousers 
// (function(x) {
//     return (function(y) {
//         console.log(x); // x is not in the lexical scope of the inner fn so it searches in outside of its lexical scope. 
//     })(4);
// })(5);


// for(let i = 0; i < 5; i++) { // since let is block scoped so, it contains different values for different iterations, ut var is function scoped so, the final value which is `5` will be added on last iteration.
//     setTimeout(() => {
//         console.log(i);
//     }, i);
// }

// Hoisting.........................................................
var x = 5;
var fun = function() {
    console.log(x); // undefined.
    var x = 9;
};

fun();

// spread vs rest operstor..........................................................
function multiply(...params) { // rest operstor.
    console.log(params);
}

let arr = [1,2,3]; 
multiply(...arr); // spread operator.


// arrow vs normal function..........................................................
// function fn() {
//     console.log(arguments);
// }

// fn(1,2,3);

// let fnArg = () => {
//     console.log(arguments); // error.
// }

// fnArg(3,4,5);


let user = {
    userName: "Anupam",
    rc1: () => {
        console.log(this.userName);
    },
    rc2() {
        console.log(this.userName);
    }
}

user.rc2(); // prints Anupam. (`this` in normal fn. points to parent object).
user.rc1(); // undefined(`this` in arrow fn. points to global object).