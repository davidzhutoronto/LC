/* Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces. */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let mySet = new Set();

  let length = s.length;
  let Max = 0;
  let left = 0;

  if (length == 0) {
    return Max;
  }

  for (let i = 0; i < length; i++) {
    while (mySet.has(s[i])) {
      mySet.delete(s[left]);
      left++;
    }
    mySet.add(s[i]);
    Max = Max > i - left + 1 ? Max : i - left + 1;
  }
  return Max;
};
