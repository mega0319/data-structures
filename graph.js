// Graphs

// undirected graph

function Graph() {
  this.vertices = []
}

function Vertex(name){
  this.name = name
  this.edges = []
}

Graph.prototype.add = function(vertexName, edges=[]) {
  let newVertex = new Vertex(vertexName)
  edges.forEach( edgeName => newVertex.edges.push(edgeName))

  this.vertices.forEach( vertex => {
    if (newVertex.edges.includes(vertex.name)) {
      vertex.edges.push(newVertex.name)
    }
  })

  this.vertices.push(newVertex)
}

Graph.prototype.allEdges = function() {
  let allEdges = []

  this.vertices.forEach( vertex => {
    let currentVertex = vertex.name
    vertex.edges.forEach( edgeNode => {
      allEdges.push(`${currentVertex},${edgeNode}`)
    })
  })

  return allEdges
}

Graph.prototype.checkConnection = function(startVertex, targetVertex) {

  let startVertexNode = this.findVertex(startVertex)
  if (!startVertex) {
    return "Start vertex does not exist!"
  }

  let visited = {}
  let queue = [startVertexNode]

  while (queue.length) {
    let currentVertex = queue.shift()

    if (currentVertex.name === targetVertex) {
      return true
    }
    visited[currentVertex.name] = true

    for (let i = 0; i < currentVertex.edges.length; i++) {
      if (!visited[currentVertex.edges[i]])
        queue.push(this.findVertex(currentVertex.edges[i]))
    }
  }
  return false
}

Graph.prototype.findVertex = function(vertexName) {
  for (let i = 0; i < this.vertices.length; i++) {
    if (vertexName === this.vertices[i].name) {
      return this.vertices[i]
    }
  }
  return null
}
