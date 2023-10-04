// maps.

// stores data in ordered fashion.
// store data in key-value pair(like objects).
// duplicate keys not allowed.

// Main diff. between object and strings....
// objects can only have strings and symbols as key.
// in maps we can use anything as key like number, string, array etc.

const person = new Map();
person.set('firstname','Anupam');
person.set('age',6);
person.set(1,'one');
person.set([1,2,3], 'Anupam Anand');
person.set({class:'first'}, 'Grad.');
// console.log(person);
console.log(person.get('firstname'));

// for(let key of person) {
//     console.log(key, Array.isArray(key)); // key is the array of key and value...
// }

// for(let [key, value] of person) {
//     console.log(key,'->',value);
// }

// for(let key of person.keys()) {
//     console.log(key);
// }

// for(let values of person.values()) {
//     console.log(values);
// }

const person1 = new Map([['firstname','Anurag'],['lastname','Rahul'],['age',20]]);
// console.log(person1);

// object to map.
const person2 = {
    id: 1,
    firstName: 'Anupam'
}

const extraInfo = new Map();
extraInfo.set(person2, {gender: 'Male', age: 6});
console.log(extraInfo);
console.log(extraInfo.get(person2).gender);
// console.log(extraInfo.get(person2).age);


const mp = new Map();

for(let i = 97 ; i < 123; i++) {
    mp.set(String.fromCharCode(i), i);
}

for(let i of mp) {
    console.log(mp.get(i[0]));
}