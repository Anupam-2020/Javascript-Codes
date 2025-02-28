// most optimal ( dutch national flag algorithm )
function sort0s1sAnd2s(arr) {
    let i = 0;
    let mid = 0;
    let j = arr.length - 1;

    while(mid < j) {
        if(arr[mid] === 0) {
            let temp = arr[i];
            arr[i] = arr[mid];
            arr[mid] = temp;
            i++;
            mid++;
        } else if(arr[mid] === 2) {
            let temp = arr[j];
            arr[j] = arr[mid];
            arr[mid] = temp; 
            j--;
        } else {
            mid++;
        }
        
    }
    return arr;
}

console.log(sort0s1sAnd2s([1,0,0,2,1,1,0]))