var isPalindrome = function(s) {
  s = s.replace(/[\W]|_+/g, "");
  if (!s) return true;
  const length = s.length;
  s = s.toLowerCase();
  if (length == 1) return true;

  let i = 0;
  let j = length - 1;
  while (i != j && i < j) {
    if (s[i] === s[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return s[i] === s[j] ? true : false;
};
console.log(isPalindrome("aa"));
