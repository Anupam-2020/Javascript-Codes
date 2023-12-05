function lcs(str1, str2) {
    if(str1.length === 0 || str2.length === 0) return 0;

    if(str1.charAt(0) === str2.charAt(0)) {
        return 1 + lcs(str1.substring(1,), str2.substring(1,))
    }

    return Math.max(lcs(str1.substring(1,), str2), lcs(str1, str2.substring(1,)))
}


let str1 = "anupam";
let str2 = "anuuuapm"
console.log(lcs(str1, str2));