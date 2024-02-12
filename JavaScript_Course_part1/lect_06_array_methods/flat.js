let arr = [1,2,3,[4,5,6],[3,4],[8,1,2], [2,[4,[5,6]]]];
// let res = arr.flat(2);

// custom flat method...
function myFlat(arr, depth) {
    if(depth === 0) return arr;
    let res = [].concat(...arr);
    return myFlat(res, depth-1);
}

// console.log(myFlat(arr, depth));