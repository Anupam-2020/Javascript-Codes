// to find 2nd largest number in array....

const second_largest_number_in_array = (arr) => {
    let max = Number.MIN_VALUE;
    let second_max = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            second_max = max;
            max = arr[i];
        }
        else if(arr[i] > second_max && arr[i] < max) {
            second_max = arr[i];
        }
    }
    return second_max
}


console.log(second_largest_number_in_array([1,9,3,4,5,0]))