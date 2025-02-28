// Minimum Cost to Make Array Equalindromic

// You are allowed to perform a special move any number of times (including zero) on nums. In one special move you perform the following steps in order:
// 1. Choose an index i in the range [0, n - 1], and a positive integer x.
// 2. Add |nums[i] - x| to the total cost.
// 3. Change the value of nums[i] to x.


// bruter force...
var checkPalindrome = function(val) {
    let str = val.toString();
    return str.split("").reverse().join("") === str;
}

var minimumCost = function(nums) {
    let length = nums.length;
    nums.sort((a,b) => a - b);
    let min = nums[0];
    let max =  nums[length - 1];
    let mid = nums[parseInt(length/2)];
    let minCost = Number.MAX_VALUE;
    
    for(let i = mid; i >= 0; i--) {
        if(checkPalindrome(i)) {
            min = i;
            break;
        }
    }

    for(let i = mid; i <= 1000000000; i++) {
        if(checkPalindrome(i)) {
            max = i;
            break;
        }
    }
    
    for(let i of [min, max]) {
        let palindrome = checkPalindrome(i);
        if(!palindrome) continue;
        let count = 0;
        for(let j = 0; j < length; j++) {    
            let diff = Math.abs(nums[j] - i);
            count += diff;
        }
        if(count < minCost) {
            minCost = count;
        }
        console.log(i);
    }
    return minCost;
};

console.log(minimumCost([1000000000,1000000000,1000000000,1000000000,1000000000]));