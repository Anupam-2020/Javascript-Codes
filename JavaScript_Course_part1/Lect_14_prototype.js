// Prototype => Every function has an empty object given by javascript called prototype with the help of which we can create various objects/ functions.

// taking example of Lect_12.this.js. to show another more optised way of doing that example using prototype.
 

// const userMethods = { 
//     about: function() {
//         return `${this.firstName} is ${this.age} old`
//     },
//     is18: function() {
//         return this.age > 18
//     },
//     sing: function() {
//         return true
//     }
// }


function createUser(firstname, lastName, email, age, address) {
    const user = Object.create(createUser.prototype);
    user.firstName = firstname;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}


createUser.prototype.about = function() {
    return`${this.firstName} is ${this.age} years old.`;
}

createUser.prototype.is18 = function() {
    return this.age > 18
}

createUser.prototype.write = 'Hello World';

const user1 = new createUser("Anupam","Anand","anupam@gmail.com",23, "Patna");
console.log(user1.about());
console.log(user1.__proto__); // since user1 is an object pointing to createUser, we get __proto__ as object..
console.log(createUser.prototype);
console.log(createUser.prototype.about());