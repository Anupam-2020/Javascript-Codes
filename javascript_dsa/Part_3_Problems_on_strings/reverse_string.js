function reverse(S) {
  //code here
  let result = "";
  for (let i = S.length - 1; i >= 0; i--) {
    result = result + S.charAt(i);
  }
  return result;
}
