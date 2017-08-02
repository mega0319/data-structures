// Stacks

function Stack() {
  this.top = null
}

function StackNode(data) {
  this.data = data
  this.next = null
}

let newStack = new Stack()
let newNode = newStackNode(10)
let anotherNode = newStackNode(6)

newStack.top = newNode
newNode.next = anotherNode

Stack.prototype.pop = function() {
  if (this.top === null) {
    return -1
  }

  let item = this.top.data
  top = this.top.next

  return item
}

Stack.prototype.push = function(data) {
  if (this.top === null) {
    this.top = node
  }
  let newNode = new StackNode(data)

  newNode.next = this.top
  this.top = newNode
}
