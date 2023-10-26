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

// function findElement(arr,n){
//     //code here
//     let max = arr[n-1];
//     let index = n - 1;
//     for(let i=n-1; i>0; i--) {
//         for(let j = 0; j < i; j++) {
//             if(arr[j] > arr[i]) {
//                 return index === n-1 ? -1 : max;
//             }
//         }
//         max = arr[i];
//         index = i;
//     }
//     return max;
// }

// console.log(findElement([9 ,8 ,5 ,6 ,1 ,10 ,10], 7));

// function asciiToString(str = "") {
//     let arr = [];
//     let reversedStr = str.split("").reverse().join("");
//     // console.log(reversedStr);
//     let num = 0;
//     for(let i in reversedStr) {
//         num = (num * 10)+Number.parseInt(reversedStr.charAt(i));
//         // console.log(num);
//         if((num >= 65 && num <= 90) || (num >= 97 && num <= 122) || num === 32) {
//             arr.push(String.fromCharCode(num));
//             num = 0;
//         }
//     }
//     return arr.join("");
// }
// // console.log(String.fromCharCode(33))
// console.log(asciiToString("79611511012313721110141108"));

// function minimumGroup(str) {
//     let minCount = Number.MAX_VALUE;
//     let count = 0;
//     for(let i = 0; i < str.length; i++) {
//         if(str.charAt(i) === '@' || str.charAt(i) === '$') {
//             if(minCount > count) {
//                 minCount = count;
//             }
//             count = 0;
//         } else {
//             count+=1;
//         }
//     }
//     return minCount;
// }

// console.log(minimumGroup("PPPP$PPP@PP@PP$PPPPP$PP"));

// function subarraySum(arr, n, s)
// {
//     //your code here
//     let sum = 0;
//     let minIndex = 0;
//     let indexArray = [];
//     for(let i = 0; i < n; i++) {
//         sum += arr[i];
//         while(sum > s) {
//             sum = sum - arr[minIndex];
//             minIndex++;
//         }
//         if(sum === s && sum != 0) {
//             indexArray.push(minIndex+1, i+1);
//             break;
//         }
//     }
//     return indexArray.length === 0 ? [-1] : indexArray;
// }

// console.log(subarraySum([1,2,3,7,9], 5, 12));

function sort012(arr, N)
{
  //your code here
  let i = 0;
  let k = N - 1;
  let j = 0;
  while (j < N) {
    if (arr[j] === 0) {
      let temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
      i++;
      j++;
    } else if (arr[j] === 2) {
      let temp = arr[j];
      arr[j] = arr[k];
      arr[k] = temp;
      k--;
      j--;
    }
    j++;
  }
  return arr;
}

console.log(sort012([0,2,1,2,0,1],6));