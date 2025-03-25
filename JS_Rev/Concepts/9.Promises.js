console.log("start");
// function importantAction(username, cb) {
//     setTimeout(() => {
//         cb(`My name is ${username}`)
//     }, 1000)
// }

// function veryImportantAction(user, cb) {
//     setTimeout(() => {
//         cb(`My nickname is ${user}`);
//     }, 100)
// }


// importantAction("Anupam", function(message) {
//     console.log(message);
//     veryImportantAction('Anand', (message) => console.log(message))
// })
console.log("stop");


// using promises...................................................................
function importantAction(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`My name is ${username}`)
        }, 1000)
    })
}

function veryImportantAction(user) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej(`My nickname is ${user}`);
        }, 100)
    })
}

// let res = importantAction('Anupam')
// res
// .then((res) => {
//     console.log(res);
//     return veryImportantAction('Anand')
// })
// .then((res) => console.log(res))
// .catch((err) => console.log(err)
// )



// let data = Promise.resolve('Data retrived')
// data
// .then((res) => console.log(res))
// .catch((err) => console.log(err))



// using promise combinators...................................................................
// 1. Promise.all(rejects even if one of all promises gets rejected)
let res = Promise.all([
    importantAction('Anupam'),
    veryImportantAction('Anand')
])

res
.then((res) => console.log(res))
.catch((err) => console.log(err))


// 2. Promise.race
let res2 = Promise.race([
    importantAction('Anupam'),
    veryImportantAction('Anand')
])

res2
.then((res) => console.log(res))
.catch((err) => console.log(err))


// 3. Promise.allSettled
let res3 = Promise.allSettled([
    importantAction('Anupam'),
    veryImportantAction('Anand')
])

res3
.then((res) => console.log(res))
.catch((err) => console.log(err))


// 4. Promise.any
let res4 = Promise.allSettled([
    importantAction('Anupam'),
    veryImportantAction('Anand')
])

res4
.then((res) => console.log(res))
.catch((err) => console.log(err))


// using async/await

const result = async () => {
    try {
        let message = importantAction('Anupam')
    console.log(message);
    let message2 = veryImportantAction('Anand')
    console.log(message2);
    } catch (error) {
        console.log(error);
        
    }
}

result()