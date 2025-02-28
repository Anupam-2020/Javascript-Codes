function nonrepeatingCharacter(s)
{
    // code here
    const mp = new Map();
    for(let i in s) {
        mp.set(s.charAt(i), (mp.get(s.charAt(i)) || 0) + 1);
    }
    for(let [key] of mp) {
        // console.log(mp.get(key));
        if(mp.get(key) === 1) return key;
    }
    return '$';
}

console.log(nonrepeatingCharacter('Aannuuap'));