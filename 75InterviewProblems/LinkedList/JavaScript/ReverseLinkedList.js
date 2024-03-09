// const reverseList = (head) => {
//     const stack = [];
//     while(head){
//         stack.push(head);
//         const oldhead = head;
//         head = head.next;
//         oldhead.next = null
//     }
//     head = stack.pop();
//     let runner = head;
//     while(stack.length > 0){
//         runner.next = stack.pop();
//         runner = runner.next
//     }
//     return head;
// }


const reverseList = (head) => {
    if(!head) return head;
    let next = head.next;
    let previous = null;
    let current = head;
    while(current){
        current.next = previous;
        previous = current;
        current = next;
        next = current.next
    }
    head = previous;
    return head;

}