// operations on strings...
// 1. trim()
// 2. toUpperCase()
// 3. toLowerCase()
// 4. slice()

// primitive data types -> 
// 1. string
// 2. number 
// 3. boolean
// 4. undefined
// 5. null
// 6. BigInt
// 7. Symbol

// non-premitive or reference data-types -> 
// Arrays
// Objects
// Functions


// localCompare -> returns 0 if string value is same else if returns 1 if string value in localCompare is lexicographically smaller else return 1.
var str1 = new String("This is beautiful string");
var index = str1.localeCompare("utiful string");
console.log("Result :"+index)


let a = 4.5;
console.log(typeof a);

let age  = 25;
// converting number to string.
// M-1
age = age + "";
// M-2
age = String(age);
console.log(typeof age);

// converting string to number.
// M-1
let str = +age;
// M-2
str = Number(age);
console.log(typeof str);

str = "anupam";
console.log([...str]); // output -> ['a', 'n', 'u', 'p', 'a', 'm']

// BigInt
let myNumber = BigInt(123);
let sndNumber = 123n;
console.log(myNumber + sndNumber);
console.log(Number.MAX_SAFE_INTEGER);

// comparison operator
// == vs ===
// == only checks the value and not the data type...
// === checks both values as well as data type....


let val1 = new String("Anupam"); // This is a string object. 
let val2 = new String("Anupam"); 
console.log(val1 === val2); // return false... Both are different...


let val3 = "Anupam"; // This is called string literal(Simple primitive data-type).
let val4 = "Anupam";
console.log(val3 === val4); // returns true... Both points to same string-value...