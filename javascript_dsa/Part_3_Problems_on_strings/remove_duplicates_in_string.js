function removeDups(str){
    //code here
    const set = new Set();
    for(let i = 0; i < str.length; i++) {
        set.add(str.charAt(i));
    }
    // console.log(Array.from(set).join(""));
    return Array.from(set).join("")
}

// Solution 2...
function removeDups2(str){
    //code here
    const strObj = {};
    let result = "";
    for(let i of str) {
        if(!strObj[i]) {
            strObj[i] = i;
            result+=i;
        }
    }
    return result;
}