"use strict" 
// if we use "use strict"then this keyword in line no. 4 will give undefined else will give window object.

// function myfunc() {
//     console.log(this);
// }
// myfunc();



// function about() { // M-2 for creating function as value of object.
//     return `${this.firstName} is ${this.age} old`;
// }

// function is18() {
//     return this.age > 18;
// }


const userMethods = { // M-3 for creating function as value of object.
    about: function() {
        return `${this.firstName} is ${this.age} years old`
    },
    is18: function() {
        return this.age > 18
    },
    sing: function() {
        return true
    }
}

function createUser(firstname, lastName, email, age, address) {
    // const user = {};
    const user = Object.create(userMethods); // by creating object using Object.create() user can access all the values of `userMethods` using `__proto__ object`...
    user.firstName = firstname;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    // user.about = function() { // M-1 for creating function as value of object.
    //     return `${this.firstName} is ${this.age} old`
    // }
    // user.is18 = function() {
        //     return this.age > 18
        // }

        // user.about = about; // with respect to M-2
        // user.is18 = is18;

        // user.about = userMethods.about; // wrt M-3
        // user.is18 = userMethods.is18;
        // user.sing = userMethods.sing;
        return user;
}

const user1 = createUser("Anupam", "Anand", "anupam@gmail.com", 25, "Patna");
console.log(user1);
console.log(user1.sing());
console.log(user1.is18());
console.log(user1.about());
console.log(user1.__proto__.about()); // we can access objects and functions using __proto__ but can't access this keyword...
// __proto__ is explained in Lect_13__proto__.js file...