// Binary Search Tree

// binary search tree constructor
function BST(value) {
  this.value = value
  this.right = null
  this.left = null
}

// insertion function
BST.prototype.insert = function(value) {
  if (value <= this.value) {
    if (!this.left) this.left = new BST(value)
    else this.left.insert(value)
  }
  else if (value > this.value) {
    if (!this.right) this.right = new BST(value)
    else this.right.insert(value)
  }
}

// binary search function
BST.prototype.contains = function(value) {
  if (this.value === value) return true
  if (value < this.value) {
    if (!this.left) return false
    else return this.left.contains(value)
  }
  else if (value > this.value) {
    if (!this.right) return false
    else return this.right.contains(value)
  }
}

// depth first traversal in order, pre-order, post-order
BST.prototype.depthFirstTraversal = function(iteratorFunc, order) {
  if (this.order === 'pre-order') iteratorFunc(this.value)
  if (this.left) this.left.depthFirstTraversal(iteratorFunc, order)
  if (order === 'in-order') iteratorFunc(this.value)
  if (this.right) this.right.depthFirstTraversal(iteratorFunc, order)
  if (order === 'post-order') iteratorFunc(this.value)
}


// breadth first traversal
BST.prototype.breadthFirstTraversal = function(iteratorFunc) {
  // start the queue with the root node aka this
  let queue = [this]
  // while loop runs as long as queue is not empty
  while (queue.length) {
    // take node out of queue, and work on it with iteratorFunc
    let treeNode = queue.shift()
    iteratorFunc(treeNode)
    // if the node has left or right child, push them into the queue
    if (treeNode.left) queue.push(treeNode.left)
    if (treeNode.right) queue.push(treeNode.right)
  }
}

// traverse tree recursively and extract min val
BST.prototype.getMinVal = function() {
  if (!this.left) {
    return this.value
  }else{
    return this.left.getMinVal()
  }
}

// traverse tree recursively and extract max val
BST.prototype.getMaxVal = function() {
  if (!this.right) {
    return this.value
  }else{
    return this.right.getMaxVal()
  }
}

// invert binary tree
let invertBinTree = tree => {
    if (tree === null){
      return null
    }

    leftInvert = invertBinTree(tree.left)
    rightInvert = invertBinTree(tree.right)

    let temp = tree.left
    tree.left = tree.right
    tree.right = temp

    return tree
}

let log = (value) => {
  console.log(value)
}

let bst = new BST(50);

bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);
