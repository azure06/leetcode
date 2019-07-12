/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  let head = null;
  let mergedList = null;

  lists = lists.filter(list => list);

  while (lists.length > 0) {
    let index;
    for (let i = 0; i < lists.length; i++) {
      if (index === undefined || lists[i].val < lists[index].val) {
        index = i;
      }
    }
    if (mergedList !== null) {
      mergedList.next = lists[index];
      mergedList = mergedList.next;
    } else {
      mergedList = lists[index];
      head = mergedList;
    }
    // Remove from list
    if (lists[index].next !== null) {
      lists[index] = lists[index].next;
    } else {
      lists.splice(index, 1);
    }
  }
  return head;
};
