// combination sum-1 -> print all the combination of array element with given sum...
function combinationSum(arr, sum, index, resArr, resultArray) {
    if(sum < 0 || arr.length === index) {
        return;
    }

    if(sum === 0) {
        // console.log(resArr);
        resultArray.push([...resArr])
        return;
    }

    resArr.push(arr[index])
    combinationSum(arr, sum - arr[index], index, resArr, resultArray);
    resArr.pop();
    combinationSum(arr, sum, index + 1, resArr, resultArray);
}

let resultArray = [];
let givenArray = [1,2,2];
// combinationSum(givenArray, 4, 0, [], resultArray);
// console.log(resultArray);

// combination sum-1 -> Method-2
function combinationSum2(arr, resArr, index, targetSum, ans) {
    if(index === arr.length) {
        if(targetSum === 0) {
            ans.push([...resArr]);
            return;
        }
        return;
    }

    resArr.push(arr[index]);
    combinationSum2(arr, resArr, index + 1, targetSum - arr[index], ans);
    resArr.pop();
    combinationSum2(arr, resArr, index + 1, targetSum, ans);
}

let res_ans = [];
combinationSum2([1,1,2,2], [], 0, 4, res_ans);
console.log(res_ans);


// Combination sum-II -> print all the unique combination of elements of array with given sum...
function combinationSumII(arr, index, target, ans, resArr) {
    if(target === 0) {
        ans.push([...resArr]);
        return;
    }

    for(let i = index; i < arr.length; i++) {
        if(i > index && arr[i] === arr[i - 1]) {
            continue;
        }

        if(arr[i] > target) break;

        resArr.push(arr[i]);
        combinationSumII(arr, i + 1, target - arr[i], ans, resArr);
        resArr.pop();
    }
}

let ans = [];

// console.log(combinationSumII([1,1,2,5,6,7,10], 0, 8, ans, []));
// console.log(ans);