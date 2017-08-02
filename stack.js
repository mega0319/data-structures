// Stacks

// O(1) or constant time to add item to a stack
// O(n) to search for item through stack

// Stack constructor
function Stack() {
  this.top = null
}

// Stack node constructor
function StackNode(data) {
  this.data = data
  this.next = null
}

// test subjects
let newStack = new Stack()
let newNode = new StackNode(10)
let anotherNode = new StackNode(6)

newStack.top = newNode
newNode.next = anotherNode

// Pop function removes the head node and sets a new head for the stack in constant time
Stack.prototype.pop = function() {
  if (this.top === null) {
    return -1
  }

  let item = this.top.data
  this.top = this.top.next

  return item
}

// Pushing node onto the top of the stack - constant time
Stack.prototype.push = function(data) {
  if (this.top === null) {
    this.top = node
  }
  let newNode = new StackNode(data)

  newNode.next = this.top
  this.top = newNode
}

// Returns the top node in stack
Stack.prototype.peek = function() {
  if (this.top === null) {
    return -1
  }
  return this.top.data
}

// Returns boolean by checking to see if stack is empty
Stack.prototype.isEmpty = function() {
  return this.top === null
}

Stack.prototype.search = function(searchValue) {
  let currentNode = this.top

  while (currentNode) {
    if (this.top.data === searchValue){
      return currentNode
    }
    currentNode = this.top.next
  }
}
