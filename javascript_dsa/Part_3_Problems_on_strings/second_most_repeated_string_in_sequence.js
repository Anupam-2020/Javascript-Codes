// find 2nd most repeated string in string-array...

function secFrequent(arr,n){
    //code here
    let mp = new Map();
    
    for(let i of arr) {
        if(mp.has(i)) {
            mp.set(i, mp.get(i)+1);
        } else {
            mp.set(i, 1);
        }
    }
    
    const array = Array.from(mp);
    return array.sort((a,b) => b[1] - a[1])[1][0];
}

