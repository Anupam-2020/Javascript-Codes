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
// const add = (a,b) => {
//     return a + b;
// }
// const mul = (a, b) => {
//     return a * b;
// }

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


// #######################################################################################################################

// Q19 ----------------------------------------------------------------
// let obj1 = {
//     name: "Anupam",
//     age: 24
// }

// let proxyObj1 = new Proxy(obj1, {
//     get: function(targetObj, property) {
//         console.log("Get method is called");
//         return targetObj[property]
//     },

//     set: function(targetObj, property, value) {
//         console.log("Set method is triggered");
//         targetObj[property] = value;
//     }
// })

// console.log(proxyObj1.name);
// proxyObj1.name = "Anurag";
// console.log(proxyObj1.name);

// Q20 ----------------------------------------------------------------
// let arr = [1,2,3,4,5,6,7,8,9,10];

// Array.prototype.myReduce = function(callback, initialValue) {
//     let accumulator = initialValue;
//     for(let i = 0;i < this.length; i++) {
//         accumulator = accumulator ? callback(accumulator, this[i], i, this) : this[i];
//     }
//     return accumulator;
// }

// let res = arr.myReduce((prev, curr) => {
//     return prev + curr;
// }, 0)

// console.log(res);


// Q21 ----------------------------------------------------------------
// function add1(x) {
//     return x + 10;
// }

// function mul1(x) {
//     return x * 3;
// }

// function sub(x) {
//     return x - 10;
// }

// const customComposeFn = (...fun) => {
//     return function(x) {
//         return fun.reduce((r, f) => {
//             return f(r)
//         }, x)
//     }
// }


// // const customComposeFn1 = (...fun) => (x) => fun.reduce((r,f) => f(r), x)

// console.log(customComposeFn(add1, mul1, sub)(5));

// Q22 ----------------------------------------------------------------
// function add1(x) {
//     return function(y) {
//         if(y) return add1(x+y)
//         else return x;
//     }
// }

// console.log(add1(2)(5)(6)(3)(1)(8)());


// Q23 ----------------------------------------------------------------
// function myMemoize(callback, context) {
//     let res = {};
//     return function(...args) {
//         let argsCache = args.join("");
//         // console.log(argsCache);
//         if(!res[argsCache]) {
//             res[argsCache] = callback.call(context || this, ...args);
//         }
//         return res[argsCache];
//     }
// }

// const runDatabase = (num1, num2) => {
//     for(let i = 0; i < 10000000; i++){}
//     return num1 * num2;
// }

// const res = myMemoize(runDatabase);
// console.time("first");
// console.log(res(2,3));
// console.timeEnd("first");

// console.time("sec");
// console.log(res(2,3));
// console.timeEnd("sec");

// console.time("sec1");
// console.log(res(2,6));
// console.timeEnd("sec1");

// Q24 ----------------------------------------------------------------
// let calculate = {
//     total: 0,
//     add: function(x) {
//         this.total += x;
//         return this
//     },
//     multiply: function(x) {
//         this.total *= x;
//         return this
//     },
//     subtract: function(x) {
//         this.total -= x;
//         return this
//     },
//     divide: function(x) {
//         this.total /= x;
//         return this
//     }
// }

// let result = calculate.add(2).multiply(10).divide(2).add(5).subtract(5).total
// console.log(result);


// Q25 ----------------------------------------------------------------
// const data = new Promise((res, rej) => {
//     res("Food is ready.")
// })

// async function asyncFunc() {
//     try {
//         const value = await data;
//         console.log("try: ", value);
//     } catch (error) {
//         console.log("catch: ",error);
//     }
// }

// asyncFunc();

// Q26 ----------------------------------------------------------------
// console.log(undefined== null); // true.
// console.log(undefined === null); // false.

// Q27 ----------------------------------------------------------------
// function addFive(x) {
//     return x + 5;
// }

// function subtractTwo(x) {
//     return x - 2;
// }

// function multiplyThree(x) {
//     return x * 3;
// }

