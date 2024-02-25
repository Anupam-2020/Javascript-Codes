function checkArmstringNumber(n) {
    let digitSum = 0;
    let temp = n;
    while(n) {
        console.log(parseInt(Math.pow((n % 10), 3)));
        digitSum += parseInt(Math.pow((n % 10), 3));
        n = parseInt(n / 10);
    }
   return digitSum === temp;
}

console.log(checkArmstringNumber(153))