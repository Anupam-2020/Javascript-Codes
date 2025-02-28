function reverseWords(s) {
    // code here
    let sentence = s.split(".");
    s = "";
    // console.log(sentence.reverse())
    for(let i = sentence.length - 1; i > 0; i--) {
        s = s + sentence[i]+'.';
    }
    s = s + sentence[0];
    return s;
}

console.log(reverseWords('Anupam.is.good'));