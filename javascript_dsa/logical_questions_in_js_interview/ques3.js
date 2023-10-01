// given is an array of heros... We need to create an obj and store the hero-names as key and its repetation as value...


const heros = ['Ironman', 'captain america', 'hulk', 'Ms. Marvel', 'hulk'];
const heroObj = {};
let count = 0;
for(let i in heros) {
  heroObj[heros[i]] = (heroObj[heros[i]] || 0) + 1;
}

console.log(heroObj);