import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import HashTable from '../src/hashTable'

chai.use(chaiChange)

describe('HashTable', () => {

  'use strict'

  it('exists', () => {
    expect(HashTable).to.be.a('function')
  })

  context('put()', () => {
    it('adds a key-value pair to the hash table.', () => {
      const theTable = new HashTable()

      theTable.put('Combo1', 'Orange Chicken')

      expect(theTable.get('Combo1')).to.equal('Orange Chicken')
    })
  })

  context('get()', () => {
    it('returns the data associated with key.', () => {
      const theTable = new HashTable()

      theTable.put('Combo1', 'Orange Chicken')

      expect(theTable.get('Combo1')).to.equal('Orange Chicken')
    })
  })

  context('contains()', () => {
    it('returns true if the hash table contains the key.', () => {
      const theTable = new HashTable()

      theTable.put('Combo1', 'Orange Chicken')

      expect(theTable.contains('Combo1')).to.equal(true)
    })
  })

  context('iterate()', () => {
    it('takes a callback function and passes it each key and value in sequence.', () => {
      const theTable = new HashTable()

      theTable.put('Combo1', 'Orange Chicken')
      theTable.put('Combo2', 'Szechuan Vegetables')
      theTable.put('Combo3', 'General Tso\'s Chicken')
      let total = 0
      theTable.iterate( () => {
        total++
      })

      expect(theTable.length).to.equal(total)
    })
  })

  context('removes()', () => {
    it('removes a key-value pair by key', () => {
      const theTable = new HashTable()

      theTable.put('Combo1', 'Orange Chicken')
      theTable.put('Combo2', 'Szechuan Vegetables')
      theTable.put('Combo3', 'General Tso\'s Chicken')
      theTable.removes('Combo3')

      expect(theTable.contains('Combo3')).to.equal(false)
      expect(theTable.size()).to.equal(2)
    })
  })

  context('size()', () => {
    it('returns the number of keys in the hashtable', () => {
      const theTable = new HashTable()

      theTable.put('Combo1', 'Orange Chicken')
      theTable.put('Combo2', 'Szechuan Vegetables')
      theTable.put('Combo3', 'General Tso\'s Chicken')

      expect(theTable.size()).to.equal(3)
    })
  })

})
