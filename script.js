var addTwoNumbers = function(l1, l2) {
    const a =[]
    let carryOver = 0
    while(l1 != null || l2 != null) {
        let v1 = 0
        let v2 = 0
        if (l1 != null) v1 = l1.val
        if (l2 != null) v2 = l2.val

        const sum = v1 + v2 + carryOver
        a.push(sum)

        if(l2 != null) l1 = l1.next
        if(l2 != null) l2 = l2.next
    }
    console.log(a)
}