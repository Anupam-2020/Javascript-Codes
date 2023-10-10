function isPalindrome(S){
    //code here
    // let revS = S.split("").reverse().join("");
    let length = S.length;
    for(let i = 0, j = length - 1; i < j; i++, j--) {
        if(S.charAt(i) != S.charAt(j)) return 0
    }
    return 1;
}
// console.log(isPalindrome('AnuqnA'));

// Solution - 2....

function isPalindrome2(S) {
    let revS = S.split("").reverse().join("");
    return revS == S ? 1 : 0;
}