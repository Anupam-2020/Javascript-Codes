// var tweet = prompt('Enter message');
// alert(tweet.slice(0,4));
// alert(tweet.length);


// alert(prompt('Enter message').slice(0,10).toUpperCase());


//T.1..... To take value from user and print the value with 1st letter uppercased.
// var name1 = prompt("Enter name");
// alert(`Hello ${name1.slice(0,1).toUpperCase()}${name1.slice(1,name1.length).toLowerCase()}`);


// T.2.... difference between x++ and ++x.
// let x = 5;
// y = ++x;
// alert(y)



// T.3.... To find the age left when subtracted with 90. The required age should be in months, days, weeks......................

// function lifeInWeeks(age) {
//         var years = 90 - age;
//         var months = Math.floor(years*12);
//         var weeks = Math.floor(years*52);
//         var days = Math.floor(years*365);
//         console.log(`You have ${days} days, ${weeks} weeks, ${months} months left.`)
// }

// lifeInWeeks(56)



// T.4..... To calculate BMI.........................................................................................................
// const bmiCalculator = (weight, height) => Math.round(weight/height**2);

// console.log(bmiCalculator(65, 1.8));


// t.5..... To calculate leap year............................................................
// function isLeap(year) {  
//     if(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0) ) {
//         return `Leap year.`
//     }
//     return `Not leap year.`
// }

// console.log(isLeap(1900));


// T.6..... Array methods......................................................................................
// var names = ['Anupam', 'Anand', 'Anurag'];
// names.includes('Anand')


// var output = [];
// output.push(1);
// output[1] = 'Anupam'
// output[3] = 'Anand'
// console.log(output.length)


// T.7..... FizzBuzz game................................................................................................
// var output = [];
// var count = 1;

// function fizzBuzz() {
//     while (count <= 100) {
//         if ((count % 5 === 0) && (count % 3 === 0)) {
//             output.push('FizzBuzz');
//         }

//         else if (count % 5 === 0) {
//             output.push('Buzz');
//         }
//         else if (count % 3 === 0) {
//             output.push('fizz');
//         }
//         else {
//             output.push(count);
//         }

//         count++;
//     }
//     console.log(output);
// }



// T.8.... Take names array as input and print the below required line..........................................................................

// function whosPaying(names) {
//     let lengthArray = names.length;
//     let arrayPosition = Math.floor(Math.random() * lengthArray);
//     console.log(`${names[arrayPosition]} is going to buy lunch today!`);
// }


// t.9..... While loop....................................................................................................................

// var count = 10;

// function repeatSentenses() {
//     while(count >= 0) {
//         if(count === 0) {
//             console.log(`Nomore bottles of beer on wall, nomore bottles of beer.go to the store and buy some more, 99 bottles of beer on the wall.`)
//         }
//         else if(count === 1) {
//             console.log(`${count} bottles of beer on wall, ${count} bottles of beer.Take one down and pass it around, Nomore bottles of beer on wall.`);
//         }
//         else {
//             console.log(`${count} bottles of beer on wall, ${count} bottles of beer.Take one down and pass it around, ${count - 1} bottles of beer on the wall.`);
//         }

//         count--;
//     }
// }


// T.10..... Fibbonacci series.............................................................................................................


// M-1..... Using variables.............

// function fibonacci(n) {
//     let value1 = 0;
//     let value2 = 1;
//     let value3 = 1;
//     console.log(value1)
//     console.log(value2)
//     console.log(value3)

//     for(let i=4; i<=n; i++) {
//         value1 = value2;
//         value2 = value3;
//         value3 = value1 + value2;
//         console.log(value3);
//     }
// }

// M-2..... Using array to store fibonacci values.........

// function fibonacciArray(n) {
//     let fibArray = [];
//     let fibArray0 = [0];
//     fibArray.push(0);
//     fibArray.push(1);
//     if (n === 1) {
//         return fibArray0;
//     }

//     else {
//         for (let i = 0; i < n - 2; i++) {
//                 fibArray[i + 2] = fibArray[i] + fibArray[i + 1];
//         }
//         return fibArray;
//     }
// }




// ......................................................................................................................
// var x = 5;
// console.log(x);


// switch case

// var x = 5;

// switch(x) {
//     case 1: 
//     console.log(x + ' is odd');
//     break;
//     case 2: 
//     console.log(x + ' is even');
//     break;
//     default : console.log("Default");
//     break;
// }


