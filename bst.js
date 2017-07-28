// Binary Search Tree


// constructor
function BinarySearchTree(value){
  this.value = value
  this.left = null
  this.right = null
}

// insertion
BinarySearchTree.prototype.insert(value){
  if (value <= this.value){
    if (!this.left){
      this.left = new BinarySearchTree(value)
    }else{
      this.left.insert(value)
    }
  }else if (value > this.value){
    if (!this.right){
      this.right = new BinarySearchTree(value)
    }else{
      this.right.insert(value)
    }
  }
}
