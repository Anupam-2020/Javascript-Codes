function printSubsequenceOfAnArray(arr, index, resArr) {
    if(index >= arr.length) {
        console.log(resArr)
        return;
    }

    resArr.push(arr[index]);
    printSubsequenceOfAnArray(arr, index + 1, resArr)
    resArr.pop();
    printSubsequenceOfAnArray(arr, index + 1, resArr)
}

// printSubsequenceOfAnArray([1,2,3,4], 0, []);


// printing subsequences of an array whose sum is equal to k.
function printSubsequenceOfAnArrayWithSum(arr, index, resArr, sum, arrSum) {
    


}