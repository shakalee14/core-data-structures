import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Set from '../src/set'

chai.use(chaiChange)

describe('Set', () => {
  'use strict'

  it('exists', () => {
    expect(Set).to.be.a('function')
  })

  context('add()', () => {
    it('adds an element to the set.', () => {
      const mySet = new Set()

      mySet.add('A')
      mySet.add('B')

      expect(() => mySet.add('D'))
        .to.alter(() => mySet.size(), { from: 2, to: 3 })
    })

    it('throws an error if adding an element that is already in the set.', () => {
      const mySet = new Set()

      mySet.add('A')

      expect( () => { mySet.add('A') } ).to.throw(ReferenceError)
    })
  })

  context('isEmpty()', () => {
    it('returns true if the set is empty.', () => {
      const mySet = new Set()

      expect(mySet.isEmpty()).to.equal(true)
    })

    it('returns false if the set is not empty.', () => {
      const mySet = new Set()

      mySet.add('G')

      expect(mySet.isEmpty()).to.equal(false)
    })
  })

  context('contains()', () => {
    it('returns true the set contains the element.', () => {
      const mySet = new Set()

      mySet.add('H')
      mySet.add('I')

      expect(mySet.contains('H')).to.equal(true)
    })

    it('returns false if the set does not contain the element.', () => {
      const mySet = new Set()

      mySet.add('G')

      expect(mySet.contains('O')).to.equal(false)
    })
  })

  context('remove()', () => {
    it('the length decreases when an element is removed from the set.', () => {
      const mySet = new Set()

      mySet.add('O')
      mySet.add('L')

      expect(() => mySet.remove('O'))
        .to.alter(() => mySet.size(), { from: 2, to: 1 })
    })

    it('removes an element (if it exists) from the set.', () => {
      const mySet = new Set()

      mySet.add('O')
      mySet.add('L')

      expect(() => mySet.remove('O'))
        .to.alter(() => mySet.contains('O'), { from: true, to: false })
    })
  })

  context('forEach()', () => {
    it('takes a callback function and passes each element in the callback function ', () => {
      const mySet = new Set()

      mySet.add(1)
      mySet.add(3)
      mySet.add(20)
      mySet.add(66)

      expect( mySet.forEach( element => element+5 ) ).to.contain(6,8,25,71)
    })
  })

  context('size()', () => {
    it('returns the number of elements in the set.', () => {
      const mySet = new Set()

      mySet.add(1)
      mySet.add(3)
      mySet.add(20)
      mySet.add(66)

      expect( mySet.size() ).to.equal(4)
    })
  })

  context('union()', () => {
    it('unions the set with another set and returns the resulting set.', () => {
      const mySet1 = new Set()
      const mySet2 = new Set()

      mySet1.add(1)
      mySet1.add(3)
      mySet2.add(3)
      mySet2.add(66)

      expect( mySet1.union(mySet2) ).to.contain(1,3,66)
      expect( mySet2.union(mySet1) ).to.contain(1,3,66)
    })
  })

  context('intersect()', () => {
    it('intersects the set with another set and returns the resulting set.', () => {
      const mySet1 = new Set()
      const mySet2 = new Set()

      mySet1.add(1)
      mySet1.add(3)
      mySet2.add(3)
      mySet2.add(66)

      expect( mySet1.intersect(mySet2) ).to.contain(3)
      expect( mySet2.intersect(mySet1) ).to.contain(3)
    })
  })

  context('difference()', () => {
    it('returns a set that contains the elements found in the set but not in otherSet.', () => {
      const mySet1 = new Set()
      const mySet2 = new Set()

      mySet1.add(1)
      mySet1.add(3)
      mySet2.add(3)
      mySet2.add(66)

      expect( mySet1.difference(mySet2) ).to.contain(1)
      expect( mySet2.difference(mySet1) ).to.contain(66)
    })
  })

  context('isSubset()', () => {
    it('returns true because the set is a subset of otherSet.', () => {
      const mySet1 = new Set()
      const mySet2 = new Set()

      mySet1.add(1)
      mySet1.add(3)
      mySet2.add(1)
      mySet2.add(3)
      mySet2.add(66)

      expect( mySet1.isSubset(mySet2) ).to.equal(true)
    })

    it('returns false since the set is not a subset of otherSet.', () => {
      const mySet1 = new Set()
      const mySet2 = new Set()

      mySet1.add(1)
      mySet1.add(3)
      mySet2.add(3)
      mySet2.add(66)

      expect( mySet1.isSubset(mySet2) ).to.equal(false)
    })
  })

  context('clone()', () => {
    it('returns a cloned set', () => {
      const originalSet = new Set()

      expect( Set.clone(originalSet) ).to.have.property('_length', 0)
    })
  })

})
