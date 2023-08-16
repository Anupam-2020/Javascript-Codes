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
        return `${this.firstName} is ${this.age} old`
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
    const user = Object.create(userMethods);
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

        user.about = userMethods.about; // wrt M-3
        user.is18 = userMethods.is18;
        return user;
}

const user1 = createUser("Anupam","Anand", "anupam@gmail.com",25, "Patna");
console.log(user1.sing());
console.log(user1.__proto__);