// function count(x) {
//     var numbers = [];
//     if (x % 2 === 0) { // TODO check that x is even
//       for (let i = 0; i < x; i+=2) { // TODO assign i to 0; give i the limit of x; and increment by 2
//         numbers.push(i);
//       }
//     } else {
//       for (let i = 1; i < x; i+=2) { // TODO assign i to 1; give i the limit of x; and increment by 2
//         numbers.push(i);
//       }
//     }
//     return numbers;
// }

// console.log(count(11));


// spread operator................................................
// let a = [20, 30, 40];
// let b = [10, ...a, 50];


// function collect(...a) {
//   console.log(a);
// }

// collect(1,2,3,4,"Anupam");

// destructuring on arrays and objects....................................................
// let animals = ["Anupam","Anurag","Rahul","Akash"];
// let [S1,S2] = animals;
// console.log(S1, S2);


// let employee = {name: "Anupam", exp: 1}
// let name, exp;
// ({name, exp} = employee);
// console.log(name, exp);


// arrow function.......................................................................
// let values = [10,20,30,6,7,80,3,4];


// let divisibleByTen = values.filter((n) => {
//   return  n%10===0
// });

// let doubled = values.map((n) => {
//   return n*2;
// })

// Helper methods on String..................................................................
// let c = `wooh${'oo'.repeat(50)}`;

// let searchValue = "Anupam".startsWith('Anupam');
// console.log('Anupam'.includes('z'));

// classes..................................................................................
// class Animal{
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }
//   hello() {
//     return`Hi! I'm ${this.name}`;
//   }

//   static date() {   // function using static keyword
//     console.log(`2022-09-16`);
//   }
// }


// let king = new Animal('Lion',20);
// console.log(king.hello());
// // king.date
// console.log(Animal.date())


// class Lion extends Animal {
//   // constructor(name, age, color) {
//   //   super(name, age);
//   //   this.color = color;
//   // }
//   describe() {
//     return `Hello I'm ${this.name}`
//   }
// }

// let son = new Lion("Simba");
// console.log(son.describe())

// Prototypes...............................................................................
// function Wizard(name, house, pet) {
//   this.name = name
//   this.house = house
//   this.pet = pet
//   this.greet = () => `I'm ${this.name} from ${this.house}`;
// }

// Wizard.prototype.pet_name; // to create member variable of function.

// Wizard.prototype.info = function() {  // arrow fn is not supported
//   return `I've a pet ${this.pet} named ${this.pet_name}`
// }


// let harry = new Wizard("Harry Potter","Gryffindor","Owl");
// harry.pet_name = "HedWig";
// console.log(harry.info());

// DataStructure...............................................................................

// // M-1 of Set() initialization............
// let a = new Set();  // DataStructures are kind of prtotypes so, we initialise them using `new` keyword.
// a.add(34);
// a.add("Anupam");
// a.add({x:56, y:"Anand"});
// console.log(a);
// console.log(a.size);
// console.log(a.has(34));

// // M-2 of Set() initialization............
// let numbers = [3,4,56,7,8,90];
// let numSet = new Set(numbers); 
// console.log(numSet)

// // Enhanced `for loop` for taking out all elements from set.......................... 
// for(let element of numSet.values()) {
//   console.log(element);
// }

// // Removing duplicates from strings.......................
// let chars = 'egehyjndfjkhgioewhvbkljrwpghewkvnbrflv';
// let chars_arr = chars.split("");
// console.log(`array length -> ${chars_arr.length}`);
// let char_set = new Set(chars_arr);
// console.log(char_set);
// console.log(`set length -> ${char_set.size}`)


// // Map...........................................................................................................
// let a = new Map();
// let key_1 = "string key";
// let key_2 = {a: "key"};
// let key_3 = function(){};

// a.set(key_1, "My Name is Anupam Anand");
// a.set(key_2, "This is an object key");
// a.set(key_3, "Return value for a function");
// console.log(a);


// // Array inside Map....................................................
// let numArr_1 = [[1,2]];
// let numArr_2 = [[1]];  
// let numArr_3 = [[1,'one'],[2,'two'],[3,'three']];
// let valMap = new Map(numArr_3);
// console.log(valMap);


// // Enhanced `for loop` for iterating through Map........................
// for(let [key, value] of valMap.entries()) {
//   console.log(`${key} => ${value}`);
// }


// let string = "safregrelvjprjkgbergvdvb wrliohfgev";
// let stringMap = new Map();

