// this.a = 5;
// console.log(this);

// let user = {
//     name: "User1",
//     age: 11,
//     // details() {
//     //     console.log(this.name);
//     // }

//     // details: function() {
//     //     console.log(this.name);
//     // }


//     // details: { // this points to window object in this case. 
//     //     name: "User2",
//     //     nextedDetails: () => {
//     //         console.log(this.name);
//     //     }
//     // }

//     details() { // this will point to user in this case(Since it is inside normal fn).
//         let nestedDetails = () => console.log(this.name);
//         nestedDetails();
//     }
// }

// user.details();



// this in class/constructor...................................................
// class User {
//     constructor(n) {
//         this.name = n;
//     }

//     getName() {
//         return this.name
//     }
// }

// const user3 = new User("User5");

// console.log(user3);


// Q1. ...................................................
// function makeUser() {
//     return {
//         name: "User1",
//         // ref: this
//         ref() {
//             return this;
//         }
//     }
// }

// let user = makeUser();
// console.log(user.ref.name); // this points to window object.
// console.log(user.ref().name);


// Q2. ...................................................
// const user = {
//     name: "User1",
//     logMessage() {
//         console.log(this.name);
//     }
// }

// setTimeout(user.logMessage, 1000) // since logMessage is passed as callback so, this will not point to the user obj but to the window object.
// setTimeout(() => user.logMessage(), 1000)


// Q3. ...................................................
// const example1 = {
//     name: "Anupam",
//     greet() {
//         return `Hello ${this.name}`
//     },
//     farewell: () => {
//         return `Good bye ${this.name}`
//     }
// }

// console.log(example1.greet());
// console.log(example1.farewell());


// Q4. ...................................................
// var length = 4;
// function callback() {
//     console.log(this.length);
// }


// let object = {
//     length: 5,
//     method(fn) {
//         fn(); // prints 4.
//     }
// }


// let object2 = {
//     length: 5,
//     method() {
//         arguments[0](); // prints 3 as 
//     }
// }

// object.method(callback); // prints 4(var length)
// object2.method(callback, 2, 3); // prints 3 as it'll take `arguments` length.



// Q5. ...................................................

let calc = {
    total: 0,
    add(val) {
        this.total = this.total + val;
        return this;
    },
    mul(val) {
        this.total*=val;
        return this;
    },
    sub(val) {
        this.total-=val;
        return this;
    }
}

const result = calc.add(10).mul(13).sub(10).add(4);
console.log(result.n);