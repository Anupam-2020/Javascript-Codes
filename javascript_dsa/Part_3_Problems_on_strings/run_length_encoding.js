function encode(str){
    // code here
    let resStr = "";
    resStr = str[0];
    let count = 1;
    for(let i = 1; i <= str.length; i++) {
        if(str[i] === str[i-1]) {
            count++;
        } else {
            resStr = resStr + count.toString();
            resStr = resStr + str[i];
            count = 1;
        }
    }
    // console.log(mp);
    const res = resStr.slice(0, resStr.length - 9)
    return res;
}

// Note:- if string is aaaabbbccc then output should be a4b3c3.