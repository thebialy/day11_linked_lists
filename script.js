// Defintion for singly - linked list.
// class ListNode(val) {
//     this.val = val;
//     this.next = null;
// }

// @param {ListNode} l1
// @param {ListNode} l2
// @return {ListNode}

const addTwoNumbers = (l1, l2) => {
    while(l1 != null || l2 != null) {
        const v1 = l1.val
        const v2 = l2.val
        if (l1 != null) v1 = l1.val
        if (l2 != null) v2 = l2.val

        const sum = v1 + v2

        if(l2 != null) l1 = l1.next
        if(l2 != null) l2 = l2.next
    }
}