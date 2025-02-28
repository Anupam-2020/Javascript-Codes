function palindromePartitioning(string, index, ans, res) {
    if(index === string.length) {
        ans.push([...res])
        return;
    }

    for(let i = index; i < string.length; i++) {
        if(isPalindrome(string, index, i)) {
            res.push(string.substring(index, i+1));
            palindromePartitioning(string, i + 1, ans, res);
            res.pop();
        }
    }
}

function isPalindrome(string, start, end) {
    while(start <= end) {
        if(!(string.charAt(start++) === string.charAt(end--))) {
            return false;
        }
    }
    return true;
}

let ans = [];
palindromePartitioning("aab", 0, ans, []);
console.log(ans);