// null safe on optional chaining.

const user = {
    firstName: 'Anupam Anand',
    address: {houseNo: '344', street: 'Bailey Road'}
}

console.log(user?.firstName);
console.log(user?.address?.houseNo);


const myObject = {
    name: "Anupam",
    age: 24,
    sayHello() {
        console.log(`Hello, this is ${this.name} who is ${this.age} years old.`);
        return this
    },
    celebrateBDay() {
        console.log(`It is my Bday today. I am ${this.name} ${this}`);
        return this
    }
}

console.log(myObject.celebrateBDay().sayHello().celebrateBDay());