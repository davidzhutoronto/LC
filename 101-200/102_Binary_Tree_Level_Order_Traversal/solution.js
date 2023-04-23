/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let queue = [root];
  let result = [];

  while (queue[0]) {
    let size = queue.length;
    let row = [];
    for (let i = 0; i < size; i++) {
      let currNode = queue.shift();
      row.push(currNode.val);
      if (currNode.left != null) {
        queue.push(currNode.left);
      }
      if (currNode.right != null) {
        queue.push(currNode.right);
      }
    }
    result.push(row);
  }
  return result;
};
