const arr = [1,2,3];

let arr2 = Array.from(arr, function(it) {
    return it * 2
});

let arr3 = Array.from({length: 5}, (it, i) => i * 2 + 1);
console.log(arr3)


let str = "anupam";
let res = Array.from(str)
console.log(res)