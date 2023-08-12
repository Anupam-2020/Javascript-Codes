// find method => applies condition on each element of array and returns the first element which satisfies the condition.

const myArray = ["Hello", "Cat","Dog","Lion"];
const ans = myArray.find((string) => {
    return string.length === 3
});
console.log(ans);

const employee = [
    {empID: 1, name: "Anupam"},
    {empID: 2, name: "Anand"},
    {empID: 3, name: "Rahul"}
]

const emp = employee.find((user) => {
    return user.empID === 2
});

console.log(emp);