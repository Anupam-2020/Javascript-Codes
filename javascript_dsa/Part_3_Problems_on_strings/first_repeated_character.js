function firstRepChar(s) {
  // code here
  let mp = new Map();
  for (let i in s) {
    mp.set(s[i], (mp.get(s[i]) || 0) + 1);
    if (mp.get(s[i]) > 1) return s[i];
  }
  return "-1";
}
