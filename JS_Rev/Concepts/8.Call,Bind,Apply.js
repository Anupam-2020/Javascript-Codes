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
// const elements = [0, 1, 2];
// console.log(Math.max.apply(null, elements));

// Q6.................................................................................
const age = 10;
var person = {
  name: "Name1",
  age: 11,
  getAgeArrow: () => console.log(this.age),
  getAge: function () {
    console.log(this.age);
  },
};

var person2 = {
  age: 11,
};

// Polyfill for Call/ Bind and Apply Method.................................................................
person.getAge.call(person2);

let car1 = {
  color: "Blue",
  company: "Audi",
};

function purchaseCar(currency, price) {
  console.log(
    `I have purchased a ${this.color} ${this.company} car for ${currency}${price}`
  );
}

purchaseCar.call(car1, "Rs.", "2,00,00,000");

purchaseCar.apply(car1, ["Rs.", "4,30,00,000"]);

Function.prototype.myCall = function (context = {}, ...agrs) {
  if (typeof this !== "function") {
    throw new Error("This is not callable");
  }

  context.fn = this;
  context.fn(...agrs);
};


Function.prototype.myApply = function(context = {}, args = []) {
    if(typeof this !== "function") {
        throw new Error("This is not callable");
    }

    if(!Array.isArray(args)) {
        throw new Error("Args is not array");
    }

    context.fn = this;
    context.fn(...args);
}


Function.prototype.myBind = function(context = {}, ...args) {
    if(typeof this !== 'function') throw new Error("This is not a func.");
    context.fn = this;
    return function(...newArgs) {
        context.fn(...args, ...newArgs)
    }
}

purchaseCar.myCall(car1, "Rs.", "3,00,00,000");
purchaseCar.myApply(car1, ["$", "1,000,000"]);
let binds = purchaseCar.myBind(car1);
binds( "$", "19868757");