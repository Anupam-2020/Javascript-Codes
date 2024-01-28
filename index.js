if("ANC" === "ANaC") {
    console.log("Yes");
} else {
    console.log("No");
}

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
let a = (add(2,2), mul(2,4)); // the 2nd will be added to a variable...
console.log(a);