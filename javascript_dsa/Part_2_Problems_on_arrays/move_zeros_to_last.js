let arr = [1,2,0,0,3,0,5,0,0,3,5,6,7,0,1];

function moveZerosToLast(arr, n) {
    let temp = [];
    for(let i of arr) {
        if(i !== 0) {
            temp.push(i);
        }
    }

    for(let i = 0; i< temp.length; i++) {
        arr[i] = temp[i];
    }

    for(let i = temp.length; i < arr.length; i++) {
        arr[i] = 0;
    }
}


// moveZerosToLast(arr, arr.length);
// console.log(arr)



// optimised....
function moveZerosToLast2(arr, n) {
    let i = 0; 
    let j = 0;
    while(i < n && j < n) {
        if(arr[j] !== 0) {
            j++;
        } 

        else if(arr[i] !== 0 && arr[j] === 0) {
            arr[j] = arr[i];
            arr[i] = 0;
            j++;
        }

        i++;
    }

    for(let k = j; k < n; k++) {
        arr[k] = 0;
    }
}

moveZerosToLast2(arr, arr.length);
console.log(arr);