import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import BinarySearchTree from '../src/binarySearchTree'

chai.use(chaiChange)

describe('BinarySearchTree', () => {
  'use strict'

  it('exists', () => {
    expect(BinarySearchTree).to.be.a('function')
  })

  context('insert()', () => {
    it('inserts a node with the specified value into the tree.', () => {
      const tree = new BinarySearchTree()
      tree.insert(10)
      tree.insert(4)
      tree.insert(12)

      expect(tree.search(4)).to.have.property("value", 4)
    })
  })

  context('search()', () => {
    it('searches the tree to return the value passed in.', () => {
      const tree = new BinarySearchTree()
      tree.insert(10)
      tree.insert(4)
      tree.insert(12)

      expect(tree.search(12)).to.have.property("value", 12)
    })
  })

  context('count()', () => {
    it('returns the number of nodes in the tree.', () => {
      const tree = new BinarySearchTree()
      tree.insert(10)
      tree.insert(4)
      tree.insert(12)

      expect(tree.count()).to.equal(3)
    })
  })

  context('remove()', () => {
    it('removes a node\'s value (if it exists) from the tree.', () => {
      const tree = new BinarySearchTree()
      tree.insert(100)
      tree.insert(50)
      tree.insert(150)
      tree.insert(25)
      tree.insert(75)
      tree.insert(125)
      tree.insert(175)
      tree.insert(163)
      tree.insert(188)
      tree.insert(137)
      tree.insert(117)
      tree.insert(12)
      tree.insert(37)
      tree.insert(75)
      tree.remove(150)

      expect(tree.search(150)).to.equal(null)
      expect(tree.search(117)).to.have.property('value', 117)
    })
  })

  context('traverse()', () => {
    it('traverse the tree in the defined order (either \'preOrder\', \'inOrder\', or \'postOrder\') and apply function on each node\'s value.', () => {
      const tree = new BinarySearchTree()
      tree.insert(100)
      tree.insert(50)
      tree.insert(150)
      tree.insert(25)
      tree.insert(75)
      tree.insert(125)
      let sum = 0
      tree.traverse( (node) => { sum += node.value }, 'postOrder' )

      expect(sum).to.equal(525)
    })
  })

})
