// book allocation problem.

// arr -> array of books where each element represents no. of pages of book.
// students -> no. of students.


// ceiling of an array.
let arr = [800, 900, 950, 1100];
let dep = [1200, 1030, 1020, 1300];

arr.sort((a,b) => a - b);
dep.sort((a,b) => a - b);
let maxPlatform = 0;
let platform = 0;
let i = 0;
let j = 0;
while(i < arr.length) {
    if(arr[i] <= dep[j]) {
        platform++;
        i++;
    } else {
        platform--;
        j++;
    }
    maxPlatform = maxPlatform > platform ? maxPlatform : platform;
}

console.log(maxPlatform)



function findNumber(arr, start, end, x) {
    let mid = start + parseInt((end - start)/2);
    if(start > end) return false;
    
    if(arr[mid] < x) return lastOccurance(arr, mid+1, end, x);
    else if(arr[mid] > x) return lastOccurance(arr, start, mid-1, x); 
    else return mid
}

console.log(findNumber(arr, 0, arr.length-1, 899))