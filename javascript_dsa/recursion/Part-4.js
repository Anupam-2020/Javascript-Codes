// // first and last occurance in sorted array -> recursion.....................................

// function lastPositionRecursion(arr, key, start, end) {
//     if(arr.length === 1) return 0;

//     let mid = parseInt(start + (end - start) / 2);
//     if(start >= end) return mid
//     if(arr[mid] > key) return lastPositionRecursion(arr, key, start, mid - 1);
//     else return lastPositionRecursion(arr, key, mid + 1, end);
// }

// function firstPositionRecursion(arr, key, start, end) {
//     if(arr.length === 1) return 0;

//     let mid = parseInt(start + (end - start) / 2);
//     if(start >= end) return mid;
//     if(arr[mid] >= key) return firstPositionRecursion(arr, key, start, mid - 1);
//     else return firstPositionRecursion(arr, key, mid + 1, end);
// }

// console.log(firstPositionRecursion([10 ,10 ,12 ,13 ,13 ,16 ,18 ,18 ,18 ,21], 10, 0, 10))
// console.log(lastPositionRecursion([10 ,10 ,12 ,13 ,13 ,16 ,18 ,18 ,18 ,21], 10, 0, 10))

// let arr1 = [3,5,7,8,9,11,15,17,18,18,18,18,19,20,20,20,20,21,23];
// let arr2 = [3,5,7,8,9,11,15];



// // find peak of a mountain.........................................................

// function peakOfTheMountain(arr, start, end) {
//     if(arr.length === 1) return arr[0];

//     let mid = start + parseInt((end - start) / 2);

//     // (mid === 0 and mid === arr.length-1) is to check if mid has come to extreme left
//     if((mid === 0 || arr[mid] > arr[mid-1]) && (mid === arr.length - 1 || arr[mid] > arr[mid+1])) return arr[mid];

//     else if(arr[mid] > arr[mid + 1] && arr[mid] < arr[mid - 1]) {
//         return peakOfTheMountain(arr, start, mid-1);
//     }

//     else {
//         return peakOfTheMountain(arr, mid+1, end);
//     }
// }

// let arr3 = [2,16,17,12,3,2];
// // console.log(peakOfTheMountain(arr3, 0, arr3.length - 1));


// // find pivot element in rotated sorted array.........................................................
// function pivotInArray(arr, start, end) {
//     if(arr.length === 1) return 0;
//     let mid = start + parseInt((end - start)/2);
//     if(start >= end) return arr[start];
//     if(arr[mid] > arr[0]) return pivotInArray(arr, mid+1, end);
//     else return pivotInArray(arr, start, mid)
// }

// let arr4 = [23,45,3,16,17,19];
// // console.log(pivotInArray(arr4, 0, arr4.length-1))

// let arr = [5,3,0,7,4]
// let arr5 = [6 ,5 ,0 ,9 ,0 ,0 ,6 ,1 ,3 ,8 ,9 ,3 ,4 ,4 ,6 ,0 ,6 ,6 ,1 ,8 ,4 ,9 ,6 ,3 ,7 ,8 ,8 ,2 ,9];
// let str1 = "", str2 = "";
// arr.sort((a,b) => a-b);
// let i = 0;
// for(let i = 0; i < arr.length; i++) {
//     if(i % 2 === 0) str1 = str1 + arr[i]
//     else str2 = str2 + arr[i];
// }

// let result = 0n;
// let res1 = BigInt(+str1 + +str2)
// console.log(res1.toString())






function fibonacci(value) {
    let val1 = 0;
    let val2 = 1;
    for(let i = 0; i < value; i++) {
        let temp1 = val2;
        val2 = val1 + val2;
        val1 = temp1;
    }

    if(value === 0) return 0;
    else if(value === 1) return 1;
    else return val1;
}

function createFibonacciGenerator() {
    let count = 0;
    return () =>  fibonacci(count++);
}

let fibonacciGenerator = createFibonacciGenerator()
console.log(fibonacciGenerator())
console.log(fibonacciGenerator())
console.log(fibonacciGenerator())
console.log(fibonacciGenerator())
console.log(fibonacciGenerator())
console.log(fibonacciGenerator())
console.log(fibonacciGenerator())
console.log(fibonacciGenerator())