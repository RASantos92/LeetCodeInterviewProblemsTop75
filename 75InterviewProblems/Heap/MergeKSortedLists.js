function mergeKLists(lists) {
    let minHeap = [];
    
    // Insert the first node of each list into the Min Heap
    for (let list of lists) {
        if (list) minHeap.push(list);
    }
    
    // Sort the Min Heap based on the node values
    minHeap.sort((a, b) => a.val - b.val);
    
    let dummy = new ListNode(0);
    let current = dummy;
    
    while (minHeap.length > 0) {
        // Take the smallest element from the Min Heap
        let smallestNode = minHeap.shift();
        
        // Add the smallest value to the merged list
        current.next = smallestNode;
        current = current.next;
        
        // Insert the next node from the same list into the Min Heap
        if (smallestNode.next) {
            minHeap.push(smallestNode.next);
            minHeap.sort((a, b) => a.val - b.val);
        }
    }
    
    return dummy.next;
}