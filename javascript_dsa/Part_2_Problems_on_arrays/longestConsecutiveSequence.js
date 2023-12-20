// optimal solution...
function longestConsecutiveSequence(arr) {
    let count = 1;
    let maxCount = 0;

    arr.sort((a,b) => a - b);

    for(let i = 0; i < arr.length; i++) {
        if(arr[i]+1 === arr[i+1]) {
            count++;
        } else if(arr[i] === arr[i+1]){ // to ignore repeated elements.
            continue;
        } else {
            count = 1;
        }

        if(maxCount < count) {
            maxCount = count;
        }
    }

    return maxCount;
}

console.log(longestConsecutiveSequence([1,2,0,1]));