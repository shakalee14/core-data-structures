'use strict'

function Node(value){
  this.value = value
  this.left = null
  this.right = null
}

export default class BinarySearchTree {
  constructor(){
    this.root = null
    this.length = 0
  }

  search(value){
    if(!this.root){
      return null
    }

    let returnValue = null

    const recursion = (node) => {
      if(returnValue === null){
        let testVal
        if(node.left){
          testVal = recursion(node.left)
          if( testVal === value){
            returnValue = node
          }
        }
        if(node.right){
          testVal = recursion(node.right)
          if( testVal === value){
            returnValue = node
          }
        }
        if(node.value === value){
          returnValue = node
        }
        return node.value
      }
    }
    recursion(this.root)
    return returnValue
  }

  insert(value){
    if(!this.root){
      this.root = new Node(value)
    }

    const recursion = (node) => {
      if(node){
        if(value > node){
          let thing = recursion(node.right)
          if( thing ){
            node.right = thing
          }
        } else if (value <= node){
          let thing = recursion(node.left)
          if( thing ){
            node.left = thing
          }
        }
      } else {
        node = new Node(value)
        return node
      }
    }

    recursion(this.root)
  }
}
