// getters and setters.

class Person {
    constructor(firstname, lastName, age) {
        this.firstname = firstname;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName() {
        return `${this.firstname} ${this.lastName}`;
    }

    set fullName(fullName) {
        const [firstName, lastname] = fullName.split(" ");
        this.firstname = firstName;
        this.lastName = lastname;
    }

    static personInfo() {
        return `this is person info`;
    }
}

const person = new Person("Anupam","Kumar",22);
// console.log(person.fullName);
person.fullName = "Anurag Anand";
// console.log(person.fullName);
const info = Person.personInfo(); // static methods/properties are related to class. We can't call it using object...
console.log(info);