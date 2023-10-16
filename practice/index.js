// const ele = document.querySelector('input');

// function hotDebounce() {
//   let timer;

//   return function() {
//     if(timer) {
//       clearTimeout(timer);
//     console.log(timer);
//     }
//     timer = setTimeout(() => {
//         console.log('Event added');
//     }, 1000);
//   }
// }

// ele.addEventListener('keyup',hotDebounce());

// var value = 'Anupam';

// console.log(window.value);


// let arr = [1,2,4];
// arr.splice(0,arr.length);
// console.log(arr);

function findElement(arr,n){
    //code here
    let max = arr[n-1];
    let index = n - 1;
    for(let i=n-1; i>0; i--) {
        for(let j = 0; j < i; j++) {
            if(arr[j] > arr[i]) {
                return index === n-1 ? -1 : max;
            }
        }
        max = arr[i];
        index = i;
    }
    return max;
}

console.log(findElement([9 ,8 ,5 ,6 ,1 ,10 ,10], 7));