// This code defines a binary tree and implements a function to find its maximum depth.
/* 
Input: A binary tree represented as a list where the root and its children are defined (e.g., [3, 9, 20, null, null, 15, 7]).
Output: The maximum depth of the tree (e.g., 3 for the first example).
Constraints:
Number of nodes: [0, 104].
Node values: [-100, 100]. 
*/

// I will solve this using a recursive Depth-First Search (DFS) approach, which is thought to be the most efficient for this problem
// Time Complexity: 𝑂(𝑛).
// Space Complexity: O(n) in the worst case, 𝑂(log 𝑛) for a balanced tree.

// define the TreeNode class -> to represent each node in the binary tree
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// function to build a binary tree from an array (level-order traversal)
function buildTree(arr) {
    if (!arr || arr.length === 0 || arr[0] === null) return null;

    const root = new TreeNode(arr[0]); // create the root node
    const queue = [root]; // initialize a queue for level-order traversal
    let i = 1; // start from the second element in the array

    // loop through the array to build the tree
    while (queue.length > 0 && i < arr.length) {
        const node = queue.shift();

        // left child
        if (i < arr.length && arr[i] !== null) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        i++;

        // right child
        if (i < arr.length && arr[i] !== null) {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }
        i++;
    }

    return root;
}

// function to find the maximum depth of the binary tree
function maxDepth(root) {
    // base case: if the node is null, depth is 0
    if (!root) return 0;

    // recursively find the depth of left and right subtrees
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    // return the maximum of left and right depths, plus 1 for the current node
    return Math.max(leftDepth, rightDepth) + 1;
}

// test the solution
const testCases = [
    [3, 9, 20, null, null, 15, 7], // contoh 1
    [1, null, 2]                    // contoh 2
];

testCases.forEach((arr, index) => {
    const root = buildTree(arr);
    const depth = maxDepth(root);
    console.log(`Example ${index + 1}: Input = ${JSON.stringify(arr)}, Output = ${depth}`);
});