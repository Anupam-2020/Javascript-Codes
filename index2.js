// proxy................................................................................
// let obj = {
//     name: "Anupam",
//     age: 27
// }

// let proxy = new Proxy(obj, {
//     get: function(targetObj, property) {
//         console.log("Inside get method");
//         return targetObj[property];
//     },
//     set: function(targetObj, property, value) {
//         console.log("Inside set method");
//         targetObj[property] = value;
//     }
// })

// console.log(proxy.name);
// proxy.name = "Rahul";
// console.log(proxy);

// reduce polyfill........................................................................
// let arr = [1,2,3,4,5,6,7,8,9,10];

// Array.prototype.myReduce = function(callback, initialValue) {
//     if(!Array.isArray(this)) {
//         throw new Error("Not an array");
//     }

//     let accumulator = initialValue;

//     for(let i = 0; i < this.length; i++) {
//         accumulator = accumulator ? callback(accumulator, this[i], i, this) : this[i];
//     }

//     return accumulator;
// }

// console.log(arr.myReduce((accu, curr) => {
//     return accu + curr;
// }, 0));

// custom-composition................................................................................
// const add = (x) => {
//     return x + 10;
// }

// const sub = (x) => {
//     return x - 10;
// }

// const mul = (x) => {
//     return x * 5;
// }

// const customComposeFn = (...func) => {
//     return function(x) {
//         return func.reduce((value, fun) => {
//             return fun(value)
//         }, x)
//     }
// }

// let result = customComposeFn(add, mul, sub)(5);
// console.log(result);

// infinite currying..........................................................................
// function add(x) {
//     return function(y) {
//         return y ? add(x+y) : x;
//     }
// }

// console.log(add(5)(4)(3)(4)());

// memoization................................................................................
// function myMemoization(callback, context) {
//     let res = {};
//     return function(...args) {
//         let str = args.join("");
//         if(!res[str]) {
//             res[str] = callback.call(context || this, ...args)
//         }
//         return res[str];
//     }
// }

// function longRunning(num1, num2) {
//     for(let i = 0; i < 10000000; i++) {}

//     return num1 + num2;
// }

// const res = myMemoization(longRunning)(3,4);

// console.time("first")
// console.log(res);
// console.timeEnd("first")

// console.time("sec")
// console.log(res);
// console.timeEnd("sec")

// calculate................................................................................
// const calc = {
//     total: 0,
//     add: function(x) {
//         this.total+=x;
//         return this
//     },
//     multiply(x) {
//         this.total*=x;
//         return this
//     },
//     sub(x) {
//         this.total-=x;
//         return this
//     }
// }

// console.log(calc.add(10).multiply(20).sub(20).add(12).total)

// produce and consume promise...........................................................................
// function ProducePromise() {
//     return new Promise((res, rej) => {
//         res("Resolved");
//     })
// }

// (async function consumePromise() {
//     const data = await ProducePromise();
//     console.log(data);
// })();


// flat polyfill...........................................................................
// let arr = [1,2,3,[4,5,6],[3,4],[8,1,2], [2,[4,[5,6]]]];

// Array.prototype.myFlat = function(depth) {
//     if(!Array.isArray(this)) {
//         throw new Error("Not a array");
//     }

//     function flattenArr(arr, depth) {
//         if(depth === 0) return arr;
//         let temp = [].concat(...arr);
//         return flattenArr(temp, depth-1);
//     }

//     return flattenArr(this, depth);
// }

// let arr2 = arr.myFlat(1);
// console.log(arr2);

// filter polyfill...........................................................................
// let arr = [1,2,3,4,5,6,7,8,9,10];

// Array.prototype.myFilter = function(callback) {
//     let temp = [];
//     for(let i = 0; i < this.length; i++) {
//         if(callback(this[i], i, this)) {
//             temp.push(this[i]);
//         }
//     }
//     return temp;
// }

// let filteredArray = arr.myFilter((data, index) => {
//     return data % 2 === 0;
// })

// console.log(filteredArray);

// call ...........................................................................
// let obj = {
//     name: "Anupam",
//     age: 19
// }

// Function.prototype.myCall = function(context, ...args) {
//     if(typeof this !== 'function') {
//         throw new Error("Not a function");
//     }

//     context.fun = this;
//     // context.fun(...args);
//     return function(...newArgs) {
//         context.fun(...args, ...newArgs);
//     }
// }

// function getData(hobby) {
//     console.log(`${this.name} is ${this.age} years old and likes ${hobby}`);
// }

// let daya = getData.myCall(obj);
// daya("Cricket")


// promise chaining ...........................................................................
// function promise2() {
//     return new Promise((res, rej) => {
//         res("Resolved");
//     })
// }

// promise2().then(res => {
//     console.log(res);
//     return new Promise((res, rej) => res("Data Received"))
// })
// .then(res => {
//     console.log(res);
//     return Promise.reject("Rejected");
// })
// .catch((err) => console.log(err))

// promise.all polyfill...........................................................................
// function myPromiseAll(promises) {
//     let result = [];
//     return new Promise((res, rej) => {
//         promises.forEach((promise, index) => {
//             promise.then(res => {
//                 result.push(res);
//                 if(index === promises.length) {
//                     res(result);
//                 }
//             }).catch(err => rej(err))
//         })
//     })
// }

