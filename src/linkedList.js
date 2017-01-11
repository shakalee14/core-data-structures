'use strict'

function Node(value){
  this.data = value;
  this.next = null;
}

export default class LinkedList {

  constructor() {
    this._length = 0
    this._head = null
  }

  insert(value){
    let node = new Node(value)
    let currentNode = this._head

    if(!currentNode){
      this._head = node
      this._length++

      return node
    }

    while(currentNode.next){
      currentNode = currentNode.next
    }

    currentNode.next = node
    this._length++

    return node

  }

  insertFirst(){

  }

  getHeadNode(){
   return this._head
  }

  getTailNode(){
    return this._tail
  }

}