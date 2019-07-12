// Remove Nth Node From End of List

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  const res = [];
  for (let node = head, i = 0; node !== null; node = node.next, i++) {
    res.push(node);
  }
  const index = res.length - n;

  if (res[index - 1] && res[index + 1]) {
    res[index - 1].next = res[index + 1];
  } else if (!res[index - 1] && res[index + 1]) {
    head = res[index + 1];
  } else if (res[index - 1] && !res[index + 1]) {
    res[index - 1].next = null;
  } else {
    return null;
  }
  return head;
};