// function promise2() {
//     return new Promise((res, rej) => {
//         res("Resolved");
//     })
// }

// const promiseArr = myPromiseAll([
//     promise2(),
//     Promise.resolve("Resolved 2"),
//     Promise.reject("Rejected")
// ]).then(res => console.log(res))
// .catch(err => console.log(err))




// object.keys
// let obj = {
//     name: "Anupam",
//     age: 26,
//     qual: "B.tech"
// }

// let arr = Object.values(obj);
// console.log(arr);

// let obj2 = {};
// Object.assign(obj2, obj);
// console.log(obj2);
// Object.freeze(obj2);
// delete obj2.name;
// console.log(obj2);
// console.log(obj);
// console.log(typeof NaN); // number
// console.log(typeof typeof undefined);

// let str = "My name is anupam";

// let  str2 = str.split(" ").sort((a,b) => a.length - b.length);
// let str3 = str.split(" ").reduce((prev, curr) => {
//     return prev.length <= curr.length ? prev : curr}, str.split(" ")[0])
// console.log(str2[0]);
// console.log(str3);

// let arr = [1,2,3,[4,5,6],[3,4],[8,1,2], [2,[4,[5,6]]]];

// Array.prototype.myFlat = function(depth) {
//     if(!Array.isArray(this)) throw new Error("This is not array");

//     function flatten(arr, depth) {
//         if(depth === 0) return arr;
//         let res = new Array().concat(...arr);
//         return flatten(res, depth-1);
//     }

//     return flatten(this, depth);
// }

// let res = arr.myFlat(0);
// console.log(res);

// let a = 3;
// let b = new Number(3);
// let c = 3;

// console.log(a == b);
// console.log(a === b);
// console.log(b === c);


// let a = {
//     flag: 1,
//     toString: function() {
//         console.log(this.flag);
//         return this.flag++;
//     }
// }

// if(a == 1 && a == 2 && a == 3) {
//     console.log("True");
// }

// var findDuplicate = function(nums) {
//     let slow = nums[0];
//     let fast = nums[0];
//     while(true) {
//         slow = nums[slow];
//         fast = nums[nums[fast]];
//         if(slow === fast) break;
//     }

//     fast = nums[0];

//     while(slow !== fast) {
//         slow = nums[slow];
//         fast = nums[fast]
//     }
//     return slow;
// };

// console.log(findDuplicate([2,5,9,6,9,3,8,9,7,1]));


// var findDuplicates = function(nums) {
//     const result = []
 
//     for(let i=0; i<nums.length; i++){
//      const idx = Math.abs(nums[i]) - 1
//      const val = nums[idx]
 
//      if(val < 0){
//          result.push(Math.abs(nums[i]))
//      }else {
//          nums[idx] = -nums[idx]
//      }
//     }
//     return result
// };

// console.log(findDuplicates([4,3,2,7,8,2,3,1]));

// var firstMissingPositive = function(nums) {
//     let missing = Number.MAX_VALUE;
//     for(let i = 0; i < nums.length; i++) {
//         if(nums[i] >= 0 && nums[i] <= missing) {
//             missing = nums[i];
//         }
//     }
//     while(true) {
//         let flag = 0;
//         for(let i = 0; i < nums.length; i++) {
//             if(missing === nums[i]) {
//                 flag = 1;
//                 missing++;
//                 break;
//             }
//         }
//         if(flag === 0) return missing;
//     }
// };

// console.log(firstMissingPositive([3,4,-1,1]));

var maxSubarrayLength = function(nums, k) {
    if(k < 1) return 0;
    let map = new Map();
    let count = 0;
    let maxCount = 0;
    let j = 0;
    for(let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        // if(map.get(nums[i]) >= k) {
            while(map.get(nums[i]) > k) {
                map.set(nums[j], map.get(nums[j]) - 1);
                // count-= 1;
                j++;
            }
        // }
        // map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        // count++;
        count = i - j + 1;
         if(maxCount < count) {
            maxCount = count;
        }
    }
    return maxCount;
};

// console.log(maxSubarrayLength([3,1,1], 1));

function print2largest(arr,n){
    let max = Number.MIN_VALUE;
    let secMax = max;
    for(let i = 0; i < n; i++) {
        if(max < arr[i]) {
            max = arr[i];
        }
        
        if(secMax < arr[i] && secMax < max && arr[i] !== max) {
            secMax = arr[i];
        }
    }
    return secMax;
}

// console.log(print2largest([28 ,43 ,26 ,65 ,60 ,54 ,51 ,35 ,42 ,48 ,33 ,40 ,58 ,38 ,64 ,47, 44 ,49 ,46 ,25 ,57 ,39 ,55 ,45 ,29 ,32 ,61 ,53 ,31 ,36 ,56 ,63 ,30 ,52 ,27 ,34 ,50 ,41 ,37 ,66 ,62 ,59], 42));


(async function getData() {
    let BASE_URL = "https://timeapi.io/api/Time/current/zone"
    let TIME_ZONE = "Asia/Kolkata"
    let data = await fetch(`${BASE_URL}?timeZone=${TIME_ZONE}`);
    let response = await data.json();
    console.log(response.hour, response.minute);
})();