/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = (head) => {
  let var1 = (var2 = head);
  while (var2 && var2.next) {
    var1 = var1.next;
    var2 = var2.next.next;
  }
  return var1;
};
