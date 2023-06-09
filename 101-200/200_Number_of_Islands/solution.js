/* Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'. */
//similar to question 733
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let width = grid.length;
  let hight = grid[0].length;
  let count = 0;

  var fill = function (grid, i, j) {
    if (i < 0 || j < 0 || i >= width || j >= hight || grid[i][j] != "1") {
      return;
    }
    grid[i][j] = "0";
    fill(grid, i - 1, j);
    fill(grid, i + 1, j);
    fill(grid, i, j - 1);
    fill(grid, i, j + 1);
  };

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < hight; j++) {
      if (grid[i][j] == "1") {
        fill(grid, i, j);
        count++;
      }
    }
  }
  return count;
};
