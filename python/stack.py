class Stack:
  count = 0
  top = None

  class Node:
    def __init__(self, data):
      self.data = data
      self.next = None

  def push(self, data):
    self.count += 1
    if not self.top:
      self.top = Stack.Node(data)
    else: 
      temp = self.top
      self.top = Stack.Node(data)
      self.top.next = temp
  def pop(self):
    if self.top != None:
      self.count -= 1
      temp = self.top
      self.top = self.top.next
      return temp.data
    else:
      return None

  def length(self):
    return self.count

  def peek(self):
    if not self.top:
      return None
    else:
      return self.top.data

  def isEmpty(self):
    return 'true' if self.top != None else 'false'
