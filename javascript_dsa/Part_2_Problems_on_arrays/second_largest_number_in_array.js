// to find 2nd largest number in array....

const findSecondMaxSecondMin = (arr) => {

    let max = Number.MIN_VALUE;
    let secondMax = 0;

    let min = Number.MAX_VALUE;
    let secondMin = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            secondMax = max;
            max = arr[i];
        }

        else if(arr[i] > secondMax && arr[i] < max) {
            secondMax = arr[i];
        }

        if(arr[i] < min) {
            secondMin = min;
            min = arr[i];
        }

        else if(arr[i] < secondMin && arr[i] > min) {
            secondMin = arr[i];
        }
    }

    return `${secondMin}, ${secondMax}`;
}


function findSecondMaxSecondMinRecursive(arr, index, max, min, secondMax, secondMin) {
    if(index === arr.length) {
        return {secondMax, secondMin};
    }
    if(arr[index] > max) {
        secondMax = max;
        max = arr[index];
    }

    else if(arr[index] > secondMax && arr[index] < max) {
        secondMax = arr[index];
    } 

    if(arr[index] < min) {
        secondMin = min;
        min = arr[index];
    } 

    else if(arr[index] < secondMin && arr[index] > min) {
        secondMin = arr[index];
    }

    return findSecondMaxSecondMinRecursive(arr, index + 1, max, min, secondMax, secondMin);
}


console.log(findSecondMaxSecondMinRecursive([1,9,3,4,5,0], 0, Number.MIN_VALUE, Number.MAX_VALUE, 0));