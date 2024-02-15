function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
}

var cloneGraph = function (node) {
    if (!node) {
        return null;
    }

    let visited = new Map(); // A map to keep track of all the created nodes
    let stack = [node]; // A stack for DFS
    let clonedNode = new Node(node.val, []); // Create a new node
    visited.set(node, clonedNode); // Map the original node to the cloned node

    while (stack.length > 0) {
        let current = stack.pop(); // Get the next node to process

        // Iterate over all neighbors
        for (let neighbor of current.neighbors) {
            if (!visited.has(neighbor)) {
                // If we haven't visited this neighbor
                visited.set(neighbor, new Node(neighbor.val, [])); // Clone and store the neighbor
                stack.push(neighbor); // Add it to the stack for future processing
            }
            // Add the clone of the neighbor to the current node's neighbors
            visited.get(current).neighbors.push(visited.get(neighbor));
        }
    }

    return clonedNode; // Return the cloned node reference
};