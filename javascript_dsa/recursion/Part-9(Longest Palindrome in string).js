// product of two numbers.

function product(x, y) {
    if(x < y) return product(y ,x);

    else if(x !== 0) {
        return y + product(y, x - 1);
    }

    else return 0;
}

// console.log(product(2,5))

// longest palindromic sub-string...

function longestPalindrome(string, first, last, count) {
    if(first > last) return count;

    if(first === last) return count + 1;

    if(string.charAt(first) === string.charAt(last)) {
        let presentCount = longestPalindrome(string, first + 1, last - 1, count + 2)
        return Math.max(presentCount, Math.max(longestPalindrome(string, first + 1, last, 0), longestPalindrome(string, first, last - 1, 0)))
    } else {
        return Math.max(longestPalindrome(string, first + 1, last, 0), longestPalindrome(string, first, last - 1, 0))
    }
}

let string = "abcczzcczba"
let string2  ="anupamma"
console.log(longestPalindrome(string, 0, string.length - 1, 0));