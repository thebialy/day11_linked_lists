// LINKED LISTS
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

var addTwoNumbers = function(l1, l2) {
    let result = new ListNode(0)
    let currentNode = result
    let carryOver = 0
    
    while(l1 != null || l2 != null) {
        let v1 = 0
        let v2 = 0
        if (l1 != null) v1 = l1.val
        if (l2 != null) v2 = l2.val

        let sum = v1 + v2 + carryOver
        carryOver = Math.floor(sum / 10)
        sum = sum % 10
        currentNode.next = new ListNode(sum)

        currentNode = currentNode.next
        if(l2 != null) l1 = l1.next
        if(l2 != null) l2 = l2.next
    }

    if (carryOver > 0) {
        currentNode.next = new ListNode(carryOver)
    }
}