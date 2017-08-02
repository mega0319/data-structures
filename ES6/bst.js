class BST {
  constructor(value){
    this.value = value
    this.right = null
    this.left = null
  }

  insert(value){
    if (value <= this.value) {
      if (!this.left) this.left = new BST(value)
      else this.left.insert(value)
    }
    else if (value > this.value) {
      if (!this.right) this.right = new BST(value)
      else this.right.insert(value)
    }
  }

  contains(value){
    if (this.value === value) return true
    if (this.value > value) {
      if (!this.left){
        return false
      }
      return this.left.contains(value)

  }
}
