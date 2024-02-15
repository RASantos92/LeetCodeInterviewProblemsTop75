function ListNode (val, next){
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
};

const deleteDuplicates = (head) => {
    if(!head) return head;
    let flag = head;
    let runner = head.next;
    while(runner){
        if(runner.val === flag.val){
            flag.next = null;
        }else{
            flag.next = runner;
            flag = runner
        }
        runner = runner.next;
    }
    return head
}