// import createHash from 'sha'
import sha256 from 'sha256'

export default class HashTable {
  constructor(){
    this.data = {}
    this.length = 0
  }

  put(key, value){
    this.data[sha256(key)] = value
    this.length++
  }

  get(key){
    return this.data[sha256(key)]
  }

  contains(key){
    return this.data.hasOwnProperty(sha256(key))
  }

  iterate(callback){
    for(let element in this.data){
      if(this.data.hasOwnProperty(element)){
        callback(element)
      }
    }
  }

  removes(key){
    delete this.data[sha256(key)]
    this.length--
  }

  size(){
    return this.length
  }
}
