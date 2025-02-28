function nextPermutation(arr) {
    let len = arr.length;
    let ind = -1;
    for(let i = len - 2; i >= 0; i--) {
        if(arr[i] < arr[i+1]) {
            ind = i;
            break;
        }
    }

    if(ind === -1) {
        arr.reverse();
    } else {
        for(let i = len-1; i >= ind; i--) {
            if(arr[ind] < arr[i]) {
                let temp = arr[ind];
                arr[ind] = arr[i];
                arr[i] = temp;
                break;
            }
        }
    }

    let arrL = arr.slice(0, ind+1);
    let arrR = arr.slice(ind+1, len);
    arrR.sort((a, b) => a - b);
    arr = [...arrL, ...arrR]
    console.log(arr);
}

nextPermutation([1, 2, 3, 6, 5, 4]);