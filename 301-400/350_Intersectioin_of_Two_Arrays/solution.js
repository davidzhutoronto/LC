/* 350. Intersection of Two Arrays II
Easy
6.4K
862
Companies
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
 

Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let length1 = nums1.length;
  let length2 = nums2.length;

  let mySet = [];
  let answer = [];
  for (let i = 0; i < length1; i++) {
    mySet[nums1[i]] = mySet[nums1[i]] || 0;
    mySet[nums1[i]]++;
  }

  for (let j = 0; j < length2; j++) {
    if (mySet[nums2[j]] && mySet[nums2[j]] > 0) {
      answer.push(nums2[j]);
      mySet[nums2[j]]--;
    }
  }
  return answer;
};
