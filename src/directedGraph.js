'use strict'

function Vertex(name){
  this.name = name
  this.edges = []
}

export default class DirectedGraph {
  constructor(){
    this.vertices = []
    this.edges = []
    this.numberOfEdges = 0
  }

  addVertex(name){
    if(!this.hasVertex(name)){
      let newVertex = new Vertex(name)
      this.vertices.push(newVertex)
    }
  }

  hasVertex(name){
    for( let e in this.vertices ){
      if(this.vertices[e].name === name) return true
    }
    return false
  }

  addDirection(start, end, weight){
    if( start !== end &&
      this.hasVertex(start) &&
      this.hasVertex(end) &&
      weight >= 0 &&
      !this.hasDirection(start, end) ){
      this.getVertex(start).edges.push([start, end, weight])
    } else {
      return null
    }
    this.numberOfEdges++
  }

  hasDirection(start, end){
    const startVertex = this.getVertex(start)
    if(this.hasVertex(start) &&
       this.hasVertex(end)
     ){
       for (let e in startVertex.edges){
         if(startVertex.edges[e][1] === end){
           return true
         }
       }
     }

    return false
  }

  // Helper function
  getVertex(name){
    for( let e in this.vertices ){
      if( this.vertices[e].name === name ) return this.vertices[e]
    }
    return null
  }

  // Helper function
  getDirectionIndex(start, end){
    let returnValue = -1
    this.getVertex(start).edges.forEach( (val, index) => {
      if(val[0] === start && val[1] === end){
        returnValue = index
      }
    })
    return returnValue
  }

  // Helper function
  getDestinationVertices(start){
    if(this.hasVertex(start)){
      let arrayOfVertices = []
      let startVertex = this.getVertex(start)
      for(let e in startVertex.edges){
        arrayOfVertices.push(startVertex.edges[e])
      }

      return arrayOfVertices
    }
  }

  getDirectionWeight(start, end){
    let index = this.getDirectionIndex(start, end)
    if(index > -1){
      return this.getVertex(start).edges[index][2]
    }
  }

  visit(start, callback){
    let alreadyVisited = []
    const recursion = vertex => {
      if(!alreadyVisited.includes(vertex)){
        let destinations = this.getDestinationVertices(vertex)
        alreadyVisited.push( vertex )
        callback(vertex)
        for( let e in destinations ){
          recursion(destinations[e])
        }
      }
    }
    recursion(start)
  }

  findShortestPath(source, end){
    let visited = []
    let unvisited = []
    let canVisitNext = []
    let associatedTable = {}

    this.vertices.forEach( (e) => {
      unvisited.push(e.name)
      if(e.name !== source){
        associatedTable[e.name] = {previous: null, distance: Infinity}
      }
      associatedTable[source] = {previous: null, distance: 0}
    })

    const recursion = previousName => {
      let previous = this.getVertex(previousName)
      let relaxedEdges = []
      for( let edge in previous.edges ){
        let end = previous.edges[edge][1]
        let weight = previous.edges[edge][2]
        let currentDistance = associatedTable[previousName].distance + weight
        if(associatedTable[end].distance > currentDistance){
          associatedTable[end] = {previous: previousName, distance: currentDistance}
        }
      }
      visited.push(previousName)

      let unvisitedIndex = unvisited.indexOf(previousName)
      if(unvisitedIndex > -1) unvisited.splice(unvisitedIndex, 1)

      let arrayOfDistances = []
      for(let i in unvisited){
        arrayOfDistances.push(associatedTable[unvisited[i]].distance)
      }

      let lowestDistance = Math.min.apply(Math, arrayOfDistances)
      let lowestVertexName
      for(let i in unvisited){
        if(associatedTable[unvisited[i]].distance === lowestDistance){
          lowestVertexName = unvisited[i]
        }
      }
      if(lowestVertexName){
        recursion(lowestVertexName)
      }
    }

    recursion(source)

    if(associatedTable[end].distance === Infinity){
      return null
    }

    let chosenPath = []
    let currentVertex = end
    while(currentVertex !== null){
      chosenPath.unshift( currentVertex )
      currentVertex = associatedTable[currentVertex].previous
    }
    let data = {
      path: chosenPath,
      distance: associatedTable[end].distance
    }
    return data
  }

  removeDirection(start, end){
    let edges = this.getVertex(start).edges
    for(let edge in edges){
      if(edges[edge][0] === start && edges[edge][1] === end){
        edges.splice(edge, 1)
      }
    }
  }

  getSeperatedVertices(){
    let arrayOfLoneVertices = []
    let arrayOfStarts = []
    let arrayOfEnds = []

    for(let vertex in this.vertices){
      for(let edge in this.vertices[vertex].edges){
        arrayOfStarts.push( this.vertices[vertex].edges[edge][0] )
        arrayOfEnds.push( this.vertices[vertex].edges[edge][1] )
      }
    }
    for(let vertex in this.vertices){
      if( !arrayOfStarts.includes(this.vertices[vertex].name) && !arrayOfEnds.includes(this.vertices[vertex].name) ){
        arrayOfLoneVertices.push( this.vertices[vertex].name )
      }
    }
    return arrayOfLoneVertices.length > 0 ? arrayOfLoneVertices : null
  }

  removeVertex(unWantedVertex){
    for(let key in this.vertices){
      let currentEdges = []

      currentEdges.push(this.vertices[key].edges)
      for( let edge in currentEdges){
        if(currentEdges[edge][1] == unWantedVertex){
          vertices[key].edges.splice(edge, 1)
        }
      }
      if( unWantedVertex === this.vertices[key].name){
        this.vertices.splice(key, 1)
      }
    }
  }

  count(){
    return this.vertices.reduce( (e, i) => {
      return ++e
    }, 0 )
  }

}
