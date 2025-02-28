// brute force...
function majorityElement(arr) {
    for(let i = 0; i < arr.length; i++) {
        let count = 0;
        for(let j = 0; j < arr.length; j++) {
            if(arr[i] === arr[j]) {
                count++;
            }
        }
        if(count > parseInt(arr.length / 2)) return arr[i];
    }
    return -1;
}

// console.log(majorityElement([13,1]));

// optimal sol...
function majorityElementOptimal(arr) {
    let map = new Map();
    for(let i = 0;  i < arr.length; i++) {
        map.set(arr[i], (map.get(arr[i]) || 0 )+ 1);
    }

    for(let [keys, values] of map) {
        if(values.toString() > parseInt(arr.length / 2)) {
            return keys;
        }
    }
}

// console.log(majorityElementOptimal([3,1,3,3,2]));



// best sol...
// (moor's voting algorithm...)
function majorityElementBest(arr) {
    let ele = arr[0];
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === ele) {
            count++;
        } else {
            count--;
        }

        if(count === 0) {
            ele = arr[i+1];
        }
    }

    let res = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === ele) {
            res++;
        }
    }

    return res > arr.length/2 ? ele : -1;
}

console.log(majorityElementBest([3,1,3,3,2]));