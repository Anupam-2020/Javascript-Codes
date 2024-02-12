function showText(text, time) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(text);
        },time)
    });
}

Promise.all([
    showText("Anupam", 1000),
    Promise.resolve("Hi"),
    Promise.resolve("bye")
]).then((value) => console.log(value))
.catch((err) => console.log(err))


// promise.all polyfill...................................................................
function myPromiseAll(promises) {
    let result = [];
    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            promise.then((res) => {
                result.push(res);
                if(index === promises.length - 1) {
                    resolve(result)
                }
            }).catch((err) => reject(err))
        })
    })
}

myPromiseAll([
    showText("Anupam", 1000),
    Promise.resolve("Hi"),
    Promise.resolve("Bye")
]).then((value) => console.log(value))
.catch((err) => console.log(err))