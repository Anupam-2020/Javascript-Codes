let arr = [1,2,3,[4,5,6],[3,4],[8,1,2], [2,[4,[5,6]]]];
// let res = arr.flat(2);

// custom flat method...
Array.prototype.myFlat = function(depth) {
    if(!Array.isArray(this)) throw new Error("Not an array");

    function flatArr(arr, depth) {
        if(depth === 0) {
            return arr;
        }
        let res = [].concat(...arr);
        return flatArr(res, depth-1);
    }
    return flatArr(this, depth);
}

// console.log(arr.myFlat(3))