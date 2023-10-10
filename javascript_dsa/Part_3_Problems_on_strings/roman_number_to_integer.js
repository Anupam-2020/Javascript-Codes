function romanToDecimal(str) {
  //code here
  let fixedValues = new Map();
  fixedValues.set("I", 1);
  fixedValues.set("V", 5);
  fixedValues.set("X", 10);
  fixedValues.set("L", 50);
  fixedValues.set("C", 100);
  fixedValues.set("D", 500);
  fixedValues.set("M", 1000);

  let strArray = str.split("").reverse();
  //   console.log(strArray);

  let count = fixedValues.get(strArray[0]);

  for (let i = 1; i < strArray.length; i++) {
    //   console.log(count)
    if (fixedValues.get(strArray[i]) >= fixedValues.get(strArray[i - 1])) {
      count = count + fixedValues.get(strArray[i]);
    } else {
      count = count - fixedValues.get(strArray[i]);
    }
  }
  return count;
}

console.log(romanToDecimal('XXXII'));