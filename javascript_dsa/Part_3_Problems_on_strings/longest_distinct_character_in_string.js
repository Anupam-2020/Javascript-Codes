function longestSubstrDistinctChars(s) {
  let map = new Map();
  let start = 0;
  let maxLength = 0;
  let i = 0;
  while (i < s.length) {
    if (map.has(s[i])) {
      start = Math.max(start, map.get(s[i]) + 1);
    }
    map.set(s[i], i);
    maxLength = Math.max(maxLength, i - start + 1);
    i++;
  }
  return maxLength;
}

console.log(longestSubstrDistinctChars('Anupaam'));