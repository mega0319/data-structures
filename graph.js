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
