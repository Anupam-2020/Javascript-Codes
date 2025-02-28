const remove_duplicates_from_sorted_array = (arr) => {
    let set = Array.from(new Set(arr));
    return set.length
}

const remove_duplicates_from_sorted_array_3rd_approach = (arr) => {
    let j = 1;
    let i = 0;
    while(j < arr.length) {
         if(arr[i] !== arr[j]) {
            arr[i+1] = arr[j];
            i++;
        }
        j++;
    }
    console.log(arr.slice(0, i+1));
}


function remove_duplicates_from_sorted_array_map(arr) {
    let map = new Map();
    for(let i = 0; i < arr.length; i++) {
        map.set(arr[i], (map.get(arr[i]) || 0) + 1);
    }

    return Array.from(map.keys());
}


// console.log(remove_duplicates_from_sorted_array([0,0,1,1,1,2,2,2,2,2,3,3,4]))
// remove_duplicates_from_sorted_array_2nd_approach([0,0,1,1,1,2,2,2,2,2,3,3,4])
remove_duplicates_from_sorted_array_3rd_approach([0,0,1,1,1,2,2,2,2,2,3,3,4,4])
// console.log(remove_duplicates_from_sorted_array_map([0,0,1,1,1,2,2,2,2,2,3,3,4]))