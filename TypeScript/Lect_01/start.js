var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var greetings = "Hello World";
var user = { name: "Anupam", age: 27 };
console.log(greetings.toLowerCase());
console.log(user.name);
var arr = [2, 3, 4];
var arr2 = __spreadArray(__spreadArray([], arr, true), [4, 5], false);
console.log(arr2);
