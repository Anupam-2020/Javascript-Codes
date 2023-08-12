// general callback.............................................................................

// function getNumbersAndAdd(num1, num2, onSuccess, onFailure) {
//   typeof num1 === "number" && typeof num2 === "number"
//     ? onSuccess(num1, num2)
//     : onFailure();
// }

// function onSuccess(num1, num2) {
//   console.log(num1 + num2);
// }

// function onFailure() {
//   console.log("Wrong data type");
// }

// getNumbersAndAdd("4", 4, onSuccess, onFailure);

// asynchronous callback..........................................................................

// changing the color and text-content of headings in regular interval using setInterval.
// let count = 1;
// let id = setInterval(() => {
//     const heading = document.querySelector(`.heading${count}`);
//     heading.textContent = `heading ${count}`
//     heading.style.color = 'violet';
//     count+=1;
// },1000);

// if(count === 7)  clearInterval(id);

// Q1. changing the color and text-content of headings in regular interval using nested callbacks....................

// callback hell............................................................
// setTimeout(() => {
//   let heading = document.querySelector(".heading1");
//   heading.textContent = "heading 1";
//   heading.style.color = "violet";
//   setTimeout(() => {
//     heading = document.querySelector(".heading2");
//     heading.textContent = "heading 2";
//     heading.style.color = "purple";
//     setTimeout(() => {
//       heading = document.querySelector(".heading3");
//       heading.textContent = "heading 3";
//       heading.style.color = "red";
//       setTimeout(() => {
//         heading = document.querySelector(".heading4");
//         heading.textContent = "heading 4";
//         heading.style.color = "pink";
//         setTimeout(() => {
//             heading = document.querySelector(".heading5");
//             heading.style.color = "blue";
//             heading.textContent = "heading 5";
//         }, 2000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// Q1.in more readable format(eliminating callback hell)...................................................

// function changeText(element, text, color, time, anotherElement, onFailureTask) {
//   setTimeout(() => {
//     if(element){
//       element.textContent = text;
//       element.style.color = color;
//       anotherElement();
//     } else {
//       onFailureTask();
//     }
//   },time)
// }

// pyramid of doom......................
// changeText(document.querySelector(".heading1"), "heading 1","red",1000, () => {
//   changeText(document.querySelector(".heading2"), "heading 2", "violet", 1000, () => {
//     changeText(document.querySelector(".heading3"), "heading 3", "purple", 2000, () => {
//       changeText(document.querySelector(".heading4"), "heading 4", "green", 1000, () => {
//         changeText(document.querySelector(".heading5"), "heading 5", "blue", 1000, () => {
//           changeText(document.querySelector(".heading6"), "heading 6", "cyan", 1000, () => {
//             changeText(document.querySelector(".heading7"), "heading 7", "grey", 1000, () => {
//               null;
//             },() => {console.log("headingdoes not exist")})
//           },() => {console.log("headingdoes not exist")})
//         },() => {console.log("headingdoes not exist")})
//       },() => {console.log("heading does not exist")})
//     },() => {console.log("heading does not exist")})
//   },() => {console.log("heading does not exist")})
// },() => {console.log("heading does not exist")})

// Q1. using promises.........................................................................................

async function changeText(element, text, color, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (element) {
        element.changeText = text;
        element.style.color = color;
        resolve();
      }
      reject("Wrong input");
    }, time);
  });
}

changeText(document.querySelector(".heading1"), "one", "red", 1000)
  .then(() => changeText(document.querySelector(".heading2"),"two","green",1000))
  .then(() => changeText(document.querySelector(".heading3"),"three","blue",2000))
  .then(() => changeText(document.querySelector(".heading4"),"four","pink",1000))
  .then(() => changeText(document.querySelector(".heading5"),"five","purple",1000))
  .then(() => changeText(document.querySelector(".heading6"),"six","grey",1000))
  .then(() => changeText(document.querySelector(".heading7"),"seven","cyan",1000))
  .catch((error) => console.log(error))
