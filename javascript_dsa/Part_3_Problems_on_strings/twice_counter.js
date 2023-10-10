// print all occurances in list which appears twice...

function countWords(list, n) {
  //code here
  let mp = new Map();
  for (let i in list) {
    mp.set(list[i], (mp.get(list[i]) || 0) + 1);
  }

  let count = 0;
  for (let [key, value] of mp) {
    if (value === 2) count++;
  }
  return count;
}

