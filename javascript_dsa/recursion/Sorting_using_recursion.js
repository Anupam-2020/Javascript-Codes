// merge sort...

function merge_sort(arr, start, end) {
    if(start >= end) {
        console.log(arr[start]);
        return;
    }

    let mid = parseInt((start + end)/2);
    merge_sort(arr, start, mid);
    merge_sort(arr, mid+1, end);
}

merge_sort([3,1,2,4,1,5,2], 0, 7);