'use strict'

function Node(value){
  this.value = value
  this.left = null
  this.right = null
  this.parent = null
  this.leftOrRight = "root"
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
      if(node.value === value){
        returnValue = node
        return
      }

      if(node.left){
        recursion(node.left)
        if(returnValue !== null) {
          return
        }
      }

      if(node.right){
        recursion(node.right)
      }
    }
    recursion(this.root)
    return returnValue
  }

  insert(value){
    let preRoot = this.root

    if(!preRoot){
      this.root = new Node(value)
      return this.length++
    }

    let currentNode = preRoot
    let newNode = new Node(value)

    while(currentNode){
      if(value < currentNode.value){
        if(!currentNode.left){
          currentNode.left = newNode
          newNode.parent = currentNode
          newNode.leftOrRight = "left"
          break
        } else {
          currentNode = currentNode.left
        }
      } else {
        if(!currentNode.right){
          currentNode.right = newNode
          newNode.parent = currentNode
          newNode.leftOrRight = "right"
          break
        } else {
          currentNode = currentNode.right
        }
      }
    }
    this.length++
  }

  count(){
    return this.length
  }

  remove(value){
    if(!root){
      return null
    }

    let currentNode = this.root

    while(currentNode && currentNode.value !== value){
      if(value < currentNode.value){
        if(!currentNode.left){
          break
        } else {
          currentNode = currentNode.left
        }
      } else {
        if(!currentNode.right){
          break
        } else {
          currentNode = currentNode.right
        }
      }
    }
    if(currentNode.value !== value){
      return null
    }

    const seekDeleteNode = (initialDirection) => {
      let oppositeDirection = initialDirection === 'left' ? 'right' : 'left'

      let deleteMeNode = currentNode
      currentNode = currentNode[initialDirection]
      while(currentNode[oppositeDirection]){
        currentNode = currentNode[oppositeDirection]
      }
      deleteMeNode.value = currentNode.value
      currentNode.parent[currentNode.leftOrRight] = null
    }

    if(currentNode.right){
      seekDeleteNode('right')
    } else if(currentNode.left) {
      seekDeleteNode('left')
    } else {
      currentNode.parent[currentNode.leftOrRight] = null
    }
    this.length--
  }

  traverse(callback, order='inOrder'){
    if(!root){
      return null
    }

    let currentNode = this.root

    const recursion = (node) => {
      if(order === 'preOrder') callback(node)
      if(node.left) recursion(node.left)
      if(order === 'inOrder') callback(node)
      if(node.right) recursion(node.right)
      if(order === 'postOrder') callback(node)
    }

    recursion(currentNode)
  }
}
