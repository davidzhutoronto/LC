/* You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0.

 

Example 1:


Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
Output: 6
Explanation: The answer is not 11, because the island must be connected 4-directionally.
Example 2:

Input: grid = [[0,0,0,0,0,0,0,0]]
Output: 0
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 50
grid[i][j] is either 0 or 1. */

//be careful with the order in || statement
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let width = grid.length;
  let hight = grid[0].length;
  let maxArea = 0;

  let fill = function (grid, i, j) {
    if (i < 0 || j < 0 || i >= width || j >= hight || grid[i][j] != 1) {
      return 0;
    }
    grid[i][j] = 0;
    return (
      1 +
      fill(grid, i - 1, j) +
      fill(grid, i + 1, j) +
      fill(grid, i, j - 1) +
      fill(grid, i, j + 1)
    );
  };

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < hight; j++) {
      if (grid[i][j]) {
        let count = fill(grid, i, j);
        maxArea = maxArea > count ? maxArea : count;
      }
    }
  }
  return maxArea;
};
