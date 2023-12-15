// use-strict 


var rotate_array_by_k = function(arr, k) {

    k = k % arr.length;
    let length = arr.length;

    // reverse full array.
    let l = 0;
    let r = length - 1;
    arr = reverseArr(arr, l, r);
    // console.log(arr)

    // reverse array from 0th to k - 1th element of reversed array.
    l = 0;
    r = k - 1;
    arr = reverseArr(arr, l, r);

    // reverse array from kth to last element of reversed array.
    l = k;
    r = length - 1;
    arr = reverseArr(arr, l, r);
    return arr;
}

function reverseArr(arr, l, r) {
    let temp;
    for(let i = l, j = r; i < j; i++,j--) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr
}

// console.log(rotate_array_by_k([1,2,3,4,5,6,7],3))



function rotateArray(arr) {
    let temp = arr[0];
    for(let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }

    arr[arr.length - 1] = temp;
}

let arr = [2,1,6,4,2,9,5];
// rotateArray(arr);
// console.log(arr)



var rotateArrayToRightByK = function(arr, k) {
    let len = arr.length;
    let temp = [];
    let rotation = k % len;

    for(let i = len - rotation; i < len; i++) {
        temp.push(arr[i])
    }

    let j = len - 1; 
    for(let i = len - rotation - 1; i >= 0; i--) {
        arr[j--] = arr[i];
    }

    for(let i = 0; i < rotation; i++) {
        arr[i] = temp[i];
    }
};

// rotateArrayToRightByK(arr, 2);
// console.log(arr, 2)