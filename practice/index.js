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

// var value = 'Anupam';

// console.log(window.value);


// let arr = [1,2,4];
// arr.splice(0,arr.length);
// console.log(arr); 

const handler = {
    set:() => {
        console.log("Added a new property");
    },
    get: function() {
        console.log("Accessed a new property");
    }
}

const person = new Proxy({}, handler);

person.name1 = 'Added';
person.name1