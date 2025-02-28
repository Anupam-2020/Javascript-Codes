const addBy10 = (x) => {
    return x + 10;
}

const multiplyBy3 = (x) => {
    return x * 3;
}

const subtractBy10 = (x) => {
    return x - 10;
}

// const customComposition = (...funArgs) => (value) => funArgs.reduce((res, fun) => fun(res), value);

const customComposition = (...funArgs) => {
    return function(value) {
        return funArgs.reduce((res, fun) => {
            return fun(res)
        }, value)
    }
}


const result = customComposition(addBy10, multiplyBy3, subtractBy10);
console.log(result(5));