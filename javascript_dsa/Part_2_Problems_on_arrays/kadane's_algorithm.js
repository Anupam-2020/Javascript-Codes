// find the maximum sum subarray....

const maximum_sum_subArray = (function(arr) {
    let maxSum = arr[0];
    let startIndex = 0
    let endIndex = 0;

    for(let i = 0; i < arr.length; i++) {
        let currentSum = 0;
        for(let j = i; j < arr.length; j++) {
            currentSum = currentSum + arr[j];
            if(currentSum > maxSum) {
                maxSum = currentSum
                startIndex = i;
                endIndex = j;
            }
        }
    }
    return {
        sum: maxSum, 
        array: arr.slice(startIndex, endIndex+1)
    };
})

// kadane's algo....
const maximum_sum_subArray_optimized = (arr = [-2,1,-3,4,-1,2,1,-5,4]) => {
    let maxSum = arr[0];
    let currentSum = 0;
    let startIndex = 0;
    let endIndex = 0

    for(let i = 0; i < arr.length; i++) {
        currentSum = currentSum + arr[i];
        if(currentSum > maxSum) {
            maxSum = currentSum;
            endIndex = i;
        }

        if(currentSum < 0) {
            currentSum = 0;
            startIndex = i+1;
        }
    }
    return {sum: maxSum, array: arr.slice(startIndex, endIndex + 1)}
}

console.log(maximum_sum_subArray_optimized())
console.log(maximum_sum_subArray([-2,1,-3,4,-1,2,1,-5,4]))

