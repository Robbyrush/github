class Leaf {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const tree = new Leaf(50);

tree.left = new Leaf(40);
tree.right = new Leaf(60);
tree.left.left = new Leaf(24);
tree.left.right = new Leaf(41);
tree.right.left = new Leaf(1);
tree.right.right = new Leaf(61);
tree.left.left.left = new Leaf(22);
tree.left.left.right = new Leaf(65);
tree.right.right.left = new Leaf(12);
tree.right.right.right = new Leaf(62);

function breadthFirst(tree, input) {
    let breadth = [];
    let breadthTemp = [];
    breadthTemp.push(tree);
    
    while (breadthTemp.length > 0) {             

        let node = breadthTemp.shift(); 
        breadth.push(node.value);          

        if (node.value == input) {
            return breadth;
        }
        if (node.left !== null) {
            breadthTemp.push(node.left);
        }
        if (node.right !== null) {
            breadthTemp.push(node.right);
        }
    }
     return breadth;
}

function depthFirst(tree, input) {
    let depth = [];
    let depthTemp = [];
    depthTemp.push(tree);

    while (depthTemp.length > 0) {

        let node = depthTemp.pop();
        depth.push(node.value)

        if (input == node.value) {
            return depth;
        }
        if (node.right !== null) {
            depthTemp.push(node.right);
        }
        if (node.left !== null) {
            depthTemp.push(node.left);
        }
    }
    return depth;
}

document.addEventListener("DOMContentLoaded", () => {
    const results = document.getElementById("results");

    document.getElementById("depth").addEventListener("click", () => {
        const txtInput = document.getElementById("input").value;
        const depthResults = depthFirst(tree, txtInput);

        results.innerHTML = depthResults.join(" - ");
   });

   document.getElementById("breadth").addEventListener("click", () => {
        const txtInput = document.getElementById("input").value;
        const breadthResults = breadthFirst(tree, txtInput);

        results.innerHTML = breadthResults.join(" - ");
    });
});
