function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var addTwoNumbers = function (l1, l2) {
    let stackL1 = [];
    let stackL2 = [];
    const l1Head = l1;
    const l2Head = l2;
    let l1Runner = l1;
    let l2Runner = l2;
    // 2 while loops to get the runners to the end of the list and to populate 
    while(l1Runner != null){
        stackL1.push(l1Runner.val);
        l1Runner = l1Runner.next;
    }
    while(l2Runner != null){
        stackL2.push(l2Runner.val);
        l2Runner = l2Runner.next;
    }
    // 2 while loops to unstack the data
    let l1ToString = "";
    let l2ToString = "";
    while(stackL1.length != 0){
        l1ToString +=stackL1.pop()
    }
    while(stackL2.length != 0){
        l2ToString +=stackL2.pop()
    }
    let outputString = (BigInt(l1ToString) + BigInt(l2ToString)).toString();
    let output = new ListNode(BigInt(outputString[outputString.length-1]))
    let outputRunner = output;
    for( let i = outputString.length -2; i >= 0; i--){
        outputRunner.next = new ListNode(BigInt(outputString[i]))
        outputRunner = outputRunner.next
    }
    console.log(output)
    return output
};



const l1 = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
const l2 = [5,6,4]

const list1Head = new ListNode(2, 
    new ListNode(4,
        new ListNode(3)
        )
    )

const list2Head = new ListNode(5, 
    new ListNode(6,
        new ListNode(4)
        )
    )

addTwoNumbers(list1Head,list2Head)




var addTwoNumbers2 = function(l1, l2) {
    let newNode = new ListNode();
    let head = newNode;
    let sum = 0;
    let carry = 0;
    
    // traverse through l1, l2
    while (l1 !== null || l2 !== null || sum > 0) {
        if (l1 !== null) {
            sum = sum + l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            sum = sum + l2.val;
            l2 = l2.next;
        }
        if (sum >= 10) {
            carry = 1;
            sum = sum - 10;
        }
        head.next = new ListNode(sum);
        head = head.next;

        sum = carry;
        carry = 0;
    }
    return newNode.next;
};