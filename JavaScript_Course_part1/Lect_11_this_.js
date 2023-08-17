// this -> this points to object which depends on the context in which `this` is currently in.

this.a = 5;
console.log(this);

// `this` in object...................

// sample example -1 ............................................................
const person = {
  firstName: "Anupam",
  lastName: "Anand",
  age: 10,
  about: function () {
    // M-1 of writing function as key in object.
    console.log(`person is ${this.firstName} ${this.lastName}`);
  },
  achievement() {
    // M-2 of writing function as key in object.
    console.log(`achievement is ${this.age}`);
  },
};

function personInfo() {
  // here `this` will point to the key-value which is present in the parent object of this function.
  console.log(`person is ${this.firstName} ${this.lastName}`);
}

// const personInfo = () => console.log(`person is ${this.firstName} ${this.lastName}`);
// `this` doesn't work with arrow function.

const person1 = {
  firstName: "Anurag",
  lastName: "Anand",
  age: 10,
  about: personInfo,
};

const person3 = {
  firstName: "Rahul",
  lastName: "Anand",
  age: 10,
  about: personInfo,
};

const person4 = {
  firstName: "Satyam",
  lastName: "Anand",
  age: 10,
  about: personInfo,
};

person.about();
person.achievement();
person1.about();
person3.about();
person4.about();




// sample example - 2 ................................................

// 1. When `this` is inside normal function then it points to the parent object's data.....
// 2. When `this` is inside arrow function then it points to the window object.....
// 3. When `this` is inside nested arrow function and the parent func of that arrow fn. is normal fn. then  it points to parent object's data....
// 4. When `this` is inside nested normal function then it will point to window object.

// Ex- 1______________________
const user = {
  name: "Anupam",
  age: 24,
  getDetails: function () {
    console.log(this); // `this` will point to the user's(direct parent) object.....
  },
};

user.getDetails();

// Ex -2____________________________
const user2 = {
  name: "Anupam",
  age: 24,
  getDetails: () => {
    console.log(this); // `this` points to the window object.
  },
};

user2.getDetails();

// Ex -3_____________________________
const user3 = {
  name: "Anupam",
  age: 24,
  getDetails: function () {
    function nestedFunc() {
      console.log(this); // `this` points to the window object.
    }
    nestedFunc();
  },
};

user3.getDetails();

// Ex -4______________________________
const user4 = {
  name: "Anupam",
  age: 24,
  getDetails: function () {
    const nestedFunc = () => {
      console.log(this); // `this` points to user's(direct parent) object.
    };
    nestedFunc();
  },
};

user4.getDetails();

// `this` in class also in class chapter 16.......
class Users {
    constructor(n) {
        this.name = n
    }
    getName() {
        console.log(this.name)
    }
}

const user5 = new Users("Anupam");
console.log(user5.name)