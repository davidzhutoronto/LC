/* Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

 

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
Example 2:

Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.
 

Constraints:

1 <= s.length <= 2000
s consists of lowercase and/or uppercase English letters only.
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let length = s.length;
  let maxLength = 0;
  let set = new Set();
  //cross if two available
  for (let i = 0; i < length; i++) {
    if (set.has(s[i])) {
      maxLength += 2;
      set.delete(s[i]);
    } else {
      set.add(s[i]);
    }
  }
  maxLength = set.size() === 0 ? maxLength : maxLength + 1;
  return maxLength;
};
