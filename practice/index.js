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

function winner(arr, n){
    // code here
    const mp = new Map();
    for(let i of arr) {
        mp.set(i, (mp.get(i) || 0) + 1);
    }
    
    const array = [...mp.values()].sort((a,b) => b- a);
    
    const winner_value = array[0];
    
    const sortedMp = new Map();
    
    for(let [key, value] of mp) {
        if(mp.get(key) === array[0]) {
            sortedMp.set(key, value);
        }
    }
    
    const winnerArray = [...sortedMp].sort();
    // console.log(winnerArray[0]);
    return winnerArray[0];
}

console.log(winner(['john', 'johnny' ,'jackie', 'johnny' ,'john' ,'jackie' ,'jamie', 'jamie' ,'john' ,'johnny' ,'jamie' ,'johnny', 'john' ]));