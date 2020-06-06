function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

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
 * @return {number}
 */
var maxPathSum = function(root) {
  let memo;
  const recursive = root_ => {
    const lVal = root_.left ? recursive(root_.left) : undefined;
    const rVal = root_.right ? recursive(root_.right) : undefined;
    const max = root_.val + (lVal > 0 ? lVal : 0) + (rVal > 0 ? rVal : 0);
    memo = memo === undefined || max > memo ? max : memo;
    if (lVal && rVal) {
      const bigger = lVal >= rVal ? lVal : rVal;
      return root_.val + (bigger > 0 ? bigger : 0);
    } else if (lVal) {
      return root_.val + (lVal > 0 ? lVal : 0);
    } else if (rVal) {
      return root_.val + (rVal > 0 ? rVal : 0);
    } else {
      return root_.val > 0 ? root_.val : 0;
    }
  };
  recursive(root);
  return memo;
};

const createNode = ([head, ...tail]) => {
  const treeNode = new TreeNode(head);
  let row = [treeNode];
  let index = 0;

  while (index < tail.length) {
    const count = row.length * 2;
    const newRow = [];

    for (let i = index; i < index + count; i += 1) {
      if (tail[i] === undefined || tail[i] === null) {
        continue;
      }
      const node = new TreeNode(tail[i]);
      const pos = i - index;
      let rI = Math.floor(pos / 2);
      if (pos % 2 === 0) row[rI].left = node;
      else row[rI].right = node;
      newRow.push(node);
    }
    row = newRow;
    index += count;
  }
  return treeNode;
};

// console.warn(JSON.stringify(createNode([-10, 9, 20, null, null, 15, 7])));

console.log(
  maxPathSum(createNode([1, 0, 1, 1, 2, 0, -1, 0, 1, -1, 0, -1, 0, 1, 0]))
);
