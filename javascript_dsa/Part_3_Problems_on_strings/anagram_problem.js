function anagram(str1, str2) {
    if(str1.length !== str2.length) return false
    return str1.split("").sort().join("") === str2.split("").sort().join("") ?  true : false
}

console.time("ana")
console.log(anagram('anupamppppppppppp','appppnpppupppampp'));
console.timeEnd('ana')


// another sol.-------------------------------------------------------------
function anagram2(str1, str2) {

    if(str1.length !== str2.length) return false;

    const obj1 = {};
    const obj2 = {};

    for(let i = 0; i < str1.length; i++) {
        obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
        obj2[str2[i]] = (obj2[str2[i]] || 0) + 1;
    }

    for(let key in obj2) {
        if(obj1[key] !== obj2[key]) return false
    }
    return true
}

console.time("ana")
console.log(anagram2('anupamppppppppppp','appppnpppupppampp'))
console.timeEnd("ana")