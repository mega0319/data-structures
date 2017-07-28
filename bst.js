// Binary Search Tree


function BST(value) {
  this.value = value
  this.right = null
  this.left = null
}

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
