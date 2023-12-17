// brute force...
function twoSum(arr, target) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(i !== j && arr[i] + arr[j] === target) {
                return `${i} and ${j}`;
            }
        }
    }
    return 0;
}

console.log(twoSum([1,2,3], 4))

// optimized...