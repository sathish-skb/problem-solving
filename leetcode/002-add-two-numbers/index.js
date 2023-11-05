class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0);
    let p = l1;
    let q = l2;
    let current = dummyHead;
    let carry = 0;

    while (p !== null || q !== null) {
        let x = p ? p.val : 0;
        let y = q ? q.val : 0;
        let sum = x + y + carry;
        carry = Math.floor(sum / 10);

        current.next = new ListNode(sum % 10);
        current = current.next;

        if (p) p = p.next;
        if (q) q = q.next;
    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummyHead.next;
}

// Example usage:
const l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

const result = addTwoNumbers(l1, l2);
console.log(result); // Output will be a linked list representing the sum (e.g., 7 -> 0 -> 8)
