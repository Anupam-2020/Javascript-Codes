const x = {
  flag: 1,
  toString: function() {
    return this.flag++;
  }
}

console.log(x == 1)
console.log(x == 2)
console.log(x == 3)

// we need to produce the below output -> 

if(x == 1 && x == 2 && x == 3) {
  console.log('Hello world');
}