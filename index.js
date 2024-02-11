// if("ANC" === "ANaC") {
//     console.log("Yes");
// } else {
//     console.log("No");
// }

// Q1 -----------------------------------------------------------------
// let str = "Anupam Anand";
// let obj = {};
// for(let i of str) {
//     obj[i] = obj[i] ? obj[i]+=1 : 1;
// }

// console.log(obj); // Output -> { A: 2, n: 3, u: 1, p: 1, a: 2, m: 1, ' ': 1, d: 1 }


// Q2 -----------------------------------------------------------------
// let message = "MESSAGE";

// function getInfo() {
//     console.log(message);
//     let message = "ANUPAM";
// }

// getInfo(); // throws error(Because let/const goes in temporal dead zone whereas var will give undefined).


// Q3
// const arr = [1,2,3,4,5];
// arr.length = 0;
// // arr.splice(0, arr.length);
// console.log(arr);


// Q4 -----------------------------------------------------------------
// function check() {
//     throw Error("Params required");
// }

// function show(name = check()) {
//     console.log(name);
// }

// show("Anupam");


// Q5 -----------------------------------------------------------------
// const obj = {
//     val: 1,
//     // get a() { // get is inbuilt where we don't need to apply parenthesis to call a, we can simply call using obj.a...
//     //     return this.val++;
//     // }
//     a: function() { // whereas in this case we need to write obj.a()
//         return this.val++;
//     }
// };

// console.log(obj.a());
// console.log(obj.a());
// console.log(obj.a());


// Q6 -----------------------------------------------------------------
// const arr = new Array(10);
// arr.fill(10);
// console.log(arr);

// Q7 -----------------------------------------------------------------
const add = (a,b) => {
    return a + b;
}
const mul = (a, b) => {
    return a * b;
}

// let a = (add(2,2), mul(2,4)); // the 2nd will be added to a variable...
// console.log(a);


// Q8 -----------------------------------------------------------------
// function abs(){
//     let z = 20;
//     let z1 = 23;
//     z2 = 34;
//     console.log(z, z1);
// }

// abs();

// console.log(z2);
// console.log(z);

// Q9 -----------------------------------------------------------------
// console.log(0123); // 0 before any number gets converted to octal and gives error.


// Q10 -----------------------------------------------------------------
// xyz(); // gives undefined.

// var x = 20;
// function xyz() {
//     console.log(x);
// }

// xyz(); // gives 20 as optput.

// Q11. -----------------------------------------------------------------
// xyz(); // gives undefined.
// var x = 20;
// function xyz() {
//     console.log(x);
//     x = 30;
// }

// xyz(); // gives undefined.

// Q12 -----------------------------------------------------------------
// Example of closure...
// function closures() {
//     let count = 0;
//     return () => {
//         // console.log(count++);
//         return count++;
//     }
// }

// let x = closures();
// console.log( x());
// console.log( x());
// console.log( x());

// Q13 ----------------------------------------------------------------
// for(var i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 0)
// }

// for(var i = 0; i < 5; i++) {
//     (function(i){
//         setTimeout(() => {
//             console.log(i);
//         },0)
//     }(i))
// }

// for(let i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 0)
// }

// Q14 ----------------------------------------------------------------
// setTimeout(() => { // Macrotask Queue(Lower priority then Microtask)
//     console.log("Hello settimeout");
// })

// Promise.resolve().then(console.log("Hi")); // Microtask Queue(Higher priority)
// console.log("End"); // Synchronous.

// Output -> 
// 1st. Hi.... 
// 2nd. End.... 
// 3rd. Hello settimeout....

// Q15 ----------------------------------------------------------------
// async function foo() {
//     return "Hello World"
// }


// async function fooValue() {
//     let data = await foo();
//     console.log(data); // Here await waits for the data and when its execution is successful thenm only below code will run.
//     console.log("Hi");
//     console.log("Hello");
// }

// fooValue() // "Hello World", "Hi", "Hello".

// Q16 ----------------------------------------------------------------
// function foo() {
//     console.log("Hello");
// }

// const value = new foo();
// console.log(value); // it will return object -> foo {}

// Q17 ----------------------------------------------------------------
// let str = new String("Anupam");
// let str2 = new String("Anupam");
// console.log(str == str2); // false.


// Q18 ----------------------------------------------------------------
// arr1[5] = 6;
// let arr2 = arr1.map((i) => i)
// console.log(arr2);

// Q19 ----------------------------------------------------------------
let arr = [1,2,3,4,5,6,7,8,9,10];
// let del = arr.splice(8, 10)
// console.log(del);

Array.prototype.myFind = function(callback) {
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) return true;
    }
    return false;
}

let res = arr.myFind((a) => a === 18)
console.log(res);