import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import DirectedGraph from '../src/directedGraph'

chai.use(chaiChange)

describe('DirectedGraph', () => {
  'use strict'

  it('exists', () => {
    expect(DirectedGraph).to.be.a('function')
  })

  context('addVertex()', () => {
    it('adds a vertex to the graph.', () => {
      const graph = new DirectedGraph()
      graph.addVertex('v1')

      expect(graph.hasVertex('v1')).to.equal(true)
    })
  })

  context('hasVertex()', () => {
    it('checks if a vertex in the graph.', () => {
      const graph = new DirectedGraph()
      graph.addVertex('v1')
      graph.addVertex('v2')
      graph.addVertex('v3')

      expect(graph.hasVertex('v2')).to.equal(true)
    })
  })

  context('addDirection()', () => {
    it('adds a direction from \'v1\' to \'v2\' with a weight (number).', () => {
      const graph = new DirectedGraph()
      graph.addVertex('v1')
      graph.addVertex('v2')
      graph.addVertex('v3')
      graph.addDirection('v2', 'v3', 5)

      expect(graph.getVertex('v2').edges[0]).to.include(5, 'v2', 'v3')
      expect(graph.addDirection('v2', 'v5', 5)).to.equal(null)
      expect(graph.addDirection('v2', 'v1', -3)).to.equal(null)
    })
  })

  context('hasDirection()', () => {
    it('checks if the edges includes a direction', () => {
      const graph = new DirectedGraph()
      graph.addVertex('v1')
      graph.addVertex('v2')
      graph.addVertex('v3')
      graph.addDirection('v2', 'v3', 5)
      graph.addDirection('v1', 'v2', 6)
      graph.addDirection('v3', 'v2', 7)

      expect(graph.hasDirection('v2', 'v3')).to.equal(true)
    })
  })

  context('getDirectionWeight()', () => {
    it('returns direction weight between v1 & v2 or null if no direction exists', () => {
      const graph = new DirectedGraph()
      graph.addVertex('v1')
      graph.addVertex('v2')
      graph.addVertex('v3')
      graph.addDirection('v2', 'v3', 5)
      graph.addDirection('v1', 'v2', 6)
      graph.addDirection('v3', 'v2', 7)

      expect(graph.getDirectionWeight('v2', 'v3')).to.equal(5)
    })
  })

  context('visit()', () => {
    it('visit all the connected vertices in the graph starting with v1 and apply function on the reached vertex.', () => {
      const graph = new DirectedGraph()
      let arr = []
      graph.addVertex('v1')
      graph.addVertex('v2')
      graph.addVertex('v3')
      graph.addVertex('v4')
      graph.addVertex('v5')
      graph.addDirection('v2', 'v3', 5)
      graph.addDirection('v1', 'v2', 6)
      graph.addDirection('v3', 'v2', 7)
      graph.addDirection('v4', 'v5', 7)

      graph.visit( 'v1', (vertex) => {
        arr.push(vertex)
      })

      expect(arr).to.include('v1', 'v2', 'v3')
      expect(arr).to.not.include('v4', 'v5')
    })
  })

  context('findShortestPath()', () => {
    it('returns an array of all the shortest paths between two vertices based on the sum of weights.', () => {
      const graph = new DirectedGraph()
      graph.addVertex('v1')
      graph.addVertex('v2')
      graph.addVertex('v3')
      graph.addVertex('v4')
      graph.addVertex('v5')
      graph.addVertex('v6')
      graph.addDirection('v1', 'v2', 5)
      graph.addDirection('v2', 'v3', 9)
      graph.addDirection('v1', 'v3', 15)
      graph.addDirection('v1', 'v4', 4)
      graph.addDirection('v4', 'v5', 4)
      graph.addDirection('v5', 'v3', 4)
      let path = graph.findShortestPath( 'v1', 'v3' )
      let path2 = graph.findShortestPath( 'v1', 'v6' )

      expect(path.distance).to.equal(12)
      expect(path2).to.equal(null)
      expect(path.path).to.include('v1', 'v4', 'v5', 'v3')
    })
  })

  context('removeDirection()', () => {
    it('removes an existing direction between \'v1\' and \'v2\'.', () => {
      const graph = new DirectedGraph()
      graph.addVertex('v1')
      graph.addVertex('v2')
      graph.addVertex('v3')
      graph.addDirection('v1', 'v2', 5)
      graph.addDirection('v2', 'v3', 9)
      graph.addDirection('v3', 'v2', 0)
      graph.addDirection('v3', 'v1', 0)

      expect(graph.hasDirection('v3', 'v1')).to.equal(true)
      graph.removeDirection('v3', 'v1')
      expect(graph.hasDirection('v3', 'v1')).to.equal(false)
    })
  })

  context('getSeperatedVertices()', () => {
    it('returns an array of all the vertices that are separated from the graph.', () => {
      const graph = new DirectedGraph()
      graph.addVertex('v1')
      graph.addVertex('v2')
      graph.addVertex('v3')
      graph.addVertex('v4')
      graph.addVertex('v5')
      graph.addDirection('v1', 'v2', 5)
      graph.addDirection('v2', 'v3', 9)
      graph.addDirection('v3', 'v2', 0)

      expect(graph.getSeperatedVertices()).to.include('v4','v5')
    })
  })

  context('removeVertex()', () => {
    it('removes an existing vertex and all its directions (the incoming and outgoing)', () => {
      const graph = new DirectedGraph()
      graph.addVertex('v1')
      graph.addVertex('v2')
      graph.addVertex('v3')
      graph.addVertex('v4')
      graph.addVertex('v5')
      graph.addDirection('v1', 'v2', 5)
      graph.addDirection('v2', 'v3', 9)
      graph.removeVertex('v3')

      expect(graph.hasVertex('v3')).to.equal(false)
    })
  })

  context('count()', () => {
    it('returns the number of vertices in the graph.', () => {
      const graph = new DirectedGraph()
      graph.addVertex('v1')
      graph.addVertex('v2')
      graph.addVertex('v3')
      graph.addVertex('v4')
      graph.addVertex('v5')

      expect(graph.count()).to.equal(5)
    })
  })

})
