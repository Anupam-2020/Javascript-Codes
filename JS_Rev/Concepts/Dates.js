// Date

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString().split(" ")[0]);
console.log(myDate.toDateString());
console.log(typeof myDate);

let createDate = new Date(2023, 12, 16);
let createDate2 = new Date("2023-12-16");
console.log(createDate2.toDateString());