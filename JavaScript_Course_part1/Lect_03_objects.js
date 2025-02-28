// objects.

const person = {
    name: "Anupam",
    age: 26,
    hobbies: ["Coding", "reading","playing"],
    "highest education": "B.tech",
}

person.gender = "male"; // adding key in existing object.

const key = "email";
// console.log(person);
// console.log(person["name"]);

// application of square bracket over dot while accessing object......
// console.log(person["highest education"]);

person[key] = "anupam@gmail.com"; // adding key in existing object.
// console.log(person);

// iteration in loop...
// 1. for in loop.
// 2. Objects.keys

for(let key in person) {
    // console.log(`${key} : ${person[key]}`);
    // console.log(key, person[key]);
}

// console.log(Object.keys(person)); // returns all keys of `person Object` in array....
for(let key of Object.keys(person)) {
    // console.log(person[key]);
}

// computed properties............
const key1 = "fruit";
const key2 = "Vegetable";
const value1 = "Apple";
const value2 = "Tomato";

const obj = {
    [key1] : value1,
    [key2] : value2
}

// console.log(obj);

// spread operator in object...
const obj2 = {...obj, ...person};
// console.log(obj2);

// const newObj = {..."abcdef"};  // all string letters become value and corresponding index becomes key.
// console.log(newObj);

// object destructuring...
const {fruit, Vegetable} = obj; // the variables here should be the same as key in obj...
// console.log(Vegetable);

// objects in arrays...
const users = [
    {userId:1, fname: "Anupam", lname: "Anupam"},
    {userId: 2, fname: "Anurag", lname: "Anand"}
]

// delete users[0].userId // delete is applicable on arrays.
// console.log(users);


// Another example of object......
const a = {}
const b = { key: 'b'}
const c = { key: 'c'}

a[b] = 123;
a[c] = 456;

// console.log(a); // here a will have key as '[object object]' and not b and c.


// strinify vs parse............
// const person = {
//     name: 'Piyush',
//     age: 25
// }

const strObj = JSON.stringify(person) // all keys and values get converted to string and all non-primitive values are ignored. 
// console.log(strObj)

// console.log(JSON.parse(strObj)) // keys and values get converted to original format from string.

// localStorage.setItem('test',person.name)
// const value = localStorage.getItem('test');
// console.log(value)
// localStorage.removeItem('test')

// guess the output.....
const settings = {
    username: 'Piyush',
    level: 19,
    health: 90
}

const data = JSON.stringify(settings, ['level', 'health']); // here whole object will not stringify but only the keys present in the array...
// console.log(data);

// guess output......

const shape = {
    raduis: 10,
    diameter: function() {
        return 2 * this.raduis
    },
    perimeter: () => {
        return 2 * Math.PI*this.radius
    }
}

// console.log(shape.diameter()) // this will return value
// console.log(shape.perimeter()) // this will retrun NaN as thsi.radius will return a window object...

// shallow copy vs deep copy....
// Shallow copying ->  creates a new object with references to the same memory locations as the original object, 
// deep copying -> creates a new object with new memory locations for all of its properties and nested objects or arrays.

const device = {
    item1: 'laptop',
    item2: {
        item3: 'mobile'
    }
}

// shallow copy.
// const device2 = device // (device2 creates a different reference but points to same object).
// device2.item1 = 'apple'; // this will change the copied object as well as the main object.
// device2.item2.item3 = 'samsung' // this will change the copied as well main object.
// console.log(device2)
console.log(device)


// deep copy.
const device3 = {...device} // (device3 creates a different object which is also called object cloning)
// const device3 = Object.assign({},device); // 2nd and older method of object cloning...
// const device3 = JSON.parse(JSON.stringify(device))
device3.item1 = 'apple'; // this will change the copied object but not the main object.
device3.item2.item3 = 'samsung' // this will change the copied object as well as the main object
console.log(device3)
console.log(device)


// Important......................................................................
// Note:- deep copies the data if it is not nested. 
// For nested data, it deeply copies the topmost data and shallow copies of the nested data.




// Proxy in objects......................................................................
// In simple terms, a proxy in JavaScript is like a middleman that sits between you and an object. Instead of directly interacting with the object, you go through the proxy, allowing you to customize or control how certain operations on the object are handled.
// For example, imagine you have an object representing a person with properties like name and age. A proxy could intercept when you try to access or modify these properties, giving you the opportunity to add extra behavior, such as logging, validation, or triggering events.
// In essence, a proxy lets you wrap an object with custom functionality, making it a powerful tool for managing and controlling interactions with JavaScript objects.

// Creating a target object
const targetObject = {
    name: "John",
    age: 25
  };
  
  // Creating a proxy for the target object
  const proxy = new Proxy(targetObject, {
    get: function(target, property) {
      // Intercepting property access
      console.log(`Getting property: ${property}`);
      return target[property];
    },
    set: function(target, property, value) {
      // Intercepting property assignment
      console.log(`Setting property: ${property} to ${value}`);
      target[property] = value;
    }
  });
  
  // Accessing properties through the proxy
  console.log(proxy.name); // This triggers the "get" handler
  
  // Modifying properties through the proxy
  proxy.age = 26; // This triggers the "set" handler
  