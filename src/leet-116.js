/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root, parent = null) {
  if (!root) return root;
  if (parent) {
    if (root === parent.left) {
      root.next = parent.right;
    } else {
      root.next = parent.next ? parent.next.left : null;
    }
  }
  connect(root.left, root);
  connect(root.right, root);
  return root;
};
