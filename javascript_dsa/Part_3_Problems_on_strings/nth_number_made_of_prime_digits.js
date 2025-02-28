// we need to find nth number whose all digits are prime numbers...

function primeDigits(n)
{
    // code here
    let i = 0;
    let arr = [2,3,5,7];
    let number = 1;
    
    while(i < n) {
        // console.log(number);
        let digits = number.toString().split("");
        let flag = 0;
        for(let digit of digits) {
            if(!arr.includes(parseInt(digit))) {
                flag = 1;
                break;
            }
        }
        if(flag === 0) {
            number++;
            i++;
        } else {
            number++;
        }
        
    }
    return number - 1;
}