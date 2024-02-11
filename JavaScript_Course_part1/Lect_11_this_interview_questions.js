// Ques 1----------------------------------
const user = {
  firstName: "Anupam!",
  getName() {
    const firstName = "Anupam Anand";
    return this.firstName;
  },
};
console.log(user.getName()); // output -> Anupam.( Because `this` will point to parent object's firstName...)

// Ques 2---------------------------------
function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}
let user1 = makeUser();
console.log(user1.ref.name); // output -> `this` of ref will point to window object.....

// Ques 3--------------------------------
function makeUser1() {
  return {
    name: "John",
    ref: function () {
      return this;
    },
  };
}
let user2 = makeUser1();
console.log(user2.ref().name); // output -> John because `this` of ref will point to parent object so will print John.....

// Ques 4-------------------------------
const user3 = {
  name: "Anupam Anand!",
  logMessage() {
    console.log(this.name);
  },
};
setTimeout(user3.logMessage, 1000); // output -> `this` will point to window object because in setTimeout `logMessage` has been called as argument

setTimeout(() => user3.logMessage(), 1000); // output -> 'Anupam Anand' because here `logMessage` has been called as function inside function, so this will point to parent object....

// Ques 5--------------------------------
const user4 = {
  name: "Anupam Anand",
  greet: function () {
    return `Hello ${this.name}`;
  },
  farewell: () => {
    return `Goodbye ${this.name}`;
  },
};

console.log(user4.greet()); // output -> 'Anupam'
console.log(user4.farewell()); // output -> window object

// Ques 6 ( create calculator according to below object calling )------------
const calculator = {
  read() {
    this.a = parseInt(prompt("a = ", 0));
    this.b = +prompt("b = ", 0);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

// Ques 7-------------------------------------------------------
var length = 4;

function callback() {
  console.log(this.length); // What is logged?
}

const object = {
  length: 5,
  method(fn) {
    fn();
  },
  callback
};

object.method(callback); // Output -> 4 beacause nested normal func inside of object points to window object. And here length property is available in window object as 4....
object.callback() // Output -> 5 because normal function inside object points to parent object....

// Ques 7 modified....
const object1 = {
    length: 5,
    method() {
        // console.log(arguments)
      arguments[0](); // here callback has been passed as 0th element which is executed inside method(), so it will return the length of argument...
    }
  };
  
object1.method(callback,2,3); // Output -> 3 because arguments is an object which has length proprty and length of arguments will be returned....


// Ques - 8( create calculator according to below object calling )-----------------------------------------------------
const calc = {
    total: 0,
    add(value) {
        this.total = value + this.total
        return this
    },
    mul(value) {
        this.total = this.total * value
        return this
    },
    sub(value) {
        this.total = this.total - value
        return this
    }
}

const result = calc.add(10).mul(2).sub(10).add(20)
console.log(result.total);