// to find the most repeated string of array with no. of repeatation...

function winner(arr, n){
    // code here
    const mp = new Map();
    for(let i of arr) {
        mp.set(i, (mp.get(i) || 0) + 1);
    }
    
    for(let i = 0; i < n; i++) {
        arr.pop();
    }
    
    const array = [...mp.values()].sort((a,b) => b- a);
    
    const winner_value = array[0];
    
    const sortedMp = new Map();
    
    for(let [key, value] of mp) {
        if(mp.get(key) === array[0]) {
            sortedMp.set(key, value);
        }
    }
    
    arr = [...sortedMp].sort()[0];
    // console.log(winnerArray[0]);
    
    return arr;
}
