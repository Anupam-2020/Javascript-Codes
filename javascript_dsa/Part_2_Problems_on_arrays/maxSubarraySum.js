function kadensAlgo(arr) {
    let maxSum = Number.MIN_VALUE;
    let currSum = 0;
    let startIndex = 0;
    let endIndex = 0;
    for(let i = 0; i < arr.length; i++) {
        currSum+=arr[i];
        if(currSum > maxSum) {
            maxSum = currSum;
            endIndex = i;
        }

        if(currSum < 0) {
            currSum = 0;
            startIndex = i+1;
        }
    }

    return {
        maxSum,
        indexes: [startIndex, endIndex],
        maxSubarray: arr.slice(startIndex, endIndex + 1),

    }
}

console.log(kadensAlgo([-2, -3, 4, -1, -2, 1, 5, -3]))