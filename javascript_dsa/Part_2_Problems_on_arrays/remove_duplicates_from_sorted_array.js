const remove_duplicates_from_sorted_array = (arr) => {
    let set = Array.from(new Set(arr));
    return set.length
}


const remove_duplicates_from_sorted_array_2nd_approach = (arr) => {
    let i = 0;
    let j = i + 1;
    while( i < arr.length - 1 && j < arr.length) {
        if(arr[i] === arr[j] && i < j) {
            arr[j] = Number.POSITIVE_INFINITY;
            j++;
        }
        else {
            i = j;
            j = i + 1;
        }
    }
    let count = 0;
    for(let i of arr) {
        if(i === Number.POSITIVE_INFINITY) {
            count++;
        }
    }

    let start = 0;
    while(start < arr.length) {
        if(arr[start] === Number.POSITIVE_INFINITY) {
            arr.splice(start,1);
            start--;
        }
            start++;
    }

    console.log(arr)
}

const remove_duplicates_from_sorted_array_3rd_approach = (arr) => {
    let j = 0;
    for(let i = 1; i < arr.length; i++) {
        if(arr[j] !== arr[i]) {
            j++;
            arr[j] = arr[i];
        }
    }
    console.log(j+1)
}


console.log(remove_duplicates_from_sorted_array([0,0,1,1,1,2,2,2,2,2,3,3,4]))
remove_duplicates_from_sorted_array_2nd_approach([0,0,1,1,1,2,2,2,2,2,3,3,4])
remove_duplicates_from_sorted_array_3rd_approach([0,0,1,1,1,2,2,2,2,2,3,3,4])