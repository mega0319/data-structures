// Linked List

// LinkedList constructor
function LinkedList(){
  this.head = null
  this.tail = null
}

// Node constructor
function Node(value, next, prev){
  this.value = value
  this.next = next
  this.prev = prev
}

// insertion is O(1) - constant
LinkedList.prototype.addToHead = function(value) {
  let newNode = new Node(value, this.head, null)
  if (this.head) this.head.prev = newNode
  else this.tail = newNode
  this.head = newNode
}

// removal is O(1) - constant
LinkedList.prototype.removeHead = function() {
  if (!this.head) return null
  let value = this.head.value
  this.head = this.head.next
  if (this.head) this.head.prev = null
  else this.tail = null
  return value
}

// insertion is O(1) - constant
LinkedList.prototype.addToTail = function() {
  let newNode = new Node(value, null, this.tail)
  if (this.tail) this.tail.next = newNode
  else this.head = newNode
  this.tail = newNode
}

// removal is O(1) - constant
LinkedList.prototype.removeTail = function() {
  if (!this.tail) return null
  let value = this.tail.value
  this.tail = this.tail.prev
  if (this.tail) this.tail.next = null
  else this.head = null
  return value
}

// traversal and searching is O(n) - linear
LinkedList.prototype.search = function(searchValue) {
  let currentNode = this.head
  while (currentNode) {
    if (currentNode.value === searchValue){
      return currentNode.value
    }
    currentNode = currentNode.next
  }
  return null
}

// searches through linked list for particular node and deletes it
LinkedList.prototype.deleteWithin = function(searchValue) {
  let currentNode = this.head
  while (currentNode) {
    if (currentNode.value === searchValue) {
      currentNode.prev = currentNode.next
      currentNode.next.prev = currentNode.prev
    }
    currentNode.next
  }
}

// finds the indexes of all nodes that have the value passed in
LinkedList.prototype.indexOf = function(value) {
  let currentNode = this.head
  let currentIndex = 0
  let indexes = []
  while (currentNode) {
    if (currentNode.value === value){
      indexes.push(index)
    }
    currentIndex++
    currentNode = currentNode.next
  }
  return indexes
}
