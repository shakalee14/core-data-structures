import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import LinkedList from '../src/linkedList'

chai.use(chaiChange)

describe.only('LinkedList', () => {
  'use strict'

  it('exists', () => {
    expect(Set).to.be.a('function')
  })

  context('insert()', () => {
    it('inserts a node (with the provided data) to the tail of the list', () => {
      const list = new LinkedList()

      const insertedList = list.insert('A')

      expect(insertedList).to.have.property('data', 'A')
    })
  })

  context('insertFirst()', () => {
    it('inserts a node (with the provided data) to the head of the list', () => {
      const list = new LinkedList()

      const insertedList = list.insert('A')
      const resultList = insertedList.insertFirst('1')

      expect(resultList).to.have.property('next', 'A')
    })
  })

  context('getHeadNode()', () => {
    it('returns the first node in the list', () => {
      const list = new LinkedList()

      list.insert('S')
      list.insert('H')
      list.insert('A')
      list.insert('K')
      list.insert('A')

      expect(list.getHeadNode()).to.have.property('data', 'S')
    })
  })

  context('getTailNode()', () => {
    it('returns the last node in the list', () => {
      const list = new LinkedList()

      list.insert('S')
      list.insert('H')
      list.insert('A')
      list.insert('K')
      list.insert('A')

      expect(list.getTailNode()).to.have.property('data', 'A')
    })
  })
})