// map, filter, reduce

const num = [1, 2, 3, 4, 5];

// const multiply = num.myMap((value, index, arr) => {
//     return value + index;
// });

// console.log(multiply);

// const filter = num.filter((value, index, arr) => value > 2);
// console.log(filter);

// const reduce = num.reduce((acc, curr, index, arr) => acc + curr, 0);
// console.log(reduce);

// polyfill for map.
Array.prototype.myMap = function (cb) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i], i, this));
  }
  return arr;
};

const multiply = num.myMap((value, index, arr) => value + index);
console.log(multiply);

// polyfill for filter.
Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
};

const filter = num.myFilter((value, index, arr) => value > 2);
console.log(filter);

// polyfill for reduce.
Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

const reduce = num.myReduce((acc, curr, index, arr) => acc + curr, 0);
console.log(reduce);

// polyfill for forEach
Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
  return;
};

num.forEach((value, index, arr) => (arr[index] = value + index));
console.log(num);

let students = [
  { name: "Std1", rollNo: 34, marks: 47 },
  { name: "Std2", rollNo: 21, marks: 71 },
  { name: "Std3", rollNo: 76, marks: 92 },
  { name: "Std4", rollNo: 52, marks: 53 },
  { name: "Std5", rollNo: 47, marks: 39 }
];

let capitaloizedStud = students.map((stud, index) => stud.name.toUpperCase());

let filteredStud = students
  .filter((stud, index) => stud.marks > 90 && stud.rollNo > 21)
  .map((stud) => stud.name.toUpperCase());

let sum = students.reduce((acc, curr, index) => acc + curr.marks, 0);

// return total marks of students with marks greater than 60 and add 20 marks to those who scored less than 60.
let result = students.map((stud, index) => {
    stud.marks = stud.marks < 60 ? stud.marks + 20 : stud.marks;
    return stud;
}).filter((stud) => stud.marks > 60).reduce((accu, curr, index) => accu + curr.marks, 0);
console.log(result);