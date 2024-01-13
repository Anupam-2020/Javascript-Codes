function decimalToBinaryConversion1(num) {
    let n = 0, j;
    let str = "";
    for(let i = 15; i >= 0; i--) {
        n = 1 << i;
        console.log(n);
        j = n & num;
        if(j == 0) {
            str = str + "0"
        } else {
            str = str + "1";
        }
    }
    return str;
}


// recursive approach of above function...
let str = "";
function decimalToBinaryConversion2(num) {
    if(num == 0) return;
    decimalToBinaryConversion2(parseInt(num/2));
    str+= num%2;
}

decimalToBinaryConversion2(26);
console.log(str);