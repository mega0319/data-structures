class BST {

  constructor(value){
    this.value = value
    this.right = null
    this.left = null
  }

  insert(value) {
    if (value <= this.value) {
      if (!this.left) this.left = new BST(value)
      else this.left.insert(value)
    }
    else if (value > this.value) {
      if (!this.right) this.right = new BST(value)
      else this.right.insert(value)
    }
  }

  contains(searchValue) {
    if (searchValue === this.value) return true
    if (searchValue <= this.value) {
      if (!this.left) {
        return false
      }
      return this.left.contains(searchValue)
    } else if (this.value < searchValue) {
      if  (!this.right) {
        return false
      }
      return this.right.contains(searchValue)
    }
  }

  depthFirstTraversal(callback, order) {
    if (order === 'pre-order') {
      callback(this.value)
    }
    if (this.left) {
      this.left.depthFirstTraversal(callback, order)
    }
    if (order === 'in-order') {
      callback(this.value)
    }
    if (this.right) {
      this.right.depthFirstTraversal(callback, order)
    }
    if (order === 'post-order') {
      callback(this.value)
    }
  }

  breadthFirstTraversal(callback) {
    let queue = [this]

    while (queue.length) {
      let currentNode = queue.shift()

      callback(currentNode)

      if (currentNode.left) {
        queue.push(currentNode.left)
      }

      if (currentNode.right) {
        queue.push(currentNode.right)
      }
    }
  }
