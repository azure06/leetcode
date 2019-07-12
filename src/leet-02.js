/**
 * 2. Add Two Numbers
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 */

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
var addTwoNumbers = function(l1, l2) {
  let num1 = [];
  let num2 = [];
  let num3 = [];

  while (l1 !== null || l2 !== null) {
    if (l1 !== null) {
      num1.push(l1.val);
      l1 = l1.next;
    }
    if (l2 !== null) {
      num2.push(l2.val);
      l2 = l2.next;
    }
  }

  let result = [];
  if (num2.length > num1.length) {
    let tmp = num1;
    num1 = num2;
    num2 = tmp;
  }

  for (let i = 0; i <= num1.length; i++) {
    if (
      num1[i] !== undefined &&
      num2[i] !== undefined &&
      num3[i] !== undefined
    ) {
      const res = num1[i] + num2[i] + num3[i];
      const [val1, val2] = ('0' + res).slice(-2).split('');
      if (+val1) {
        num3[i + 1] = +val1;
      }
      result.push(+val2);
    } else if (num1[i] !== undefined && num2[i] !== undefined) {
      const res = num1[i] + num2[i];
      const [val1, val2] = ('0' + res).slice(-2).split('');
      if (+val1) {
        num3[i + 1] = +val1;
      }
      result.push(+val2);
    } else if (num1[i] !== undefined && num3[i] !== undefined) {
      const res = num1[i] + num3[i];
      const [val1, val2] = ('0' + res).slice(-2).split('');
      if (+val1) {
        num3[i + 1] = +val1;
      }
      result.push(+val2);
    } else if (num3[i] !== undefined) {
      result.push(num3[i]);
    } else if (num1[i] !== undefined) {
      result.push(num1[i]);
    }
  }

  const arr = result.reverse();
  let l3 = null;
  let tail = null;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (l3 !== null) {
      tail.next = new ListNode(+arr[i]);
      tail = tail.next;
    } else {
      l3 = new ListNode(+arr[i]);
      tail = l3;
    }
  }

  return l3;
};
