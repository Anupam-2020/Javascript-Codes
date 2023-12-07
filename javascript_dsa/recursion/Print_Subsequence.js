// Q1. -> print all the subsequence of an array....
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


// Q2. -> printing subsequences of an array whose sum is equal to k.
function printSubsequenceOfAnArrayWithSum(arr, index, resArr, sum) {
    if(index === arr.length) {
        if(sum === 0) {
            console.log(resArr);
        }
        return;
    }
    resArr.push(arr[index]);
    // console.log(index, resArr)
    printSubsequenceOfAnArrayWithSum(arr, index + 1, resArr, sum - arr[index]);
    resArr.pop();
    printSubsequenceOfAnArrayWithSum(arr, index + 1, resArr, sum);
}

// printSubsequenceOfAnArrayWithSum([1,5,2,2], 0, [], 5);

// Q3. -> priniting only one subsequence of an arry with given sum...
function printOneSubsequence(arr, sum, index, resArr) {
    if(arr.length === index) {
        if(sum === 0) {
            console.log(resArr);
            return true;
        }
        return false;
    }

    resArr.push(arr[index]);
    if(printOneSubsequence(arr, sum - arr[index], index + 1, resArr) === true) return true;
    resArr.pop();
    if(printOneSubsequence(arr, sum, index + 1, resArr) === true) return true;
}

// printOneSubsequence([1,2,1], 2, 0, [])

// Q4. -> 