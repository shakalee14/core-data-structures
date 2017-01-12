import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import BinarySearchTree from '../src/binarySearchTree'

chai.use(chaiChange)

describe.only('BinarySearchTree', () => {
  'use strict'

  it('exists', () => {
    expect(BinarySearchTree).to.be.a('function')
  })

  context('insert()', () => {
    it('inserts a node with the specified value into the tree.', () => {
      const tree = new BinarySearchTree()
      tree.insert(1)

      expect(tree.search(1)).to.have.property("value", 1)
    })
  })

})
