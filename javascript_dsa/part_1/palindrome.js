// check palindrome no.
function palindromeCheck() {
    let value = '1214534624532';
    let count = 1;
    for (let i in value) {
      if (value[i] != value[value.length - count]) {
        console.log("Not a palindrome");
        break;
      }
      // console.log(count)
      count++;
    }
  
    if (count === value.length + 1) {
      console.log("Palindrome");
    }
  }
  
  function palindrome(x) {
      x.toString() === x.toString().split("").reverse().join("") ? console.log('palindrome') : console.log('not a palindrome');
  }
  
  console.time("palindrome")
  palindrome(12111111121)
  // palindromeCheck()
  console.timeEnd("palindrome")