// const ele = document.querySelector('input');

// function hotDebounce() {
//   let timer;
  
//   return function() {
//     if(timer) {
//       clearTimeout(timer);
//     console.log(timer);
//     }
//     timer = setTimeout(() => {
//         console.log('Event added');
//     }, 1000);
//   }
// }



// ele.addEventListener('keyup',hotDebounce());

const arr = [1,2,3,4,5];

// producing a promise....
const promiseReturn = new Promise((resolve, reject) => {
  if(arr.includes(3))
  resolve('Hello correct');

  else 
  reject('False');
})

// consuming a promise....
// promiseReturn
// .then((data) => {
//   console.log(data);
// })
// .catch((error) => {
//   console.log(error);
// })

// consuming with async/await....
async function getData() {
  try {
    const response = await promiseReturn;
    console.log(response)
  } catch(err) {
    console.log(err);
  }
}

getData()