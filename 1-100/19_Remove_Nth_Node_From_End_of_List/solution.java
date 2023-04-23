
//count for size and delete the nth element
  //Definition for singly-linked list.
  public class ListNode {
      int val;
      ListNode next;
      ListNode() {}
      ListNode(int val) { this.val = val; }
      ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 }

class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        int size = 0;
        ListNode ln = head; 
        while(ln != null){
            ln = ln.next;
            size++;
        }
        if(size == 1 && n ==1){
            return null;
        }
        if(size == n){
            return head.next;
        }
        ListNode myListNode = head;
        for(int i = 0; i < size-n-1; i++){
            myListNode = myListNode.next;
        }
        if(n == 1){
            myListNode.next = null;
            return head;
        }
        myListNode.next = myListNode.next.next;

        return head;
    }
}