// var obj = {
//     name: "Anupam"
// }

// function sayHello(age, prof) {
//     return "Hello," + " " + this.name + " is " + age + " years old and is an " + prof;
// }

// console.log(sayHello.call(obj, 27, "engineer"));
// console.log(sayHello.apply(obj, [24, "engineer"]));

// let bindFunc = sayHello.bind(obj);
// console.log(bindFunc(24, "software engineer"));
// console.log(bindFunc(33, "doctor"));



// Q1.................................................................................
// const age = 20;
// var person = {
//     name: "Anupam",
//     age: 22,
//     getAge() {
//         return this.age +" "+ arguments[0] + " " + arguments[1];
//     }
// }

// var person2 = {age: 20}
// console.log(person.getAge.call(person2, 'basket ball', 'US')); // age will be 20.
// console.log(person.getAge.apply(person2, ['cricket', 'india']))

// let bindFunc = person.getAge.bind(person2);
// console.log(bindFunc('football', 'UK'));


// Q2.................................................................................
// var status = "😄";

// setTimeout(() => {
//     const status = "😍";
//     const data = {
//         status: "◀️",
//         getStatus: function() {
//             return this.status
//         }
//     }
//     console.log(data.getStatus());
//     console.log(data.getStatus.call(this)); // this will refer global object. we get output as '😄' instead of '😍'.
// }, 0)


// Q3.................................................................................
// let animals = [
//     {species: "Lion", name: "King"},
//     {species: "Queen", name: "Whale"}
// ];

// function printAnimals(i) {
//     this.print = function() {
//         console.log("#" + i + " " + this.species+" : "+this.name);
//     };
//     this.print();
// }

// for(let i = 1; i <= animals.length; i++) {
//     printAnimals.call(animals[i-1], i)
// }


// Q4.................................................................................
// const array = ["a", "b"];
// const elements = [0, 1, 2];
// let array2 = [5,6,7];
// array.push.apply(array2, elements); // push.apply() accepts 2 parameters - 1-> the array in which we want to push elements. 2-> the array/elements which needs to be pushed in the array. 
// console.log(array);

// Q5.................................................................................
const elements = [0, 1, 2];
console.log(Math.max.apply(null, elements));