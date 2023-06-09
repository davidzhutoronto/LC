/* Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]
 

Constraints:

1 <= numRows <= 30 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let ans = [];

  for (let i = 0; i < numRows; i++) {
    let curr = [];
    curr[0] = 1;
    curr[i] = 1;
    for (let j = 1; j < i; j++) {
      curr[j] = ans[i - 1][j - 1] + ans[i - 1][j];
    }
    ans.push(curr);
  }
  return ans;
};
