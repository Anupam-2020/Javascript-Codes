// Prototype => Every function has an empty object given by javascript called prototype.

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

const user1 = createUser("Anupam","Anand","anupam@gmail.com",23, "Patna");
console.log(user1.about());

// console.log(createUser.prototype.about());