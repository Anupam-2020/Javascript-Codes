// search element in a rotated sorted array....................................................................
function findPivotInArray(arr, start, end) {
    if(arr.length === 1) return 0;
    let mid = start + parseInt((end - start) / 2);
    if(start >= end) return start;
    if(arr[mid] > arr[0]) return findPivotInArray(arr, mid+1, end)
    else return findPivotInArray(arr, start, mid)
}

function applyBinarySearch(arr, start, end, key) {
    let mid = start + parseInt((end - start) / 2);
    if(start > end) return -1;
    if(arr[mid] < key) return applyBinarySearch(arr, mid+1, end, key)
    else if(arr[mid] > key) return applyBinarySearch(arr, start, end-1, key)
    else return mid
}

function searchInARotatedSortedArray(arr, key) {
    let pivot = findPivotInArray(arr, 0, arr.length-1)
    let start = key <= arr[0] ? pivot : 0;
    let end = key <= arr[0] ? arr.length-1 : pivot-1
    return applyBinarySearch(arr, start, end, key)
}

let arr4 = [23,45,3,16,17,19];
// console.log(searchInARotatedSortedArray(arr4, 45))


// square root using binary search.............................................
function squareRoot(number, start, end) {
    let mid = start + parseInt((end - start) / 2);
    if(start > end) return mid-1;
    if(mid*mid === number) return mid;
    else if(mid*mid > number) return squareRoot(number, start, mid-1);
    else return squareRoot(number, mid+1, end);
}


function precisionSquareRoot(number, precisionCount, tempSol, factor) { 
    // number -> original input
    // precisionCount -> upto what we need to count.
    // tempSol -> temporary solution 
    // factor -> eg.- 0.1, 0.01, 0.001 etc.....

    if(precisionCount === 0) return tempSol;
    if(number === tempSol * tempSol) return tempSol
    else if(number > (tempSol)*(tempSol)) {
        return precisionSquareRoot(number, precisionCount,tempSol+factor, factor);
    }
    else {
        return precisionSquareRoot(number, precisionCount-1,tempSol-factor, factor/10);
    }
}

let number = 243;
let factor = 0.1;
let res = squareRoot(number, 0, number)
console.log(precisionSquareRoot(number, 3, res, factor))