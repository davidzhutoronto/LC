/* Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true
 

Constraints:

1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character. */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let isIso = true;
  for (let i = 0; i < s.length - 1; i++) {
    for (let j = 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        t[i] === t[j] ? (isIso = true) : (isIso = false);
        if (isIso === false) {
          return false;
        }
      }
    }
  }

  for (let i = 0; i < s.length - 1; i++) {
    for (let j = 1; j < s.length; j++) {
      if (t[i] === t[j]) {
        s[i] === s[j] ? (isIso = true) : (isIso = false);
        if (isIso === false) {
          return false;
        }
      }
    }
  }

  return isIso;
};

//Can also use a MAP
var isIsomorphic2 = function (s, t) {
  const map1 = [256];
  const map2 = [256];

  for (let i = 0; i < s.length; i++) {
    if (map1[s.charAt(i)] != map2[t.charAt(i)]) {
      return false;
    }
    map1[s.charAt[i]] = i + 1;
    map2[t.charAt[i]] = i + 1;
  }
  return true;
};
