// divide an array- nums into arrays of size 3 such -> 
// 1. Each element of nums should be in exactly one array.
// 2. The difference between any two elements in one array is less than or equal to k.
// 3. Eg -> if there are 9 elements then 3 arrays should be there else return [];

// brute force...
var divideArray = function(nums, k) {
    let res = [];
    let arr = [];
    nums.sort((a,b) => a - b);
    for(let i = 0; i < nums.length - 2; i+=3) {
        // if(nums[i] === -1) continue;
        arr.push(nums[i]);
        // let check = [];
        for(let j = i+1; j < nums.length; j++) {
            // if(nums[j] === -1) continue;
            if(Math.abs(nums[i] - nums[j]) <= k) {
                arr.push(nums[j]);
                // check.push(j);
            } else {
                return [];
            }
            if(arr.length === 3) {
                res.push(arr);
                arr = [];
                // nums[check[0]] = -1;
                // nums[check[1]] = -1;
                // check = [];
                break;
            }
        }
        arr = [];
    }
    return res;
};

console.log(divideArray([1,3,4,8,7,9,3,5,1], 2));


// optimal sol...
var divideArray = function(nums, k) {
    nums.sort((a,b) => a - b);
    let res = [];
    for(let i = 0; i < nums.length-2; i+=3) {
        if(nums[i+2] - nums[i] > k) {
            return [];
        }
        res.push([nums[i], nums[i+1], nums[i+2]]);
    }
    return res;
};