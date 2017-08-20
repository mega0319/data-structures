class Graph {

  constructor() {
    this.vertices = []
  }

  add(vertexName, edges=[]) {
    let newVertex = new Vertex(vertexName)
    edges.forEach( edgeName => newVertex.edges.push(edgeName))

    this.vertices.forEach( vertex => {
      if (newVertex.edges.includes(vertex.name)) {
        vertex.edges.push(newVertex.name)
      }
    })

    this.vertices.push(newVertex)
  }

  allEdges() {
    let allEdges = []

    this.vertices.forEach( vertex => {
      let currentVertex = vertex.name
      vertex.edges.forEach( edgeNode => {
        allEdges.push(`${currentVertex},${edgeNode}`)
      })
    })

    return allEdges
  }

  checkAdjacency(firstVertex, secondVertex) {
    let first = this.findVertex(firstVertex)

    return first.edges.includes(secondVertex)
  }

  findVertex(vertexName) {
    for (let i = 0; i < this.vertices.length; i++) {
      if (vertexName === this.vertices[i].name) {
        return this.vertices[i]
      }
    }
    return null
  }

  checkConnection(startVertex, targetVertex) {

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

}

class Vertex {

  constructor(name) {
    this.name = name
    this.edges = []
  }

  addEdge(vertexName){
    this.edges.push(vertexName)
  }
}
