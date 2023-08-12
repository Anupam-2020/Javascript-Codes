// Other way of doing Lect_12_this.js is using class.

class CreateUser {
    constructor(firstname, lastName, email, age, address) {
        this.firstName = firstname;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }
    about() {
        return `${this.firstName} is ${this.age} years old.`;
    }
    is18() {
        return this.age > 18;
    }
}


const user1 = new CreateUser("Anupam","Anand","anupam@gmail.com",23, "Patna");
// console.log(user1.about());
// console.log(user1);
console.log(Object.getPrototypeOf(user1));

// for(let key in user1) { 
//     console.log(key); // this will return all the keys available for user1... 
//     if(user1.hasOwnProperty(key)) {
//         console.log(key); // this will return all the keys which are present in user function.
//     }
// }