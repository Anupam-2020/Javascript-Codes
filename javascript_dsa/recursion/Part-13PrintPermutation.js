function printPermutation(arr, resArr, freq) {
    if(resArr.length === arr.length) {
        console.log(resArr);
        return;
    }

    
    for(let i = 0; i < arr.length; i++) {
        if(freq[i] === true) continue;
        freq[i] = true;
        resArr.push(arr[i]);
        printPermutation(arr, resArr, freq);
        resArr.pop();
        freq[i] = false;
    }
}

// printPermutation([1,2,3], [],  []);


// K-th permutation.( Not an optimised solution)...
function kthPermutation(arr, resArr, ans, flagArray) {
    if(resArr.length === arr.length) {
        // console.log(resArr);
        ans.push([...resArr]);
        return;
    }

    for(let i = 0; i < arr.length; i++) {
        if(flagArray[i] === true) continue;
        flagArray[i] = true;
        resArr.push(arr[i]);
        kthPermutation(arr, resArr, ans, flagArray);
        resArr.pop();
        flagArray[i] = false;
    }
}

let resArr = [];


kthPermutation([1,2,3,4], [], resArr, []);
console.log(resArr[3].join("").toString());

