// given two arrays...
// Swap the elements of the odd index elements...

const cartA = ["apples", "bananas", "grapes", "oranges", "pears", "pineapple"];
const cartB = ["potatoes", "beans", "carrots", "spinnach", "kale", "broccoli"];

function swapArray(cartA, cartB) {
    for(let i = 0; i < cartA.length; i++) {
        if(i%2 !== 0) {
            [cartA[i], cartB[i]] = [cartB[i], cartA[i]];
        }
    }
    return {cartA, cartB};
}

console.log(swapArray(cartA, cartB));