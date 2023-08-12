// Another way of doing Lect_12 is using new keyword.

function CreateUser(firstname, lastName, email, age, address) {
    // const user = Object.create(createUser.prototype);
    this.firstName = firstname;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
    // return user;
}


CreateUser.prototype.about = function() {
    return`${this.firstName} is ${this.age} years old.`;
}

CreateUser.prototype.is18 = function() {
    return this.age > 18
}

const user1 = new CreateUser("Anupam","Anand","anupam@gmail.com",23, "Patna");
// console.log(user1.about());
// console.log(user1);

for(let key in user1) { 
    // console.log(key); // this will return all the keys available for user1... 
    // if(user1.hasOwnProperty(key)) {
    //     console.log(key); // this will return all the keys which are present in user function.
    // }
}