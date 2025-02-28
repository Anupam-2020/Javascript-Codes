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

// subsetSum([1,2,3,4], 0, [])



function subsetSum2(arr, index, resArr) {
    console.log(resArr);

    for(let i = index; i < arr.length; i++) {
        if(i > index && arr[i] === arr[i - 1]) continue;

        resArr.push(arr[i]);
        subsetSum2(arr, i+1, resArr);
        resArr.pop();
    }
}

subsetSum2([4,4,4,1,4], 0, []);