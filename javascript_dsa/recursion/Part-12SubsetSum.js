function subsetSum(arr, index, resArr) {
    if(arr.length === index) {
        // console.log(resArr);
        let sum = 0;
        for(let i in resArr) {
            sum = sum + resArr[i];
        }
        console.log(resArr+ " -> ", sum);
        return;
    }

    resArr.push(arr[index]);
    subsetSum(arr, index + 1, resArr);
    resArr.pop();
    subsetSum(arr, index + 1,resArr);
}

subsetSum([1,2,3,4], 0, [])