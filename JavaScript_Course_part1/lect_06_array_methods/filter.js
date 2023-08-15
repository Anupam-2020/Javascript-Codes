// filter method.

const numbers = [2,4,5,1,8,10,3];

const evenNumbers = numbers.filter(number => {
    return number % 2 === 0;
});

console.log(evenNumbers);



// polyfill for filter.
Array.prototype.myFilter = function(cb) {
    let temp = []
    for(let i = 0; i < this.length; i++) {
        if(cb(this[i], i ,this)) temp.push(this[i])
    }
    return temp
}

const filteredArray = numbers.myFilter((num) => {
    return num > 2;
})

console.log(filteredArray);