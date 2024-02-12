console.log('start');

// callback................................................................................................
// function performAction(arg,callback) {
//     setTimeout(() => {
//         callback(`${arg} pause`);
//     }, 0);
// }

// function performAfterAction(callback) {
//     setTimeout(() => {
//         callback('After pause');
//     }, 0)
// }

// function lastAction(callback) {
//     setTimeout(() => {
//         callback('Action finished');
//     },1000);
// }

// const message = performAction('Action',(message) => {
//     performAfterAction((message) => {
//         console.log(message)
//         lastAction((message) => {
//             console.log(message)
//             lastAction((message) => {
//                 console.log(message)
//                 lastAction((message) => {
//                     console.log(message)
//                     lastAction((message) => {
//                         console.log(message)
//                         lastAction((message) => {
//                             console.log(message)
//                         })
//                     })
//                 })
//             })
//         })
//     });
//     console.log(message);
// });


// promises and async/await ................................................................................................
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value
function performAction(arg) {
    return new Promise((resolve, reject) => {
        resolve(`${arg} added.`)
    })
}

function performAfterAction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Action paused')
        },2000)
    })
}

function lastAction() {
    return new Promise((resolve, reject) => {
        reject('Action finished')
    })
}

// performAction('Action')
// .then((res) => {
//     console.log(res)
//     return performAfterAction();
// })
// .then((res) => {
//     console.log(res)
//     return lastAction()
// })
// .then((res) => {
//     console.log(res)
//     return lastAction();
// })
// .then((res) => {
//     console.log(res)
//     return lastAction();
// })
// .then((res) => {
//     console.log(res)
//     return lastAction();
// })
// .then((res) => {
//     console.log(res)
//     return lastAction();
// })
// .catch((error) => console.log(error));

// promise combinators -> helps to execute more than one promise at a time..................................
// 1. Promise.any -> returns the 1st fulfilled promise of the array...
// 2. Promise.race -> returns 1st promise of the array whether it is fullfilled or rejected...
// 3. Promise.all -> returns all promise but if there is any rejected promise then returns the error...
// 4. Promise.allSettled -> returns all promise and its fulfilled/rejected values...

// Promise.all([
//     performAction('Action'),
//     performAfterAction(),
//     lastAction()
// ])
// .then((res) => console.log(res))
// .catch((err) => console.log(err))



// async/await...
const result = async () => {
    try {
        const message1 = await performAction('Action');
        console.log(message1);
        const message2 = await performAfterAction();
        console.log(message2);
        const message3 = await lastAction();
        console.log(message3);
    } catch(err) {
        console.log(err)
    }
}

result();

console.log('stop');
