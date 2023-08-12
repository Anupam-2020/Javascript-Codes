// Clone using Object.assign

const obj = {
    key1: "value1",
    key2: "value2"
}

const obj2 = {...obj}; // M-1 for object cloning.
const obj3 = Object.assign({},obj); // M-2 for object cloning.
obj.key3 = "value3";
console.log(obj3);