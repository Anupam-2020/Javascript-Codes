// to find the element which is non repeating in array.

// brute force...
function elementAppearingOnceInArray(arr) {
    for(let i = 0; i < arr.length; i++) {
        let count = 0;
        for(let j = 0; j < arr.length; j++) {
            if(arr[i] === arr[j]) {
                count++;
            }
        }
        if(count === 1) {
            return arr[i];
        }
        count = 0;
    }
}

console.time("first")
console.log(elementAppearingOnceInArray([1,1,2,3,3,4,4,19,19]));
console.timeEnd("first")


// better sol...
function elementAppearingOnceInArrayOptimised(arr) {
    let maxElement = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > maxElement) maxElement = arr[i];
    }

    let map = Array(maxElement + 1).fill(0);
    
    for(let i = 0; i < arr.length; i++) {
        map[arr[i]] = map[arr[i]] + 1;
    }
    
    for(let i = 0; i < map.length; i++) {
        if(map[i] === 1) return i;
    }
}

console.time("opt")
console.log(elementAppearingOnceInArrayOptimised([1,1,2,3,3,4,4,19,19]));
console.timeEnd("opt");


// better in terms of space sol...
function elementAppearingOnceInArrayBetterSol(arr) {
    let map = new Map();
    for(let i of arr) {
        map.set(i, (map.get(i) || 0 ) + 1);
    }

    for(let [keys, values] of map) {
        if(values === 1) return keys;
    }
}

console.time("better")
console.log(elementAppearingOnceInArrayBetterSol([1,1,2,3,3,4,4,19,19]));
console.timeEnd("better")


// best sol...
function elementAppearingOnceInArrayBest(arr) {
    let xor = 0;
    for(let i of arr) {
        xor = xor^i;
    }

    console.log(xor);
}

console.time("best");
elementAppearingOnceInArrayBest([1,1,2,3,3,4,4,19,19]);
console.timeEnd("best");