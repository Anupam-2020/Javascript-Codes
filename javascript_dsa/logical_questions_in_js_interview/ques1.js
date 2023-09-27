// count the no. of fruits in the array -> key represents (fruit) and value represents (no. of fruits)
const fruits = [
    {
        apple: 4,
        orange: 7,
        guava: 3
    }, 
    {
        guava: 6,
        lemon: 4,
        banana: 8,
    },
    {
        orange: 5,
        pineapple: 7,
        apple: 7
    }
]

const countedFruits = {}

fruits.forEach(ele => {
    for(let i in ele) {
         countedFruits[i] = countedFruits[i] ? countedFruits[i] + ele[i] : ele[i]
    }
})


console.log('app -> '+countedFruits['apple'])