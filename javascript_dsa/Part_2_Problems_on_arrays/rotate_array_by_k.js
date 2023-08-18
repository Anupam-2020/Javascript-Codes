// use-strict 

var rotate_array_by_k = function(arr, k) {
    let arr_part_1 = [];
    let arr_part_2 = [];

    for(let i = 0; i <= k; i++) {
        arr_part_1[i] = arr[i];
    }

    for(let i = 0, j = k + 1; j < arr.length; i++, j++) {
        arr_part_2[i] = arr[j];
    }

    arr =  [...arr_part_2, ...arr_part_1]
    console.log(arr)
}



var rotate_array_by_k_2nd_method = function(arr, k) {

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

console.time('1st')
rotate_array_by_k([1,2,3,4,5,6,7],3)
console.timeEnd('1st')

console.time('2nd')
console.log(rotate_array_by_k_2nd_method([1,2,3,4,5,6,7],3))
console.timeEnd('2nd')