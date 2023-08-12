// filter method.

const numbers = [2,4,5,1,8,10,3];

const evenNumbers = numbers.filter(number => {
    return number % 2 === 0;
});

console.log(evenNumbers);