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

// polyfill for find method...
Array.prototype.myFind = function(cb) {
    for(let i = 0; i < this.length; i++) {
        if(cb(this[i], i, arr)) {
            return true;
        }
    }
    return false;
}

const arr = [1,2,3,8];
const res = arr.myFind((data, i, arr) => {
    return data === 8;
});

console.log(res);