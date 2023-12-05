// product of two numbers.

function product(x, y) {
    if(x < y) return product(y ,x);

    else if(x !== 0) {
        return y + product(y, x - 1);
    }

    else return 0;
}

console.log(product(2,5))