// for(i = 0;i< string.length;i++) {
//   let letter = string[i];
//   if(!stringMap.has(letter)) {
//     stringMap.set(letter,1);
//   }
//   else {
//     stringMap.set(letter, stringMap.get(letter)+1);
//   }  
// }

// console.log(stringMap);
// console.log(stringMap.get("v"));


// closures.......................................................................................................
// let call = () => {
//   let secret = "Sorry! No secret";
//   let reveal = () => {
//     console.log(secret);
//   }
//   // return reveal;
//   reveal();
// }

// call();
// // let unveil = call();
// // unveil();


// Function Factories......................................................................................................
// Example - 1......................................
// let addSuffix = (x) => {
//   const concat = (y) => {
//     return y + x;
//   }
//   return concat;
// }

// // Method -1 of calling function factories...............................
// let add_ness = addSuffix("ness");
// console.log(add_ness);
// let add_happi = add_ness("happi");
// console.log(add_happi);

// // Method - 2 of calling function factories..............................
// let add_word = addSuffix("ness")("happi");
// console.log(add_word)


// // Example - 2...........................................................
// const product = (x) => {
//    return (y) => { 
//     return y * x 
//   }
// };

// // Method -1 of calling function factories...............................
// let value_1 = product(5);
// let value = value_1(7);
// console.log(value);


// // Method -2 of calling function factories...............................
// let value_2 = product(3)(4);
// console.log(value_2);

// Private Methods..................................................................................................................
// const budget = () => {
//     let balance = 0;
//     let changeBal = (val) => {
//         return balance += val;
//     }

//     let deposit20 = () => {
//         return changeBal(20);
//     }

//     let withdraw20 = () => changeBal(-20);

//     let check = () => balance;
//     // return {  // M-1 to return..............
//     //     depositBal: deposit20,
//     //     withdrawBal: withdraw,
//     //     checkBal: check
//     // }

//     // M-2 to return without key........................
//     return { deposit20, withdraw20, check }
// }


// Below codes for M-1 to return......................
// let wallet = budget();
// console.log(wallet);
// wallet.depositBal();
// // wallet.withdrawBal();
// console.log(wallet.checkBal());
// console.log(wallet.balance);
// console.log(wallet.checkBal());


// Below codes for M-2 to return......................
// let wallet  = budget();
// wallet.deposit20();
// wallet.withdraw20();
// wallet.deposit20();
// console.log(wallet.check());



// Generators...........................................................................................................................
// function* letterMaker() {  // Basic generator
//     yield 'a';
//     yield 'b';
//     yield 'c';
// }

// let letterGen = letterMaker();
// console.log(letterGen.next().value);
// console.log(letterGen.next().value);
// console.log(letterGen.next().value);
// console.log(letterGen.next().value);


// function* countMaker() {  // Example 2...........................................................
//     let count = 0;
//     while(count < 4) {
//         yield count += 1;
//     }
// }

// let countGen = countMaker();
// console.log(countGen.next().value);



// function* letterMaker2() { // Example 3...........................................................
//     yield 'x';
//     yield 'y';
//     yield 'z';
// }


// let letGen = letterMaker2()
// let i = 0;
// while(i<4) {
//     console.log(letGen.next().value);
//     i+=1;
// }


// Generators vs iterators............................................................................................................


// const arrayIterator = (array) => { // Iterator function..........................
//     let count = 0;
//     return {
//         next: () => {
//             if(count < array.length) {
//                 let next = array[count];
//                 count += 1;
//                 return next;
//             }
//         }
//     }
// }

// let it = arrayIterator([1,2,3]);
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());


// function* arrayIterator() {  // Generator function.......................
//     // yield arguments // this returns array.

//     // for(let element of arguments) {  // this returns single value of array.
//     //     yield element;
//     // }

//     // yield* arguments; // This also returns single value of array.

// }

// let it = arrayIterator(1,2,3);
// console.log(it.next().value);


// Promises..............................................................................................................................
// let p = new Promise((resolve, reject) => {
//     // resolve("Resolved promise data");
//     // reject("Rejected promise data");
//     setTimeout(() => { resolve("Resolved Promise data") },3000);
// })

// p.then(Response => console.log(Response))  // For successful promise data.
//  .catch(error => console.log(error));  // For rejected data.

// console.log("after promise consumption");

// HTTP request.......................................................................................................
const root = 'https://jsonplaceholder.typicode.com/posts/1';
fetch(root,{method: "GET"})
    .then(function(Response) {
        console.log(Response);
        return Response.json()
    })
    .then(function(json) { console.log(json)});
