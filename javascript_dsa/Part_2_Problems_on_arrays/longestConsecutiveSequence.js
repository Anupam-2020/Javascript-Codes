// optimal solution...
function longestConsecutiveSequence(arr) {
    let count = 1;
    let maxCount = 0;

    arr.sort((a,b) => a - b);

    for(let i = 1; i < arr.length; i++) {
        if(arr[i-1] == arr[i]) {
            continue;
        }
        if(arr[i-1]+1 == arr[i]) {
            count++;
            if(maxCount < count) {
                maxCount = count;
            }
        } else {
           count = 1;
        }
    }

    return maxCount;
}

console.log(longestConsecutiveSequence([1,2,0,1]));