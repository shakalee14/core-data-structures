import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import LinkedList from '../src/linkedList'

chai.use(chaiChange)
// chai.use(chaiAsPromised)

describe.only('LinkedList', () => {
  'use strict'

  it('exists', () => {
    expect(Set).to.be.a('function')
  })

  context('insert()', () => {
    it('inserts a node (with the provided data) to the tail of the list', () => {
      const list = new LinkedList()

      list.insert('A')

      expect(list).to.have.lengthOf(1)
    })
  })

  context('getHeadNode()', () => {
    it('returns the first node in the list', () => {
      const list = new LinkedList()

      list.insert('A')
      list.insert('B')
      list.insert('C')

      expect(list.getHeadNode()).to.eql('A')
    })
  })

  context('getTailNode()', () => {
    it('returns the last node in the list', () => {
      const list = new LinkedList()

      list.insert('A')
      list.insert('B')
      list.insert('C')

      expect(list.getTailNode()).to.equal('C')
    })
  })
})