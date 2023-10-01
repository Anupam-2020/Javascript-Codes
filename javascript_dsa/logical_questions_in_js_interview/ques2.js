function toString1() {
  return this.flag.toUpperCase();
}

function toString2() {
  return this.flag2++;
}

const x = {
  flag: 'a',
  flag2: 1,
  toString: toString1,
  toString: toString2
}

console.log(x == 1)
console.log(x == 2)
console.log(x == 3)

// we need to produce the below output -> 

if(x == 1 && x == 2 && x == 3) {
  console.log('Hello world');
}
