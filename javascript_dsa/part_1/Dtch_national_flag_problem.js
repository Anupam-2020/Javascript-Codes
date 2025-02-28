// Sort an array of 0s, 1s and 2s | Dutch National Flag problem...........................
function sort012sArray(arr) {
    let start = 0;
    let end = arr.length - 1;
    let mid = 0;
    while(mid <= end) {
        switch(arr[mid]) {
            case 0: {
                let temp = arr[start];
                arr[start] = arr[mid];
                arr[mid] = temp;
                start++;
                mid++;
                break;
            }
            case 1: {
                mid++;
                break;
            } 
            case 2: {
                let temp = arr[mid];
                arr[mid] = arr[end];
                arr[end] = temp;
                end--;
                break;
            }
        }
    }

    return arr;
}

console.log(sort012sArray([0,2,1,2,1,1,0,0,2]))