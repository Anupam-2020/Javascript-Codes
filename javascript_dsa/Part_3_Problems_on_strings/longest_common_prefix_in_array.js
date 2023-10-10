function longestCommonPrefix(arr,n){ 
    //code here
    let shortestString = arr[0];
    for(let i of arr) {
        if(shortestString.length > i.length) {
            shortestString = i
        }
    }
    
    let output = ""; // contains output string
    
    for(let i in shortestString) { // iteration over the shortestString as it is the only string which has the possibility to be present in all strings in array... 
        let flag = 0;
        for(let j of arr) { // iteration over array strings to match each character of shortString with array strings...
            if(shortestString[i] !== j[i]) {
                flag = 0
                break;
            }
            if(shortestString[i] === j[i]) {
                flag = 1
            }
        }
        if(flag === 1) {
            output = output.concat(shortestString[i]); // concatenating all common characters...
        } else break;
        // console.log(output)
    }
    return output.length === 0 ? '-1': output;
}

console.log(longestCommonPrefix(['geeksforgeeks', 'geeks', 'geek', 'geezer']));