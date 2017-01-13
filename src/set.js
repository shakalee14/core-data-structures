'use strict'

export default class Set {
  constructor() {
    this._length = 0
    this._data = []
  }

  cloneTo(secondSet) {
    secondSet._length = this._length
    secondSet._data = this._data
  }

  add(item){
    for(let i = 0; i < this.size(); i++) {
      if(this._data[i] === item) {
        throw new ReferenceError('item being added already exists in this set.')
        return null
      }
    }

    this._length++
    this._data.push(item)
  }

  isEmpty(){
    return this._length === 0
  }

  contains(item){
    for (let i = 0; i < this.size(); i++) {
      if( this._data[i] === item ){
        return true
      } else {
        return false
      }
    }
  }

  remove(item){
    for (let i = 0; i < this.size(); i++) {
      if( this._data[i] === item ){
        this._data.splice(i, 1)
        this._length--
      }
    }
  }

  forEach( fn ){
    const returnList = []
    for (let i = 0; i < this.size(); i++) {
      let ele = fn(this._data[i])
      if(ele) returnList.push( ele )
    }
    if(returnList.length > 0) return returnList
  }

  size(){
    return this._length
  }

  testBothSets(otherSet, union){
    const resultSet = new Set()
    this.cloneTo(resultSet)

    otherSet.forEach( (element) => {
      let alreadyInSet = false
      for(let i = 0; i < this.size(); i++) {
        if(this._data[i] === element) {
          alreadyInSet = true
        }
      }
      if( (!alreadyInSet && union) || (alreadyInSet && !union)) {
        resultSet._data.push( element )
      }
    })
    return resultSet._data
  }

  union(otherSet){
    return this.testBothSets(otherSet, true)
  }

  intersect(otherSet){
    return this.testBothSets(otherSet, false)
  }

  difference(otherSet){
    const resultSet = new Set()
    this.cloneTo(resultSet)

    otherSet.forEach( (element) => {
      for(let i = 0; i < resultSet.size(); i++) {
        if(resultSet._data[i] === element) {
          resultSet.remove( resultSet._data[i] )
        }
      }
    })
    return resultSet._data
  }

  isSubset(otherSet){
    let numMatching = 0

    const resultSet = new Set()
    this.cloneTo(resultSet)

    resultSet.forEach( (element) => {
      for(let i = 0; i < otherSet.size(); i++) {
        if(otherSet._data[i] === element) {
          numMatching++
        }
      }
    })
    if(numMatching === resultSet.size()){
      return true
    }
    return false
  }

  static clone( set ){
    let newSet = new Set()
    set.cloneTo( newSet )
    return newSet
  }
  
}
