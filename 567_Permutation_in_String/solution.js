/* Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

 

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false
 

Constraints:

1 <= s1.length, s2.length <= 104
s1 and s2 consist of lowercase English letters. */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let length1 = s1.length;
  let length2 = s2.length;

  if (length1 > length2) return false;
  let set1 = {};

  for (let i = 0; i < length1; i++) {
    set1[s1[i]] = (set1[s1[i]] || 0) + 1;
  }

  let count = 0;
  let left = 0;

  for (let i = 0; i < length2; i++) {
    set1[s2[i]]--;
    if (set1[s2[i]] > -1) {
      count++;
    }

    if (count == length1) return true;

    if (i - left + 1 == length1) {
      set1[s2[left]]++;
      if (set1[s2[left]] >= 1) {
        count--;
      }

      left++;
    }
  }
  return false;
};
