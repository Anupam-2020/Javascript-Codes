
// In JS everything is an object. All the data-types inherit object's methods using __proto__ object. 
// This behaviour is called prototypal inheritance...

// Prototype is special object given to function which helps in adding/creating methods/objects in function. 
// We can access __proto__ of function using prototype object...

const obj = []
// obj.__proto__ = {};
Object.setPrototypeOf(obj, {});
console.log(obj.__proto__);


function identity (username, age) {
    return `${username} is ${age} years old`;
}

identity.prototype.data = function(name, years) {
    return `${name} has ${years} years of expericence`; 
}

// Object.prototype.name1 = 'Anupam'; // This prototype property will be accessed to all data-types, because object is parent of all other objects...
// console.log(Array.name1);

const user = new identity('Anupam', 25); // Here since we have used `prototype object` to add method(data). 
// So this function now will behave as class or constructor function...
// `user` has a reference of `class(identity) or constructor fn.(identity)` which can be accessed by `user` using `new` keyword...
// if we don't use `new` keyword, `user` can only access the `identity` as function and not its class/constructor properties...

console.log(user.data('Anupam', 5));
console.log(user);

console.log(identity.prototype.data('Anupam', 5));

const num = 233;
Object.prototype.setName = "Anupam Anand"; // when we apply method/property on Object then all the child components can acccess that method/property...
console.log(num.setName);

// Array.prototype -> Here Array is constructor function/object which has prototype object to access all object properties...
const arr = new Array(); // Here arr is arrayObject which has __proto__ object to access all Array's proprties...

console.log(arr.__proto__.__proto__);

// Note:- All about new keyword...
/* 
    Here's what happens behind the scenes when new keyword is used:

    A new object is created: The new keyword initiates the creation of a new Javascript object.

    A prototype is linked: The newly created object gets linked to the prototype property of the constructor function.
    This means that it has access to properties and methods defined on the constructor's prototype.

    The constructor is called: 

    The new object is returned: 
 */