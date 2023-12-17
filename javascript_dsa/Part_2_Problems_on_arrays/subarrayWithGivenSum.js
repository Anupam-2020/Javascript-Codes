// brute force...
function numberOfSubArraysWithGivenSum(arr, sum) {
    let count = 0;
    let len = arr.length;
    for(let i = 0; i < len; i++) {
        let sumCount = 0;
        for(let j = i; j < len; j++) {
            sumCount += arr[j];
            if(sumCount === sum) {
                count++;
            }
        }
    }
    return count;
}

// console.log(numberOfSubArraysWithGivenSum([1,2,3,-3,1,1,1,4,2,-3], 3));

// Optiimzed...
function subArrayCountWithGivenSumOptimised(arr, k) {
    let preSum = new Map();
    let currSum = 0;
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        currSum = currSum + arr[i];
        if(currSum === k) count++;
        if(preSum.has(currSum - k)) {
            count = count + preSum.get(currSum - k);
        }
        preSum.set(currSum, (preSum.get(currSum) || 0 ) + 1);
    }
    console.log(preSum)
    console.log(count);
}

// subArrayCountWithGivenSumOptimised([1,-1,0], 0);


// Brute force...
function longestSubArrayWithGivenSum(arr, k) {
    let maxLen = 0;
    for(let i = 0; i < arr.length; i++) {
        let currSum = 0;
        let count = 0;
        for(let j = i; j < arr.length; j++) {
            currSum = currSum + arr[j];
            count++;
            if(currSum === k) {
                if(maxLen < count)
                maxLen = count;
            }
        }
    }
    return maxLen;
}

// console.log(longestSubArrayWithGivenSum([1,-1,0], 0))

// optimised...
function longestSubArrayWithGivenSumOptimized(arr, sum) {
    let len = arr.length;
    let prevSum = new Map();
    let currSum = 0;
    let maxLen = 0;
    for(let i = 0; i < len; i++) {
        currSum = currSum + arr[i];

        if(currSum === sum) {
            maxLen = i+1;
        }

        if(prevSum.has(currSum - sum)) {
            let len = i - prevSum.get(currSum - sum);
            if(maxLen < len) {
                maxLen = len;
            }
        }

        if(!prevSum.has(currSum)) {
            prevSum.set(currSum,i);
        }
    }
    // console.log(prevSum)
    return maxLen;
}

let arr = [1,2,3,-3,1,1,1,4,2,-3];
let arr1 = [2,0,0,3];
let arr2  =[1, -10, 7, 19, 16, -11, -10, 4, 4, 2]
let arr3 = [10, 5, 2, 7, 1, 9];
let arr4 = [-7, -11, -3, -7, 4, 15, -13, 18, -10, -10]
console.log(longestSubArrayWithGivenSumOptimized(arr4, 23));