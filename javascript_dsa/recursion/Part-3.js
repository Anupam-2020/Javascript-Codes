// to find if array is sorted or not.
const isSorted = (arr, i) => {

    if(arr.length === 1 || arr.length === 0) return true
    if(i === arr.length - 1) return true
    if(arr[i] > arr[i+1]) return false
    return isSorted(arr, i + 1)
}

// to find the sum of given array elements.
const arraySum = (arr, i, sum) => {
    if(i === arr.length) return sum
    return arraySum(arr, i + 1, sum + arr[i])
}

// linear search problem.
const linearSearch = (arr, key, i) => {
    if(arr[i] === key) return true
    if(i === arr.length) return false
    return linearSearch(arr, key, i + 1)
}

const binarySearch = (arr, start, end, key) => {
    let mid = parseInt(start + (end - start)/2)
    if(start > end) return false
    if(arr[mid] === key) return true
    else if(arr[mid] < key) {
        start = mid + 1
    } else {
        end = mid - 1
    }
    return binarySearch(arr, start, end, key)
}

console.log(binarySearch([1,2,3,6,8], 0, 4, 9))