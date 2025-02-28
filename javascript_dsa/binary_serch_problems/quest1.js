// to find the first and last occurance of element in sorted array.

function firstPosition(arr, key) {
    let start = 0;
    let end = arr.length - 1;
    let ans = -1;

    while(start <= end) {
        let mid = parseInt(start + (end - start)/2);
        if(arr[mid] > key) {
            end = mid - 1;
        } else if(arr[mid] < key) {
            start = mid + 1
        } else {
            ans = mid
            end = mid - 1
        }
    }
    return ans;
}


function lastPosition(arr, key) {
    let start = 0;
    let end = arr.length - 1;
    let ans = -1
    while(start <= end) {
        let mid = parseInt(start + (end - start)/2)
        if(arr[mid] > key) {
            end = mid - 1;
        } else if(arr[mid] < key) {
            start = mid + 1;
        } else {
            ans = mid;
            start = mid + 1
        }
    }
    return ans;
}

function findLastAndFirstOccurance() {
    let first = firstPosition([1,2,3,3,3,3,4,5,5,5,5], 5)
    let last = lastPosition([1,2,3,3,3,3,4,5,5,5,5], 5)
    return last - first + 1
}