// function composeFn(...funArgs) {
//     return function(x) {
//         return funArgs.reduceRight((value, fun) => {
//             return fun(value);
//         }, x)
//     }
// }

// let calc = composeFn(addFive, subtractTwo, multiplyThree);
// console.log(calc(3));


// 28 ----------------------------------------------------------------
// let arr = [1,2,3,[4,5,6],[3,4],[8,1,2], [2,[4,[5,6]]]];

// Array.prototype.myFlat = function(depth) {
//     if(!Array.isArray(this)) throw new Error("Not an array");

//     function flatArr(arr, depth) {
//         if(depth === 0) {
//             return arr;
//         }
//         let res = [].concat(...arr);
//         return flatArr(res, depth-1);
//     }
//     return flatArr(this, depth);
// }

// let flattenedList = arr.myFlat(3);


// 29 ----------------------------------------------------------------
// Array.prototype.myFind = function(callback) {
//     if(!Array.isArray(this)) throw new Error("Not an array");

//     for(let i = 0; i < this.length; i++) {
//         if(callback(this[i], i, this)) {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(flattenedList.myFind((item, index, flattenedList) => {
//     return item === 18;
// }));


// 30 ----------------------------------------------------------------
// Array.prototype.myFilter = function(callback) {
//     if(!Array.isArray(this)) throw new Error("Not an array");

//     let temp = [];
//     for(let i = 0; i < this.length; i++) {
//         if(callback(this[i], i, this)) {
//             temp.push(this[i])
//         }
//     }
//     return temp;
// }

// console.log(flattenedList.myFilter((item, index) => item % 2 === 0));


// 31 ----------------------------------------------------------------
// Array.prototype.myReduce = function(callback, initialValue) {
//     if(!Array.isArray(this)) throw new Error("Not an array");

//     let temp = initialValue;
//     for(let i = 0; i < this.length; i++) {
//         if(temp) {
//             temp = callback(temp, this[i], i, this);
//         } else {
//             temp = this[i];
//         }
//     }
//     return temp;
// }

// console.log(flattenedList.myReduce((pre, curr) => {
//     return curr + pre
// }, 0));


// Q32 ----------------------------------------------------------------
// let para = document.createElement('p');
// para.setAttribute('id', 'name');


// document.querySelector('input').addEventListener('keydown', (e) => {
//     para.innerHTML = e.target.value; 
// })

// document.body.appendChild(para);

// Q33 ----------------------------------------------------------------
// console.log("a"+3-2);

// Q34 ----------------------------------------------------------------
// console.log(x);
// {
//     var x = 2;
//     {
//         let x = 5;
//     }
//     console.log(x);
// }

// Q35 ----------------------------------------------------------------
// function test() {
//     var a = b = 5;
// }
// test();
// console.log(a);
// console.log(b);

// Q36 ----------------------------------------------------------------
// const arr = ["apple", "orange", "banana", "kiwi", "pair"];

// let shortest = arr.sort((a,b) => a.length - b.length);
// console.log(shortest[0]);

// let shortest = arr.reduce((prev, curr) => {
//     return curr.length <= prev.length ? curr : prev
// }, arr[0])

// console.log(shortest);


// Q37 ----------------------------------------------------------------
// greet("john");

// var greet = (name) => {
//     console.log("Hello "+name);
// }

// function greet(name) {
//     console.log("Hello "+name);
// }

// greet("john");


// Q38 (Console log questions)----------------------------------------------------------------
// console.log(0/0); // NaN
// console.log('3'*'2');
// console.log(!'false');
// console.log(''+1+2);
// console.log([] == 0);


// Q39 ----------------------------------------------------------------
// const obj = {a: '🍎'};
// ({x: obj['a']} = {x: '🍊'});
// console.log(obj);


// var length = 20;
// function count() {
//     console.log(this.length);
// }

// const data = [count, "A", 0, 7];
// data[0]("Hey") // Here we're calling count-fn, `this` used in count-fn will take `data-array`...