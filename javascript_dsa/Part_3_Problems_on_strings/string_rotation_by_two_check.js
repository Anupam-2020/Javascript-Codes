 //Function to check if a string can be obtained by rotating
//another string by exactly 2 places.
function isRotated(str1, str2)
{
    // code here
    let rotatedAntiClockwiseStr = str1.slice(2, str1.length)+str1.slice(0,2);
    let rotatedClockwiseStr = str1.slice(str1.length-2,str1.length)+str1.slice(0 ,str1.length - 2);
    
    if(rotatedAntiClockwiseStr === str2 || rotatedClockwiseStr === str2) return true;
    return false;
}