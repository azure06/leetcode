// Runtime: 88 ms, faster than 25.74% of JavaScript online submissions for Reverse Nodes in k-Group.
// Memory Usage: 39 MB, less than 100.00% of JavaScript online submissions for Reverse Nodes in k-Group.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (!head || !head.next) return head;
  let reversedHead, tail;
  let current = head;
  for (let i = 0; i < k; i += 1) {
    if (!current) return head;
    if (!reversedHead) {
      reversedHead = tail = new ListNode(current.val);
    } else {
      reversedHead = new ListNode(current.val, reversedHead);
    }
    current = current.next;
  }
  tail.next = reverseKGroup(current, k);
  return reversedHead;
};

const nodes = new ListNode(1, new ListNode(2));

function asArray(nodes) {
  const arr = [];
  do {
    arr.push(nodes.val);
    nodes = nodes.next;
  } while (nodes);
  return arr;
}

console.log(asArray(reverseKGroup(nodes, 2)));
