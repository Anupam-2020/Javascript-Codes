// const ele = document.querySelector('input');

// function hotDebounce() {
//   let timer;

//   return function() {
//     if(timer) {
//       clearTimeout(timer);
//     console.log(timer);
//     }
//     timer = setTimeout(() => {
//         console.log('Event added');
//     }, 1000);
//   }
// }

// ele.addEventListener('keyup',hotDebounce());

// const x = {
//   flag: 1,
//   toString: function() {
//     return this.flag++;
//   }
// }

// console.log(x == 1)
// console.log(x == 2)
// console.log(x == 3)

// if(x == 1 && x == 2 && x == 3) {
//   console.log('Hello world');
// }

// count pair with given sum
let arr = [7, 5, 7, 4, 8, 1, 11];
let n = arr.length;
let k = 12;
let map = new Map();
let count = 0;
for (let i = 0; i < n; i++) {
  if (map.has(k - arr[i])) {
    count += map.get(k - arr[i]);
  }
  if (map.has(arr[i])) {
    map.set(arr[i], map.get(arr[i]) + 1);
  } else {
    map.set(arr[i], 1);
  }
}
console.log(count);
console.log(map);
