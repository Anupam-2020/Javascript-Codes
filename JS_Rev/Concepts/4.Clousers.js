// clousers.........................................
function makeFunc() {
    var name = "Anupam";
    function displayName() {
        console.log(name);
    }
    return displayName;
}


// let myFunc = makeFunc();
// myFunc();

// makeFunc()();


// Closure Scope Chain
// var e = 10;
// function sum() {
//     return function(a) {
//         return function(b) {
//             return function(c) {
//                 return function(d) {
//                     return a + b + c + d + e;
//                 }
//             }
//         }
//     }
// }


// console.log(sum()(1)(2)(3)(4));


// ................................Questions on clousers................................

// Q1.
// let count = 0;
// (function printName() {
//     if(count === 0) {
//         let count = 1; // shadowing
//         console.log(count);
//     }
//     console.log(count);
// })(); // o/p -> 1 0


// Q2. 
// function createBase(a) {
//     return function(b) {
//         console.log(a + b);
        
//     }
// }

// let addSix = createBase(6);
// addSix(10);
// addSix(21);

// Q3.
// function findIteger() {
//     let arr = [];
//     for(let i = 0; i < 10000000; i++) {
//         arr[i] = i;
//     }
    
//     return (ind) => {
//         console.log(arr[ind]);
//     }
// }

// let value = findIteger();
// console.time("1st");
// value(10);
// console.timeEnd("1st");


// Q4.
// function a() {
//     for(var i = 0; i < 3; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, i)
//     }
// }

// a();


// Q5.
// for(var i = 0; i < 3; i++) {
//     function log(i) {
//         setTimeout(() => {
//             console.log(i);
//         }, i)
//     }

//     log(i);
// }


// Q6.
// creating private variables.

function privateCounter() {
    let _counter = 10;
    function add(val) {
        _counter = val + _counter;
    }

    function retrive() {
        console.log(_counter);
    }

    return {
        add,
        retrive
    }
}


let c = privateCounter();

c.add(5);
c.retrive()



// Q7. // module pattern.
let modules = (function() {
    function private() {
        console.log("Private fn.");
    }

    return {
        public: function() {
            console.log("Public Fn.");
            private();
        }
    }
})();

modules.public();

// Q8.
function getCounter() {
    let count = 0;
    return () => {
        if(count > 0) {
            console.log("Already incremented");
            return;
        }
        console.log("Counter incremented.");
        count++;
    }
}


let count = getCounter();
count();
count();


// Q9. 
// once fn. polyfill.
function once(func, context) {
    let ran;
    return function() {
        if(func) {
            ran = func.apply(context || this, arguments);
            func = null;
        }
        return ran;
    }
}

let hello = once((a, b) => console.log("Hello World", a, b));
hello(1,2);
hello(3,4);
hello(5,6);


// Q10. 
// Implement caching/memoization in js.
function myMemoize(fn, context) {
    let res = {};
    return function(...args) {
        var argCache = JSON.stringify(args);
        if(!res[argCache]) {
            res[argCache] = fn.call(context || this, ...args);
        }
        return res[argCache]
    }
}


function clumsyMultipilcation(num1, num2) {
    for(let i = 0; i < 100000000; i++) {}
    return num1 * num2;
}


let memoisedRes = myMemoize(clumsyMultipilcation);

console.time("1st")
console.log(
 memoisedRes(123, 456));
console.timeEnd("1st")


console.time("1st")
console.log(
 memoisedRes(123, 456));
console.timeEnd("1st")