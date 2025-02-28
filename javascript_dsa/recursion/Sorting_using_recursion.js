// bubble sort...
function bubbleSort(arr, index) {
    if(index === arr.length) return arr;

    let length = arr.length;
    for(let j = 0; j < length - 1; j++) {
        if(arr[j] > arr[j+1]) {
            arr[j] = arr[j] - arr[j+1];
            arr[j+1] = arr[j] + arr[j+1]; 
            arr[j] = arr[j+1] - arr[j];
            flag = true;
        }
    }
    return bubbleSort(arr, index + 1);
}

// console.log(bubbleSort([2,5,1,6,9], 0));


// selection sort...
function selectionSort(arr, min, i) {
    if(i === arr.length - 1) return arr;

    for(let j = i + 1; j < arr.length; j++) {
        if(arr[j] < arr[min]) {
            min = j;
        }
    }

    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;

    return selectionSort(arr, i + 1, i + 1);
}

// console.log(selectionSort([2,5,1,9,6], 0, 0));


// Insertion sort...
function insertionSort(arr, i, currentEle, j) {
    if(i > arr.length) return;
    while(j >= 0 && currentEle < arr[j]) {
        arr[j+1] = arr[j];
        j--;
    }
    arr[j+1] = currentEle;
    insertionSort(arr, i + 1, arr[i], i - 1);
}

let arr = [5,2,9,1,6];
// insertionSort(arr, 1, arr[1], 0);
// console.log(arr);


// Merge sort...
function mergeSort(arr, low, high) {
    if(low >= high) {
        return;
    }

    let mid = low + parseInt((high - low)/2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid+1, high);
    merge(arr, low, mid, high);
}

function  merge(arr, low, mid, high) {
    let i = low;
    let j = mid + 1;
    let sorted_arr = [];

    while(i <= mid && j <= high) {
        if(arr[i] < arr[j]) {
            sorted_arr.push(arr[i++]);
        } else if(arr[i] > arr[j]) {
            sorted_arr.push(arr[j++]);
        } else {
            sorted_arr.push(arr[i++]);
            sorted_arr.push(arr[j++]);
        }
    }

    while(i <= mid) {
        sorted_arr.push(arr[i++]);
    }

    while(j <= high) {
        sorted_arr.push(arr[j++]);
    }

    for(let i = low; i <= high; i++) {
        arr[i] = sorted_arr[i - low];
    }
}

let mergeArr = [2,1,6,4,2,9,5]
// mergeSort(mergeArr, 0, mergeArr.length - 1);
// console.log(mergeArr);

// Quick Sort...
function quickSort() {
    
}