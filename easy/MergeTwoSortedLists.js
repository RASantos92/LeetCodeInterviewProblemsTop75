class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = (next === undefined ? null : next)
    }

}

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function mergeTwoLists(l1, l2) {
    let dummy = new ListNode(-1); // A dummy node to hold the result
    let current = dummy; // Pointer to the last node in the result list

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    // At least one of l1 and l2 can still have nodes at this point, so connect
    // the non-null list to the end of the merged list.
    current.next = l1 === null ? l2 : l1;

    return dummy.next; // The dummy node's next node is the head of the merged list
}


const testArray1 = [1, 1, 2, 3]
const testArray2 = [1, 4, 5, 6, 7, 8, 9, 10]

console.log(mergeTwoLists(testArray1, testArray2))