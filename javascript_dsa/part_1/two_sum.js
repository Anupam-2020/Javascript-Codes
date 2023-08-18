function twoSum(arr, value) {
    let index = []
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i] + arr[j] === value) {
                index.push(i)
                index.push(j)
                break;
            }
        }
    }
    return index
}

console.time('sum')
console.log(twoSum([2,7,11,15], 9));
console.timeEnd('sum')


function twoSumOptimised(arr, value) {
    const comp = {};
    for(let i=0; i<arr.length; i++){
        if(comp[value - arr[i]]>=0){
            return [ comp[value - arr[i]] , i]
        }
        comp[arr[i]] = i
    }
    return comp
}
console.time('opt')
console.log(twoSumOptimised([2,7,11,15],23))
console.timeEnd('opt')