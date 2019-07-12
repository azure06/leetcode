/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let l3 = null;
  let head = null;
  for (; l1 || l2; ) {
    let val;
    if (l1 === null) {
      val = l2.val;
      l2 = l2.next;
    } else if (l2 === null) {
      val = l1.val;
      l1 = l1.next;
    } else if (l1.val >= l2.val) {
      val = l2.val;
      l2 = l2.next;
    } else if (l2.val >= l1.val) {
      val = l1.val;
      l1 = l1.next;
    }
    if (l3 != null) {
      l3.next = new ListNode(val);
      l3 = l3.next;
    } else {
      l3 = new ListNode(val);
      head = l3;
    }
  }

  return head;
};
