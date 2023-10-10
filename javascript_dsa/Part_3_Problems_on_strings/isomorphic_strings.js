//Function to check if two strings are isomorphic.
function areIsomorphic(str1, str2)
{
    // code here
    if(str1.length !== str2.length) return false;
    else {
        let mp = new Map();
        let mp2 = new Map();
        for(let i in str1) {
            let ch1 = str1.charAt(i);
            let ch2 = str2.charAt(i);
            if(mp.has(ch1) && mp.get(ch1) !== ch2) {
                return false;
            }
            if(mp2.has(ch2) && mp2.get(ch2) != ch1) {
                return false;
            }
            else {
                mp.set(ch1, ch2);
                mp2.set(ch2, ch1);
            }
        }
        // console.log(mp);
        // console.log(mp2);
        return true;
    }
}

console.log(areIsomorphic('aab', 'xys'));