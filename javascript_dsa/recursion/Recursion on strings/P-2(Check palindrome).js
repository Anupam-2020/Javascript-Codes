function checkPalindrome(str, start, end) {
    if(start >= end) return true;
    if(str.charAt(start) !== str.charAt(end)) return false;
    return checkPalindrome(str, start + 1, end - 1);
}

console.log(checkPalindrome("anupuna", 0, 6))

function checkPower(num, pow) {
    if(pow === 0) return 1;
    if(pow === 1) return num;
    let ans =  num * checkPower(num, parseInt(pow /2));
    if(pow % 2 === 0) return ans * ans;
    if(pow % 2 !== 0) return num * ans * ans;
}

console.log(checkPower(3, 4));