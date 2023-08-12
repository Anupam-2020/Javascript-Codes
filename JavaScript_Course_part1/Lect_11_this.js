// this

const person = {
    firstName: "Anupam",
    lastName: "Anand",
    age: 10,
    about: function() { // M-1 of writing function as key in object.
        console.log(`person is ${this.firstName} ${this.lastName}`)
    },
    achievement() { // M-2 of writing function as key in object.
        console.log(`achievement is ${this.age}`)
    }
}

function personInfo() {
    console.log(`person is ${this.firstName} ${this.lastName}`);
}

// const personInfo = () => console.log(`person is ${this.firstName} ${this.lastName}`); 
// `this` doesn't work with arrow function.

const person1 = {
    firstName: "Anurag",
    lastName: "Anand",
    age: 10,
    about: personInfo
}

const person3 = {
    firstName: "Rahul",
    lastName: "Anand",
    age: 10,
    about: personInfo
}

const person4 = {
    firstName: "Satyam",
    lastName: "Anand",
    age: 10,
    about: personInfo
}

person.about();
person1.about();
person3.about();
person4.about();