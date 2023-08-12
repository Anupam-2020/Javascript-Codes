// map method 

const numbers = [3,4,6,1,2,8];
const squareOfNumber = (num) => {
    return num * num;
}

const squareNumber = numbers.map(squareOfNumber);
console.log(squareNumber);

const squareNumber2 = numbers.map((num, index) => {
    return `index: ${index} - ${num * num}`;
});

console.log(squareNumber2);


const users = [
    {firstName: "Anupam", age: 26},
    {firstName: "Anurag", age: 23},
    {firstName: "Rahul", age: 20}
]

const userNames = users.map(user => {
    return user.firstName;
});
console.log(userNames);