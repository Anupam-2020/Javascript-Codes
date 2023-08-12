// array methods.

// forEach => Doesn't return any array...
// map => returns a new array which can be sored in a saperate variable...
// filter => returns a new array based on some condition...
// reduce => returns result of operation performed on array on which reduce is applied.
// find => applies condition on each element of array and returns the first element which satisfies the condition.
// every => checks condition for every element of array and returns true only if all elements satisfy the condition
// some => checks and return true if even one element satisfies the condition.
// fill => used to create array fre filled with some number/text... Also used to replace elements in array with some value...
// splice


const numbers = [4,2,3,5];
const multiplyBy2 = (number, index) => {
    console.log("index is ", index, " number is ", number);
}
numbers.forEach(multiplyBy2);

const users = [
    {firstName: "Anupam", age: 26},
    {firstName: "Anurag", age: 23},
    {firstName: "Rahul", age: 20}
]
users.forEach((user) => {
    console.log(user.firstName);
});

