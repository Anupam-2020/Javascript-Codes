// brute force...
function twoSum(arr, target) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(i !== j && arr[i] + arr[j] === target) {
                return [i,j];
            }
        }
    }
    return 0;
}

console.log(twoSum([1,2,3], 4))

// optimized...
function twoSumOptimized(arr, target) {
    let map = new Map();
    for(let i = 0; i < arr.length; i++) {
        if(map.has(target - arr[i])) {
            return true;
        }

        map.set(arr[i], i);
    }
    return false;
}

console.log(twoSumOptimized([1,2,3], 4));

// best solution...
function twoSumBest(arr, target) {
    let len = arr.length;
    arr.sort((a,b) => a - b);
    let i = 0;
    let j = len - 1;
    while(i <= j) {
        if(arr[i] + arr[j] === target) return [i,j];
        else if(arr[i] + arr[j] > target) j--;
        else i++;
    }
    return false;
}

console.log(twoSumBest([1,2,3], 4));