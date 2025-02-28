const str = "AnupamAnand";

function reverseArray(str) {
    if(str.length === 0) return str;
    return str[str.length - 1] + reverseArray(str.slice(0, str.length - 1));
}

console.log(reverseArray(str));