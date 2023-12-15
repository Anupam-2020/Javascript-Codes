function unionOfArrays(arr1, arr2, m, n) {
    let i = 0;
    let j = 0;
    let union= [];
    let lastEle = -1;

    while(i < m && j < n) {
        if(arr1[i] === arr2[j]) {
            if(lastEle !== arr1[i]) {
                union.push(arr1[i]);
                lastEle = arr1[i];
            }
            i++;
            j++;
        } else if(arr1[i] < arr2[j]) {
            if(lastEle !== arr1[i]) {
                union.push(arr1[i]);
                lastEle = arr1[i];
            }
            i++;
        } else if(arr2[j] < arr1[i]) {
            if(lastEle !== arr2[j]) {
                union.push(arr2[j]);
                lastEle = arr2[j];
            }
            j++;
        }
    }

    while(i < m) {
        if(lastEle !== arr1[i]) {
            union.push(arr1[i]);
            lastEle = arr1[i];
        }
        i++;
    }

    while(j < n) {
        if(lastEle !== arr2[j]) {
            union.push(arr2[j]);
            lastEle = arr2[j];
        }
        j++;
    }
    console.log(union);
}

// let arr1 = [1, 4, 18, 19, 19, 28, 29, 32, 35, 35, 39, 39, 44, 49, 49, 50, 50];
// let arr2 = [8, 19, 28, 29, 32, 35];

let arr1 = [4,9,5];
let arr2 = [9,4,9,8,4]

// unionOfArrays(arr1, arr2, arr1.length, arr2.length);
function intersectionOfArrays(arr1, arr2, m, n) {
    arr1.sort((a,b) => a - b);
    arr2.sort((a, b) => a - b);
    let i = 0;
    let j = 0;
    let lastEle = -1;
    let intersection = [];

    while(i < m && j < n) {
        if(arr1[i] === arr2[j]) {
            if(arr1[i] !== lastEle) {
                intersection.push(arr1[i]);
                lastEle = arr1[i];
            }
            i++;
            j++;
        } else if(arr1[i] > arr2[j]) {
            j++;
        } else {
            i++;
        }
    }

    console.log(intersection);
}

intersectionOfArrays(arr1, arr2, arr1.length, arr2.length);