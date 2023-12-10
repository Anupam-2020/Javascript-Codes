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

printPermutation([1,2,3], [],  []);