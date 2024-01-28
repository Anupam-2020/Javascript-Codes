// to find peak in mountain...

function peakOfTheMountain(arr) { // this is wrong for edge cases...
    let start = 0;
    let end = arr.length - 1;
    let ans = 0;
    while(start <= end) {
        let mid = parseInt(start + (end - start) / 2);
        if(arr[mid] > arr[mid - 1] && arr[mid] < arr[mid + 1]) start = mid + 1;
        if(arr[mid] > arr[mid + 1] && arr[mid] < arr[mid - 1]) end = mid;
        if(arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
            ans = arr[mid];
            break;
        }
    }
    return ans;
}

// to find the pivot in array.............................................................
function pivotElement(arr) {
    let start = 0;
    let end = arr.length - 1;
    while(start < end) {
        let mid = start + parseInt((end - start) / 2);
        if(arr[mid] > arr[0]) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    return start
}

let arr3 = [2,16,17,19,23,45];
console.log(pivotElement(arr3))