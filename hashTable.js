// Hash Table

// constant time lookups AND insertions O(1)

// constructor for hash table - set size of hash table, initializes array of set size
function HashTable(size) {
  this.buckets = Array(size)
  this.numBuckets = this.buckets.length
}

let myHT = new HashTable(30)

// constructor for hash node
function HashNode(key, value, next) {
  this.key = key
  this.value = value
  this.next = next || null
}

// the hash function takes in a key and returns a bucket number which will be used as our index for the key
HashTable.prototype.hash = function(key) {
  let total = 0
  for (let i = 0; i < key.length; i++) {
    total += key.charCodeAt(i)
  }
  let bucket = total % this.numBuckets
  return bucket
}

// when inserting or updating a node we are running the key through our hashing function and then checking for collisions - if there is a collision, we traverse the bucket's chain and find the last node and insert at that position
HashTable.prototype.insert = function(key, value) {
  let index = this.hash(key)
  if (!this.buckets[index]) {
    this.buckets[index] = new HashNode(key, value)
  }else if (this.buckets[index].key === key){
    this.buckets[index].value = value
  } else {
    let currentNode = this.buckets[index]
    while (currentNode.next) {
      if (currentNode.next.key === key){
        currentNode.next.value = value
        return
      }
      currentNode = currentNode.next
    }
    currentNode.next = new HashNode(key, value)
  }
}

// extract particular node by key name
HashTable.prototype.get = function(key) {
  let index = this.hash(key)
  if (!this.buckets[index]) return null
  let currentNode = this.buckets[index]
  while (currentNode) {
    if (currentNode.key === key) return currentNode.value
    currentNode = currentNode.next
  }
  return null
}

// iterates through all buckets, and checks for chains in each bucket - returns array of all hash nodes
HashTable.prototype.retrieveAll = function() {
  let allNodes = []
  for (let i = 0; i < this.numBuckets; i++) {
    let currentNode = this.buckets[i]
    while (currentNode) {
      allNodes.push(currentNode)
      currentNode = currentNode.next
    }
  }
  return allNodes
}

// test nodes
myHT.insert("Nael", 'chim4ira312@gmail.com')
myHT.insert("Melissa", 'cantoralm@ymail.com')
myHT.insert("Naz", 'naz.khan@flatironschool.com')

console.log(myHT)
