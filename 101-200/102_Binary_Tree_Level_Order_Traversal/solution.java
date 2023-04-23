/* Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []
 */
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        
        if(root == null){
            return result;
        }

        Queue<TreeNode> myQueue = new LinkedList<>();
        myQueue.add(root);
        
        while(myQueue.size() != 0){
            List<Integer> currentLevel = new ArrayList<>();
            int size = myQueue.size();
            for(int i = 0; i < size; i++){
                TreeNode currentNode = myQueue.remove();
                currentLevel.add(currentNode.val);
                if(currentNode.left != null){
                    myQueue.add(currentNode.left);
                }
                if(currentNode.right != null){
                    myQueue.add(currentNode.right);
                }
            }
            result.add(currentLevel);
        }
        
        return result;
    }
}