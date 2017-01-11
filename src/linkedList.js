'use strict'

function Node(data){
  this.data = data;
  this.next = null;
}

export default class LinkedList {

  constructor() {
    this._length = 0
    this._head = null
    this._tail = null
  }

  insert( val){
    this._length++
    let node = new Node(val),
    currentNode = this._head;

    //If empty, build as first node
    if(!currentNode){
      this._head = node;
      this._length++;
      return;
    }

    while(currentNode.next){
      currentNode = currentNode.next;
    }

    currentNode.next = node;

    return node;
  }

  insertFirst(){

  }

  getHeadNode(){
   return this._head
  }

  getTailNode(){
    return this_.tail
  }

}